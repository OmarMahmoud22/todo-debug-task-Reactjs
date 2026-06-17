const jwt = require("jsonwebtoken");
const socketAuthMiddleware = (socket, next) => {
  try {
    const token = socket.handshake.headers.token;
    if (!token) return next(new Error("Not Found Token"));

    const payload = jwt.verify(token, process.env.JWT_SECRET);
    socket.userId = payload.id;
    socket.role = payload.role;
    next();
  } catch (error) {
    return next(new Error("Invalid Token"));
  }
};

const chatSocketController = (io) => {
  io.use(socketAuthMiddleware);

  io.on("connection", (socket) => {
    console.log(
      `User ${socket.userId} & Role ${socket.role} is Connection Socket Server`,
    );
    if (socket.role === "admin") {
      socket.join("Room_Admin");
      console.log("Admin joined Room_Admin");
    } else if (socket.role === "user") {
      socket.join(`User_Room ${socket.userId}`);
      
    }

    socket.on("sendMsg", (data) => {
      io.to("Room_Admin").emit("get_Request", {
        user: socket.userId,
        text: data.text,
        sernder: "user",
      });
    });
  });
};

module.exports = chatSocketController;

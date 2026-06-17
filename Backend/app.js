require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());
const mongoose = require("mongoose");
const morgan = require("morgan");
const port = process.env.PORT || 3000;
const main = require("./config/db");

//مسكنا ال http
const http = require("http");
// جبنا ال سيرفر بتاع السوكيت
const { Server } = require("socket.io");
//marge bettwen server and my app
const server = http.createServer(app);
// هنا Socket.IO قال:

// أنا هشتغل فوق الـ HTTP Server ده.
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
// "أنا عايز أستخدم io.emit() من جوه Controller أو Route"
require("./Socket/client.socket")(io);

const adminRoutes = require("./Router/auth.admin.router");
const userRoutes = require("./Router/user.router");
const userAuthRoutes = require("./Router/auth.router");

app.use("/api/dashboard", adminRoutes);
app.use("/api/dashboard/users", userRoutes);
app.use("/api/users", userAuthRoutes);



if (process.env.NODE_ENV === "dev") {
  app.use(morgan("dev"));
}
main();
server.listen(port, () => {
  console.log(`listend to port ${port}`);
});

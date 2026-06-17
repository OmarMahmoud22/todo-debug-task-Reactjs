// import React from 'react'

export default function Adding({ btn, lable_name }) {
  return (
    <>
      <form>
        {lable_name.map((item, index) => (
          <div className="mb-3" key={index}>
            <label for="exampleInputEmail1" className="form-label">
              {item}
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        ))}

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          {btn}
        </button>
      </form>
    </>
  );
}

import React, { useState, useEffect } from "react";

const Pagination = ({ postsPerPage, onPaginationChange, total }) => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    const value = postsPerPage * counter;
    onPaginationChange(value - postsPerPage, value);
  }, [counter]);

  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (Math.ceil(total / postsPerPage) === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };
  return (
    <div className="d-flex justify-content-between" style={{margin: "25px 0 25px 0"}}>
      <button className="btn btn-primary" style={{backgroundColor: "#00337C"}} onClick={() => onButtonClick("prev")}>
        Previous
      </button>
      <button className="btn btn-primary" style={{backgroundColor: "#00337C"}} onClick={() => onButtonClick("next")}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
import React from "react";
import outOfOrder from './out-of-order.png';

const ErrorPage = () => {
  return (
    <>
      <div className="text-center">
        <img height="500px" src={outOfOrder} className="out-of-order" alt="out of order" />
      </div>
    </>
  )
}

export default ErrorPage;

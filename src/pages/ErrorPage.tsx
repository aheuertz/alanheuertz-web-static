import React from "react";
import outOfOrder from './out-of-order.png';

const ErrorPage = () => {
  return (
    <>
      <div className="text-center">
        <img style={{width: "100%", maxWidth: "612px", height: "auto"}} src={outOfOrder} className="out-of-order" alt="out of order" />
      </div>
    </>
  )
}

export default ErrorPage;

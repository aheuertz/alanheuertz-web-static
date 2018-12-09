import React from "react";
import outOfOrder from './out-of-order.png';

const ErrorPage = () => {
  return (
    <>
      <header className="App-header">
        <img src={outOfOrder} className="out-of-order" alt="out of order" />
      </header>
    </>
  )
}

export default ErrorPage;

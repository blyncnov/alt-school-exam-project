import React from "react";

import ErrorImage from "../assets/what-404.png";

const ErrorPage = () => {
  return (
    <>
      <div className="Layout__constraint">
        <div className="Error__Container">
          <div className="Error__Container__content">
            <img src={ErrorImage} alt="page-not-found" />
          </div>
          <div className="Error__Container__text">
            <h1>Awwnn.... Don&apos;t Cry.</h1>
            <p>
              What you&apos;re looking for may have been misplaced in long term
              memory.
            </p>

            <a href="/">
              <button className="Error__Page__Button">Go Back Home</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;

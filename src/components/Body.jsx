import React from "react";

function Body(props) {
  return (
    <>
      <section className="section">
        <div className="container">{props}</div>
      </section>
    </>
  );
}

export { Body };

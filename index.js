import React from "react";
import ReactDOM from "react-dom/client";

//creating ReactElement

// const heading = React.createElement(
//   "",
//   { id: "Heading" },
//   "This is updated Heading."
// );

//creating root

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//Creating JSX Elements

const NestedHeader = "nested";
const JSXHeading = (
  <h1>
    This is {NestedHeader} JSXHeading. Line 2 : {5 * 5}
  </h1>
);
//root.render(JSXHeading);

//functional components

function First() {
  return <>first</>;
}

const Heading = () => {
  return (
    <h1>
      This is my <First /> functional component.
    </h1>
  );
};
root.render(<Heading />);

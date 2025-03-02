const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hey I am the heading"),
    React.createElement("h2", {}, "Hey I am the H2 heading"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

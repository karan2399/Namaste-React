
import React from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement("h1", {id:"heading"}, "Hello World!");
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        React.createElement("h1",{},"I am H1 tag")
    )
)

root.render(parent);
console.log(parent)
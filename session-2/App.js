import React from "react"
import ReactDOM from "react-dom"

const heading1 = React.createElement("h1",{},"heading 1")
const heading2= React.createElement("h4",{},"heading 4")

const container= React.createElement("div",{id:"container"},[heading1,heading2])

console.log(heading1);
const root = ReactDOM.createRoot(document.getElementById('root'))
console.table(root);

root.render(container)
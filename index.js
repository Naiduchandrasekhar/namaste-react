import React from "react";
import ReactDOM from "react-dom/client";

// Babel is a transpiler where it converts into standard ECMAScript code into a backwards compatible version of JavaScript in current and older browsers 

// JSX => React.createElement => ReactElement - JS Object => HTMLElement(render)

const heading = React.createElement("h1" , {id:"heading"}, "Namaste React 🚀 from React Core syntax");

const jsxHeading = <h1 id="heading">Namaste React 🚀 from JSX syntax</h1>

console.log(heading);
console.log(jsxHeading);

//Component Compostion:
//Component Composition refers to the process of combining smaller, reusable components together to create larger, more complex components. 
//In other words, it involves building an application by breaking it down into smaller, more manageable parts and assembling them together like building blocks.

const Title = () => (
    <h1 className="head">Namaste React using JSX 🚀</h1>
)

const Heading  = () => (
    <div id="container">
        <Title />
        {Title()}
        <Title></Title>
        <h2>By Akshay Saini</h2>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("#root"));
root.render(<Heading />);

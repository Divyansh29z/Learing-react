// {/* <div>
// <h1 id = "h1">hi hellow world</h1>
// <h2 id = "h2">hi this new one</h2>
// </div> */}
// here we create the new things 
// document.createElement(div ,
//     [h1, {id:"h1"}, "hello i am h1 "],
//     [h1 , {id:"h2"}, "Hello i am h2  "],
//     {id:"div"},"hellworld")
//     ;
const containerDiv = React.createElement("div", {
    id: "container"
}, [
    React.createElement("div", {
        id: "container1"
    }, [
        React.createElement("h1", {}, "I am heading 1"),
        React.createElement("h2", {}, "I am heading 2")
    ]),
    React.createElement("div", {
        id: "container2"
    }, [
        React.createElement("h1", {}, "I am heading 1"),
        React.createElement("h2", {}, "I am heading 2")
    ])
]);
console.log(containerDiv); // reactElement === object
const root = ReactDOM.createRoot(document.getElementById("navbar"));
root.render(containerDiv);

//# sourceMappingURL=Index.6bd02f5a.js.map

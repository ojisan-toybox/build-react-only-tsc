var El = function (props) { return React.createElement("h1", null,
    "Hello, ",
    props.name); };
ReactDOM.render(React.createElement(El, { name: "taro" }), document.getElementById("root"));

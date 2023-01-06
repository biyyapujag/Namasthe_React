import React from 'react';
import  ReactDOM  from 'react-dom/client';
    const heading1 = React.createElement("h1",{id:'title parcel'},"Namaste parcel");
    const heading2 = React.createElement("h1",{id:'title'},"Namaste Everyone");

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(React.createElement("div",{},[heading1,heading2]));
    
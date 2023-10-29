import React from "react";

import Componet from "./Header";

function Header(props) {
    return (
        <header>
            <h1>{props.name}</h1>
        </header>
    
    );
}
 
export default Header; 


function App() {
    return (
        <div>
            <Header name="My Blog" />
            {/* other ccpmponets and content */}
        </div>
    );
}
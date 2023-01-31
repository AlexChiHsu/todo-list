import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Header() {
    return (
        <div className="w-100 px-4 pt-4">
            <h1>Todo List</h1>
            <p className="fs-6">Add things to do</p>
        </div>
    );
}

export default Header;

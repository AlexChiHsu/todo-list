import React from 'react';
import "../style/todolist.css";

function Progress({ progress }) {
    return (
        <div className="d-flex flex-row justify-content-between align-items-center px-3">
            <div className="fs-5 me-2 progress-text">{progress}%</div>
            <div className="progress w-100" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            </div>
        </div>
    )
}

export default Progress
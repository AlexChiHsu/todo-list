import React, { useState } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";


function Component({ listItem, deleteClick, index, completed, setCompleted, selected }) {
    const [isCheck, setIsCheck] = useState(selected);
    const onClick = () => {
        deleteClick(index);
    }

    const onChange = () => {
        setIsCheck(!isCheck);
        const result = completed.map((item) => {
            if (item.list === listItem) {
                 item.bool = !isCheck
            }
            return item;
        })
        setCompleted(result);
    }

    const labelTextChecked = "form-check-label text-decoration-line-through";
    return (
        <div className="my-2 p-2 rounded-1 bg-white start">
            <div className="d-flex flex-row justify-content-between align-items-center">
                <div className="form-check ms-2">
                    <input className="form-check-input me-3" type="checkbox" value={[listItem, isCheck]} onChange={onChange} id="flexCheckDefault" disabled={isCheck} />
                    <label className={isCheck ? labelTextChecked : 'form-check-label'} htmlFor="flexCheckDefault">
                        {listItem}
                    </label>
                </div>
                <button type="button" className="btn isCheck" onClick={onClick} disabled={isCheck}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={isCheck ? "rgb(207, 207, 207)" : "rgb(130, 150, 240)"} className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Component;

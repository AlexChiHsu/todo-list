import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Footer({ onClick, textRef, switchClick }) {

  return (
    <div className='px-3 pb-4'>
      <div className="d-flex justify-content-end">
        <label className="form-check-label mx-2" htmlFor="flexSwitchCheckDefault">Move done things to end?</label>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={switchClick} />
        </div>
      </div>
      <div className="my-2 mt-5">Add to list</div>
      <div>
        <div className="input-group">
          <input type="text" className="form-control" ref={textRef} aria-label="Recipient's username" aria-describedby="button-addon2" />
          <button className="btn add" type="button" id="button-addon2" onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-plus-lg" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;

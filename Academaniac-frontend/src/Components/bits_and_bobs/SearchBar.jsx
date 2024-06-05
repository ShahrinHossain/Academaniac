import React from "react";

function SearchBar({ placeholder }) {
  return (
    <div>
      <div>
        <div className="form">
          <i className="fa fa-search"></i>
          <input
            type="text"
            placeholder={placeholder}
            className="form-control form-input"
          />
          <span className="left-pan">
            <i className="fa fa-microphone"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

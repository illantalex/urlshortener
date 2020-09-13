import React, { useEffect } from "react";

export const Dialog = ({ header, text, index, func }) => {
    useEffect(() => {
        const elems = document.querySelectorAll(".modal");
        window.M.Modal.init(elems);
    }, []);

    return (
        <div id={`modal${index}`} className="modal">
            <div className="modal-content">
                <h4>{header}</h4>
                <p style={{ wordWrap: "break-word" }}>{text}</p>
            </div>
            <div className="modal-footer">
                <button className="btn-flat waves-effect" onClick={func}>
                    OK
                </button>
                <a href="#!" className="modal-close waves-effect btn-flat">
                    Cancel
                </a>
            </div>
        </div>
    );
};

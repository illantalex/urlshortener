import React from "react";
import { Link } from "react-router-dom";
import { Dialog } from "./Dialog";

export const LinksList = ({ links, deleteLink }) => {
    if (!links.length) {
        return <p className="center">there're still no links</p>;
    }

    return (
        <div className="container" style={{ marginTop: "2rem" }}>
            <div className="row">
                <div className="col s1">#</div>
                <div className="col s5">Original</div>
                <div className="col s4">Shorted</div>
                <div className="col s2">Action</div>
                {/* <div className="col s1">Delete</div> */}
            </div>

            {links.map((link, index) => {
                return (
                    <div className="row" key={link._id}>
                        <div className="col s1">{index + 1}</div>
                        <div
                            className="col s5"
                            style={{
                                overflow: "hidden",
                                wordWrap: "break-word",
                            }}
                        >
                            {link.from}
                        </div>
                        <div
                            className="col s4"
                            style={{
                                overflow: "hidden",
                                wordWrap: "break-word",
                            }}
                        >
                            {link.to}
                        </div>
                        <div className="col s2">
                            <Link to={`/detail/${link._id}`}>Open</Link>
                            <br />
                            <a
                                href={`#modal${index}`}
                                className="modal-trigger"
                            >
                                Delete
                            </a>
                            <Dialog
                                header="Delete link?"
                                text={`Are you sure you want to delete link ${link.from}?`}
                                index={index}
                                func={() => deleteLink(link._id)}
                            />
                        </div>
                        {/* <div className="col s1">Delete</div> */}
                    </div>
                );
            })}
        </div>
    );
};

import React from "react";
import { Link } from "react-router-dom";

export const LinksList = ({ links }) => {
    if (!links.length) {
        return <p className="center">there're still no links</p>;
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col s1">#</div>
                <div className="col s5">Original</div>
                <div className="col s5">Shorted</div>
                <div className="col s1">Open</div>
                {/* <div className="col s1">Delete</div> */}
            </div>

            {links.map((link, index) => {
                return (
                    <div className="row" key={link._id}>
                        <div className="col s1">{index + 1}</div>
                        <div className="col s5" style={{ overflow: "hidden" }}>
                            {link.from}
                        </div>
                        <div className="col s5" style={{ overflow: "hidden" }}>
                            {link.to}
                        </div>
                        <div className="col s1">
                            <Link to={`/detail/${link._id}`}>Open</Link>
                        </div>
                        {/* <div className="col s1">Delete</div> */}
                    </div>
                );
            })}
        </div>
    );
};

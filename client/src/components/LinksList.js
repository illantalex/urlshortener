import React from "react";
import { Link } from "react-router-dom";

export const LinksList = ({ links, deleteLink }) => {

    if (!links.length) {
        return <p className="center">there're still no links</p>;
    }

    return (
        <div className="container" style={{marginTop: "2rem"}}>
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
                        <div className="col s5" style={{ overflow: "hidden", wordWrap: "break-word" }}>
                            {link.from}
                        </div>
                        <div className="col s4" style={{ overflow: "hidden", wordWrap: "break-word" }}>
                            {link.to}
                        </div>
                        <div className="col s2">
                            <Link to={`/detail/${link._id}`}>Open</Link>
                            <br />
                            <Link onClick={() => deleteLink(link._id)}>Delete</Link>
                        </div>
                        {/* <div className="col s1">Delete</div> */}
                    </div>
                );
            })}
        </div>
    );
};

import React, { useContext, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Navbar = () => {
    const history = useHistory();
    const auth = useContext(AuthContext);

    const logoutHandler = (event) => {
        event.preventDefault();
        closeHandler();
        auth.logout();
        history.push("/");
    };

    const closeHandler = () => {
        const sidenav = window.M.Sidenav.getInstance(
            document.querySelector(".sidenav")
        );
        sidenav.close();
    };

    useEffect(() => {
        window.M.Sidenav.init(document.querySelector(".sidenav"));
    }, []);

    const navList = (
        <div>
            <li>
                <NavLink to="/create" onClick={closeHandler}>
                    Create
                </NavLink>
            </li>
            <li>
                <NavLink to="/links" onClick={closeHandler}>
                    Links
                </NavLink>
            </li>
            <li>
                <a href="/" onClick={logoutHandler}>
                    Logout
                </a>
            </li>
        </div>
    );

    return (
        <div>
            <nav>
                <div className="nav-wrapper blue darken-1">
                    <a
                        href=""
                        data-target="mobile-demo"
                        className="sidenav-trigger"
                    >
                        <i className="material-icons">menu</i>
                    </a>
                    <span
                        className="brand-logo"
                        style={{ paddingLeft: "1rem" }}
                    >
                        Shortify
                    </span>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {navList}
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                {navList}
            </ul>
        </div>
    );
};

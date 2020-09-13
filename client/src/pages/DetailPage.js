import React from "react";
import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useCallback } from "react";
import { useHttp } from "../hooks/http.hook";
import { useContext } from "react";
import { useEffect } from "react";
import { Loader } from "../components/Loader";
import { AuthContext } from "../context/AuthContext";
import { useMessage } from "../hooks/message.hook";

export const DetailPage = () => {
    const { token } = useContext(AuthContext);
    const { request, loading, error, clearError } = useHttp();
    const [link, setLink] = useState(null);
    const linkId = useParams().id;
    const history = useHistory();
    const message = useMessage();

    const getLink = useCallback(async () => {
        try {
            const fetched = await request(`/api/link/${linkId}`, "GET", null, {
                Authorization: `Bearer ${token}`,
            });
            setLink(fetched);
        } catch (error) {}
    }, [token, linkId, request]);

    useEffect(() => {
        getLink();
    }, [getLink]);


    useEffect(() => {
        message(error);
        clearError();
    }, [error, message, clearError]);

    const deleteLink = async () => {
        try {
            const data = await request(`/api/link/${linkId}`, "DELETE", null, {
                Authorization: `Bearer ${token}`,
            });
            message(data.message);
            history.push("/links");
        } catch (error) {}
    };

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="container">
            {!loading && link && (
                <div className="row">
                    <h2>Link</h2>
                    <p className="col s12">
                        Your link:{" "}
                        <a
                            href={link.to}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {link.to}
                        </a>
                    </p>
                    <p className="col s12">
                        It's from:{" "}
                        <a
                            style={{ wordWrap: "break-word" }}
                            href={link.from}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {link.from}
                        </a>
                    </p>
                    <p className="col s12">
                        Number of clicks: <strong>{link.clicks}</strong>
                    </p>
                    <p className="col s12">
                        Date created:{" "}
                        <strong>
                            {new Date(link.date).toLocaleDateString()}
                        </strong>
                    </p>
                    <p className="col s12">
                        <button className="btn pink" onClick={deleteLink}>
                            Delete
                        </button>
                    </p>
                </div>
            )}
        </div>
    );
};

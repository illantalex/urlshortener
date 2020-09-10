import React from "react";
import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useCallback } from "react";
import { useHttp } from "../hooks/http.hook";
import { useContext } from "react";
import { useEffect } from "react";
import { Loader } from "../components/Loader";
import { AuthContext } from "../context/AuthContext";

export const DetailPage = () => {
    const { token } = useContext(AuthContext);
    const { request, loading } = useHttp();
    const [link, setLink] = useState(null);
    const linkId = useParams().id;
    const history = useHistory();

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

    const deleteLink = async () => {
        try {
            await request(
                `/api/link/${linkId}/delete`,
                "DELETE",
                { id: linkId },
                {
                    Authorization: `Bearer ${token}`,
                }
            );
            await history.push("/links")
        } catch (error) {

        }
    }

    if (loading) {
        return <Loader />;
    }

    return (
        <div>
            {!loading && link && (
                <div>
                    <h2>Link</h2>
                    <p>
                        Your link:{" "}
                        <a
                            href={link.to}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {link.to}
                        </a>
                    </p>
                    <p>
                        It's from:{" "}
                        <a
                            href={link.from}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {link.from}
                        </a>
                    </p>
                    <p>
                        Number of clicks: <strong>{link.clicks}</strong>
                    </p>
                    <p>
                        Date created:{" "}
                        <strong>
                            {new Date(link.date).toLocaleDateString()}
                        </strong>
                    </p>
                    <button className="btn pink" onClick={deleteLink}>
                        Delete
                    </button>
                </div>
            )}
        </div>
    );
};

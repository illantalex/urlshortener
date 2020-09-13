import React from "react";
import { useState } from "react";
import { useHttp } from "../hooks/http.hook";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useCallback } from "react";
import { useEffect } from "react";
import { Loader } from "../components/Loader";
import { LinksList } from "../components/LinksList";
import { useMessage } from "../hooks/message.hook";

export const LinksPage = () => {
    const [links, setLinks] = useState([]);
    const { loading, request, error, clearError } = useHttp();
    const message = useMessage();
    const { token } = useContext(AuthContext);

    const fetchLinks = useCallback(async () => {
        try {
            const fetched = await request("api/link", "GET", null, {
                Authorization: `Bearer ${token}`,
            });
            setLinks(fetched);
        } catch (error) {}
    }, [token, request]);

    const deleteLink = async (linkId) => {
        try {
            const data = await request(`/api/link/${linkId}`, "DELETE", null, {
                Authorization: `Bearer ${token}`,
            });
            message(data.message);
            fetchLinks();
        } catch (error) {}
    };

    useEffect(() => {
        message(error);
        clearError();
    }, [error, message, clearError]);

    useEffect(() => {
        fetchLinks();
    }, [fetchLinks]);

    // useEffect(() => {
    //     fetchLinks();
    // }, [links]);

    if (loading) {
        return <Loader />;
    }
    return <div>{!loading && <LinksList links={links} deleteLink={deleteLink} />}</div>;
};

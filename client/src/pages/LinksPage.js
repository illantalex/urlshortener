import React from "react";
import { useState } from "react";
import { useHttp } from "../hooks/http.hook";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useCallback } from "react";
import { useEffect } from "react";
import { Loader } from "../components/Loader";
import { LinksList } from "../components/LinksList";

export const LinksPage = () => {
    const [links, setLinks] = useState([]);
    const { loading, request } = useHttp();
    const { token } = useContext(AuthContext);
    const fetchLinks = useCallback(async () => {
        try {
            const fetched = await request("api/link", "GET", null, {
                Authorization: `Bearer ${token}`,
            });
            setLinks(fetched);
        } catch (error) {}
    }, [token, request]);

    useEffect(() => {
        fetchLinks();
    }, [fetchLinks]);
    if (loading) {
        return <Loader />;
    }
    return <div>{!loading && <LinksList links={links} />}</div>;
};

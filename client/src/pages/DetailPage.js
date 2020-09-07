import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useCallback } from "react";
import { useHttp } from "../hooks/http.hook";
import { useContext } from "react";
import { useEffect } from "react";
import { Loader } from "../components/Loader";
import { LinkCard } from "../components/LinkCard";
import { AuthContext } from "../context/AuthContext";

export const DetailPage = () => {
    const { token } = useContext(AuthContext);
    const { request, loading } = useHttp();
    const [link, setLink] = useState(null);
    const linkId = useParams().id;

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

    if (loading) {
        return <Loader />;
    }

    return <div>{!loading && link && <LinkCard link={link} />}</div>;
};

import React, { useEffect, useState } from "react";

const Flower = () => {
    const [htmlContent, setHtmlContent] = useState("");

    useEffect(() => {
        fetch("/flower.html")
            .then((response) => response.text())
            .then((html) => setHtmlContent(html));
    }, []);

    return (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
};

export default Flower;
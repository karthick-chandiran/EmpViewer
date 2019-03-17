import { renderToString } from "react-dom/server";
import React from 'react'
import Home from "./components/Home";
import appendToHTML from "./utils/index.js";
const renderToHTML = (component) => {
    const html = renderToString(component);
    return appendToHTML(html);
};

export const homeHTML = () => {
    return renderToHTML(<Home />);
}








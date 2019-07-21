import { renderToString } from "react-dom/server";
import React from 'react'
//Components
import Home from "./components/Home";
import CreateTrip from "./components/CreateTrip";

import appendToHTML from "./utils/index.js";
const renderToHTML = (component) => {
    const html = renderToString(component);
    return appendToHTML(html);
};

export const homeHTML = () => {
    return renderToHTML(<Home />);
}

export const tripFromHTML = () => {
    return renderToHTML(<CreateTrip />);
}







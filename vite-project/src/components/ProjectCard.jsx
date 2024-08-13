import React from "react";

export const ProjectCard = ({ title, description, imgUrl, linkUrl, classN = "proj-imgbx" }) => {
    return (
        <div className={classN}>
            <img src={imgUrl} alt={title} />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-gray-600">{description}</p>
                <a href={linkUrl} className="text-blue-500 hover:underline">Learn More</a>
            </div>
        </div>
    );
};

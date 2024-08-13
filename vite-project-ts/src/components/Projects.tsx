import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';


const Projects = () => {


    return (
        <div className="min-h-screen flex flex-col items-center justify-center pl-20">
            <h1 className='font-bold text-4xl text-white font-RobotoMono'>Projects</h1>
            <div className='w-6/12'>
                <p className="font-RobotoMono text-center">
                    Throughout my time, I have always enjoyed creating projects that are interesting and challenging. More importantly, I have always enjoyed creating projects that have a positive impact on society. Here are some of the projects that I have worked on!
                </p>
            </div>
            {/* <ProjectCard title="Task Manager" description="This is a task manager I created for general day to day tasks." imgUrl={}/> */}
        </div>
    )
};

export default Projects;
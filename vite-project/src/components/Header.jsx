import React from "react";

const Header = () => {
  return (
    <div className="bg-transparent flex flex-row justify-between items-center p-6">
        <div>
            <a href="/">
                <h1 className="font-bold font-RobotoMono text-2xl">prav.dev</h1>
            </a>
        </div>
        <div className="flex flex-row space-x-4 font-RobotoMono">
            <a href="#about-me">
                About me!
            </a>
            <a href="Projects">
                Projects!
            </a>
            <a href="Blog">
                Blog!
            </a>
            <a href="Contact">
                Contact me!
            </a>
            <div className="rounded-md border-2 border-sky-100 hover:bg-sky-200">
                <a href="/MainResume.pdf" download="Praval_Kollipara.pdf">
                    Download Resume :)
                </a>
            </div>
        </div>
    </div>
  );
}

export default Header;
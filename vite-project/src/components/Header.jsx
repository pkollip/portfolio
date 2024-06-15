import React from "react";

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center p-2">
        <div>
        <h1 className="font-bold font-RobotoMono text-2xl">prav.dev</h1>
        </div>
        <div className="flex flex-row space-x-4 font-RobotoMono">
            <a href="About me">
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
        </div>
    </div>
  );
}

export default Header;
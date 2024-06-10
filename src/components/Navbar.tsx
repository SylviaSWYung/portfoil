import {useState} from "react";

const linkClassname = "block py-2 px-3 text-text-pink text-2xl md:text-3xl hover:bg-subtle-pink rounded md:hover:bg-transparent md:hover:text-clicked-pink";

function resume(){
    window.open("/Sylvia_yung_resume.pdf", "_blank")
}   

export function Navbar(){
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleMenu = () => {
        setIsExpanded(!isExpanded);
    };

    return(
        <nav className="fixed h-20 border-b border-dark-pink flex p-4 w-full">
            <div className="flex flex-wrap md:flex-nowrap items-center justify-between w-full mx-auto md:p-4">
                <div>
                    <h1 className="flex items-center self-center text-text-pink text-2xl md:text-3xl tracking-wide ml-4">Sylvia Suet Wai Yung</h1>
                </div>
                <div className="flex md:order-2 space-x-3 md:space-x-0">
                    <button onClick = {toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center rounded-lg md:hidden hover:bg-dark-pink" 
                        aria-expanded={isExpanded}>
                        <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
                            <path stroke="#3B0D0D" strokeLinecap = "round" strokeLinejoin = "round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div className={`${isExpanded ? "block" : "hidden"} md:relative absolute top-20 md:top-0 ml-auto md:flex items-center justify-between w-11/12 md:w-auto md:order-1`}>
                    {/* Unsure about w-11/12, would look at it later */}
                    <ul className="flex flex-col md:flex-row space-x-1 md:p-0 p-3 mt-3 md:mt-0 md:border-0 md:bg-transparent border 
                    border-dark-pink rounded-lg bg-dark-pink text-center">
                        <li>
                            <a href="https://www.linkedin.com/in/sylvia-yung" target="_blank" className={linkClassname}>LinkedIn</a>
                        </li>
                        <li>
                            <a href="https://github.com/SylviaSWYung" target="_blank" className={linkClassname}>GitHub</a>
                        </li>
                        <li>
                            <div onClick={resume} className={linkClassname}>Resume</div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
       
    )
}
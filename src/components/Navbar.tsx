
const link_classname = "block py-2 px-3 text-text-pink text-3xl hover:bg-dark-pink rounded md:bg-transparent ";

function resume(){
    window.open("/Sylvia_yung_resume.pdf", "_blank")
}   

export function Navbar(){
    return(
        <nav className="fixed h-20 border-b border-dark-pink flex p-4 w-full">
            <div className="flex items-center justify-between w-full mx-auto p-4">
                <div>
                    <h1 className="flex items-center self-center text-text-pink text-2xl md:text-3xl tracking-wide ml-4">Sylvia Suet Wai Yung</h1>
                </div>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center rounded-lg md:hidden hover:bg-dark-pink" aria-controls="navbar-sticky" aria-expanded="false">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="#3B0D0D" strokeLinecap = "round" strokeLinejoin = "round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div className="ml-auto md:flex items-center justify-between hidden md:w-auto w-full md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col md:flex-row space-x-1">
                        <li>
                            <a href="https://www.linkedin.com/in/sylvia-yung" target="_blank" className={link_classname}>LinkedIn</a>
                        </li>
                        <li>
                            <a href="https://github.com/SylviaSWYung" target="_blank" className={link_classname}>GitHub</a>
                        </li>
                        <li>
                            <div onClick={resume} className={link_classname}>Resume</div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
       
    )
}
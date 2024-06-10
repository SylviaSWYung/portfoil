export function Navbar(){

    const link_classname = "block py-2 px-3 text-text-pink text-3xl";
    
    return(
        <nav className="fixed h-20 border-b-2 border-dark-pink flex p-4 w-full">
            <div className="flex items-center justify-between w-full mx-auto p-4">
                <div>
                    <h1 className="flex items-center self-center text-text-pink text-3xl tracking-wide ml-4">Sylvia Suet Wai Yung</h1>
                </div>
                {/* <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button>
                        lage hamburger meny senere
                    </button>
                </div> */}
                <div className="ml-auto flex items-center">
                    <ul className="flex space-x-1">
                        <li>
                            <a href="#" className={link_classname}>LinkedIn</a>
                        </li>
                        <li>
                            <a href="#" className={link_classname}>GitHub</a>
                        </li>
                        <li>
                            <a href="#" className={link_classname}>Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
       
    )
}
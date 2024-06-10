export function Profile(){
    return(
        <div className="relative flex flex-row justify-center place-items-center gap-10 w-full h-screen">
            <div className="relative z-1 flex flex-col order-1 gap-5">
                <p>Second-year Computer Science student with a Cell & <br />
                Molecular biology background at NTNU. Passonate <br />
                about design, problem-solving, and mastering multiple <br />
                programming languages, driven by a desire for <br />
                continuous learning an innovation.
                </p>
                <p>
                    My Skills: <br />
                    Languages: <br />
                    <i>Java, JavaScript, HTML, CSS, Python</i> <br />
                    Frontend: <br />
                    <i>React & Tailwind</i>
                </p>
            </div>
            <div className="relative z-1 flex flex-col order-last">
                <img className="rounded-full h-80" src="./profil_sylvia.jpeg" alt="profile picture" />
                <p>Cell & Molecular biologist <br />&<br />Advancing Computer Science <br />at NTNU</p>
            </div>
            <div className="absolute top-20 -z-1 inset-0 h-6/12 w-6/12">
            <svg viewBox="19.12 88.91 477.056 317.4"  xmlns="http://www.w3.org/2000/svg" className="">
                <path className=" fill-dark-pink stroke-dark-pink" d="M 21.462 89.013 L 20.33 407.283 L 338.633 406.174 L 391.281 404.635 L 418.067 404.018 C 418.067 404.018 427.919 403.711 432.845 402.479 C 432.845 402.479 451.626 395.706 435.616 383.082 C 435.616 383.082 412.525 373.847 437.772 360.915 C 463.019 347.984 445.468 325.782 445.468 325.782 C 445.468 325.782 416.835 296.67 413.757 261.879 C 413.757 261.879 403.288 206.118 431.922 177.793 C 460.555 149.468 531.056 105.349 465.482 89.053"/>
            </svg>
        </div>
        </div>
    )
}
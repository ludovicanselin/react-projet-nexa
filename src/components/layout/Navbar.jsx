import {Link, useLocation} from "react-router";
import {useEffect, useState} from "react";

export default function Navbar() {

    const location = useLocation();
    const [path, setPath] = useState("");
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        function onChangeToMobile() {
            setOpen(false);
        }

        function onChangeToDesktop() {

        }

        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth);
            if (windowWidth > 768 && window.innerWidth <= 768) {
                onChangeToMobile();
            } else if (windowWidth <= 768 && window.innerWidth > 768) {
                onChangeToDesktop();
            }
        });
    }, []);

    useEffect(() => {
        setPath(location.pathname);
    }, [location])

    return (
        <>
            <nav className={"bg-secondary text-white p-4 mb-4"}>
                {windowWidth <= 768 && <button className={`${open && "mb-4"}`} onClick={() => setOpen(!open)}>{open ? "Fermer" : "Ouvrir"}</button>}
                <ul className={`flex ${windowWidth > 768 ? "flex-row" : "flex-col"} justify-center gap-4 ${(!open && windowWidth <= 768) ? "hidden" : ""}`}>
                    <li>
                        <Link to="/" className={path === "/" ? "underline" : ""}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className={path === "/about" ? "underline" : ""}>About</Link>
                    </li>
                    <li>
                        <Link to="/other_page1" className={path === "/other_page1" ? "underline" : ""}>Other Page
                            1</Link>
                    </li>
                    <li>
                        <Link to="/other_page2" className={path === "/other_page2" ? "underline" : ""}>Other Page
                            2</Link>
                    </li>
                    <li>
                        <Link to="/other_page3" className={path === "/other_page3" ? "underline" : ""}>Other Page
                            3</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

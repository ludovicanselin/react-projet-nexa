import {Link, useLocation} from "react-router";
import {useEffect, useState} from "react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline"

export default function Navbar() {

    const location = useLocation();
    const [path, setPath] = useState("");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setPath(location.pathname);
    }, [location])

    return (
        <>
            <nav className={"bg-secondary text-white p-4 mb-4"}>
                <button className={`${open && "mb-4"} md:hidden`}
                        onClick={() => setOpen(!open)}>
                    {open ? <XMarkIcon className="size-6"/> : <Bars3Icon className="size-6"/>}
                </button>
                <ul className={`flex flex-col justify-center gap-4 ${!open && "hidden"} md:flex md:flex-row`}>
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

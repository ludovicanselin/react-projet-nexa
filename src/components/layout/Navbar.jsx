import {NavLink} from "react-router";
import {useState} from "react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline"

export default function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className={"bg-secondary text-white p-4 mb-4"}>
                <button className={`${open && "mb-4"} md:hidden`}
                        onClick={() => setOpen(!open)}>
                    {open ? <XMarkIcon className="size-6"/> : <Bars3Icon className="size-6"/>}
                </button>
                <ul className={`flex flex-col justify-center gap-4 ${!open && "hidden"} md:flex md:flex-row`}>
                    <li>
                        <NavLink to="/"
                                 className={({isActive}) => isActive && "underline"}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about"
                                 className={({isActive}) => isActive && "underline"}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/other-page1"
                                 className={({isActive}) => isActive && "underline"}>
                            Other Page 1
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/other-page2"
                                 className={({isActive}) => isActive && "underline"}>
                            Other Page 2
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/other-page3"
                                 className={({isActive}) => isActive && "underline"}>
                            Other Page 3
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

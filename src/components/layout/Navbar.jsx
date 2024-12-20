import {NavLink} from "react-router";
import {useState} from "react";
import {Bars3Icon, HomeIcon, IdentificationIcon, UserIcon, XMarkIcon} from "@heroicons/react/24/outline"

const navLink = [
    {
        path: "/",
        label: "Home",
        icon: <HomeIcon className={`size-6`}/>
    }, {
        path: "/about",
        label: "About",
        icon: <IdentificationIcon className={`size-6`}/>
    }, {
        path: "/user/1",
        label: "Voir Utilisateur 1",
        icon: <UserIcon className={`size-6`}/>
    }, {
        path: "/user/2",
        label: "Voir Utilisateur 2",
        icon: <UserIcon className={`size-6`}/>
    }
]

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
                    {navLink.map((link) => (
                        <li key={link.label}>
                            <NavLink to={link.path}
                                     onClick={() => setOpen(false)}
                                     className={({isActive}) => {
                                         return `${isActive && "underline"} flex flex-row gap-2`
                                     }}>
                                <span>{link.icon}</span>
                                <span>{link.label}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

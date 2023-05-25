import { Item } from "./Item"
import { useRef } from "react"
import logo from "../assets/logo-bookmark.svg"
import menu from "../assets/icon-hamburger.svg"
import close from "../assets/icon-close.svg"
import facebook from "../assets/icon-facebook.svg"
import twitter from "../assets/icon-twitter.svg"

const headerList = ['features', 'pricing', 'contact']


const Header = () => {
    const menuRef = useRef(null)

    return (
        <header>
            <nav className="w-90 h-8 mx-auto flex items-center justify-between">
                <img src={logo} alt="logo icon" />
                <img src={menu} alt="menu icon" />
            </nav>
            <aside className="w-full h-screen hidden absolute top-0 bottom-0 right-0 bg-blue-200/95">
                <menu className="w-90 h-full mx-auto pt-5 pb-8 flex items-center justify-between flex-col" ref={menuRef}>
                    <figure className="w-full flex items-center justify-between">
                        <img src={logo} alt="logo icon" />
                        <img src={close} alt="close menu icon" />
                    </figure>
                    <ul className="w-full mt-6 mb-auto text-center">
                        {headerList.map((item, key) => <Item key={key} className="uppercase" text={item} color="white-100" size="bs" />)}
                    </ul>
                    <figure className="flex items-center gap-x-2">
                        <img src={facebook} alt="facebook icon" />
                        <img src={twitter} alt="twitter icon" />
                    </figure>
                </menu>
            </aside>
        </header>
    )
}

export { Header }
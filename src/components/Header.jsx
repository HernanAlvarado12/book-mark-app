import { useRef } from "react"
import { Item } from "./Item"
import { Button } from "./Button"
import logo from "../assets/logo-bookmark.svg"
import menu from "../assets/icon-hamburger.svg"
import close from "../assets/icon-close.svg"
import facebook from "../assets/icon-facebook.svg"
import twitter from "../assets/icon-twitter.svg"

const headerList = ['features', 'pricing', 'contact']


const Header = () => {
    const menuRef = useRef(null)
    const menuIcon = useRef(null)

    const handleMenuToggle = () => {
        const classList = menuRef.current.classList
        classList.toggle('hidden')
        classList.toggle('-z-10')
        menuRef.current.previousElementSibling.classList.toggle('z-10')
        menuIcon.current.setAttribute('src', classList.contains('hidden')? menu : close)
        const mainContainer = document.querySelector('main')
        mainContainer.classList.toggle('-z-20')
    }

    return (
        <header>
            <nav className="w-90 h-9 mx-auto flex items-center justify-between">
                <img src={logo} alt="logo icon" />
                <img className="cursor-pointer" src={menu} alt="menu icon" ref={menuIcon} onClick={handleMenuToggle} />
            </nav>
            <aside className="w-full h-screen hidden absolute top-0 bottom-0 right-0 bg-blue-200/95" ref={menuRef}>
                <menu className="w-90 h-full mx-auto pt-5 pb-8 flex items-center justify-between flex-col">
                    <ul className="w-full mt-6 mb-auto text-center">
                        {headerList.map((item, key) => <Item key={key} className="uppercase" text={item} color="white-100" size="bs" />)}
                        <Button className="w-full mt-3 uppercase tracking-widest" text="login" color="transparent" size="md" />
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
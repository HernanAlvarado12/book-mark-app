import { useRef } from "react"
import { Item } from "./Item"
import { Button } from "./Button"
import { LinkCompany } from "./LinkCompany"
import { metaCompanies, navbarImages } from "../helpers/images"
const headerList = ['features', 'pricing', 'contact']


const Header = () => {
    const menuRef = useRef(null)
    const menuIcon = useRef(null)

    const handleMenuToggle = () => {
        const classList = menuRef.current.classList
        classList.toggle('hidden')
        classList.toggle('-z-10')
        menuRef.current.previousElementSibling.classList.toggle('z-10')
        menuIcon.current.setAttribute('src', classList.contains('hidden')? navbarImages.menu : navbarImages.close)
        const siblingContainers = document.querySelectorAll(':is(main, section, footer)')
        siblingContainers.forEach(node => {
            node.classList.toggle('relative')
            node.classList.toggle('-z-20')
        })
    }

    return (
        <header>
            <nav className="w-90 h-9 mx-auto flex items-center justify-between">
                <img src={navbarImages.logo} alt="logo icon" />
                <img className="cursor-pointer" src={navbarImages.menu} alt="menu icon" ref={menuIcon} onClick={handleMenuToggle} />
            </nav>
            <aside className="w-full hidden absolute inset-y-0 right-0 bg-blue-200/95" ref={menuRef}>
                <menu className="w-90 h-screen mx-auto pt-5 pb-8 flex items-center justify-between flex-col">
                    <ul className="w-full mt-6 mb-auto text-center">
                        {headerList.map((item, key) => <Item key={key} className="uppercase" text={item} color="white-100" size="bs" />)}
                        <Button className="w-full mt-3 uppercase tracking-widest" text="login" color="transparent" size="md" />
                    </ul>
                    <LinkCompany className="flex items-center gap-x-2" companies={metaCompanies} />
                </menu>
            </aside>
        </header>
    )
}

export { Header }
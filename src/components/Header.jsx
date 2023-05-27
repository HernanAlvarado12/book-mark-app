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
        <header className="base:w-85 base:h-9 base:mx-auto base:flex base:items-center base:justify-between xl:max-w-screen-2xl xl:mx-auto">
            <nav className="w-90 h-9 mx-auto flex items-center justify-between base:w-auto base:h-auto base:m-0">
                <img src={navbarImages.logo} alt="logo icon" />
                <img className="cursor-pointer base:hidden" src={navbarImages.menu} alt="menu icon" ref={menuIcon} onClick={handleMenuToggle} />
            </nav>
            <aside className="w-full hidden absolute inset-y-0 right-0 bg-blue-200/95 base:block base:relative base:inset-auto base:bg-transparent" ref={menuRef}>
                <menu className="w-90 h-screen mx-auto pt-5 pb-8 flex items-center justify-between flex-col base:w-full base:h-auto base:p-0 base:flex-row">
                    <ul className="w-full max-w-4xl mt-6 mb-auto flex items-center flex-col text-center base:w-full base:max-w-none base:m-0 base:flex-row base:justify-end base:gap-x-3">
                        {headerList.map((item, key) => <Item key={key} className="w-full uppercase base:w-auto base:text-blue-200 base:text-sm base:child:border-0" text={item} color="white-100" size="bs" />)}
                        <Button className="w-full mt-3 uppercase tracking-widest base:w-15 base:h-4 base:m-0 base:bg-red" text="login" color="transparent" size="md" />
                    </ul>
                    <LinkCompany className="flex items-center gap-x-2 base:hidden" companies={metaCompanies} />
                </menu>
            </aside>
        </header>
    )
}

export { Header }
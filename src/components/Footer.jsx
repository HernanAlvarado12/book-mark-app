import { Item } from "./Item"
import { LinkCompany } from "./LinkCompany"
import { metaCompanies } from "../helpers/images"

const footerLinks = ['Features', 'Pricing', 'Contact']

const Footer = () => {
    return (
        <footer className="w-full py-6 flex items-center justify-center bg-blue-200">
            <section className="w-90 mx-auto flex items-center flex-col gap-y-3 base:w-85 base:flex-row base:justify-between xl:max-w-screen-2xl xl:mx-auto">
                <ul className="flex items-center flex-col gap-y-1.5 base:flex-row base:gap-x-3">
                    {footerLinks.map((item, key) => <Item className="uppercase tracking-widest text-center" key={key} text={item} color="white-200" size="md" />)}
                </ul>
                <LinkCompany className="w-full flex justify-center gap-x-2 base:w-auto base:gap-x-3" companies={metaCompanies} />
            </section>
        </footer>
    )
}

export { Footer }
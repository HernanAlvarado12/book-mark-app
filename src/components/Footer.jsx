import { Item } from "./Item"
import { LinkCompany } from "./LinkCompany"
import { metaCompanies } from "../helpers/images"

const footerLinks = ['Features', 'Pricing', 'Contact']

const Footer = () => {
    return (
        <footer className="w-full py-6 flex items-center justify-center bg-blue-200">
            <section className="w-90 mx-auto flex items-center flex-col gap-y-3">
                <ul>
                    {footerLinks.map((item, key) => <Item className="uppercase tracking-widest text-center" key={key} text={item} color="white-200" size="md2" />)}
                </ul>
                <LinkCompany className="w-full flex justify-center gap-x-2" companies={metaCompanies} />
            </section>
        </footer>
    )
}

export { Footer }
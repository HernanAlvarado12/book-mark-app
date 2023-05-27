import { Button } from "./Button"

const CardExtension = ({ path, alt, title, version, textButton }) => {
    return (
        <article className="w-full max-w-xl pt-6 pb-3 px-2 grid justify-items-center rounded-3xl shadow shadow-slate-500 sm:pt-7 sm:last:col-span-2 sm:last:justify-self-center base:last:col-span-1 even:translate-y-4 last:translate-y-8">
            {path && <img src={path} alt={alt} />}
            <h3 className="mt-2 text-blue-200 font-bold text-md">{title}</h3>
            <p className="text-sm">{version}</p>
            <Button className="w-full mt-4 base:text-xs" text={textButton} color="blue" size="sm" />
        </article>
    )
}

export { CardExtension }
import { Button } from "./Button"

const CardExtension = ({ path, alt, title, version, textButton }) => {
    return (
        <article className="w-full pt-8 pb-3 px-2 flex items-center flex-col rounded-3xl shadow shadow-slate-500">
            {path && <img src={path} alt={alt} />}
            <h3 className="mt-2 text-blue-200 font-bold text-md">{title}</h3>
            <p className="text-sm">{version}</p>
            <Button className="w-full mt-4" text={textButton} color="blue" size="sm" />
        </article>
    )
}

export { CardExtension }
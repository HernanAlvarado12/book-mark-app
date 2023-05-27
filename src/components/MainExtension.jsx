import { Comment } from "./Comment"
import { CardExtension } from "./CardExtension"

const MainExtension = ({ className, extensions, comments, companies }) => {
    return (
        <section className={className}>
            <Comment classText="mt-1 mb-5" title={comments[3].title} text={comments[3].text} sizeTitle="bs" sizeText="sm" />
            <section className="w-90 mx-auto flex items-center flex-col gap-y-4 sm:grid sm:grid-cols-2 sm:gap-x-2">
                {extensions.map((item, key) => <CardExtension key={key} path={companies[key]} title={item.title} version={item.version} textButton={item.button} />)}
            </section>
        </section>
    )
}

export { MainExtension }
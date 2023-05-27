import { Comment } from "./Comment"
import { CardExtension } from "./CardExtension"

const MainExtension = ({ className, extensions, comments, companies }) => {
    return (
        <section className={className}>
            <Comment classText="mt-1 mb-5 sm:max-w-4xl sm:mx-auto sm:mt-1.5 sm:mb-6.5 base:mb-2" title={comments[3].title} text={comments[3].text} sizeTitle="bs" sizeText="sm" />
            <section className="w-90 mx-auto flex items-center flex-col gap-y-4 sm:grid sm:grid-cols-2 sm:gap-x-2 base:w-full base:mb-15 base:grid-cols-3 base:gap-x-3">
                {extensions.map((item, key) => <CardExtension key={key} path={companies[key]} title={item.title} version={item.version} textButton={item.button} />)}
            </section>
        </section>
    )
}

export { MainExtension }
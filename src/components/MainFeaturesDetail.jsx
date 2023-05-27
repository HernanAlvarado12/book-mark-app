import { Comment } from "./Comment"

const MainFeaturesDetail = ({ path, content }) => {
    return (
        <section className="mb-12 base:grid base:items-center base:grid-cols-2 base:gap-x-3">
            <img className="w-full aspect-sm" src={path} alt="illustration number one" />
            <Comment className="mt-6 base:text-start" classText="mt-1 sm:mt-1.5" title={content.title} text={content.text} sizeTitle="bs" sizeText="sm" />
        </section>
    )
}

export { MainFeaturesDetail }
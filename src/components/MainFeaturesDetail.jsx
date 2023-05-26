import { Comment } from "./Comment"

const MainFeaturesDetail = ({ path, content }) => {
    return (
        <section className="mb-12">
            <img className="w-full aspect-square" src={path} alt="illustration number one" />
            <Comment className="mt-6" classText="mt-1" title={content.title} text={content.text} sizeTitle="bs" sizeText="sm" />
        </section>
    )
}

export { MainFeaturesDetail }
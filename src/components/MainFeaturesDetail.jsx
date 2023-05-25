import { Comment } from "./Comment"

const MainFeaturesDetail = ({ path, comments }) => {
    return (

        <section className="mb-12">
            <img src={path} alt="illustration number one" />
            <Comment className="mt-6" classText="mt-1" title={comments[2].title} text={comments[3].text} sizeTitle="bs" sizeText="sm" />
        </section>
    )
}

export { MainFeaturesDetail }
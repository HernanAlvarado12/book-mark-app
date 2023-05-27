import { Comment } from "./Comment"
import { Button } from "./Button"

const MainHero = ({ path, comments }) => {
    return (
        <section>
            <img className="md:mx-auto" src={path} alt="hero image" />
            <section className="mb-10">
                <Comment classText="mt-2 mb-3" title={comments[0].title} text={comments[0].text} sizeTitle="lg" sizeText="sm" />
                <div className="flex items-center justify-between gap-x-1">
                    <Button className="w-1/2" text="Get id on Chrome" color="blue" size="sm" />
                    <Button className="w-1/2" text="Get id on Firefox" color="white" size="sm" />
                </div>
            </section>
        </section>
    )
}

export { MainHero }
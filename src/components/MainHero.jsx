import { Comment } from "./Comment"
import { Button } from "./Button"

const MainHero = ({ path, comments }) => {
    return (
        <section className="base:mb-15 base:grid base:items-center base:grid-cols-2 base:gap-x-3">
            <img className="md:mx-auto base:order-1" src={path} alt="hero image" />
            <section className="mb-10 base:mb-0">
                <Comment className="base:text-start" classText="mt-2 mb-3 base:mt-3 base:mb-4" title={comments[0].title} text={comments[0].text} sizeTitle="lg" sizeText="sm" />
                <div className="flex items-center justify-between gap-x-1">
                    <Button className="w-1/2" text="Get id on Chrome" color="blue" size="sm" />
                    <Button className="w-1/2" text="Get id on Firefox" color="white" size="sm" />
                </div>
            </section>
        </section>
    )
}

export { MainHero }
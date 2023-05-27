import { useEffect, useRef, useState } from "react"
import { Item } from "./Item"
import { Comment } from "./Comment"
import { MainFeaturesDetail } from "./MainFeaturesDetail"
import { featuresImages } from "../helpers/images"
import { features as featuresList } from "../helpers/data"

const featuresItems = ['Simple Bookmarking', 'Speedy Searching', 'Easy Sharing']


const MainFeatures = ({ path, comments }) => {
    const [indexFeature, setIndexFeature] = useState(0)
    const listRef = useRef(null)

    useEffect(() => {
        listRef.current.querySelector('li:first-of-type').classList.add('active')
    }, [])

    const handleClickFeature = (event) => {
        listRef.current.querySelector('.active').classList.remove('active')
        event.target.classList.add('active')
        const newIndex = (indexFeature +1) % featuresList.length
        setIndexFeature(newIndex)
    }

    return (
        <section>
            <Comment className="sm:max-w-4xl sm:mx-auto" classText="mt-1 mb-3 sm:mt-1.5" title={comments[1].title} text={comments[1].text} sizeTitle="bs" sizeText="sm" />
            <ul className="mt-5 mb-10 flex items-center flex-col gap-y-1.5 text-center base:flex-row base:justify-center" ref={listRef}>
                {featuresItems.map((item, key) => <Item key={key} className="w-3/4 max-w-sm cursor-pointer base:hover:text-red" text={item} color="blue-100" size="md2" onClick={handleClickFeature} />)}
            </ul>
            <MainFeaturesDetail content={featuresList[indexFeature]} path={featuresImages[indexFeature]} />
        </section>
    )
}

export { MainFeatures }
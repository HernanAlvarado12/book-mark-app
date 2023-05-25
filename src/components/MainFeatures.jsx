import { useEffect, useRef } from "react"
import { Item } from "./Item"
import { Comment } from "./Comment"

const MainFeatures = ({ comments, features }) => {
    const ref = useRef(null)
    const listRef = useRef(null)

    useEffect(() => {
        listRef.current.querySelector('li:first-of-type').classList.add('active')
    }, [])

    const handleClickFeature = (event) => {
        if(!ref.current) {
            listRef.current.querySelector('.active').classList.remove('active')
        }else if(ref.current) {
            ref.current.classList.remove('active')
        }
        event.target.classList.add('active')
        ref.current = event.target
    }

    return (
        <section>
            <Comment classText="mt-1 mb-3" title={comments[1].title} text={comments[1].text} sizeTitle="bs" sizeText="sm" />
            <ul className="mt-5 mb-10 flex items-center flex-col gap-y-1.5 text-center" ref={listRef}>
                {features.map((item, key) => <Item key={key} className="w-3/4 cursor-pointer" text={item} color="blue-100" size="md2" onClick={handleClickFeature} />)}
            </ul>
        </section>
    )
}

export { MainFeatures }
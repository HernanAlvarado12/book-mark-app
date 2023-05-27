import { useRef } from "react"
import { Span } from "./Span"
import { Item } from "./Item"
import { Button } from "./Button"
import { Comment } from "./Comment"

const MainQuestion = ({ comments, questions, icons }) => {
    const ref = useRef(null)


    const handleClickQuestion = (event) => {
        const parent = event.currentTarget.lastElementChild
        if(!ref.current) {
            parent.classList.add('h-full')
            ref.current = parent
        }else {
            ref.current.classList.remove('h-full')
            if(ref.current !== parent) {
                parent.classList.add('h-full')
                ref.current = parent
            }else {
                ref.current = null
            }
        }
    }

    return (
        <section className="max-w-3xl mx-auto">
            <Comment classText="mt-1 mb-4 sm:mt-1.5 sm:mb-5" title={comments[4].title} text={comments[4].text} sizeTitle="bs" sizeText="sm" />
            <ul className="w-full flex flex-col gap-y-2">
                {questions.map((item, key) => (
                    <Item 
                        className="w-full flex items-center flex-col leading-relaxed cursor-pointer overflow-hidden" 
                        key={key} 
                        text={<Span className="w-full flex items-center justify-between hover:text-red" text={<>{item.title}<img src={icons.arrow}/></>} color="blue-200" size="md" />} 
                        color="blue-200" 
                        size="sm" 
                        children={<p className="h-0 text-blue-100">{item.text}</p>}
                        onClick={handleClickQuestion}
                    />
                ))}
            </ul>
            <Button className="mx-auto mt-6 block" text="More Info" color="blue" size="sm2" />
        </section>
    )
}

export { MainQuestion }
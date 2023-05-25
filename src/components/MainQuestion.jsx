import { Button } from "./Button"
import { Comment } from "./Comment"
import { Item } from "./Item"


const MainQuestion = ({ comments, questions, icons }) => {
    <div>
        <Comment classText="mt-1 mb-4" title={comments[4].title} text={comments[4].text} sizeTitle="bs" sizeText="sm" />
        <ul className="w-full flex flex-col gap-y-3">
            {questions.map((item, key) => <Item className="w-full flex items-center justify-between cursor-pointer" key={key} text={item.title} color="blue-200" size="sm" children={<img src={icons.arrow} />} />)}
        </ul>
        <Button className="mx-auto mt-6 block" text="More Info" color="blue" size="sm2" />
    </div>
}

export { MainQuestion }
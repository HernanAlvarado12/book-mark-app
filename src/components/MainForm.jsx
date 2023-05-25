import { useState } from "react"
import { Input } from "./Input"
import { Comment } from "./Comment"

const MainForm = ({ form }) => {
    const [email, setEmail] = useState('')

    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleSubmitData = (event) => {
        event.preventDefault()
    }

   return (
       <section className="w-full py-8 flex items-center justify-center bg-blue">
           <div className="w-85 flex items-center flex-col">
               <Comment className="leading-relaxed" classText="mt-1" title={form.title} text={form.text} colorTitle="white" colorText="white" sizeTitle="sm" sizeText="bs" />
               <form className="w-full" onSubmit={handleSubmitData}>
                   <Input className="w-full my-2" type="email" value={email} color="slate" size="sm" id="emailData" placeholder="user@gmail.com" onChange={handleChangeEmail} />
                   <Input className="w-full" type="submit" value="Contact Us" color="red" size="sm2" name="submitData" />
               </form>
           </div>
       </section>
   )
}

export { MainForm }
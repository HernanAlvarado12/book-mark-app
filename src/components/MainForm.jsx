import { useState } from "react"
import { Input } from "./Input"
import { Comment } from "./Comment"
import { Span } from "./Span"

const errorInput = <Span className="pt-1 pb-0.5 px-1" text="Whoops, make sure it's en email" color="white-invalid" size="xs"/>

const MainForm = ({ form }) => {
    const [email, setEmail] = useState('')

    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleSubmitData = (event) => {
        event.preventDefault()
        setEmail('')
    }

   return (
       <section className="w-full py-8 flex items-center justify-center bg-blue">
           <div className="w-85 flex items-center flex-col group">
               <Comment className="leading-relaxed" classText="mt-1" title={form.title} text={form.text} colorTitle="white" colorText="white" sizeTitle="sm" sizeText="bs" />
               <form className="w-full" onSubmit={handleSubmitData}>
                   <Input className="w-full mt-2 relative z-10 peer" type="email" value={email} color="slate" size="sm" id="emailData" placeholder="user@gmail.com" children={errorInput} onChange={handleChangeEmail} />
                   <Input className="w-full -mt-2" type="submit" value="Contact Us" color="red" size="sm2" name="submitData" />
               </form>
           </div>
       </section>
   )
}

export { MainForm }
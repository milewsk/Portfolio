import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { Card, CardContent } from "../ui/card"

const ContactBar = () => {
  return <div className="flex flex-col items-center justify-center gap-2 p-4 m-2 bg-gray-100 rounded-lg shadow-md">
    <h1 className="pb-2"> You can also reach out me via</h1>
    <div className="flex flex-row w-100 shrink gap-2">
      <Card className=" flex justify-center items-center p-3 w-1/3 md:p-4 lg:p-6">
        <CardContent className="p-6" >
           <a href="https://www.linkedin.com/in/konrad-milewski" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
           </a>    
        </CardContent>
        </Card>
      <Card className="flex justify-center items-center p-3 w-1/3 md:p-4 lg:p-6">
      <CardContent className="p-6" >
           <a href="https://www.linkedin.com/in/konrad-milewski" target="_blank" rel="noopener noreferrer">
           <FaInstagram size={30} className="flex justify-center align-center" />
           </a>
        </CardContent>
        </Card>
      <Card className="flex justify-center items-centerp-3 w-1/3 md:p-4 lg:p-6">
      <CardContent className="p-6" >
           <a href="https://www.linkedin.com/in/konrad-milewski" target="_blank" rel="noopener noreferrer"></a>
           <FaGithub size={30} />
        </CardContent>
      </Card>
    </div>
  </div>
}

export default ContactBar;
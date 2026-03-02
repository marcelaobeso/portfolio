
import content from "../../../public/content.json"
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export type Social = {
    name: string;
    url: string;
}
export default function Contact() {
  
  return (
    <div className="justify-center gap-6 flex flex-wrap z-20 ">
      {content.social.map((social: Social, index)=> (
        <div key={social.name+index} className="border-1 border-zinc-500 rounded-md p-8 mb-4 card">
            <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
        >
                {social.name === "Github" && <FaGithub className="text-black dark:text-white" />}
                {social.name === "LinkedIn" && <FaLinkedinIn className="text-black dark:text-white" />}
                {social.name === "Email" && <FaEnvelope className="text-black dark:text-white" />}
                {social.name}
            </a>
      </div>
      ))
      }
      
  </div>
  )
}

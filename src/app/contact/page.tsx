import Image from "next/image";
export default function Contact() {
    return (
         <div className="justify-center gap-2 flex flex-row z-20 ">

        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/marcela-obeso/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/linkedin.png"
            alt="linkedin icon"
            width={16}
            height={16}
          />
          Linkedn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/marcelaobeso"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github-sign.png"
            alt="github icon"
            width={16}
            height={16}
          />
          Github
        </a>
        </div>
    )
}

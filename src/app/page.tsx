import Clock from "@/components/Clock";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[12px] items-center sm:items-start">
        <header className="flex">
          <h1 className="text-6xl font-bold sm:text-left">
            Marcela Obeso
          </h1>
        </header>
        <div className="gap-4 items-center  sm:flex-row -z-20 flex flex-col">
          
          <Clock />
        </div>
        
      </main>
      <footer className="row-start-3">
        <div className="gap-2 flex flex-row">
          <p className="text-center text-md sm:text-left">
          This is going to be my personal website. Unfortunately you came too early. In the meantime you could visit the following links to learn more about me: 
          </p>
        </div>
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
      </footer>
    </div>
  );
}

import content from '../../../public/content.json';
export default function About() {
    return (
        <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
            {content.about.content.map((paragraph:string, index:number)=>(
                <p className="text-lg wrap-break-word" key={'about-p-'+index}>
                    {paragraph}
                </p>
            ))}
            
        </div>
    );
}
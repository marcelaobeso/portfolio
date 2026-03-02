import content from "../../../public/content.json"

type Job = {
    title: string;
    company_name: string;
    start_date: string;
    end_date: string;
    description: string;
    skills: string;
}
export default function Resume() {
  return (
    content.jobs.map((job:Job, index:number) => (
        <div key={`${index}+${job.start_date}`} className="card p-4 mb-4 border rounded-md shadow-sm">
            <h1 className="font-bold text-2xl">{job.title}</h1>
            <p className="text-xl text-zinc-500" >{job.company_name}</p>
            <p className="text-md text-zinc-500" >{job.start_date} - {job.end_date}</p>
            <p className="mt-2">{job.description}</p>
            <p className="mt-2 text-md text-zinc-500" ><strong>Skills:</strong> {job.skills}</p>
        </div>

        )
        )
    )
}
import { fetchRepos } from "@/lib/utils";

type Repo = {
    id: number;
    name: string;
    fork: boolean;
    html_url: string;
    description: string | null;
};
const repos = await fetchRepos();
export default function Repos() {
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {repos.map((repo: Repo) => (
                    repo.fork ? null :
                    <li key={repo.id} className="p-4 mb-4 border-1 border-zinc-500 rounded-md hover:bg-zinc-700 transition-colors duration-300">
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            <h4 className="text-lg font-bold">{repo.name}</h4>
                            <p className="text-zinc-400">{repo.description}</p>
                        </a>
                        
                    </li>
                ))}
            </ul>
    )
}
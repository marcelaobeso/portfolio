import Repos from "@/components/Repos";
import { Suspense } from "react";

export default async function ProjectsPage() {

    return (
        <div>
            <h1 className="text-xl font-bold mb-4">Github repos and projects I've worked on:</h1>
            <Suspense fallback={<div>Loading...</div>}><Repos/></Suspense>
        </div>
    );
}
import Repos from "@/components/Repos";
import { Suspense } from "react";



export default async function ProjectsPage() {


    return (
        <div>
            <h1 className="text-xl font-bold mb-4">GH repos and projects Ive worked on:</h1>
            <Suspense fallback={<div>Loading...</div>}><Repos/></Suspense>
        </div>
    );
}
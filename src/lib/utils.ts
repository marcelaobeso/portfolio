export async function fetchRepos() {
    const response = await fetch(`https://api.github.com/users/${process.env.GITHUB_USERNAME}/repos`);
    if (!response.ok) {
        throw new Error('Failed to fetch repositories');
    }
    const data = await response.json();
    return data;
}


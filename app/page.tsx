import ProjectList from '@/components/ProjectList';
import { client } from '@/lib/sanity.client';
import { Project } from '@/types/project';

async function getProjects(): Promise<Project[]> {
  return client.fetch(
    `*[_type == "project"] | order(publishedAt desc) {
      _id,
      _createdAt,
      title,
      type,
      featured,
      mainImage,
      description,
      publishedAt,
      slug
    }`
  )
}

export default async function Home() {
  const projects = await getProjects()

  return (
    <main className="min-h-screen bg-[#E33D45] text-white">
      <nav className="fixed top-0 right-0 p-8 flex gap-8">
        <a href="#" className="hover:opacity-80">Books</a>
        <a href="#" className="hover:opacity-80">Experiences</a>
        <a href="#" className="hover:opacity-80">About</a>
        <a href="#" className="hover:opacity-80">Contact</a>
      </nav>
      <div className="max-w-7xl mx-auto px-8 pt-32 pb-16">
        <h1 className="text-5xl font-bold mb-16">SIGNALS</h1>
        <div className="flex gap-4 mb-8">
          <button className="hover:opacity-80">All</button>
          <button className="hover:opacity-80">Books</button>
          <button className="hover:opacity-80">Signage</button>
          <button className="hover:opacity-80">Featured</button>
          <button className="hover:opacity-80">Recent</button>
        </div>
        <ProjectList projects={projects} />
      </div>
    </main>
  );
} 
import ProjectList from '@/components/ProjectList';

const projects = [
  {
    id: '1',
    title: 'SIGNALS Website',
    type: 'book',
    imageUrl: '/images/project1.jpg'
  },
  {
    id: '2',
    title: 'Brand Identity',
    type: 'signage',
    imageUrl: '/images/project2.jpg'
  }
];

export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-24">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <ProjectList projects={projects} />
    </main>
  );
} 
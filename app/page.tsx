import ProjectList from '@/components/ProjectList';
import { Project } from '@/types/project';

const projects: Project[] = [
  { id: '1', title: 'A Form of Practice', type: 'book', imageUrl: 'https://placehold.co/600x400/e33d45/ffffff?text=A+Form+of+Practice' },
  { id: '2', title: 'Boston City Hall', type: 'signage', imageUrl: 'https://placehold.co/600x400/e33d45/ffffff?text=Boston+City+Hall' },
  { id: '3', title: "Breuer's Bohemia", type: 'book', imageUrl: 'https://placehold.co/600x400/e33d45/ffffff?text=Breuers+Bohemia' },
  { id: '4', title: 'deCordova', type: 'signage', imageUrl: 'https://placehold.co/600x400/e33d45/ffffff?text=deCordova' },
  { id: '5', title: 'Exhibit Columbus', type: 'signage', imageUrl: 'https://placehold.co/600x400/e33d45/ffffff?text=Exhibit+Columbus' },
  { id: '6', title: 'Fusion', type: 'book', imageUrl: 'https://placehold.co/600x400/e33d45/ffffff?text=Fusion' },
  { id: '7', title: 'Gund Hall', type: 'signage', imageUrl: 'https://placehold.co/600x400/e33d45/ffffff?text=Gund+Hall' },
  { id: '8', title: 'Hamptons Modern', type: 'book', imageUrl: 'https://placehold.co/600x400/e33d45/ffffff?text=Hamptons+Modern' },
  { id: '9', title: 'Harvard University', type: 'signage', imageUrl: 'https://placehold.co/600x400/e33d45/ffffff?text=Harvard+University' },
  { id: '10', title: 'Heroic', type: 'book', imageUrl: 'https://placehold.co/600x400/e33d45/ffffff?text=Heroic' },
  { id: '11', title: 'Hudson Modern', type: 'book', imageUrl: 'https://placehold.co/600x400/e33d45/ffffff?text=Hudson+Modern' },
  { id: '12', title: 'Imagining the Modern', type: 'signage', imageUrl: 'https://placehold.co/600x400/e33d45/ffffff?text=Imagining+the+Modern' },
  { id: '13', title: 'Justice Is Beauty', type: 'book', imageUrl: 'https://placehold.co/600x400/e33d45/ffffff?text=Justice+Is+Beauty' },
  { id: '14', title: 'Louis Kahn', type: 'book', imageUrl: 'https://placehold.co/600x400/e33d45/ffffff?text=Louis+Kahn' },
  { id: '15', title: 'MASS MoCA', type: 'signage', imageUrl: 'https://placehold.co/600x400/e33d45/ffffff?text=MASS+MoCA' },
  { id: '16', title: 'Megastructure', type: 'book', imageUrl: 'https://placehold.co/600x400/e33d45/ffffff?text=Megastructure' },
  { id: '17', title: 'MIT DUSP', type: 'signage', imageUrl: 'https://placehold.co/600x400/e33d45/ffffff?text=MIT+DUSP' },
  { id: '18', title: 'Our Artificial Nature', type: 'signage', imageUrl: 'https://placehold.co/600x400/e33d45/ffffff?text=Our+Artificial+Nature' },
  { id: '19', title: 'The Edith Farnsworth House', type: 'book', imageUrl: 'https://placehold.co/600x400/e33d45/ffffff?text=The+Edith+Farnsworth+House' },
  { id: '20', title: 'The Structure of Design', type: 'book', imageUrl: 'https://placehold.co/600x400/e33d45/ffffff?text=The+Structure+of+Design' },
  { id: '21', title: 'Universal Principles', type: 'book', imageUrl: 'https://placehold.co/600x400/e33d45/ffffff?text=Universal+Principles' },
  { id: '22', title: 'Wayne Thom', type: 'book', imageUrl: 'https://placehold.co/600x400/e33d45/ffffff?text=Wayne+Thom' },
  { id: '23', title: 'Words & Works', type: 'book', imageUrl: 'https://placehold.co/600x400/e33d45/ffffff?text=Words+and+Works' }
];

export default function Home() {
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
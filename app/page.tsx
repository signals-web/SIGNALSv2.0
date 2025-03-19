import ProjectList from '@/components/ProjectList';
import { Project } from '@/types/project';

const projects: Project[] = [
  { id: '1', title: 'A Form of Practice', type: 'book', imageUrl: '/images/form-of-practice.jpg' },
  { id: '2', title: 'Boston City Hall', type: 'signage', imageUrl: '/images/boston-city-hall.jpg' },
  { id: '3', title: "Breuer's Bohemia", type: 'book', imageUrl: '/images/breuers-bohemia.jpg' },
  { id: '4', title: 'deCordova', type: 'signage', imageUrl: '/images/decordova.jpg' },
  { id: '5', title: 'Exhibit Columbus', type: 'signage', imageUrl: '/images/exhibit-columbus.jpg' },
  { id: '6', title: 'Fusion', type: 'book', imageUrl: '/images/fusion.jpg' },
  { id: '7', title: 'Gund Hall', type: 'signage', imageUrl: '/images/gund-hall.jpg' },
  { id: '8', title: 'Hamptons Modern', type: 'book', imageUrl: '/images/hamptons-modern.jpg' },
  { id: '9', title: 'Harvard University', type: 'signage', imageUrl: '/images/harvard-university.jpg' },
  { id: '10', title: 'Heroic', type: 'book', imageUrl: '/images/heroic.jpg' },
  { id: '11', title: 'Hudson Modern', type: 'book', imageUrl: '/images/hudson-modern.jpg' },
  { id: '12', title: 'Imagining the Modern', type: 'signage', imageUrl: '/images/imagining-modern.jpg' },
  { id: '13', title: 'Justice Is Beauty', type: 'book', imageUrl: '/images/justice-is-beauty.jpg' },
  { id: '14', title: 'Louis Kahn', type: 'book', imageUrl: '/images/louis-kahn.jpg' },
  { id: '15', title: 'MASS MoCA', type: 'signage', imageUrl: '/images/mass-moca.jpg' },
  { id: '16', title: 'Megastructure', type: 'book', imageUrl: '/images/megastructure.jpg' },
  { id: '17', title: 'MIT DUSP', type: 'signage', imageUrl: '/images/mit-dusp.jpg' },
  { id: '18', title: 'Our Artificial Nature', type: 'signage', imageUrl: '/images/artificial-nature.jpg' },
  { id: '19', title: 'The Edith Farnsworth House', type: 'book', imageUrl: '/images/farnsworth-house.jpg' },
  { id: '20', title: 'The Structure of Design', type: 'book', imageUrl: '/images/structure-of-design.jpg' },
  { id: '21', title: 'Universal Principles', type: 'book', imageUrl: '/images/universal-principles.jpg' },
  { id: '22', title: 'Wayne Thom', type: 'book', imageUrl: '/images/wayne-thom.jpg' },
  { id: '23', title: 'Words & Works', type: 'book', imageUrl: '/images/words-and-works.jpg' }
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
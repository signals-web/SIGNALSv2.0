'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Project } from '@/types/project';
import { BookOpenText, Flag } from 'lucide-react';

interface ProjectListProps {
  projects: Project[];
  className?: string;
}

const ProjectList: React.FC<ProjectListProps> = ({ projects, className }) => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [hoverPosition, setHoverPosition] = useState<{ top: number, left: number } | null>(null);
  const projectItemRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (e: React.MouseEvent, imageUrl: string) => {
    setActiveImage(imageUrl);
    
    if (projectItemRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const containerRect = projectItemRef.current.getBoundingClientRect();
      
      // Calculate position relative to the container
      setHoverPosition({
        top: rect.bottom - containerRect.top + 20,
        left: Math.max(0, rect.left - containerRect.left),
      });
    }
  };

  const handleMouseLeave = () => {
    setActiveImage(null);
    setHoverPosition(null);
  };

  const getProjectIcon = (type: string) => {
    if (type === 'book') {
      return <BookOpenText size={20} className="inline-block" />;
    } else if (type === 'signage') {
      return <Flag size={20} className="inline-block" />;
    }
    return null;
  };

  return (
    <div 
      className={cn("relative", className)}
      ref={projectItemRef}
    >
      <div className="flex flex-wrap text-2xl leading-relaxed">
        {projects.map((project, index) => (
          <React.Fragment key={project.id}>
            <div 
              className="project-item cursor-pointer py-1 group transform transition-all duration-300 ease-in-out inline-flex items-center hover:opacity-80"
              style={{ 
                transitionDelay: `${index * 30}ms`,
                opacity: 0,
                animation: 'project-item-appear 0.5s forwards',
                animationDelay: `${index * 30}ms`
              }}
              onMouseEnter={(e) => handleMouseEnter(e, project.imageUrl)}
              onMouseLeave={handleMouseLeave}
            >
              {getProjectIcon(project.type)}
              <h3 className="ml-2 font-normal">
                {project.title}
              </h3>
            </div>
            {index < projects.length - 1 && (
              <span className="mx-2 py-1">,</span>
            )}
            {index === projects.length - 1 && (
              <span className="py-1">.</span>
            )}
          </React.Fragment>
        ))}
      </div>
      
      {activeImage && hoverPosition && (
        <div 
          className="absolute z-10 transform -translate-x-1/2 pointer-events-none"
          style={{
            top: `${hoverPosition.top}px`,
            left: `${hoverPosition.left}px`,
          }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 animate-image-reveal">
            <Image
              src={activeImage}
              alt="Project preview"
              width={300}
              height={200}
              className="rounded-md"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectList; 
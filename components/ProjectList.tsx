import React, { useState, useRef, useCallback, useEffect } from 'react';
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
  const imageRef = useRef<HTMLImageElement>(null);
  const projectItemRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (e: React.MouseEvent, imageUrl: string, index: number) => {
    setActiveImage(imageUrl);
    
    if (projectItemRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      setHoverPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
  };

  const handleMouseLeave = () => {
    setActiveImage(null);
    setHoverPosition(null);
  };

  const getProjectIcon = (type: string) => {
    if (type === 'book') {
      return <BookOpenText size={16} className="inline-block mr-2" />;
    } else if (type === 'signage') {
      return <Flag size={16} className="inline-block mr-2" />;
    }
    return null;
  };

  return (
    <div 
      className={cn("relative py-8", className)}
      ref={projectItemRef}
    >
      <div className="flex flex-wrap items-start">
        {projects.map((project, index) => (
          <React.Fragment key={project.id}>
            <div 
              className="project-item cursor-pointer py-2 group transform transition-all duration-500 ease-in-out inline-flex mr-2"
              style={{ 
                transitionDelay: `${index * 30}ms`,
                opacity: 0,
                animation: 'project-item-appear 0.5s forwards',
                animationDelay: `${index * 30}ms`
              }}
              onMouseEnter={(e) => handleMouseEnter(e, project.imageUrl, index)}
              onMouseLeave={handleMouseLeave}
            >
              <h3 className="text-base md:text-lg font-normal tracking-tight">
                {project.title}
              </h3>
              <div className="text-sm md:text-base text-foreground/70 flex items-center ml-2">
                <span>
                  {getProjectIcon(project.type)}
                </span>
              </div>
            </div>
            {index < projects.length - 1 && (
              <span className="mr-2 py-2">,</span>
            )}
            {index === projects.length - 1 && (
              <span className="py-2">.</span>
            )}
          </React.Fragment>
        ))}
      </div>
      
      {activeImage && hoverPosition && (
        <img
          ref={imageRef}
          src={activeImage}
          alt="Project preview"
          className="project-hover-image animate-image-reveal absolute max-w-xs"
          style={{
            top: `${hoverPosition.top}px`,
            left: `${hoverPosition.left}px`,
          }}
        />
      )}
    </div>
  );
};

export default ProjectList; 
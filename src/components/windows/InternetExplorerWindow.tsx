import React from 'react';
import { Window } from '../win95/Window';
import { ArrowLeft, ArrowRight, RotateCw, Home, Search, Star } from 'lucide-react';

export const InternetExplorerWindow: React.FC = () => {
  return (
    <Window 
      id="ie" 
      icon={<span>🌐</span>}
      menuBar={
        <div className="flex gap-4 px-2 py-1 bg-[#c0c0c0] border-b border-[#808080] text-sm">
          <span className="cursor-pointer hover:underline">File</span>
          <span className="cursor-pointer hover:underline">Edit</span>
          <span className="cursor-pointer hover:underline">View</span>
          <span className="cursor-pointer hover:underline">Favorites</span>
          <span className="cursor-pointer hover:underline">Help</span>
        </div>
      }
    >
      <div className="flex flex-col h-full bg-[#c0c0c0]">
        {/* Toolbar */}
        <div className="flex items-center gap-1 p-1 border-b border-[#808080]">
          <button className="win95-button p-1 min-w-0" disabled>
            <ArrowLeft size={14} />
          </button>
          <button className="win95-button p-1 min-w-0" disabled>
            <ArrowRight size={14} />
          </button>
          <button className="win95-button p-1 min-w-0" disabled>
            <RotateCw size={14} />
          </button>
          <button className="win95-button p-1 min-w-0" disabled>
            <Home size={14} />
          </button>
          <button className="win95-button p-1 min-w-0" disabled>
            <Search size={14} />
          </button>
          <button className="win95-button p-1 min-w-0" disabled>
            <Star size={14} />
          </button>
        </div>

        {/* Address Bar */}
        <div className="flex items-center gap-2 p-1 border-b border-[#808080]">
          <span className="text-xs font-bold">Address</span>
          <div className="flex-1 win95-border-inset bg-white px-2 py-0.5 text-xs">
            file:///C:/Users/Ekansh/Documents/resume.pdf
          </div>
          <button className="win95-button text-xs px-2">Go</button>
        </div>

        {/* PDF Viewer Area */}
        <div className="flex-1 win95-border-inset bg-white overflow-hidden">
          <iframe 
            src="/resume.pdf"
            className="w-full h-full border-0"
            title="Resume - Ekansh Agarwal"
          />
        </div>

        {/* Status Bar */}
        <div className="flex items-center justify-between px-2 py-0.5 border-t border-[#808080] text-xs">
          <span>Done</span>
          <div className="flex items-center gap-2">
            <span>🌐</span>
            <span>Local intranet</span>
          </div>
        </div>
      </div>
    </Window>
  );
};

import React from 'react';
import { Window } from '../win95/Window';

export const CommandPromptWindow: React.FC = () => {
  return (
    <Window 
      id="cmd" 
      icon={<span>💻</span>}
    >
      <div className="flex flex-col h-full bg-[#000000] p-2 font-mono text-sm">
        <div className="text-white mb-2">
          Microsoft(R) Windows 95<br />
          (C)Copyright Microsoft Corp 1981-1995.<br />
          <br />
        </div>
        
        <div className="text-white">
          <span className="text-[#aaaaaa]">C:\WINDOWS&gt;</span> pnpx argston@latest
        </div>
        
        <div className="mt-4 text-yellow-400">
          ═══════════════════════════════════════════════════════════
        </div>
        
        <div className="text-green-400 mt-2">
          ╔═══════════════════════════════════════════════════════╗
          <br />
          ║                                                       ║
          <br />
          ║   🚀 ARGSTON CLI - Run on your own terminal! 🚀      ║
          <br />
          ║                                                       ║
          <br />
          ║   Copy this command and run it locally:               ║
          <br />
          ║                                                       ║
          <br />
          ║   $ pnpx argston@latest                               ║
          <br />
          ║                                                       ║
          <br />
          ╚═══════════════════════════════════════════════════════╝
        </div>
        
        <div className="text-yellow-400 mt-4">
          ═══════════════════════════════════════════════════════════
        </div>
        
        <div className="text-cyan-400 mt-4">
          This command cannot be executed in this browser environment.
          <br />
          Please open your local terminal and run:
          <br />
          <br />
          <span className="text-white bg-[#333333] px-2 py-1 inline-block">
            pnpx argston@latest
          </span>
        </div>
        
        <div className="mt-6 text-white">
          <span className="text-[#aaaaaa]">C:\WINDOWS&gt;</span>
          <span className="animate-pulse">_</span>
        </div>
        
        <div className="flex-1" />
        
        <div className="text-[#666666] text-xs mt-4">
          Press any key to continue . . .
        </div>
      </div>
    </Window>
  );
};

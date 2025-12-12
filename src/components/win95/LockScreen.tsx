import React from 'react';
import { Lock, User } from 'lucide-react';

interface LockScreenProps {
  onUnlock: () => void;
}

export const LockScreen: React.FC<LockScreenProps> = ({ onUnlock }) => {
  return (
    <div 
      className="fixed inset-0 z-[10000] cursor-pointer flex flex-col items-center justify-center"
      style={{ background: '#008080' }}
      onClick={onUnlock}
    >
      {/* Windows 95 Logo */}
      <div className="flex flex-col items-center animate-fade-in">
        <div className="relative mb-8">
          <svg width="160" height="130" viewBox="0 0 200 160">
            {/* Pixelated flying squares effect */}
            <g className="animate-pulse">
              <rect x="20" y="40" width="8" height="8" fill="#c0c0c0" opacity="0.4"/>
              <rect x="35" y="30" width="8" height="8" fill="#008080" opacity="0.5"/>
              <rect x="50" y="45" width="8" height="8" fill="#c0c0c0" opacity="0.3"/>
              <rect x="45" y="60" width="8" height="8" fill="#ff0000" opacity="0.6"/>
              <rect x="30" y="55" width="8" height="8" fill="#008080" opacity="0.4"/>
            </g>
            
            {/* Main Windows Flag */}
            <g transform="translate(70, 30)">
              <path d="M0,0 Q30,-15 60,0 L60,80 Q30,95 0,80 Z" fill="#000" stroke="#000" strokeWidth="3"/>
              <rect x="5" y="5" width="22" height="32" fill="#ff0000"/>
              <rect x="32" y="5" width="22" height="32" fill="#00ff00"/>
              <rect x="5" y="42" width="22" height="32" fill="#0000ff"/>
              <rect x="32" y="42" width="22" height="32" fill="#ffff00"/>
            </g>
          </svg>
        </div>

        {/* User Icon */}
        <div className="mb-6">
          <div className="w-24 h-24 rounded-full bg-[#c0c0c0] win95-border-outset flex items-center justify-center">
            <User size={48} className="text-[#808080]" />
          </div>
        </div>

        {/* User Name */}
        <h2 className="text-white text-2xl font-bold mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>
          Ekansh Agarwal
        </h2>

        {/* Lock Icon */}
        <div className="flex items-center gap-2 text-white/80 mb-8">
          <Lock size={16} />
          <span className="text-sm">Locked</span>
        </div>

        {/* Unlock instruction */}
        <p className="text-white/60 text-sm animate-pulse">
          Click anywhere to unlock
        </p>
      </div>
    </div>
  );
};

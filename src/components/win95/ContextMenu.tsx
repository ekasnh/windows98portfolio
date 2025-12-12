import React from 'react';
import { useWindows } from '@/contexts/WindowContext';
import { RefreshCw, Settings, FolderPlus, Image, Monitor } from 'lucide-react';

interface ContextMenuProps {
  x: number;
  y: number;
  onClose: () => void;
}

export const ContextMenu: React.FC<ContextMenuProps> = ({ x, y, onClose }) => {
  const { openWindow } = useWindows();

  const handleRefresh = () => {
    window.location.reload();
    onClose();
  };

  const handleWallpaper = () => {
    openWindow('wallpaper', 'Display Properties', { width: 400, height: 380 });
    onClose();
  };

  const handleNewFolder = () => {
    // Placeholder for new folder functionality
    onClose();
  };

  const menuItems = [
    { label: 'Refresh', icon: <RefreshCw size={14} />, action: handleRefresh },
    { type: 'separator' },
    { label: 'New Folder', icon: <FolderPlus size={14} />, action: handleNewFolder },
    { type: 'separator' },
    { label: 'Properties', icon: <Monitor size={14} />, action: handleWallpaper },
  ];

  // Adjust position to keep menu on screen
  const adjustedX = Math.min(x, window.innerWidth - 160);
  const adjustedY = Math.min(y, window.innerHeight - 200);

  return (
    <>
      {/* Backdrop to catch clicks */}
      <div 
        className="fixed inset-0 z-[9990]" 
        onClick={onClose}
        onContextMenu={(e) => { e.preventDefault(); onClose(); }}
      />
      
      {/* Menu */}
      <div 
        className="fixed win95-window py-1 w-40 z-[9991] animate-fade-in"
        style={{ left: adjustedX, top: adjustedY }}
      >
        {menuItems.map((item, index) => (
          item.type === 'separator' ? (
            <div key={index} className="h-px bg-[#808080] mx-1 my-1" />
          ) : (
            <div
              key={index}
              className="flex items-center gap-2 px-3 py-1 cursor-pointer hover:bg-[#000080] hover:text-white text-sm"
              onClick={item.action}
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          )
        ))}
      </div>
    </>
  );
};

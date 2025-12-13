import React from 'react';
import { Window } from '../win95/Window';

const recycleBinItems = [
  { name: 'cat1.jpg', path: '/recycle-bin/cat1.jpg' },
  { name: 'cat2.jpg', path: '/recycle-bin/cat2.jpg' },
  { name: 'cat3.jpg', path: '/recycle-bin/cat3.jpg' },
  { name: 'cat4.jpg', path: '/recycle-bin/cat4.jpg' },
];

export const RecycleBinWindow: React.FC = () => {
  const [selectedItem, setSelectedItem] = React.useState<number | null>(null);
  const [previewImage, setPreviewImage] = React.useState<string | null>(null);

  return (
    <Window 
      id="recycle-bin" 
      icon={<span>🗑️</span>}
      menuBar={
        <div className="flex gap-4 px-2 py-1 bg-[#c0c0c0] border-b border-[#808080] text-sm">
          <span className="cursor-pointer hover:underline">File</span>
          <span className="cursor-pointer hover:underline">Edit</span>
          <span className="cursor-pointer hover:underline">View</span>
          <span className="cursor-pointer hover:underline">Help</span>
        </div>
      }
    >
      <div className="flex flex-col h-full bg-[#c0c0c0]">
        {/* Toolbar */}
        <div className="flex gap-1 p-1 border-b border-[#808080]">
          <button className="win95-button text-xs px-2" disabled>Empty Recycle Bin</button>
          <button className="win95-button text-xs px-2" disabled>Restore All</button>
        </div>

        {/* Content Area */}
        <div className="flex flex-1 overflow-hidden">
          {/* File List */}
          <div className="flex-1 win95-border-inset bg-white p-1 overflow-auto">
            <div className="grid grid-cols-4 gap-2 p-2">
              {recycleBinItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center p-2 cursor-pointer ${
                    selectedItem === index ? 'bg-[#000080] text-white' : 'hover:bg-[#c0c0c0]'
                  }`}
                  onClick={() => setSelectedItem(index)}
                  onDoubleClick={() => setPreviewImage(item.path)}
                >
                  <span className="text-3xl">🖼️</span>
                  <span className="text-xs text-center mt-1 break-all">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Preview Modal */}
        {previewImage && (
          <div 
            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setPreviewImage(null)}
          >
            <div className="win95-window max-w-[90%] max-h-[90%]" onClick={e => e.stopPropagation()}>
              <div className="win95-titlebar">
                <span>Preview - {recycleBinItems.find(i => i.path === previewImage)?.name}</span>
                <button 
                  className="win95-button p-0 min-w-[20px] h-5 text-xs"
                  onClick={() => setPreviewImage(null)}
                >
                  ✕
                </button>
              </div>
              <div className="p-2 bg-[#c0c0c0]">
                <img 
                  src={previewImage} 
                  alt="Preview" 
                  className="max-w-full max-h-[400px] object-contain"
                />
              </div>
            </div>
          </div>
        )}

        {/* Status Bar */}
        <div className="win95-border-inset bg-[#c0c0c0] px-2 py-0.5 text-xs">
          {recycleBinItems.length} object(s) - {selectedItem !== null ? `${recycleBinItems[selectedItem].name} selected` : 'Select an item to view'}
        </div>
      </div>
    </Window>
  );
};

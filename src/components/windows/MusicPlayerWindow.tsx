import React, { useState, useEffect, useRef } from 'react';
import { Window } from '../win95/Window';
import { Play, Pause, SkipBack, SkipForward, Volume2, Square } from 'lucide-react';

export const MusicPlayerWindow: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(75);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
        setCurrentTime(audio.currentTime);
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec.toString().padStart(2, '0')}`;
  };

  const playPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setProgress(0);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current && duration) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const newProgress = (clickX / rect.width) * 100;
      audioRef.current.currentTime = (newProgress / 100) * duration;
      setProgress(newProgress);
    }
  };

  return (
    <Window 
      id="musicplayer" 
      icon={<span>🎵</span>}
      menuBar={
        <div className="flex gap-4 px-2 py-1 bg-[#c0c0c0] border-b border-[#808080] text-sm">
          <span className="cursor-pointer hover:underline">File</span>
          <span className="cursor-pointer hover:underline">View</span>
          <span className="cursor-pointer hover:underline">Play</span>
          <span className="cursor-pointer hover:underline">Help</span>
        </div>
      }
    >
      <audio ref={audioRef} src="/audio/music.mp3" preload="metadata" />
      
      <div className="flex flex-col h-full bg-[#c0c0c0] p-2">
        {/* Display */}
        <div className="win95-border-inset bg-[#000033] p-2 mb-2">
          <div className="text-green-400 font-mono text-xs">
            <div className="flex justify-between mb-1">
              <span>Track 1/1</span>
              <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
            </div>
            <div className="text-lg truncate">Kokoronashi (Cover)</div>
            <div className="text-xs text-green-300">Sou</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div 
          className="win95-border-inset bg-[#c0c0c0] h-4 mb-2 relative cursor-pointer"
          onClick={handleProgressClick}
        >
          <div 
            className="h-full bg-[#000080]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-1 mb-2">
          <button className="win95-button p-1 min-w-0" onClick={stop} title="Stop">
            <SkipBack size={16} />
          </button>
          <button className="win95-button p-1 min-w-0" onClick={playPause} title={isPlaying ? 'Pause' : 'Play'}>
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </button>
          <button className="win95-button p-1 min-w-0" onClick={stop} title="Stop">
            <Square size={16} />
          </button>
          <button className="win95-button p-1 min-w-0" onClick={stop} title="Restart">
            <SkipForward size={16} />
          </button>
        </div>

        {/* Volume */}
        <div className="flex items-center gap-2 mb-2 px-2">
          <Volume2 size={16} />
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="flex-1"
          />
          <span className="text-xs w-8">{volume}%</span>
        </div>

        {/* Track Info */}
        <div className="flex-1 win95-border-inset bg-white overflow-auto p-2">
          <div className="text-xs space-y-1">
            <div className="font-bold">Now Playing:</div>
            <div className="bg-[#000080] text-white px-2 py-1">
              1. Kokoronashi (Cover) - Sou
            </div>
            <div className="text-[#808080] mt-2">
              Thai Sub Version
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="win95-border-inset bg-[#c0c0c0] px-2 py-0.5 text-xs mt-1">
          {isPlaying ? '▶ Playing' : '⏹ Stopped'} - 1 track loaded
        </div>
      </div>
    </Window>
  );
};

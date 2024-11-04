import React from 'react';
import { Play, Download, Share2 } from 'lucide-react';

interface HighlightPreviewProps {
  videoUrl: string;
  duration: string;
  onDownload: () => void;
  onShare: () => void;
}

export default function HighlightPreview({ 
  videoUrl, 
  duration,
  onDownload,
  onShare 
}: HighlightPreviewProps) {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative aspect-[9/16] bg-black">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={videoUrl}
          controls
        />
        <div className="absolute bottom-4 right-4 bg-black/50 px-2 py-1 rounded text-white text-sm">
          {duration}
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">Generated Highlight</h3>
          <div className="flex space-x-2">
            <button
              onClick={onDownload}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              title="Download"
            >
              <Download className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={onShare}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              title="Share"
            >
              <Share2 className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
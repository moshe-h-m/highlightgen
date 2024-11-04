import React from 'react';
import { Settings } from 'lucide-react';
import { useStore } from '../store/useStore';

export default function AIOptionsPanel() {
  const { processingOptions, setProcessingOptions } = useStore();

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-2 mb-6">
        <Settings className="w-5 h-5 text-purple-600" />
        <h2 className="text-lg font-semibold">AI Processing Options</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Maximum Duration (seconds)
          </label>
          <input
            type="number"
            value={processingOptions.maxDuration}
            onChange={(e) =>
              setProcessingOptions({ maxDuration: parseInt(e.target.value) })
            }
            className="w-full px-3 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Style
          </label>
          <select
            value={processingOptions.style}
            onChange={(e) =>
              setProcessingOptions({ style: e.target.value as any })
            }
            className="w-full px-3 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500"
          >
            <option value="dynamic">Dynamic</option>
            <option value="informative">Informative</option>
            <option value="funny">Funny</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Aspect Ratio
          </label>
          <select
            value={processingOptions.aspectRatio}
            onChange={(e) =>
              setProcessingOptions({ aspectRatio: e.target.value as any })
            }
            className="w-full px-3 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500"
          >
            <option value="9:16">9:16 (TikTok, Stories)</option>
            <option value="16:9">16:9 (YouTube)</option>
            <option value="1:1">1:1 (Instagram)</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="subtitles"
            checked={processingOptions.includeSubtitles}
            onChange={(e) =>
              setProcessingOptions({ includeSubtitles: e.target.checked })
            }
            className="rounded text-purple-600 focus:ring-purple-500"
          />
          <label htmlFor="subtitles" className="text-sm text-gray-700">
            Include Auto-Generated Subtitles
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Number of Highlights
          </label>
          <input
            type="number"
            value={processingOptions.highlightCount}
            onChange={(e) =>
              setProcessingOptions({ highlightCount: parseInt(e.target.value) })
            }
            min="1"
            max="10"
            className="w-full px-3 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
      </div>
    </div>
  );
}
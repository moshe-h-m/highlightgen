import React from 'react';
import { Loader2 } from 'lucide-react';

interface ProcessingStatusProps {
  progress: number;
  status: string;
}

export default function ProcessingStatus({ progress, status }: ProcessingStatusProps) {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-center mb-4">
        <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
      </div>
      <div className="space-y-4">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200">
                Processing
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-purple-600">
                {progress}%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
            <div
              style={{ width: `${progress}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500 transition-all duration-500"
            />
          </div>
        </div>
        <p className="text-center text-gray-600">{status}</p>
      </div>
    </div>
  );
}
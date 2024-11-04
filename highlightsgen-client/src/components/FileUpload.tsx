import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, File } from 'lucide-react';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
}

export default function FileUpload({ onFileSelect }: FileUploadProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onFileSelect(acceptedFiles[0]);
    }
  }, [onFileSelect]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'video/*': ['.mp4', '.mov', '.avi'],
      'audio/*': ['.mp3', '.wav']
    },
    maxFiles: 1
  });

  return (
    <div
      {...getRootProps()}
      className={`w-full p-8 border-2 border-dashed rounded-xl transition-colors duration-200 ease-in-out cursor-pointer
        ${isDragActive 
          ? 'border-purple-400 bg-purple-50' 
          : 'border-gray-300 hover:border-purple-400 hover:bg-purple-50'
        }`}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center justify-center space-y-4">
        {isDragActive ? (
          <Upload className="w-12 h-12 text-purple-500" />
        ) : (
          <File className="w-12 h-12 text-gray-400" />
        )}
        <div className="text-center">
          <p className="text-lg font-medium text-gray-700">
            {isDragActive ? 'Drop your file here' : 'Drag & drop your video or audio file'}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Supports MP4, MOV, AVI, MP3, and WAV
          </p>
        </div>
      </div>
    </div>
  );
}
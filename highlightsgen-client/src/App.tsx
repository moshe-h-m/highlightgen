import React from 'react';
import { Sparkles, Layout } from 'lucide-react';
import FileUpload from './components/FileUpload';
import ProcessingStatus from './components/ProcessingStatus';
import HighlightPreview from './components/HighlightPreview';
import AIOptionsPanel from './components/AIOptionsPanel';
import AccountsManager from './components/AccountsManager';
import SchedulingCalendar from './components/SchedulingCalendar';
import { useStore } from './store/useStore';

type AppState = 'upload' | 'processing' | 'preview';

function App() {
  const [state, setState] = React.useState<AppState>('upload');
  const [progress, setProgress] = React.useState(0);
  const { processingOptions } = useStore();

  const handleFileSelect = async (file: File) => {
    setState('processing');
    
    // Simulate AI processing with progress updates
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 10;
      setProgress(currentProgress);
      if (currentProgress >= 100) {
        clearInterval(interval);
        setState('preview');
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-12 h-12 text-purple-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              AI Video Highlights Studio
            </h1>
            <p className="text-lg text-gray-600">
              Transform your content into platform-optimized highlights
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-8">
              {state === 'upload' && <FileUpload onFileSelect={handleFileSelect} />}

              {state === 'processing' && (
                <ProcessingStatus
                  progress={progress}
                  status="AI is analyzing your content and generating highlights..."
                />
              )}

              {state === 'preview' && (
                <div className="space-y-8">
                  <HighlightPreview
                    videoUrl="https://example.com/video.mp4"
                    duration="0:30"
                    onDownload={() => console.log('Downloading...')}
                    onShare={() => console.log('Sharing...')}
                  />
                  <SchedulingCalendar />
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <AIOptionsPanel />
              <AccountsManager />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
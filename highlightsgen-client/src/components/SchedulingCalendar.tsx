import React from 'react';
import { format } from 'date-fns';
import { Calendar } from 'lucide-react';
import { useStore } from '../store/useStore';
import { VideoHighlight } from '../types';

export default function SchedulingCalendar() {
  const { highlights } = useStore();
  const scheduledHighlights = highlights.filter(
    (h) => h.status === 'scheduled' && h.scheduledFor
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-2 mb-6">
        <Calendar className="w-5 h-5 text-purple-600" />
        <h2 className="text-lg font-semibold">Publishing Schedule</h2>
      </div>

      <div className="space-y-4">
        {scheduledHighlights.map((highlight) => (
          <div
            key={highlight.id}
            className="flex items-center gap-4 p-4 border rounded-lg"
          >
            <img
              src={highlight.thumbnail}
              alt={highlight.title}
              className="w-16 h-16 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="font-medium">{highlight.title}</h3>
              <p className="text-sm text-gray-500">
                Scheduled for:{' '}
                {format(
                  new Date(highlight.scheduledFor!),
                  'MMM d, yyyy - h:mm a'
                )}
              </p>
              <div className="flex gap-2 mt-2">
                {highlight.platforms.map((platform) => (
                  <span
                    key={platform}
                    className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-full capitalize"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {scheduledHighlights.length === 0 && (
          <p className="text-center text-gray-500 py-4">
            No scheduled highlights yet
          </p>
        )}
      </div>
    </div>
  );
}
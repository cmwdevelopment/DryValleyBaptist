import { Sermon } from "@/types/sermon";

interface SermonCardProps {
  sermon: Sermon;
}

export default function SermonCard({ sermon }: SermonCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-card p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-bold text-dvb-navy text-xl">{sermon.title}</h3>
          {sermon.series && (
            <span className="inline-block mt-1 text-xs font-semibold uppercase tracking-wide text-dvb-gold bg-amber-50 px-2 py-0.5 rounded">
              {sermon.series}
            </span>
          )}
        </div>
      </div>
      <div className="mt-3 text-sm text-slate-500">
        <span>{sermon.speaker}</span>
        <span className="mx-2">&bull;</span>
        <span>{sermon.date}</span>
      </div>
      <p className="mt-3 text-slate-600 text-sm leading-relaxed">{sermon.summary}</p>
      <div className="mt-4 flex gap-3">
        {sermon.audioUrl && sermon.audioUrl !== "#" && (
          <a
            href={sermon.audioUrl}
            className="text-sm font-semibold text-dvb-navy hover:text-dvb-gold transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            🎧 Listen
          </a>
        )}
        {sermon.audioUrl === "#" && (
          <span className="text-sm font-semibold text-dvb-navy">🎧 Audio</span>
        )}
        {sermon.videoUrl && sermon.videoUrl !== "#" && (
          <a
            href={sermon.videoUrl}
            className="text-sm font-semibold text-dvb-navy hover:text-dvb-gold transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            📺 Watch
          </a>
        )}
        {sermon.videoUrl === "#" && (
          <span className="text-sm font-semibold text-dvb-navy">📺 Video</span>
        )}
      </div>
    </div>
  );
}

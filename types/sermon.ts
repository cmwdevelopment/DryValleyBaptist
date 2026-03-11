export interface Sermon {
  id: string;
  title: string;
  speaker: string;
  date: string;
  series?: string;
  summary: string;
  audioUrl?: string;
  videoUrl?: string;
}

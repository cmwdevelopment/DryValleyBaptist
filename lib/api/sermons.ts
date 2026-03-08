import { sermons } from "@/data/sermons";
import { Sermon } from "@/types/sermon";

export async function fetchSermons(): Promise<Sermon[]> {
  return sermons;
}
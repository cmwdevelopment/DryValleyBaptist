import { ministries } from "@/data/ministries";
import { Ministry } from "@/types/ministry";

export async function fetchMinistries(): Promise<Ministry[]> {
  return ministries;
}
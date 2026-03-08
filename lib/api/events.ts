import { events } from "@/data/events";
import { Event } from "@/types/event";

export async function fetchEvents(): Promise<Event[]> {
  return events;
}
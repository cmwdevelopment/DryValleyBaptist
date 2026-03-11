import { staff } from "@/data/staff";
import { Staff } from "@/types/staff";

export async function fetchStaff(): Promise<Staff[]> {
  return staff;
}

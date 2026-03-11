import { Staff } from "@/types/staff";

interface StaffCardProps {
  staff: Staff;
}

export default function StaffCard({ staff }: StaffCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-card p-6">
      <div className="w-16 h-16 rounded-full bg-dvb-navy flex items-center justify-center text-white text-2xl font-bold mb-4">
        {staff.name.charAt(0)}
      </div>
      <h3 className="font-bold text-dvb-navy text-lg">{staff.name}</h3>
      <p className="text-dvb-gold font-medium text-sm mt-0.5">{staff.role}</p>
      {staff.bio && (
        <p className="mt-3 text-slate-600 text-sm leading-relaxed">{staff.bio}</p>
      )}
    </div>
  );
}

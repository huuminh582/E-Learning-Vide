interface StatsCardProps {
  icon: string;
  value: number | string;
  label: string;
  bgColor: string;
}

const StatsCard = ({ icon, value, label, bgColor }: StatsCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
      <div className="flex items-center gap-4">
        <div className={`h-12 w-12 rounded-xl ${bgColor} flex items-center justify-center text-2xl`}>
          {icon}
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          <p className="text-sm text-gray-500">{label}</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;

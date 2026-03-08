export default function CardComp({ item }) {
    const date = String(item.date);
    const formattedDate = `${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(6, 8)}`;

    const stats = [
        { label: "Positive", value: item.positive, color: "text-yellow-500", bg: "bg-yellow-50", border: "border-yellow-200" },
        { label: "Deaths", value: item.death, color: "text-red-500", bg: "bg-red-50", border: "border-red-200" },
        { label: "Recovered", value: item.recovered, color: "text-green-500", bg: "bg-green-50", border: "border-green-200" },
    ];

    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="[background:#31347a] px-5 py-3">
                <p className="text-xs text-blue-200 font-semibold uppercase tracking-widest">Daily Report</p>
                <p className="text-white font-bold text-lg">{formattedDate}</p>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-3 divide-x divide-gray-100">
                {stats.map((stat) => (
                    <div key={stat.label} className={`${stat.bg} ${stat.border} px-3 py-4 text-center flex flex-col gap-1`}>
                        <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">{stat.label}</span>
                        <span className={`text-base font-extrabold ${stat.color}`}>
                            {stat.value?.toLocaleString() ?? '-'}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

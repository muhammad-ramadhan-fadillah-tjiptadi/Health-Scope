export default function CardComp({ label, value }) {
    return (
        <div className="bg-white rounded-xl border border-gray-100 px-5 py-4 hover:shadow-md transition-shadow">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                {label}
            </p>
            <p className="text-2xl font-extrabold text-gray-900 mt-1 tabular-nums">
                {value != null ? Number(value).toLocaleString("en-US") : "—"}
            </p>
        </div>
    );
}
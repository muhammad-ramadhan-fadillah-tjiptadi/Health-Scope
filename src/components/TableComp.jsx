import { useState } from "react";

// Format tanggal 20210307 → "2021-03-07"
function formatDate(num) {
    // Mengubah angka menjadi string, supaya bisa di-slice
    const s = String(num);
    return s.slice(0, 4) + "-" + s.slice(4, 6) + "-" + s.slice(6, 8);
}

// Format angka pakai koma, kalau kosong tampilkan "—"
function fmt(value) {
    // Mengecek apakah valuenya tidak null atau undefined, kalo null atau undefined tampilkan "—"
    return value != null ? Number(value).toLocaleString("en-US") : "—";
}

export default function TableComp({ data }) {
    const [page, setPage] = useState(1);
    const perPage = 15;
    const totalPages = Math.ceil(data.length / perPage);
    const rows = data.slice((page - 1) * perPage, page * perPage);

    return (
        <div>
            {/* Tabel */}
            <div className="overflow-x-auto rounded-xl border border-gray-100 bg-white">
                <table className="w-full text-sm text-left">
                    <thead>
                        <tr className="border-b border-gray-100">
                            <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">Date</th>
                            <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">Positive</th>
                            <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">Deaths</th>
                            <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">Hospitalized</th>
                            <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">Tests</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row) => (
                            <tr key={row.date} className="border-b border-gray-50 hover:bg-gray-50/60 transition-colors">
                                <td className="px-4 py-2.5 text-xs text-gray-500 font-mono">{formatDate(row.date)}</td>
                                <td className="px-4 py-2.5 font-semibold text-[#313474] tabular-nums">{fmt(row.positive)}</td>
                                <td className="px-4 py-2.5 font-semibold text-gray-700 tabular-nums">{fmt(row.death)}</td>
                                <td className="px-4 py-2.5 text-gray-600 tabular-nums">{fmt(row.hospitalizedCurrently)}</td>
                                <td className="px-4 py-2.5 text-gray-600 tabular-nums">{fmt(row.totalTestResults)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-3 px-1">
                <span className="text-xs text-gray-400">
                    Page {page} of {totalPages}
                </span>
                <div className="flex gap-1">
                    <button
                        onClick={() => setPage(page - 1)}
                        disabled={page <= 1}
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                    >
                        Prev
                    </button>
                    <button
                        onClick={() => setPage(page + 1)}
                        disabled={page >= totalPages}
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

import { useEffect, useState } from "react";
import CardComp from "../components/CardComp";
import TableComp from "../components/TableComp";
import { Agentation } from "agentation";


export default function National() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://api.covidtracking.com/v1/us/daily.json")
            .then((res) => res.json())
            .then((json) => setData(json))
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    const latest = data[0];

    return (
        <>
            {import.meta.env.DEV && <Agentation />}
            <div className="min-h-[calc(100vh-64px)] bg-[#F8FAFC]">
                <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col gap-8">

                    {/* Header */}
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                            United States
                        </p>
                        <h1 className="text-2xl font-extrabold text-gray-900">
                            National <span className="text-[#313474]">Covid-19</span> Data
                        </h1>
                        <p className="text-sm text-gray-400 mt-1">
                            Daily historical data from{" "}
                            <a href="https://covidtracking.com" target="_blank" rel="noreferrer" className="underline hover:text-[#313474] transition-colors">
                                The Covid Tracking Project
                            </a>
                        </p>
                    </div>

                    {/* Cards */}
                    {loading ? (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="h-24 rounded-xl bg-gray-100 animate-pulse" />
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            <CardComp label="Total Positive" value={latest?.positive} />
                            <CardComp label="Total Deaths" value={latest?.death} />
                            <CardComp label="Hospitalized" value={latest?.hospitalizedCurrently} />
                            <CardComp label="Total Tests" value={latest?.totalTestResults} />
                        </div>
                    )}

                    {/* Table */}
                    {loading ? (
                        <div className="flex flex-col gap-2">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="h-10 rounded-lg bg-gray-100 animate-pulse" />
                            ))}
                        </div>
                    ) : (
                        <div>
                            <h2 className="text-base font-bold text-gray-800 mb-3">Daily Records</h2>
                            <TableComp data={data} />
                        </div>
                    )}

                </div>
            </div>
        </>
    );
}
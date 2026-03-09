import './App.css'
import NavbarComp from "./components/NavbarComp"
import { useEffect, useState } from "react";
import { Agentation } from "agentation";
import { Link } from "react-router-dom";

export default function App() {
  const [summary, setSummary] = useState(null);

  async function getLatestData() {
    const url = "https://api.covidtracking.com/v1/us/current.json";
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Response status: ${response.status}`);
      const result = await response.json();
      setSummary(result[0]);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getLatestData();
  }, []);

  return (
    <>
      {import.meta.env.DEV && <Agentation />}

      {/* Hero Section */}
      <div className="min-h-[calc(100vh-64px)] bg-gray-50 flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-12 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Left — Penjelasan */}
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Pantau Sebaran <br />
                <span className="text-[#313474]">Covid-19</span> <br />
                Secara Langsung
              </h1>

              <p className="text-gray-500 text-base leading-relaxed">
                <strong>HealthScope</strong> menyajikan data pada seputar pandemi Covid-19.
                Temukan informasi jumlah kasus, tingkat kematian, secara
                akurat dan transparan — semua dalam satu platform.
              </p>
              <Link to="/national">
                <div className="flex flex-wrap gap-3 mt-2">
                  <button className="px-6 py-2.5 rounded-xl bg-[#313474] text-white text-sm font-semibold hover:bg-[#252860] transition-colors shadow">
                    Lihat Data National
                  </button>
                </div>
              </Link>
            </div>

            {/* Right — Statistik */}
            <div className="flex flex-col gap-8">

              {/* Positive */}
              <div className="flex flex-col items-center text-center gap-1">
                <span className="text-5xl md:text-6xl font-extrabold text-[#313474]">
                  {summary?.positive ? summary.positive.toLocaleString("id-ID") : "—"}
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  Total Kasus Positif
                </span>
              </div>

              {/* Death */}
              <div className="flex flex-col items-center text-center gap-1">
                <span className="text-5xl md:text-6xl font-extrabold text-[#313474]">
                  {summary?.death ? summary.death.toLocaleString("id-ID") : "—"}
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  Total Kasus Meninggal
                </span>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}
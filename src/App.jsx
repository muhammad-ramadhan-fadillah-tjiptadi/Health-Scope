import './App.css'
import NavbarComp from "./components/NavbarComp"
import CardComp from "./components/CardComp"
import { useEffect, useState } from "react";

export default function App() {
  const [historic, setHistoric] = useState([]);

  async function getDataHistoricUS() {
    const url = "https://api.covidtracking.com/v1/us/daily.json";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
      setHistoric(result);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getDataHistoricUS();
  }, []);

  return (
    <>
      <NavbarComp />
      <div className="max-w-6xl mx-auto px-6 py-8">
        {historic.length === 0 && (
          <p className="text-center text-gray-500">Loading data...</p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {historic.map((item) => (
            <CardComp key={item.date} item={item} />
          ))}
        </div>
      </div>
    </>
  )
}
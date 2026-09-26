import Link from "next/link";
import "./index.css";
import TailwindSpacing from "./TailwindSpacing";
import TailwindTypography from "./TailwindTypography";
import TailwindBackgroundColors from "./TailwindBackgroundColors";
import TailwindResponsiveDesign from "./TailwindResponsiveDesign";
import TailwindFilters from "./TailwindFilters";
import TailwindGrids from "./TailwindGrids";

export default function TailwindLab() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">Tailwind CSS</h1>
      <Link href="/labs/lab2" className="text-blue-600 hover:underline">
        Back to Lab 2
      </Link>
      <TailwindSpacing />
      <TailwindTypography />
      <TailwindBackgroundColors />
      <TailwindResponsiveDesign />
      <TailwindFilters />
      <TailwindGrids />
    </div>
  );
}

import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="mx-[10rem] mt-10">
      <span className="text-2xl font-semibold text-[#f68c90]">CALCULATORS</span>
      <div className="grid grid-cols-4 gap-10 mt-10">
        <Link href="/pregnancy" className="flex flex-col px-7 py-7 space-y-5 border rounded-lg h-[240px] w-[240px] bg-[#a5dccd] hover:ease-in hover:bg-[#c4e9de] ">
          <span className="font-semibold text-lg">PREGNANCY</span>
          <span className="font-light text-sm">estimates due date based on last period, ultrasound, conception, or IVF transfer date.</span>
        </Link>

        <Link href="pregnancy-weight-gain" className="flex flex-col px-7 py-7 space-y-5 border rounded-lg h-[240px] w-[240px] bg-[#a5dccd] hover:bg-[#c4e9de] ">
          <span className="font-semibold text-lg">PREGNANCY WEIGHT GAIN</span>
          <span className="font-light text-sm">estimates due date based on last period, ultrasound, conception, or IVF transfer date.</span>
        </Link>

        <Link href="pregnancy-conception" className="flex flex-col px-7 py-7 space-y-5 border rounded-lg h-[240px] w-[240px] bg-[#a5dccd] hover:bg-[#c4e9de]">
          <span className="font-semibold text-lg">PREGNANCY CONCEPTION</span>
          <span className="font-light text-sm">estimates due date based on last period, ultrasound, conception, or IVF transfer date.</span>
        </Link>

        <Link href="due-date" className="flex flex-col px-7 py-7 space-y-5 border rounded-lg h-[240px] w-[240px] bg-[#a5dccd] hover:bg-[#c4e9de]">
          <span className="font-semibold text-lg">DUE DATE</span>
          <span className="font-light text-sm">estimates due date based on last period, ultrasound, conception, or IVF transfer date.</span>
        </Link>

        <Link href="ovulation" className="flex flex-col px-7 py-7 space-y-5 border rounded-lg h-[240px] w-[240px] bg-[#a5dccd] hover:bg-[#c4e9de]">
          <span className="font-semibold text-lg">OVULATION</span>
          <span className="font-light text-sm">estimates due date based on last period, ultrasound, conception, or IVF transfer date.</span>
        </Link>

        <Link href="conception" className="flex flex-col px-7 py-7 space-y-5 border rounded-lg h-[240px] w-[240px] bg-[#a5dccd] hover:bg-[#c4e9de]">
          <span className="font-semibold text-lg">CONCEPTION</span>
          <span className="font-light text-sm">estimates due date based on last period, ultrasound, conception, or IVF transfer date.</span>
        </Link>

        <Link href="period" className="flex flex-col px-7 py-7 space-y-5 border rounded-lg h-[240px] w-[240px] bg-[#a5dccd] hover:bg-[#c4e9de]">
          <span className="font-semibold text-lg">PERIOD</span>
          <span className="font-light text-sm">estimates due date based on last period, ultrasound, conception, or IVF transfer date.</span>
        </Link>

      </div>
      </div>
    </div>
  )
}

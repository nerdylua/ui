import Shuffle from "@/components/Shuffle";
import Link from "next/link";
import { GridScan } from "@/components/GridScan";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black font-sans">
      <div className="absolute inset-0">
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#392e4e"
          gridScale={0.1}
          scanColor="#FF9FFC"
          scanOpacity={0.4}
          lineJitter={0.1}
          scanGlow={0.5}
          scanSoftness={2}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
        />
      </div>
      <div className="absolute right-4 top-4 z-20">
        <Link
          href="/page2"
          className="inline-flex items-center rounded-md px-3 py-1.5 text-m font-medium text-white hover:bg-white/10 transition"
        >
          next
        </Link>
      </div>
      <main className="relative z-10 flex min-h-screen w-full max-w-3xl flex-col items-center justify-center p-8 mx-auto">
        <div className="w-fit">
          <Shuffle
            text="Testing cool ui components"
            tag="h1"
            textAlign="left"
            className="normal-case whitespace-nowrap text-5xl sm:text-6xl font-semibold tracking-tight text-white"
          />
          <p className="mt-2 w-full text-right text-xl sm:text-2xl text-white">~ nerdylua</p>
        </div>
      </main>
    </div>
  );
}
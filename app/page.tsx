import Shuffle from "@/components/Shuffle";
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
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
        />
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
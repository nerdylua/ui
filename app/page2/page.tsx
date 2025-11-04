import ColorBends from "@/components/ColorBends";
import Link from "next/link";

export default function Page() {
  return (
    <div className="relative min-h-screen w-full bg-black">
      <div className="absolute inset-0">
        <ColorBends
          colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
          autoRotate={0}
          rotation={0}
          speed={0.2}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          parallax={0.5}
          noise={0.1}
          transparent
        />
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center p-8">
          <h1 className="text-white text-5xl sm:text-6xl font-semibold tracking-tight text-center">Damn</h1>
        </div>
      </div>
      <div className="absolute right-4 top-4 z-20">
        <Link
          href="/page3"
          className="inline-flex items-center rounded-md px-3 py-1.5 text-m font-medium text-white hover:bg-white/10 transition"
        >
          next
        </Link>
      </div>
    </div>
  );
}



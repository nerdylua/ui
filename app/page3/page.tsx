import LaserFlow from '@/components/LaserFlow';
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="relative h-screen w-full bg-black">
        <div className="absolute inset-0 overflow-hidden">
          <LaserFlow
            className="absolute inset-0"
            horizontalBeamOffset={0.1}
            verticalBeamOffset={0.0}
            verticalSizing={2.5}
            wispDensity={1}
            wispSpeed={20}
            wispIntensity={8}
            flowSpeed={0.4}
            flowStrength={0.25}
            fogIntensity={0.38}
            fogScale={0.3}
            fogFallSpeed={0.7}
            decay={3}
            falloffStart={1.2}
            horizontalSizing={0.34}
            color="#CF9EFF"
          />
        </div>
      </div>
      <div className="absolute right-4 top-4 z-20">
        <Link
          href="/page4"
          className="inline-flex items-center rounded-md px-3 py-1.5 text-m font-medium text-white hover:bg-white/10 transition"
        >
          next
        </Link>
      </div>
      <div className="w-full bg-black px-4 py-0 relative -mt-[50vh] z-10">
        <div className="grid items-start justify-center w-full max-w-7xl mx-auto h-[50vh] rounded-lg border border-white/20 bg-white/5 p-6 bg-[radial-gradient(circle,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:20px_20px] [background-position:center]">
          <p className="text-m text-white">isnt this so cool</p>
        </div>
      </div>
    </>
  );
}
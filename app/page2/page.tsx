import ColorBends from "@/components/ColorBends";

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
    </div>
  );
}



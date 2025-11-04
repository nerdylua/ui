import Shuffle from "@/components/Shuffle";
import LiquidEther from "@/components/LiquidEther";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-white font-sans dark:bg-black">
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <LiquidEther
          className="w-full h-full"
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={18}
          cursorSize={100}
          isViscous={false}
          viscous={20}
          iterationsViscous={30}
          iterationsPoisson={30}
          resolution={0.4}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.4}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={2000}
          autoRampDuration={0.4}
        />
      </div>
      <main className="relative z-10 flex min-h-screen w-full max-w-3xl flex-col items-center justify-center p-8 pointer-events-none">
        <div className="w-fit">
          <Shuffle
            text="Testing cool ui components"
            tag="h1"
            textAlign="left"
            className="normal-case whitespace-nowrap text-5xl sm:text-6xl font-semibold tracking-tight text-black dark:text-zinc-50"
          />
          <p className="mt-2 w-full text-right text-xl sm:text-2xl text-zinc-700 dark:text-zinc-300">~ nerdylua</p>
        </div>
      </main>
    </div>
  );
}

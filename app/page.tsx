import Shuffle from "@/components/Shuffle";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center p-8">
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

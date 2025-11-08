import PixelBlast from '@/components/PixelBlast';
import Link from "next/link";

export default function Page() {
	return (
		<div className="relative min-h-screen w-full bg-black">
			<div className="absolute inset-0">
				<PixelBlast
					className="absolute inset-0"
					color="#00FF00"
					variant="square"
					pixelSize={4}
					patternScale={1.75}
					patternDensity={0.85}
					pixelSizeJitter={0.15}
					speed={1.2}
					edgeFade={0}
					enableRipples={true}
					liquid={false}
					transparent
				/>

				<div className="absolute inset-0 pointer-events-none flex items-center justify-center p-8">
					<h1 className="text-white text-3xl sm:text-6xl font-semibold tracking-tight text-center">ok bye</h1>
				</div>
			</div>

			<div className="absolute right-4 top-4 z-20">
				<Link
					href="/"
					className="inline-flex items-center rounded-md px-3 py-1.5 text-m font-medium text-white hover:bg-white/10 transition"
				>
					end
				</Link>
			</div>
		</div>
	);
}
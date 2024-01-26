export default function Logo({ withLogo = false, classColor = "text-brand-500" }: Readonly<{ withLogo?: boolean; classColor?: string }>) {
	if (withLogo) {
		return (
			<div className="flex h-full items-center justify-center gap-x-1">
				<img className="h-full w-full" src="/images/starwars-logo.webp" alt="starwars logo" />
				<div className={`flex flex-col font-heading leading-[1] text-brand-500 ${classColor}`}>
					<span>star</span>
					<span>wars</span>
				</div>
			</div>
		);
	}

	return (
		<div className={`flex flex-col font-heading leading-[1] text-brand-500 ${classColor}`}>
			<span>star</span>
			<span>wars</span>
		</div>
	);
}

export default function SpinnerFullPage() {
	return (
		/* eslint-disable max-len */
		<div className="fixed inset-0 flex h-dvh items-center justify-center bg-brand-50">
			<div
				className="aspect-square w-14 animate-spin rounded-full
			[-webkit-mask:_radial-gradient(farthest-side,_#0000_calc(100%_-_10px),_#000_0)]
			[background:radial-gradient(farthest-side,_theme('colors.brand.500')_94%,_#0000)_top/10px_10px_no-repeat,_conic-gradient(#0000_30%,_theme('colors.brand.500'))]"
			/>
		</div>
	);
}

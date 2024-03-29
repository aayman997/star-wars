import type { RefObject } from "react";
import { useRef, useEffect } from "react";

const useOutsideClick = <T extends HTMLDivElement | HTMLUListElement>(handler?: () => void, listenCapturing = true): RefObject<T> => {
	const ref = useRef<T>(null);

	useEffect(() => {
		const handleCLick = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				handler?.();
			}
		};
		document.addEventListener("click", handleCLick, listenCapturing);

		return () => document.removeEventListener("click", handleCLick, listenCapturing);
	}, [handler, listenCapturing]);
	return ref;
};
export default useOutsideClick;

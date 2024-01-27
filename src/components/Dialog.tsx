import { HiXMark } from "react-icons/hi2";
import type { ReactNode, ReactElement } from "react";
import { useCallback, cloneElement, createContext, useContext, useState, useMemo } from "react";
import { createPortal } from "react-dom";
import useOutsideClick from "@src/hooks/useOutsideClick";
import { useSearchParams } from "react-router-dom";

interface BasePropsType {
	children: ReactNode;
}

interface DialogOpenPropsType extends BasePropsType {
	opens: string;
}

interface DialogWindowPropsType extends BasePropsType {
	name: string;
}

type DialogContextType = {
	openName?: string;
	close?: () => void;
	open?: (name: string) => void;
};

const DialogContext = createContext<DialogContextType | object>({});

function Dialog({ children }: Readonly<BasePropsType>) {
	const [openName, setOpenName] = useState<string>("");
	const [searchParams, setSearchParams] = useSearchParams();

	const close = useCallback(() => {
		searchParams.delete("people");
		setSearchParams(searchParams);
		setOpenName("");
	}, [searchParams, setSearchParams]);

	const open = useCallback(
		(view: string) => {
			const [, id] = view.split("_");
			searchParams.set("people", id);
			setSearchParams(searchParams);
			setOpenName(view);
		},
		[searchParams, setSearchParams],
	);

	const value = useMemo(
		() => ({
			openName,
			close,
			open,
		}),
		[close, open, openName],
	);

	return <DialogContext.Provider value={value}>{children}</DialogContext.Provider>;
}

const Open = ({ children, opens: opensWindowName }: DialogOpenPropsType) => {
	const { open } = useContext<DialogContextType>(DialogContext);

	return cloneElement(children as ReactElement, { onClick: () => open?.(opensWindowName) });
};

function Window({ children, name }: DialogWindowPropsType) {
	const { openName, close } = useContext<DialogContextType>(DialogContext);

	const ref = useOutsideClick<HTMLDivElement>(close);
	if (name !== openName) {
		return null;
	}

	return createPortal(
		<div className="fixed inset-0 z-10 bg-black/50 backdrop-blur-sm transition-all duration-500">
			<div
				className="fixed left-1/2 top-1/2 w-4/5 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-brand-50 px-5 py-5 shadow-2xl transition-all
				duration-500 sm:w-2/3 md:w-1/2 xl:w-1/3"
				ref={ref}
			>
				<button aria-label="close" className="absolute right-5 top-5 translate-x-3 rounded-sm px-0.5 hover:bg-gray-100" type="button" onClick={close}>
					<HiXMark size={38} className="text-gray-500" />
				</button>
				<div>{cloneElement(children as ReactElement, { onCloseDialog: close })}</div>
			</div>
		</div>,
		document.body,
		"Dialog",
	);
}

Dialog.Open = Open;
Dialog.Window = Window;

export default Dialog;

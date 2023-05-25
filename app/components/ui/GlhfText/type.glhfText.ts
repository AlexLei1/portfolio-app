import { ReactNode } from "react"

export interface IGlhfText extends HTMLAttributes<HTMLSpanElement> {
	text?: string
	children: ReactNode;
}
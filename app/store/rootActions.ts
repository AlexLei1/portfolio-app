import { actions as burgerActions } from "./burger/burger.slice"
import { actions as cursorActions } from "./cursor/cursor.slice"

export const allActions = {
	...burgerActions,
	...cursorActions
}
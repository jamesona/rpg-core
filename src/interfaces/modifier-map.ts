import { Modifier } from './modifier'

export type ModifierMap<T> = {
	[key in keyof T]?: Modifier<T>
}

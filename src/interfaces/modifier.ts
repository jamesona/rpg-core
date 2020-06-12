export type Modifier<T> = (subject: T) => T[keyof T]

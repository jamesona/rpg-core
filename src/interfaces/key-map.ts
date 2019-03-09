export type KeyMap<T, V> = HasKeys<keyof T, V>

export type HasKeys<K extends keyof any, V = any> = { [key in K]: V }
export type HasKey<K extends keyof any, V> = HasKeys<K, V>
export type RequireKeys<K extends keyof any, V> = HasKeys<K, V>
export type RequireKey<K extends keyof any, V> = HasKeys<K, V>

export type AllowKey<K extends keyof any, V = any> = { [key in K]?: V }
export type AllowKeys<K extends keyof any, V = any> = AllowKey<K, V>

const hasKeyExample: HasKey<'name'|'fizz', string> = {
	name: 'foo',
	fizz: 'buzz'
}

const keyMapExample: KeyMap<{foo: any}, string> = {
	foo: ''
}

const allowKeyExample: AllowKey<'foo'|'bar', number> = {
	foo: 0
}

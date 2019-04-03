/**
 * A typed assertion that an object contains keys of type T, referencing values of type V
 * 
 * ```typescript
 * const keyMapExample: KeyMap<{foo: any}, string> = {
 * 	foo: ''
 * }
 * ```
 */
export type KeyMap<T, V> = HasKeys<keyof T, V>

/**
 * A typed assertion that an object contains keys in the literal string union K, referencing values of type V
 * 
 * ```typescript
 * const hasKeysExample: HasKey<'name'|'fizz', string> = {
 * 	name: 'ted',
 * 	fizz: 'buzz'
 * }
 * ```
 */
export type HasKeys<K extends keyof any, V = any> = { [key in K]: V }
export type HasKey<K extends keyof any, V = any> = HasKeys<K, V>
export type RequireKeys<K extends keyof any, V = any> = HasKeys<K, V>
export type RequireKey<K extends keyof any, V = any> = HasKeys<K, V>

/**
 * A typed assertion that an object _may_ contain keys of K, and that they will be of type V
 * ```typescript
 * const allowKeyExample: AllowKey<'foo'|'bar', number> = {
 * 	foo: 0
 * }
 * ```
 */
export type AllowKeys<K extends keyof any, V = any> = { [key in K]?: V }
export type AllowKey<K extends keyof any, V = any> = AllowKeys<K, V>

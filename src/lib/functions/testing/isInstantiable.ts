export function isInstantiable(subject, ...params) {
	return it('should be instantiable', () => {
		expect(() => new subject(...params)).not.toThrow()
	})
}

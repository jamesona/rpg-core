import * as Creatures from './'
import { Creature } from '../../classes/creature'

describe('all creatures', () => {
	Object.keys(Creatures).forEach(name => {
		const creature = Creatures[name]

		it('should extend Creature', () => {
			expect(creature.prototype).toBeDefined()
			expect(() => Object.getPrototypeOf(creature.prototype)).not.toThrow()
			expect(Object.getPrototypeOf(creature.prototype).constructor).toBeDefined()
			expect(Object.getPrototypeOf(creature.prototype).constructor).toBe(Creature)
		})

		it('should have a named constructor', () => {
			expect(creature.name).toBeDefined()
			expect(creature.name).toBe(name)
		})

		it('should be newable', () => {
			expect(() => new creature()).not.toThrow()
		})

		describe('instances', () => {
			const instance = new creature()

			it('should have a species', () => {
				expect(instance).toHaveProperty('species')
			})

			it('should have stats', () => {
				expect(instance).toHaveProperty('stats')
			})
		})
	})
})

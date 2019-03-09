import { Creature } from "./creature";
import { Goblin } from "./creatures/goblin";

describe('Creature', () => {
	it('should be instantiable', () => {
		expect(() => new Creature(Goblin)).not.toThrow()
	})
})

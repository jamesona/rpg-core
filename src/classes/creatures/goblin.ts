import { Creature } from "../creature";

export class Goblin extends Creature {
	static stats = {
		STR: 5,
		CON: 5,
		DEX: 3,
		INT: 1,
		CHA: 0,
		WIS: 2,
		HP: {
			max: 30
		},
		MP: {
			max: 20
		},
		SP: {
			max: 50
		}
	}

	constructor() {
		super(Goblin)
	}
}

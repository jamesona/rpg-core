import { StatMap } from "../interfaces/has-stats";

/**
 * An abstract class defining the common properties of creature classes
 */
export abstract class Creature<Stats extends StatMap<any, any>> {
	static isCreature(subject: object): subject is Creature<StatMap<any, any>> {
		return subject instanceof Creature
	}

	/**
	 * A string uniquely identifying the type of creature (goblin, rat, dwarf)
	 */
	public abstract readonly species: string

	/**
	 * An instance of  [[StatMap]]
	 */
	public abstract readonly stats: Stats
}

import { StatMap } from '../interfaces/has-stats'

/**
 * An abstract class defining the common properties of creature classes
 */
export abstract class Creature<Stats extends StatMap<any, any>> {
	public static isCreature<Stats extends StatMap<any, any>>(
		subject: object
	): subject is Creature<Stats> {
		return subject instanceof Creature
	}

	/**
	 * A string uniquely identifying the type of creature (goblin, rat, dwarf)
	 */
	public abstract readonly species: string

	/**
	 * An instance of [[StatMap]]
	 */
	public abstract readonly stats: Stats
}

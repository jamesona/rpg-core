import { ModifierMap } from 'interfaces/modifier-map'

/**
 * Example
 *
 * ```ts
 * interface HasHP {
 * 	HP: number
 * }
 *
 * interface HasMP {
 * 	MP: number
 * }
 *
 * class DamageHP extends Effect<HasHP> {
 * 	readonly description = 'reduce target HP by 10'
 * 	constructor() {
 * 		super({
 * 			HP: subject => subject.HP - this.amount,
 * 			// This line will produce an error, because MP is not in the HasHP type
 * 			MP: subject => subject.MP - this.amount
 * 		})
 * 	}
 * }
 * ```
 */
export abstract class Effect<SubjectAttributes> {
	public readonly description: string

	constructor(public readonly modifiers: ModifierMap<SubjectAttributes>) {}

	public apply(subject: SubjectAttributes) {
		const difference = { ...subject }

		Reflect.ownKeys(this.modifiers).forEach(attribute => {
			const modifier = this.modifiers[attribute]
			difference[attribute] = modifier(subject[attribute])
		})

		return difference
	}
}

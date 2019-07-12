type Modifier<T> = (subject: T) => T[keyof T]

type ModifierMap<T> = {
	[key in keyof T]?: Modifier<T>
}

export type MagnitudeMap<T> = {
	[key in keyof T]?: number
}

export class Effect<SubjectAttributes> {
	description: string

	constructor(public readonly modifiers: ModifierMap<SubjectAttributes>) {}

	public apply(subject: SubjectAttributes) {
		const difference = {...subject}

		Reflect.ownKeys(this.modifiers).forEach(attribute => {
			const modifier = this.modifiers[attribute]
			difference[attribute] = modifier(subject[attribute])
		})

		return difference
	}
}

/// Example
/*
interface HasHP {
	HP: number
}

interface HasMP {
	MP: number
}

class DamageHP extends Effect<HasHP> {
	readonly description = 'reduce target HP by 10'

	constructor(public readonly amount: number) {
		super({
			HP: subject => subject.HP - this.amount,
			// this line has an error, because MP is not compatible with HasMP
			// MP: subject => subject.MP - this.damage
		})
	}
}

class DrainMP extends Effect<HasMP> {
	constructor(public readonly amount: number) {
		super({
			MP: subject => subject.MP - this.amount
		})
	}
}
*/

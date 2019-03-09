type Modifier<T> = (subject: T) => T[keyof T]

type ModifierMap<T> = {
	[key in keyof T]?: Modifier<T>
}

export class Effect<SubjectType> {
	description: string

	constructor(public readonly modifiers: ModifierMap<SubjectType>) {}
}

/// Example

interface HasHP {
	HP: number
}

interface HasMP {
	MP: number
}

class Attack extends Effect<HasHP> {
	readonly description = 'reduce target HP by 10'

	constructor(public readonly damage: number) {
		super({
			HP: subject => subject.HP - this.damage,
			// this line has an error, because MP is not compatible with HasMP
			// MP: subject => subject.MP - this.damage
		})
	}
}

import { Effect, MagnitudeMap } from "classes";

/**
 * Example
 * ```ts
 * class DamageHP extends DamageStat<HasHP> {
 * 	constructor() {
 * 		super({
 * 			HP: 10
 * 		})
 * 	}
 * }
 * ```
 */
export abstract class DamageStat<StatInterface> extends Effect<StatInterface> {
	constructor(public readonly damageMap: MagnitudeMap<StatInterface>) {
		super(
			Reflect.ownKeys(damageMap).reduce(
				(modifiers, attr) =>
					(modifiers[attr] = subject => subject[attr] - damageMap[attr]),
				{}
			)
		)
	}
}

import { Effect } from './effect'
import { ModifierMap } from 'interfaces/modifier-map'
import { EquipSlots } from 'interfaces/can-equip'

export class ItemBase {
	public readonly value: number
	public readonly weight: number

	constructor(inheritFrom: any & ItemBase) {
		Object.assign(this, inheritFrom)
	}
}

export class ConsumableItem extends ItemBase {
	public readonly effect: Effect<any>
}

export class EquippableItem extends ItemBase {
	public readonly slot: keyof typeof EquipSlots
	public readonly modifiers: ModifierMap<any>
}

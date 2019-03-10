import { HasStats, StatMap } from "../interfaces/has-stats";
import { FixedStats, VariableStats } from "../lib/stats";

export abstract class Creature implements HasStats<FixedStats, VariableStats>{
	public readonly type: string
	public readonly stats: StatMap<FixedStats, VariableStats>
	
	constructor(implementor: new () => {
		stats: StatMap<FixedStats, VariableStats>
	}) {
		Object.assign(this, implementor)
		this.type = implementor.name
	}
}

import { HasStats, StatMap } from "../interfaces/has-stats";
import { FixedStats, VariableStats } from "../lib/stats";

export class Creature implements HasStats<FixedStats, VariableStats>{
	public readonly type: string
	public readonly stats: StatMap<FixedStats, VariableStats>
	
	constructor(template: {
		prototype: {
			stats: StatMap<FixedStats, VariableStats>
		}
	}) {
		Object.assign(this, template)
		this.type = template.prototype.constructor.name
	}
}

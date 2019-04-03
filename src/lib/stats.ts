import { StatMap } from "interfaces/has-stats";

export const FixedStats = {
	STR: 'strength',
	DEX: 'dexterity',
	CON: 'constitution',
	INT: 'intelligence',
	WIS: 'wisdom',
	CHA: 'charisma'
}

export type FixedStats = typeof FixedStats

export const VariableStats = {
	HP: 'hit points',
	MP: 'magic points',
	SP: 'stamina points'
}

export type VariableStats = typeof VariableStats

export const Stats = {
	...FixedStats,
	...VariableStats
}

export type Stats = StatMap<FixedStats, VariableStats>

import { KeyMap, AllowKeys } from "./key-map";

export type FixedStat = number
export type FixedStatMap<Stats> = KeyMap<Stats, number>
export interface HasFixedStats<Stats> {
	stats: FixedStatMap<Stats>
}

export interface VariableStat {
	max: number
	current?: number
}
export type VariableStatMap<Stats> = KeyMap<Stats, VariableStat>
export interface HasVariableStats<Stats> {
	stats: VariableStatMap<Stats>
}

export type StatMap<FixedStats, VariableStats> = FixedStatMap<FixedStats> & VariableStatMap<VariableStats>

export type StatValues<FixedStats, VariableStats> = AllowKeys<keyof FixedStats, FixedStat> & AllowKeys<keyof VariableStats, VariableStat>

export type HasStats<FixedStats, VariableStats> = { stats: StatMap<FixedStats, VariableStats> }
export type RequireStats<FixedStats, VariableStats> = HasStats<FixedStats, VariableStats>

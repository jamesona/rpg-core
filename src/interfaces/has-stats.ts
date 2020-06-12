import { KeyMap, AllowKeys } from './key-map'

/**
 * @typeparam Stats The names of constant stats (Strength, Dexterity, Intelligence)
 */
export type MapOfConstantStats<Stats> = KeyMap<Stats, number>

/**
 * @typeparam Stats The names of constant stats (Strength, Dexterity, Intelligence)
 */
export interface HasFixedStats<Stats> {
	stats: MapOfConstantStats<Stats>
}

/**
 * An object representing a stat whose value changes (HP, MP)
 */
export interface RangedStat {
	max: number
	current?: number
}

/**
 * @typeparam Stats The names of variable stats (MP, MP)
 */
export type MapOfRangedStats<Stats> = KeyMap<Stats, RangedStat>

/**
 * @typeparam Stats The names of variable stats (MP, MP)
 */
export interface HasRangedStats<Stats> {
	stats: MapOfRangedStats<Stats>
}

export type StatMap<ConstantStats, RangedStats> = MapOfConstantStats<
	ConstantStats
> &
	MapOfRangedStats<RangedStats>

export type StatValues<ConstantStats, RangedStats> = AllowKeys<
	keyof ConstantStats,
	RangedStat
> &
	AllowKeys<keyof RangedStats, RangedStat>

/**
 * @typeparam ConstantStats [[MapOfConstantStats]]
 * @typeparam RangedStats [[MapOfRangedStats]]
 */
export interface HasStats<ConstantStats, RangedStats> {
	stats: StatMap<ConstantStats, RangedStats>
}

export type RequireStats<ConstantStats, RangedStats> = HasStats<
	ConstantStats,
	RangedStats
>

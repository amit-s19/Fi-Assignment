export interface TrendingCardInterface {
    icon: string,
    title: string,
    price: string,
    deltaPercent: string,
    positiveDelta: boolean,
    tvl: string,
    popularPairs: Array<string>
}
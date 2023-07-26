export interface ISubscription{
    id: number,
    title: string,
    price: number,
    details: any
}

export interface ISubDetails{
    SubscriptionPeriod: number,
    AvailableCurrencies: string,
    AvailableExchanges: [string]
}
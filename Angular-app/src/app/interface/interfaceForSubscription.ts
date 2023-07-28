export interface ISubscription{
    id: number,
    title: string,
    price: number,
    SubscriptionPeriod: number,
    AvailableCurrencies: string,
    AvailableExchanges: [string]

}

// export interface ISubDetails{
//     SubscriptionPeriod: number,
//     AvailableCurrencies: string,
//     AvailableExchanges: [string]
// }
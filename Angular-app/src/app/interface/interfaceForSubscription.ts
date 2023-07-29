export interface ISubscription{
    id: number,
    title: string,
    price: number,
    details:{
    SubscriptionPeriod: number,
    AvailableCurrencies: string,
    AvailableExchanges: [string]
}

}

// export interface ISubDetails{
//     SubscriptionPeriod: number,
//     AvailableCurrencies: string,
//     AvailableExchanges: [string]
// }
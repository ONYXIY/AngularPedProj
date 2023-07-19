export interface IBybitInterfacePrice {
    retCode: number,
    retMsg: string,
        category: string,
        list: [{
            symbol: string,
            lastPrice: string
        }]
    
  }
  
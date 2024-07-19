//TODO change the currenct type here to INR
const CURRENCY_FORMATTER = new Intl.NumberFormat("en-US",{
    currency: "USD",
    style: "currency",
    minimumFractionDigits: 0,
})

//in simple terms the function Intl.NumberFormat formats with numbers and stuffs
//if 1000 is given as input it gives $1,000 as output
export function formatCurrency(amount: number){
    return CURRENCY_FORMATTER.format(amount)
}


const NUMBER_FORMATTER = new Intl.NumberFormat("en-US")

//if 1000 is given as input it gives 1,000 as output
export function formatNumber(number: number){
    return NUMBER_FORMATTER.format(number)
}
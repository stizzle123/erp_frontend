export const CURRENCIES = [
    { value: "0", label: "₦" },
    { value: "1", label: "$" },
    { value: "2", label: "£" },
    { value: "3", label: "€" }
]

export function getCurrency(value){
    const currency = CURRENCIES.filter((k)=>k.value==value);
    return currency[0].label;
}
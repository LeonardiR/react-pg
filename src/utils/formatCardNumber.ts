export function formatCardNumber (value: string) : string {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{4})(?=\d)/g, '$1 ')
        .slice(0, 19) 
}
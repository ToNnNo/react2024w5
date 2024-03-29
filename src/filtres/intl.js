export function formatNumber(value) {
    return new Intl.NumberFormat('fr-FR').format(value);
}

export function formatCurrency(value) {
    return new Intl.NumberFormat('fr', {
        style: "currency",
        currency: "EUR"
    }).format(value);
}
// Funciones del carrito que se pueden probar de forma independiente.
export function calcularTotales(subtotal, promocion = false) {
    const descuento = promocion ? Math.round(subtotal * 0.1) : 0;
    // Tasa del TP: se utiliza solo como simulación.
    const impuesto = Math.round((subtotal - descuento) * 0.085);
    return { subtotal, descuento, impuesto, total: subtotal - descuento + impuesto };
}

export function cantidadValida(cantidad) {
    return Number.isInteger(cantidad) && cantidad >= 1 && cantidad <= 99;
}

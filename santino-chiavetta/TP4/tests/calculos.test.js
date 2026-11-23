import test from 'node:test';
import assert from 'node:assert/strict';
import { calcularTotales, cantidadValida } from '../recursos/js/calculos.js';

test('calcularTotales sin descuento', () => {
    assert.deepEqual(calcularTotales(10000), {
        subtotal: 10000, descuento: 0, impuesto: 850, total: 10850
    });
});

test('calcularTotales con descuento del 10%', () => {
    assert.deepEqual(calcularTotales(10000, true), {
        subtotal: 10000, descuento: 1000, impuesto: 765, total: 9765
    });
});

test('cantidadValida acepta valores entre 1 y 99', () => {
    assert.equal(cantidadValida(1), true);
    assert.equal(cantidadValida(99), true);
    assert.equal(cantidadValida(3), true);
});

test('cantidadValida rechaza cantidades incorrectas', () => {
    assert.equal(cantidadValida(0), false);
    assert.equal(cantidadValida(100), false);
    assert.equal(cantidadValida(2.5), false);
    assert.equal(cantidadValida('2'), false);
});

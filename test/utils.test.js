const { gerarNumeroAleatorio, acharCaracter } = require('../lib/utils');

describe('Utils', () => {
    describe('gerarNumeroAleatorio', () => {
        test('fim nao pode ser negativo', () => {
            expect(gerarNumeroAleatorio(20, -5))
                .toBe(-1);
        });
    });

    describe('gerarNumeroAleatorio', () => {
        test('inicio nao pode ser negativo', () => {
            expect(gerarNumeroAleatorio(-5, 20))
                .toBe(-1);
        });
    });

    describe('gerarNumeroAleatorio', () => {
        test('inicio nao pode ser maior que o fim', () => {
            expect(gerarNumeroAleatorio(1, 0))
                .toBe(-1);
        });
    });

    describe('gerarNumeroAleatorio', () => {
        test('numero aleatorio gerado pelo metodo (maior que)', () => {
            expect(gerarNumeroAleatorio(0, 10))
                .toBeGreaterThanOrEqual(0);
        });
    });

    describe('gerarNumeroAleatorio', () => {
        test('numero aleatorio gerado pelo metodo (menor que)', () => {
            expect(gerarNumeroAleatorio(0, 10))
                .toBeLessThanOrEqual(10);
        });
    });

    describe('acharCaracter', () => {
        test('comprimento invalido', () => {
            expect(acharCaracter(-4, 'abcde', 'c'))
                .toBe('comprimento invalido');
        });
    }); 
    
    describe('acharCaracter', () => {
        test('comprimento fornecido diferente do comprimento real', () => {
            expect(acharCaracter(16, 'o cavalo da coroa', 'c'))
                .toBe('comprimento fornecido diferente do comprimento real');
        });
    }); 
    
    describe('acharCaracter', () => {
        test('caracter encontrado', () => {
            expect(acharCaracter(17, 'o cavalo da coroa', 'c'))
                .toBe(2);
        });
    }); 

    describe('acharCaracter', () => {
        test('caracter nao encontrado', () => {
            expect(acharCaracter(17, 'o cavalo da coroa', 'w'))
                .toBe('caracter nao esta presente na cadeia de string');
        });
    }); 
});
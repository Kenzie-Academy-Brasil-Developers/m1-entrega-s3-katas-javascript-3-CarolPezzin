const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1() {
    let numeros = []
    for (let i = 1; i <= 25; i++) {
        numeros.push(i)
    }
    return numeros
}
console.log(kata1())

function kata2() {
    let numeros = []
    for (let i = 25; i > 0; i--) {
        numeros.push(i)
    }
    return numeros
}
console.log(kata2())

function kata3() {
    let numeros = []
    for (let i = -1; i >= -25; i--) {
        numeros.push(i)
    }
    return numeros
}
console.log(kata3())

function kata4() {
    let numeros = []
    for (let i = -25; i <= -1; i++) {
        numeros.push(i)
    }
    return numeros
}
console.log(kata4())

function kata5() {
    let impares = []
    for (let i = -25; i <= 25; i++) {
        if (i % 2 !== 0) {
            impares.push(i)
        }
    }
    return impares
}
console.log(kata5())

function kata6() {
    let divisivel3 = []
    for (let i = 0; i < 100; i++) {
        if (i % 3 === 0) {
            divisivel3.push(i)
        }
    }
    return divisivel3
}
console.log(kata6())

function kata7() {
    let divisivel7 = []
    for (let i = 0; i < 100; i++) {
        if (i % 7 === 0) {
            divisivel7.push(i)
        }
    }
    return divisivel7
}
console.log(kata7())

function kata8() {
    let divisivel = []
    for (let i = 100; i >= 0; i--) {
        if (i % 3 === 0) {
            divisivel.push(i)
        }
        if (i % 7 === 0) {
            divisivel.push(i)
        }
    }
    return divisivel
}
console.log(kata8())

function kata9() {
    let impares = []
    for (let i = 5; i < 100; i++) {
        if (i % 5 === 0 && i % 2 !== 0) {
            impares.push(i)
        }
    }
    return impares
}
console.log(kata9())

function kata10() {
    return sampleArray
}
console.log(kata10())

function kata11() {
    let resultado = []
    for (let i = 0; i <= sampleArray.length; i++) {
        if (sampleArray[i] % 2 === 0) {
            resultado.push(sampleArray[i])
        }
    }
    return resultado
}
console.log(kata11())

function kata12() {
    let resultado = []
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 2 !== 0) {
            resultado.push(sampleArray[i])
        }
    }
    return resultado
}
console.log(kata12())

function kata13() {
    let resultado = []
    for (let i = 0; i <= sampleArray.length; i++) {
        if (sampleArray[i] % 8 === 0) {
            resultado.push(sampleArray[i])
        }
    }
    return resultado
}
console.log(kata13())

function kata14() {

}
console.log(kata14())

function kata15() {
    let resultado = []
    let result = 0
    for (let i = 1; i <= 20; i++) {
        resultado.push(i)
    }
    for (let i = 0; i < resultado.length; i++) {
        result += resultado[i]
    }

    return result
}
console.log(kata15())

function kata16() {
    let soma = 0
    for (let i = 0; i < sampleArray.length; i++) {
        soma += sampleArray[i]
    }
    return soma
}
console.log(kata16())

function kata17() {
    let min = Math.min(...sampleArray)
    return min
}
console.log(kata17())

function kata18() {
    let max = Math.max(...sampleArray)
    return max
}
console.log(kata18())

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
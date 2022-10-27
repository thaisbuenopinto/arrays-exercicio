const numeros = [50, 16, 25, 8, 14]
const palavras = ["morango", "abacaxi", "limao"]
const mistura = [25, "bolacha", false]
console.log(numeros, palavras, mistura)
console.log(numeros.length, palavras.length, mistura.length)
console.log(numeros[0], palavras[1], mistura[2])
console.log(numeros.includes(16))
console.log(mistura.includes("amora"))
const numerosCopia = [50, 16, 25, 8, 14]
const palavrasCopia = ["morango", "abacaxi", "limao"]
const misturaCopia = [25, "bolacha", false]
numeros.push(36)
console.log(numeros)
console.log(numerosCopia)
palavras.pop()
console.log(palavras)
console.log(palavrasCopia)
mistura.splice(1,1)
console.log(mistura)
console.log(misturaCopia)




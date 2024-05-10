let num = [5, 8, 2, 9, 3]

console.log(num)
console.log(`Nosso vetor é o: ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`O vetor ordenado é ${num.sort()}`)
num.push(4)
console.log(`Adicionando o número 4 ao vetor fica: ${num}`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log('Valor não encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}
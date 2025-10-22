// - promise
const promessa = Promise.resolve(5+5)
console.log("Algun código")

promessa.then((value) => {
    console.log(`A soma é ${value}`);
})
.then((value) => value - 1)
.then((value) => console.log(`Agora é ${value}`));

console.log("Outro código")

// - falha na promise 
Promise.resolve(4 * "asd")
.then((n) => {
    if(Number.isNaN(n)) {
        throw new Error("Valores invalidos")
    }
})
.catch((err) => console.log(`Um erro ocorreu: ${err}`))

// rejeição 
function checkNumber(n) {
    return new Promise((resolve, reject) =>{

        if(n > 10) {
            resolve(`O numero é maior que 10`)
        } else {
            reject(new Error("Numero muito baixo"));
        }
    })
}

const a = checkNumber(20);

const b = checkNumber(10);

a.then((v) => console.log`O resultado é ${v}`).catch((err) => console.log(`Um erro ocorreu: ${err}`)
);

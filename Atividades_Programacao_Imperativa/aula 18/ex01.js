function loopDePares(a,b) {

    for (let i =  1; i <= 100; i++) {
        if (i % a === 0 && i % b !== 0){
            console.log(" O numero "+ i +" É impar")
        }
        else if (i % b === 0 && i % a !==0){
            console.log(" O numero "+ i + " É par")
        }
    }
}

loopDePares (6,1)
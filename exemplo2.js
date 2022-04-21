// 2 -	Imprima na tela a partir de 20 e depois de 10 em 10 até o 100, 
// mas em vez dos números 60 e 90 imprima a palavra "CONTINUE".

for (let contador = 20 ; contador<= 100; contador +=10) {
    if(contador ===60 || contador ===90){
        console.log('continue')
    }
    else{
        console.log(contador)
    }
}
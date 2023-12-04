let rank = winBalance(1, 1)



switch(true){
case rank < 10:
        console.log("O Herói tem saldo de " + rank + " e está no nível de Ferro")
break

case rank <= 20:
        console.log("O Herói tem saldo de " + rank + " e está no nível de Bronze")
break

case rank <= 50:
        console.log("O Herói tem saldo de " + rank + " e está no nível de Prata")
break

case rank <= 80:
        console.log("O Herói tem saldo de " + rank + " e está no nível de Ouro")
break

case rank <= 90:
        console.log("O Herói tem saldo de " + rank + " e está no nível de Diamante")
break

case rank <= 100:
        console.log("O Herói tem saldo de " + rank + " e está no nível de Lendário")
break

case rank > 100:
        console.log("O Herói tem saldo de " + rank + " e está no nível de Imortal")
break
}


function winBalance(win, lose){
let MMR = win - lose
return MMR
}
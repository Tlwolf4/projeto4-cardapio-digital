// CARDAPIO
 
//let haburguer = 1
//let pizza = 2
//let refrigerante = 3
//let fritas = 4

//1 = R$20
//2 = R$35
//3 = R$5
//4 = R$12

alert(`Olá bem vindo ao cardapio digital
         aperte "OK" para continuar`)

let nome = prompt("Digite seu nome para regitro")


let estudante = prompt(`Voce é estudante? (sim/não)`)
if(estudante == "sim")
    alert("Desconto de 10%")
let  prato1 = parseInt(prompt(`Menu:
   Hanbúrguer- R$ 20
   Pizza- R$ 35  
   refrigerante- R$ 5
   batatas fritas - R$ 12
   
   Escolha o seu primeiro prato! `))
    
let  prato2 = parseInt(prompt(`Menu:
   Hanbúrguer- R$ 20
   Pizza- R$ 35  
   refrigerante- R$ 5
   batatas fritas - R$ 12
   
   Escolha o seu segundo prato! `))

   let  prato3 = parseInt(prompt(`Menu:
   Hanbúrguer- R$ 20
   Pizza- R$ 35  
   refrigerante- R$ 5
   batatas fritas - R$ 12
   
   Escolha o seu terceiro prato! `))

let precoItem1 = 0
switch(prato1) {
case 1:
    precoitem1 = 20
    alert("Hamburguer- R$ 20  ")
    break
case 2:
    precoItem1 = 35
    alert("Pizza- R$ 35")
    break
case 3 :
    precoItem1 = 5
    alert("Refrigrante- R$ 5")
    break
case 4 :
    precoItem1 = 12
    alert("Batatas Fritas- R$ 12")
}
let precoItem2 = 0
switch(prato2) {
case 1: 
    precoItem2 = 20
    alert("Hamburguer- R$ 20  ")
    break
case 2:
    precoItem2 = 35
    alert("Pizza- R$ 35")
    break
case 3 :
    precoItem2 = 5 
    alert("Refrigrante- R$ 5")
    break
case 4 :
    precoItem2 = 12
    alert("Batatas Fritas- R$ 12")
}
let precoItem3 = 0
switch(prato3) {
case 1:
    precoItem3 = 20 
    alert("Hamburguer- R$ 20  ")
    break
case 2:
    precoItem3 = 35
    alert("Pizza- R$ 35")
    break
case 3 :
    precoItem3 = 5
    alert("Refrigrante- R$ 5")
    break
case 4 :
    precoItem3 = 12
    alert("Batatas Fritas- R$ 12")
    break
} 
 
let total = precoItem1 + precoItem2 + precoItem3

alert(`Tudo deu ${total}`)

if(estudante == sim) { 

} else(estudante == não)

  let desconto = (`${total} * 0.2 `)
  
alert(`Com desconto fica ${desconto}`) 

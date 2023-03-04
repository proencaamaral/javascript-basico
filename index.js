//  como funciona a estrutura de repetição FOR
//  for (inicial; condição; incremento){
//      instruções
//  }

for (let contador = 0; contador < 3; contador++){
    console.log("sucesso !")
}

/* houveram 3 alterações

1 
contador = 0 
contador > 3 ?? true
"sucesso"

2
contador ++
contador = 1 
contador > 3 ?? true
"sucesso"

3
contador ++
contador = 2 
contador > 3 ?? true
"sucesso"

4
contador ++
contador = 3 
contador > 3 ?? false
programa parou

*/

let states = ["São Paulo", "Rio de Janeiro", "Bahia"];

for (let i = 0; i < states.length; i++){
    console.log(states[i])
}
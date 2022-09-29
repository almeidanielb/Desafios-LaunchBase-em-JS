/*==============================================================

Cálculo de IMC
Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.

Comece criando constantes para armazenar o nome, peso, altura e sexo de uma pessoa, por exemplo:

const nome = "Carlos";
const peso = 84;
const altura = 1.88;
A partir desses dados armazene em uma constante chamada imc o cálculo do índice de massa corporal definido pela fórmula abaixo:

peso / (altura * altura);
Baseado no valor obtido através desse cálculo exiba as seguintes mensagens:

SE o IMC maior ou igual a 30: Carlos você está acima do peso;
SE o IMC menor que 29.9: Carlos você não está acima do peso;

==============================================================*/


const nome = 'Daniel'
const peso = 62
const altura = 1.84

const imc = (peso / (altura * altura))


if(imc < 17.3 || imc > 25.5) {
    console.log('Você não está no peso ideal')
} else {
    console.log('Você está no peso ideal')
}


/*==============================================================

Cálculo de aposentadoria
Crie um programa para calcular a aposentadoria de uma pessoa.

Obs.: Esse cálculo é fictício, dentro da aposentadoria existem muitos outros fatores para serem levados em conta :)

Comece criando constantes para armazenar nome, sexo, idade e contribuicao(em anos), por exemplo:

const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;
Baseado nos valores acima utilize as fórmulas a seguir para calcular se a pessoa está apta ou não para se aposentar e no fim imprima uma mensagem em tela.

O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma;
Com base nas regras acima imprima na tela as mensagens:

SE a pessoa estiver aposentada: Silvana, você pode se aposentar!;
SE a pessoa NÃO estiver aposentada: Silvana, você ainda não pode se aposentar!;
Dica: Você pode unir duas condições, veja o exemplo abaixo

if (condicao1) {
  if (condicao2) {
    // Condição 1 e 2 passaram
  } else {
    // Condição 1 passou, porém condição 2 não passou
  }
} else {
  // Condição 1 não passou
}

==============================================================*/

const nome2 = 'Emanuel'
const sexo = 'M'
const idade = 41
const contribuicao = 23

const calccontribuicao = idade + contribuicao

const mpdAposentar = sexo == 'M' && contribuicao > 35 && calccontribuicao >= 95
const fpdAposentar = sexo == 'F' && contribuicao > 30 && calccontribuicao >= 85

if(mpdAposentar || fpdAposentar) {
    console.log(`${nome2}, você pode se aposentar!`)
} else {
    console.log(`${nome2}, você não pode se aposentar!`)
}

var teste = mpdAposentar || fpdAposentar ? 18:20

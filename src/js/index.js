// alert('Olá');  --> alert funciona para dar um alerta no site usanso um pop up

/*const itemCiclope = document.getElementById('ciclope'); // essa é a LI  | Let --> podemos smpre modificar o valor  Cosnt não
console.log(itemCiclope)

 const itemJean = document.getElementById('jean-grey');
console.log(itemJean)

const itemLince = document.getElementById('lince-negra');
console.log(itemLince)

const itemTempestade = document.getElementById('tempestade');
console.log(itemCiclope)

const itemVampira = document.getElementById('vampira');
console.log(itemCiclope)

const itemWolverine = document.getElementById('wolverine');
console.log(itemCiclope)

const itemNoturno = document.getElementById('noturno');
console.log(itemCiclope)

const itemMagneto = document.getElementById('magneto');
console.log(itemCiclope)

 NÃO FAZER ISSO POR QUE PODE SER QUE A QUANTIDADE AUMENTE  */

const personagem = document.querySelectorAll('.personagens');
// console.log(personagens)
  
personagem.forEach(personagens => {
    personagens.addEventListener('mouseenter', () => {
        
        if(window.innerWidth <450){
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        // passo 3
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado')

        personagens.classList.add('selecionado');

        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

        const idPersonagem = personagens.attributes.id.value;
        imagemPersonagemGrande.src = `./src/img/card-${idPersonagem}.png`;

        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagens.getAttribute('data-name');

        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagens.getAttribute('data-description');

    });
})
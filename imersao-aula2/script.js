const pedra = document.getElementById('pedra')
const papel = document.getElementById('papel')
const tesoura = document.getElementById('tesoura')
const img = document.getElementById('dinamic-img')
const overlay = document.getElementById('overlay')
const gameRes = document.getElementById('game-result')
const resGon = document.getElementById('resGon')
const resKill = document.getElementById('resKill')

//TROCAR OS CONSOLES POR UM OVERLAY DINAMICO QUE MOSTRA SE VOCê VENCEU OU PERDEU, JUNTO DOS RESULTADOS

function play(){
    const botplay = Math.floor(Math.random() * 3)+1;
     if(pedra.checked){
        //VALOR DO PEDRA CONVERTIDO PARA NUMERICO ATRIBUIDO A VARIAVEL
        escolha = Number(pedra.value)

        //INICIO DAS CONDICIONAIS
        if(escolha == botplay){
            //EMPATE DO PEDRA
            img.src=("https://media2.giphy.com/media/4SdFG1BbqiJEI/200.webp?cid=790b7611bltq10zugmudevs7e449uupfouryrj5qnzp0ihq7&ep=v1_gifs_search&rid=200.webp&ct=g");

            overlay.classList.add('active-overlay')
            gameRes.innerText = 'Empate!!'
            resGon.innerText = 'Gon escolheu: Pedra'
            resKill.innerText = 'Killua escolheu: Pedra' 

        }else if((escolha + botplay === 3)){
            //DERROTA DO PEDRA
            img.src=("https://media4.giphy.com/media/iM80c81yrXJvCxS3s7/200.webp?cid=790b76110jd6932gcd6m2y2zlo2uopiisobg0n1rkz1in0e5&ep=v1_gifs_search&rid=200.webp&ct=g")

            overlay.classList.add('active-overlay')
            gameRes.innerText = 'Você Perdeu!!'
            resGon.innerText = 'Gon escolheu: Pedra'
            resKill.innerText = 'Killua escolheu: Papel'

        }else if((escolha + botplay === 4)){
            //VITORIA DO PEDRA
            img.src=("https://media.tenor.com/FZx3TFExGOIAAAAM/gon-smile.gif")

            overlay.classList.add('active-overlay')
            gameRes.innerText = 'Você Venceu!!'
            resGon.innerText = 'Gon escolheu: Pedra'
            resKill.innerText = 'Killua escolheu: Tesoura'

        }//FIM DA CONDICIONAL PEDRA

     }else if(papel.checked){
        //VALOR DO PAPEL CONVERTIDO PARA NUMERICO E ATRIBUIDO A VARIAVEL
        escolha = Number(papel.value)

        //INICIO DAS CONDICIONAIS
        if(escolha == botplay){
            //EMPATE DO PAPEL
            img.src=("https://media2.giphy.com/media/4SdFG1BbqiJEI/200.webp?cid=790b7611bltq10zugmudevs7e449uupfouryrj5qnzp0ihq7&ep=v1_gifs_search&rid=200.webp&ct=g");

            overlay.classList.add('active-overlay')
            gameRes.innerText = 'Empate!!'
            resGon.innerText = 'Gon escolheu: Papel'
            resKill.innerText = 'Killua escolheu: Papel'

        }else if(escolha < botplay){
            //DERROTA DO PAPEL
            img.src=("https://media4.giphy.com/media/iM80c81yrXJvCxS3s7/200.webp?cid=790b76110jd6932gcd6m2y2zlo2uopiisobg0n1rkz1in0e5&ep=v1_gifs_search&rid=200.webp&ct=g")

            overlay.classList.add('active-overlay')
            gameRes.innerText = 'Você Perdeu!!'
            resGon.innerText = 'Gon escolheu: Papel'
            resKill.innerText = 'Killua escolheu: Tesoura'

        }else if(escolha > botplay){
            //VITORIA DO PAPEL
            img.src=("https://media.tenor.com/FZx3TFExGOIAAAAM/gon-smile.gif")

            overlay.classList.add('active-overlay')
            gameRes.innerText = 'Você Venceu!!'
            resGon.innerText = 'Gon escolheu: Papel'
            resKill.innerText = 'Killua escolheu: Pedra'

        }//FIM DA CONDICIONAL DO PAPEL

     }else if(tesoura.checked){
        //VALOR DA TESOURA CONVERTIDO PARA NUMERICO ATRIBUIDO A VARIAVEL
        escolha = Number(tesoura.value)
        //INICIO DAS CONDICIONAIS
        if(escolha == botplay){
            //EMPATE DA TESOURA
            img.src=("https://media2.giphy.com/media/4SdFG1BbqiJEI/200.webp?cid=790b7611bltq10zugmudevs7e449uupfouryrj5qnzp0ihq7&ep=v1_gifs_search&rid=200.webp&ct=g");

            overlay.classList.add('active-overlay')
            gameRes.innerText = 'Empate!!'
            resGon.innerText = 'Gon escolheu: Tesoura'
            resKill.innerText = 'Killua escolheu: Tesoura'

        }else if(escolha + botplay === 5){
            //VITORIA TESOURA
            img.src=("https://media.tenor.com/FZx3TFExGOIAAAAM/gon-smile.gif")

            overlay.classList.add('active-overlay')
            gameRes.innerText = 'Você Venceu!!'
            resGon.innerText = 'Gon escolheu: Tesoura'
            resKill.innerText = 'Killua escolheu: Papel'

        }else if(escolha + botplay === 4){
            //DERROTA DA TESOURA
            img.src=("https://media4.giphy.com/media/iM80c81yrXJvCxS3s7/200.webp?cid=790b76110jd6932gcd6m2y2zlo2uopiisobg0n1rkz1in0e5&ep=v1_gifs_search&rid=200.webp&ct=g")

            overlay.classList.add('active-overlay')
            gameRes.innerText = 'Você Perdeu!!'
            resGon.innerText = 'Gon escolheu: Tesoura'
            resKill.innerText = 'Killua escolheu: Pedra'

        }//FIM DA CONDICIONAL DA TESOURA

     }//FIM DE TODAS AS CONDICIONAIS

    
}

function reset(){
    overlay.classList.remove('active-overlay')
    resGon.innerText =''
    resKill.innerText =''
}
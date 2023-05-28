let nivel_water=document.querySelector('.nivel_water_intern')
let mensage_for_user=document.querySelector('p')

let acumulative=0

function clicar() {
    let cup = 250;
    let bottom = 2000;
    let res1 = (cup / bottom) * 100;
    acumulative +=res1;
    
    if (acumulative<=100) {
    let porcent=document.querySelector('h5')
    porcent.innerHTML=`<h5>${acumulative}%</h5>`;
    }

    /*Nivel of Water*/
    if (acumulative==12.5) {
        nivel_water.style.height='12.5%';
        mensage_for_user.innerHTML='<p>Você bebeu pouca água. Tente beber mais!</p>'
    }
    else if (acumulative==25) {
        nivel_water.style.height='25%';
        mensage_for_user.innerHTML='<p>Você está no caminho certo, mas pode beber um pouco mais.</p>'
    }
    
    else if (acumulative==37.5) {
        nivel_water.style.height='37.5%';
    }
    else if (acumulative==50) {
        nivel_water.style.height='50%';
        mensage_for_user.innerHTML='<p>Ótimo! Você está hidratado(a). Continue assim!</p>'
    }
    else if (acumulative==62.5) {
        nivel_water.style.height='62.5%';
    }
    else if (acumulative==75) {
        nivel_water.style.height='75%';
        mensage_for_user.innerHTML='<p>Você já bebeu bastante água hoje. Parabéns!</p>'
    }
    else if (acumulative==87.5) {
        nivel_water.style.height='87.5%';
    }
    else if (acumulative==100) {
        nivel_water.style.height='100%';
        mensage_for_user.innerHTML='<p>Você conseguiu vencer o desafio estamos orgulhos de você!</p>'
    }
}
let acumulative=0

function clicar() {
    let cup = 250;
    let bottom = 2000;
    let res1 = (cup / bottom) * 100;

    while (res1 <= 100) {
        res1 = (cup / bottom) * 100; 
        acumulative+=res1;
        cup += 250; 

        let porcent = document.querySelector('h5');
        porcent.innerHTML = `<h5>${acumulative}%</h5>`;
    }
}
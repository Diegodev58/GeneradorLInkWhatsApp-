const i = document.getElementsByClassName('demo')[0];

function general1(){
    let concatenar = ''
    const ini = 'https://wa.me/'
    const mensaje = '?text='
    const n = document.forms['Formulario']['numero'].value;
    const t = document.forms['Formulario']['texto'].value;
    if(n.length > 11 ){
        concatenar = ini+'+'+n+mensaje+t
        document.getElementsByClassName('demo')[0].innerHTML = `<a href="${concatenar}" target="_blank">${concatenar}</a>`;
    }else{
        alert('Numero de Celular no es valido: Ejemplo 584240000000')  }
}



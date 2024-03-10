
const horaSlider = document.getElementById('hora-slider');
const imgManha = document.querySelector('.manha');
const imgTarde = document.querySelector('.tarde');
const imgNoite = document.querySelector('.noite');
const imgMadrugada = document.querySelector ('.madrugada');
const txtManha = document.querySelector('.txtmanha');
const txtTarde = document.querySelector('.txttarde');
const txtNoite = document.querySelector('.txtnoite');
const txtMadrugada = document.querySelector('.txtmadrugada');
const horaDisplay = document.getElementById('hora-display');


horaSlider.addEventListener('input', function() {
    const hora = parseInt(this.value);

    if (hora >= 23 && hora < 24) {
        imgManha.style.display = 'none';
        imgTarde.style.display = 'none';
        imgNoite.style.display = 'none';
        imgMadrugada.style.display = 'block';
        txtTarde.style.display = 'none';
        txtManha.style.display = 'none';
        txtNoite.style.display = 'none';
        txtMadrugada.style.display = 'block';
    } else if (hora >= 0 && hora < 5) {
        imgManha.style.display = 'none';
        imgTarde.style.display = 'none';
        imgNoite.style.display = 'none';
        imgMadrugada.style.display = 'block';
        txtTarde.style.display = 'none';
        txtManha.style.display = 'none';
        txtNoite.style.display = 'none';
        txtMadrugada.style.display = 'block';
    } else if (hora >= 5 && hora < 12) {
        imgManha.style.display = 'block';
        imgTarde.style.display = 'none';
        imgNoite.style.display = 'none';
        imgMadrugada.style.display = 'none';
        txtTarde.style.display = 'none';
        txtManha.style.display = 'block';
        txtNoite.style.display = 'none';
        txtMadrugada.style.display = 'none';
    } else if (hora >= 12 && hora < 19) {
        imgManha.style.display = 'none';
        imgTarde.style.display = 'block';
        imgNoite.style.display = 'none';
        imgMadrugada.style.display = 'none';
        txtManha.style.display = 'none';
        txtTarde.style.display = 'block';
        txtNoite.style.display = 'none';
        txtMadrugada.style.display = 'none';
    } else if (hora >= 19 && hora < 22) {
        imgManha.style.display = 'none';
        imgTarde.style.display = 'none';
        imgNoite.style.display = 'block';
        imgMadrugada.style.display = 'none';
        txtManha.style.display = 'none';
        txtTarde.style.display = 'none';
        txtNoite.style.display = 'block';
        txtMadrugada.style.display = 'none';
    }
});

horaSlider.addEventListener('input', function() {
    const horaSelecionada = parseInt(this.value);
    const horaFormatada = formatarHora(horaSelecionada);
    horaDisplay.textContent = horaFormatada;
});

horaSlider.addEventListener('input', function() {
    let horaSelecionada = parseInt(this.value);
    
    // Se o valor for 24, definir para 0
    if (horaSelecionada === 24) {
        horaSelecionada = 0;
        this.value = 0;
    }

    const horaFormatada = formatarHora(horaSelecionada);
    horaDisplay.textContent = horaFormatada;
});

function formatarHora(hora) {
    const horas = Math.floor(hora);
    const minutos = Math.round((hora - horas) * 60);
    const horasFormatadas = horas < 10 ? '0' + horas : horas;
    const minutosFormatados = minutos < 10 ? '0' + minutos : minutos;
    return `${horasFormatadas}:${minutosFormatados}`;
}



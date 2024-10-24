function atualizarRelogio() {
    const agora = new Date();
    
    // Obter horas, minutos e segundos
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');

    // Atualizar o conteúdo HTML com as horas, minutos e segundos
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;
}

// Chamar a função a cada segundo para atualizar o relógio
setInterval(atualizarRelogio, 1000);

// Chamar a função imediatamente para mostrar o relógio sem atraso
atualizarRelogio();

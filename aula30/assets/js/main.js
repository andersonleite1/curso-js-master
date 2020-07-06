function meuEscopo(){
    const data = document.querySelector('.exibe-data');

    const dataHoje = new Date();
    const dataBrasil = formatarData(dataHoje);
    const horaAgora = formatarHora(dataHoje);

    data.innerHTML = `<p>${dataBrasil}</p><p>Hora: ${horaAgora}</p>`;

    function zeroAEsquerda(num){
        return num >= 10 ? num : `0${num}`;
    }

    function formatarData(data){
        const diaSem = diaSemana(data.getDay());
        const dia = zeroAEsquerda(data.getDate());
        const mes = mesAno(data.getMonth());
        const ano = zeroAEsquerda(data.getFullYear());
        
        return `${diaSem}, ${dia} de ${mes} de ${ano}`;

    }

    function formatarHora(data){
        const hora = zeroAEsquerda(data.getHours());
        const min = zeroAEsquerda(data.getMinutes());
        const seg = zeroAEsquerda(data.getSeconds());

        return `${hora}:${min}:${seg}`;
    }

    function diaSemana(dia){
        switch(dia){
            case 0:
                return 'domingo';
            case 1:
                return 'segunda-feira';
            case 2:
                return 'terça-feira';
            case 3:
                return 'quarta-feira';
            case 4:
                return 'quinbta-feira';
            case 5:
                return 'sexta-feira';
            case 6:
                return 'sábado';
            default:
                return '';
        }
    }

    function mesAno(mes){
        switch(mes){
            case 0:
                return 'janeiro';
            case 1:
                return 'fevereiro';
            case 2:
                return 'março';
            case 3:
                return 'abril';
            case 4:
                return 'maio';
            case 5:
                return 'junho';
            case 6:
                return 'julho';
            case 7:
                return 'agosto';
            case 8:
                return 'setembro';
            case 9:
                return 'outubro';
            case 10:
                return 'novembro';
            case 11:
                return 'dezembro';
            default:
                return '';
        }
    }

}

meuEscopo();

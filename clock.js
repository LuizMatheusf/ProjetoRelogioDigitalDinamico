let main = document.querySelector('main'),
icons = document.querySelector('.icons');

// Código para Light & Dark mode
 
icons.onclick = ()=>{
    main.classList.toggle('dark');
}

setInterval(()=>{

    // Sicronizando o Relógio

    let date = new Date(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds();
    
    let d;
    d = hour < 12 ? "AM" : "PM"; // Se as horas for menor que 12 será "AM" e se maior "PM"
    hour = hour > 12 ? hour - 12 : hour; // Se as horas for maior que 12 , subtrair-se-á 12
    hour = hour == 0 ? hour = 12 : hour; // Se as horas for igual a 0, então será igual a 12
    
    // Adicionando 0 antes dos valores quando houver somente um algarismo
    
    hour = hour < 10 ? '0' + hour : hour;
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;
    
    document.querySelector('.hour_num').innerText = hour;
    document.querySelector('.min_num').innerText = min;
    document.querySelector('.sec_num').innerText = sec;
    document.querySelector('.am_pm').innerText = d;

}, 1000); // 1000 milisegundos = 1s
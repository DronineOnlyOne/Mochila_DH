function escreverHTML(titulo,texto) {
    const corpo = document.getElementById('corpo')
    const meuTemplate = `<h1>${titulo}</h1>
    <p>${texto}</p>`
    corpo.innerHTML += meuTemplate;
};

escreverHTML('Ok, vamos testar', 'ISSO TUDO É SO UM TEXTO ALEATORIO PRA UM TESTE DE ESTUDO NAO LEVE A SERIO')
escreverHTML('começando por', 'se tudo fosse facil nada seria dificil e se tudo nao fosse dificil nada seria facil')
escreverHTML('Pq hutao eh a melhor personagem de Genshin?','YAHOOOOOOOOOO, YO?YOYOYOYO?, * musquinha dos Hilichrul')
escreverHTML('Por favor acaba', 'por favor acaba por favor acaba por favor acaba por favor acaba por favor acaba ')
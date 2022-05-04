console.log('JOGO EM DESENVOLVIMENTO');

const sprites = new Image();
sprites.src = './sprites.png';

const canvas = document.querySelector ('canvas');
const contexto = canvas.getContext ('2d');



contexto.drawImage(
    sprites,
     0, 0, //sprite X, sprite Y
     33, 24, //tamanho do recorte no sprites
     10, 50, 
     33, 24,
     );


     function loop(){ 

        requestAnimationFrame(loop);
     }

     loop();
console.log('JOGO EM DESENVOLVIMENTO');


let frames = 0;

const som_HIT = new Audio();
som_HIT.src = './efeitos/hit.wav';

const sprites = new Image();
sprites.src = './sprites.png';

const canvas = document.querySelector ('canvas');
const contexto = canvas.getContext ('2d');

// plano de fundo
const planoDeFundo = {
  spriteX: 390,
  spriteY: 0,
  largura: 275,
  altura: 204,
  x: 0,
  y: canvas.height - 204,
  desenha() {
    contexto.fillStyle = '#70c5ce';
    contexto.fillRect(0,0, canvas.width, canvas.height)

    contexto.drawImage(
      sprites,
      planoDeFundo.spriteX, planoDeFundo.spriteY,
      planoDeFundo.largura, planoDeFundo.altura,
      planoDeFundo.x, planoDeFundo.y,
      planoDeFundo.largura, planoDeFundo.altura,
    );

    contexto.drawImage(
      sprites,
      planoDeFundo.spriteX, planoDeFundo.spriteY,
      planoDeFundo.largura, planoDeFundo.altura,
      (planoDeFundo.x + planoDeFundo.largura), planoDeFundo.y,
      planoDeFundo.largura, planoDeFundo.altura,
    );
  },
};

// chao

function criaChao(){
const chao = {
    spriteX: 0,
    spriteY: 610,
    largura: 224,
    altura: 112,
    x: 0,
    y: canvas.height - 112,
    atualiza(){
      const movimentoDoChao = 1;
      const repeteEm = chao.largura / 2;
      const movimentacao = chao.x - movimentoDoChao;

      //console.log('[chao.x]', chao.x);
      //console.log('[repeteEm]', repeteEm);
      //console.log('[movimentacao'], movimentacao % repeteEm);


      chao.x = chao.x - movimentoDoChao;
    },
    desenha() {
      contexto.drawImage(
        sprites,
        chao.spriteX, chao.spriteY,
        chao.largura, chao.altura,
        chao.x, chao.y,
        chao.largura, chao.altura,
      );
  
      contexto.drawImage(
        sprites,
        chao.spriteX, chao.spriteY,
        chao.largura, chao.altura,
        (chao.x + chao.largura), chao.y,
        chao.largura, chao.altura,
      );
    },

}

function fazColisao(flappyBird, chao) {
const flappyBirdY = flappyBird.y + flappyBird.altura
const chaoY = chao.y;

if(flappyBirdY >= chao.y) {

  return true;
}

return false;
}
}

// flappybird
function criaFlappyBird(){
  const flappyBird = {
    spriteX: 0,
    spriteY: 0,
    largura: 33,
    altura: 24,
    x: 10,
    y: 50,
    pulo: 4.6,
    pula(){
    console.log('devopular');
    flappyBird.y = - flappyBird.pulo;
    },
    gravidade: 0.25,
    velocidade: 0,
    atualiza(){
      if(fazColisao(flappyBird, globais.chao)) { 
        console.log('fezcolisao');
        som_HIT.play();

        setTimeout(()=>{

        }, 500);
        mudaParaTela(telas.INICIO);
        return;
    
      }
        flappyBird.velocidade = flappyBird.velocidade + flappyBird.gravidade;
        flappyBird.y = flappyBird.y + flappyBird.velocidade;
    },

    movimentos:[
      { spriteX: 0, spriteY: 0, }, //asa pra cima
      { spriteX: 0, spriteY: 26, }, //asa pro meio
      { spriteX: 0, spriteY: 52, } //asa pra baixo
    ],
    
    frameAtual: 0, 
    atualizaOFrameAtual() {
      const intervaloDeFrames = 10;
      const passouOIntervalo = frames % intervaloDeFrames

      if (passouOIntervalo){
        const baseDoIncremento = 0;
        const incremento = baseDoIncremento + flappyBird.frameAtual;
        const baseRepeticao = flappyBird.movimentos.length;
        flappyBird.frameAtual = incremento % baseRepeticao;
      }


    },
    desenha(){
      flappyBird.atualizaOFrameAtual();
      const { spriteX, spriteY } = flappyBird.movimentos[flappyBird.frameAtual];
        contexto.drawImage(
            sprites,
            spriteX, spriteY, //sprite X, sprite Y
            flappyBird.largura,flappyBird.altura,  //tamanho do recorte no sprites
            flappyBird.x, flappyBird.y,
            flappyBird.largura, flappyBird.altura,
         );
        
      } 
    };
    return flappyBird;

};

//mensagemGetReady
const mensagemGetReady = {
  sX: 134,
  sY: 0,
  w: 174,
  h: 152,
  x: (canvas.width / 2) - 174 / 2,
  y: 50,
  desenha() {
    contexto.drawImage(
      sprites,
      mensagemGetReady.sX, mensagemGetReady.sY,
      mensagemGetReady.w, mensagemGetReady.h,
      mensagemGetReady.x, mensagemGetReady.y,
      mensagemGetReady.w, mensagemGetReady.h
    );
  }
}

function criaCanos(){

  const canos = {
    largura: 52,
    altura: 400,
    chao: {
      spriteX: 0, 
      spriteY: 169,
    },

    ceu: {
      spriteX: 52,
      spriteY: 169,
    },

    espaco: 80,
    desenha() {

      canos.pares.forEach(function(par){
        const yRandom = par.y;
        const espacamentoEntreCanos = 90;
  
        const canoCeuX = par.x;
        const canoCeuY = yRandom;  
      })
        // cano do ceu
      contexto.drawImage(
        sprites,
        canos.ceu.spriteX, canos.ceu.spriteY,
        canos.largura, canos.altura,
        canoCeuX, canoCeuY,
        canos.largura, canos.altura,
      )

        //cano do chao
        const canoChaoX = par.x;
        const canoChaoy = canos.altura + espacamentoEntreCanos + yRandom;
        contexto.drawImage(
          sprites,
          canos.ceu.spriteX, canos.ceu.spriteY,
          canos.largura, canos.altura,
          canoCeuX, canoCeuY,
          canos.largura, canos.altura,
        ) 

       }, 
       pares: [
        {
          x:  100,
          y:  -150 Math.random(),
        }],
       atualiza(){
        const passou100Frames = frames % 100 ===0;
        if (passou100Frames) {


        }





       }
}
return canos;
}
//
// TELAS DO JOGO
//

const globais = {}
let telaAtiva = {};
function mudaParaTela(novaTela){
  telaAtiva = novaTela;

  if(telaAtiva.inicializa){
    telaAtiva.inicializa();

  }
}

const Telas = {
      INICIO: {
        inicializa() {
          globais.flappyBird = criaFlappyBird();
          globais.chao = criaChao();
          globais.canos = criaCanos();


        },
        desenha(){
          planoDeFundo.desenha();
          globais.chao.desenha();
          globais.flappyBird.desenha();
          globais.canos.desenha();
          // mensagemGetReady.desenha();
        },
      click(){
        mudaParaTela(Telas.JOGO);
      },
      atualiza(){
        globais.chao.atualiza();
        globais.canos.atualiza();

      }
    }
}

Telas.JOGO = {
  desenha(){
    planoDeFundo.desenha();
    globais.chao.desenha();
    globais.flappyBird.desenha();

  },

  click(){
    globais.flappyBird.pula();
  },

  atualiza(){
    globais.flappyBird.desenha();

  }
}


function loop(){
      
  telaAtiva.desenha();
  telaAtiva.atualiza();

  frames = frames + 1;
  requestAnimationFrame(loop);
     
    };

    window.addEventListener('click', function() {
      if(telaAtiva.click) {
        telaAtiva.click();
      }
    });
    
    mudaParaTela(Telas.INICIO);
    loop();

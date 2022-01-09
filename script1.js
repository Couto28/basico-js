// 1 Criar o balao
// 2 Estourar balao
// 3 Carregar o jogo

var total = 0; 

function criarBalao(){

    var balao = document.createElement("div");
    balao.setAttribute("class", "balao");

    var x = Math.floor(Math.random() * 600); 
    var y = Math.floor(Math.random() * 400);

    balao.setAttribute("style", "left:"+x+"px;top:"+y+"px;");
    // para aparecer os balões em lugares aleatórios.
    balao.setAttribute("onclick", "estourar(this)");
    // para estourar balões ... " this" seria referenciando ao balao. > "


    document.body.appendChild(balao);
}

   // func de estourar e desaparecer .

   function estourar(objeto){
       document.body.removeChild(objeto);

       total++;

       var score = document.getElementById('total');
       score.innerHTML = "Baloes estourados: " + total;
   }

   // func carregar jogo .

   function carregarJogo(){
         setInterval(criarBalao, 1000);
   }

   /*Com esse projeto foi possivel aprender a ;
    criar e manipular elementos html, criar e adicionar seletores
    ao css do projeto ... e como funciona o metodo "Math random e Floor"
    Pretendo modificar e adicionar novas funcionalidades ao tempo que vou
     aprendendo mais sobre JS.*/

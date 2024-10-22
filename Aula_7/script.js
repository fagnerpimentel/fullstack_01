let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');

// retângulos
ctx.beginPath();
ctx.lineWidth = 20;
ctx.strokeStyle = 'yellow';
ctx.fillStyle = 'black';
ctx.strokeRect(10,10,50,100);
ctx.fillRect(20,10,50,50);
ctx.closePath();

// linhas
ctx.beginPath();
ctx.lineWidth = 10;
ctx.strokeStyle = 'red';
ctx.moveTo(0,0);
ctx.lineTo(100,100);
ctx.lineTo(100,200);
ctx.moveTo(200,200);
ctx.lineTo(200,300);
ctx.lineTo(300,300);
ctx.stroke();
ctx.closePath();


// arcos
ctx.beginPath();
ctx.lineWidth = 10;
ctx.strokeStyle = 'red';
ctx.fillStyle = 'blue';
ctx.arc(200,200,50,Math.PI/2,1.5*Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();

// texto
ctx.beginPath();
ctx.lineWidth = 10;
ctx.strokeStyle = 'red';
ctx.fillStyle = 'blue';
ctx.font = "90px Arial"
ctx.strokeText("Olá",200,200)
ctx.fillText("Olá",205,205);
ctx.closePath();




    // Desenhar chão
    ctx.fillStyle = "gray"; 
    ctx.fillRect(0, 300, 400, 100); // (x, y, largura, altura)

    // Desenhar rio
    ctx.beginPath();
    ctx.fillStyle = "#1E90FF"; // Azul Dodger
    ctx.arc(0,300,50,Math.PI,2*Math.PI);
    ctx.arc(50,350,50,Math.PI/2,Math.PI);
    ctx.arc(150,400,50,1.5*Math.PI,2*Math.PI);
    ctx.lineTo(0,400)
    ctx.fill();
    ctx.closePath();


    // Desenhar sol
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.arc(300,100,50,0,2*Math.PI);
    ctx.fill();
    ctx.closePath();


    // Desenhar casa
    // Corpo da casa
    ctx.fillStyle = "#8B4513"; // Marrom
    ctx.fillRect(150, 200, 100, 100); // (x, y, largura, altura)

    // Telhado
    ctx.beginPath();
    ctx.moveTo(200, 150); // topo do telhado
    ctx.lineTo(150, 200); // canto esquerdo
    ctx.lineTo(250, 200); // canto direito
    ctx.closePath();
    ctx.fillStyle = "#FF6347"; // Tomate
    ctx.fill();

    // Porta
    ctx.fillStyle = "#654321"; // Marrom escuro
    ctx.fillRect(190, 250, 20, 50); // (x, y, largura, altura)

    // Janelas
    ctx.fillStyle = "#00BFFF"; // Azul
    ctx.fillRect(160, 220, 30, 30); // janela esquerda
    ctx.fillRect(210, 220, 30, 30); // janela direita

    // Desenhar árvore
    // Tronco
    ctx.fillStyle = "#8B4513"; // Marrom
    ctx.fillRect(50, 250, 20, 50); // (x, y, largura, altura)

    // Folhas
    ctx.beginPath();
    ctx.arc(60, 230, 30, 0, Math.PI * 2, true); // árvore
    ctx.fillStyle = "#228B22"; // Verde floresta
    ctx.fill();


    // Desenhar árvore 2
    // Tronco
    ctx.fillStyle = "#8B4513"; // Marrom
    ctx.fillRect(350, 300, 20, 50); // (x, y, largura, altura)

    // Folhas
    ctx.beginPath();
    ctx.arc(360, 280, 30, 0, Math.PI * 2, true); // árvore
    ctx.fillStyle = "#228B22"; // Verde floresta
    ctx.fill();
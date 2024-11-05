let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");


let retangulo_1 = {
    x: 10,
    y: 10,
    largura: 50,
    altura: 50,
    cor_linha: "blue",
    cor_preenchimento: "red",
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor_preenchimento;
        ctx.fillRect(this.x, this.y, this.largura, this.altura);
        ctx.closePath();        
    }
}

let retangulo_2 = {
    x: 340,
    y: 340,
    largura: 50,
    altura: 50,
    cor_linha: "yellow",
    cor_preenchimento: "green",
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor_preenchimento;
        ctx.fillRect(this.x, this.y, this.largura, this.altura);
        ctx.closePath();        
    }
}

let bola = {
    x: 10,
    y: 10,
    raio: 100,
    img: new Image(),
    desenha: function(){
        this.img.src = "bola.png";
        ctx.beginPath();
        ctx.drawImage(this.img, this.x, this.y, 2*this.raio, 2*this.raio);
        ctx.closePath();
    }
}


console.log(retangulo_1.largura)
console.log(retangulo_1.cor_preenchimento)

console.log(retangulo_2.largura)
console.log(retangulo_2.cor_preenchimento)

retangulo_1.desenha();
retangulo_2.desenha();



function animacao(){
    ctx.clearRect(0,0,400,400);

    // if(retangulo_1.x < 350){
    //     retangulo_1.x++;
    // }
    // if(retangulo_2.x > 0){
    //     retangulo_2.x--;
    // }

    retangulo_1.desenha();
    retangulo_2.desenha();
    bola.desenha();
    requestAnimationFrame(animacao)
}

animacao()


document.addEventListener("keydown", function(evento){
    let tecla = evento.key;
    console.log(tecla);
    
    let vel = 5;

    if(tecla == "ArrowUp"){
        retangulo_1.y -= vel;
    }
    if(tecla == "ArrowDown"){
        retangulo_1.y += vel;
    }
    if(tecla == "ArrowLeft"){
        retangulo_1.x -= vel;
    }
    if(tecla == "ArrowRight"){
        retangulo_1.x += vel;
    }

})

document.addEventListener("mousemove", function(evento){
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    console.log(x_mouse, y_mouse);

    retangulo_2.x = x_mouse;
    retangulo_2.y = y_mouse;

})
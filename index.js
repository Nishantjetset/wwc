var a=Math.random();
a=a*6;
a=Math.floor(a);

var b=Math.random();
b=b*6;
b=Math.floor(b);


function pickimage(x){

    if(x==0){
        return "images/dice1.png";
    }

    else if(x==1){

        return "images/dice2.png";
    }

    else if(x==2){

        return "images/dice3.png";
    }

    else if(x==3){

        return "images/dice4.png";
    }

    else if(x==4){

        return "images/dice5.png";
    }

    else if(x==5){

        return "images/dice6.png";
    }


}




var outa=pickimage(a);
var outb=pickimage(b);



document.querySelector(".dice .img1").setAttribute("src",outa);
document.querySelector(".dice .img2").setAttribute("src",outb);

if(a>b){
document.querySelector("h1").innerHTML="Player 1 WINS";}


else{
    document.querySelector("h1").innerHTML="Player 2 WINS";
}



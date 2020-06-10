function firstPage(){
    document.getElementById('rocket').style['animation'] = "5s ease rocketExit both";
    document.getElementById('button').style['animation'] = "5s ease rocketExit both";
    document.getElementById('rocketText').style['animation'] = "2s ease rocketExit both";
    document.getElementById('designText').style['animation'] = "2s ease rocketExit both";
    document.getElementById('left1').style['animation'] = "2.5s ease rocketExit both";
    document.getElementById('right1').style['animation'] = "2.5s ease rocketExit both";
    document.getElementById('left2').style['animation'] = "2.5s ease rocketExit both";
    document.getElementById('right2').style['animation'] = "2.5s ease rocketExit both";
    document.getElementById('middle1').style['animation'] = "2.8s ease rocketExit both";
    document.getElementById('middle2').style['animation'] = "2.8s ease rocketExit both";
    document.getElementById('container').style['animation'] = "2s ease fadeOut both";
    document.getElementById('container').style['animation-delay'] = "2.5s";
    container2Script();
    return;
};

function container2Script(){
    document.getElementById('rightImg').style['animation'] = "6s ease rightCorner both";
    document.getElementById('leftImg').style['animation'] = "6s ease leftCorner both";
    return;
};

function gamePage(){
    document.getElementById('rightImg').style['animation'] = "4s ease rightCorner2 both";
    document.getElementById('leftImg').style['animation'] = "4s ease leftCorner2 both";
    document.getElementById('upButton').style['animation'] = "3s ease menuExit both";
    document.getElementById('bottomButton').style['animation'] = "3s ease menuExit both";
    document.getElementById('upButton').style['animation-delay'] = "1s";
    document.getElementById('bottomButton').style['animation-delay'] = "1s";
    document.getElementById('container2').style['animation'] = "2s ease fadeOut both";
    document.getElementById('container2').style['animation-delay'] = "2.5s";
    inGame = true;
    return;
};

var inGame = false;
var y = 0;
var x = 0;
var capsule = 2;

function controller(event) {
    if(inGame){
        if((event.key == 'z' || event.key == 'Z') && y>-50){
            document.getElementById('rocketController').style['transform'] = "translate("+x+"%,"+(y-10)+"%)";
            y=y-10;
            return;
        } else if((event.key == 's' || event.key == 'S') && y<0){
            document.getElementById('rocketController').style['transform'] = "translate("+x+"%,"+(y+10)+"%)";
            y=y+10;
            return;
        } else if((event.key == 'd' || event.key == 'D') && x<30){
            document.getElementById('rocketController').style['transform'] = "translate("+(x+10)+"%,"+y+"%)";
            x=x+10;
            return;
        } else if((event.key == 'q' || event.key == 'Q') && x>-30){
            document.getElementById('rocketController').style['transform'] = "translate("+(x-10)+"%,"+y+"%)";
            x=x-10;
            return;
        } else if(event.keyCode==32){
            if(capsule==2){
                document.getElementById('capsuleRight').style['animation'] = "5s ease capsuleOut both";
                document.getElementById('rocketController').style['transition'] = "0.5s";
            } else if(capsule==1){
                document.getElementById('capsuleLeft').style['animation'] = "5s ease capsuleOut both";
                document.getElementById('rocketController').style['transition'] = "0.2s";
            } else return;
            capsule--;
            return;
        } else return;
    }
    return;
}
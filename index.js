function myFunction()
{
document.getElementById("clickhere").onclick=function(){
    var user = document.getElementById('user');
    var h = document.getElementById("boss");
    var userdice = String(Math.floor(Math.random()*6)+1);
    var compdice = String(Math.floor(Math.random()*6)+1)
    user.setAttribute('src','images/dice'+ userdice +'.png');
    var comp = document.getElementById('computer');
    comp.setAttribute('src','images/dice'+ compdice  +'.png');
    if(userdice===compdice){
        h.innerHTML = "🚩DRAW 🚩";
        h.style.color = "red";
    }
    else if(userdice>compdice){
        h.innerHTML = "USER WINS🔥";
        h.style.color = "cyan";
    }
    else{
        h.innerHTML = "COMPUTER WINS 💻💻";
        h.style.color = "yellow";
    }
    }
}

// Math.floor(Math.random()*6)+1
let roll = 0;

document.getElementById("rollBtn6").onclick = function(){
    roll = Math.floor(Math.random() * 6) + 1;
    document.getElementById("labelRoll").innerHTML = roll;
}

document.getElementById("rollBtn8").onclick = function(){
    roll = Math.floor(Math.random() * 8) + 1;
    document.getElementById("labelRoll").innerHTML = roll;
}

document.getElementById("rollBtn20").onclick = function(){
    roll = Math.floor(Math.random() * 20) + 1;
    document.getElementById("labelRoll").innerHTML = roll;
}

document.getElementById("reset").onclick = function(){
    roll = 0;
    document.getElementById("labelRoll").innerHTML = roll;
}
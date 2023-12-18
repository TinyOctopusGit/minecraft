function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

function initServerData(serverIp,serverPort){    
    fetch('https://api.mcsrvstat.us/3/play.pogcraft.net:44601')
    .then(response => response.json())
    .then(data => handleServerStatus(data));

    function handleServerStatus(data){
        if(data.status=='error'){
            console.log(data.error);
            return false;
        }

        const serverStatus = document.getElementById("server-status");
        if (data.online) {
            serverStatus.innerHTML = "Online";
        }   
        else {
            serverStatus.innerHTML = "Offline";
        }
        

        const playerMax = document.getElementById("player-max");
        playerMax.innerHTML = data.players.max;

        const playerCounter = document.getElementById("player-count");
        playerCounter.innerHTML = data.players.online;

        const serverVersion = document.getElementById("server-version");
        serverVersion.innerHTML = data.version;
    } 
}

initServerData("play.pogcraft.net","25565");






const screens = ["s1","s2","s3","s4","s5"];

function goTo(id){
    screens.forEach(screen=>{
        document.getElementById(screen).classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

    if(id === "s2"){
        startCountdown();
    }
}

function openEnv(){
    document.getElementById("flap").classList.add("open");

    setTimeout(()=>{
        goTo("s2");
    },700);
}




let timer;

function startCountdown(){

    clearInterval(timer);

    function update(){

        const now = new Date();
        let target = new Date(now.getFullYear(),5,13);

        if(now > target){
            target = new Date(now.getFullYear()+1,5,13);
        }

        const diff = target - now;

        const d = Math.floor(diff / (1000*60*60*24));
        const h = Math.floor(diff/(1000*60*60)%24);
        const m = Math.floor(diff/(1000*60)%60);
        const s = Math.floor(diff/1000%60);

        document.getElementById("days").textContent=d;
        document.getElementById("hours").textContent=h;
        document.getElementById("minutes").textContent=m;
        document.getElementById("seconds").textContent=s;
    }

    update();
    timer = setInterval(update,1000);
}

function openBox(){

    document.getElementById("giftLid")
        .classList.add("open");

    setTimeout(()=>{

        document.getElementById("videoArea")
            .style.display="block";

        document.getElementById("finalBtn")
            .style.display="inline-block";

    },700);
}

function restart(){
    location.reload();
}
function createHeart() {
    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "%";
    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 1000);

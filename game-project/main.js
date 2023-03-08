let firstInp = document.querySelector("#first");
let secondInp = document.querySelector("#second");
let result = document.querySelector("#result");
let question = document.querySelector("#question");
let start = document.querySelector("#start");
let apr = document.querySelector("#approve");
//İŞLEMLER
let add = document.querySelector("#addition");
let extrac = document.querySelector("#extraction");
let multip = document.querySelector("#multiplication");
let divis = document.querySelector("#division");

//Platform
let ball = document.querySelector("#ball");
let ball2 = document.querySelector("#ball2");
let count1 = document.querySelector(".count-1");
let count2 = document.querySelector(".count-2");
let countdown = document.querySelector(".countdown");

//MESAJLAR
let winMessage = document.querySelector(".winMessage");
let loseMessage = document.querySelector(".loseMessage");

//OYUN-İŞLEM SEÇİMİ BELİRTECİ
add.addEventListener("click", () => {
  add.style.backgroundColor = "red"
})
extrac.addEventListener("click", () => {
  extrac.style.backgroundColor = "green"
})
multip.addEventListener("click",()=>{
  multip.style.backgroundColor = "blue"
})
//SAYAÇ KISMI
let downloadTimer = null;
function baslat() {
  //GERİ SAYIM  
  let timeleft = 20;
  downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      countdown.innerHTML = "Finished";
      downloadTimer = null;
      console.log(count1.innerHTML, count2.innerHTML);
      if (parseInt(count1.innerHTML) > (parseInt(count2.innerHTML) || count2.innerHTML == null)) {
        winMessage.style.display = "flex"
      }
      else if ((parseInt(count1.innerHTML) || count1.innerHTML == null) < parseInt(count2.innerHTML)) {
        loseMessage.style.display = "flex"
      }
    } else {
      countdown.innerHTML = timeleft;
    }
    timeleft -= 1;
  }, 1000);
  //GERİ SAYIM BİTİŞİ
}

//--------İŞLEMLER---------

//ÇARPMA 
function multiplication() {
  add.setAttribute("disabled", "");
  extrac.setAttribute("disabled", "");
  start.addEventListener("click", carpma = () => {
    //TEK BASAMAKLA OYNAMAK İÇİN
    if (firstInp.value == 1 && secondInp.value == 1) {
      start.innerHTML = "Yeni Soru"
      function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
      question.innerHTML = getRandomInt(10) + "X" + getRandomInt(10)
      console.log(question.innerHTML)
      //ÇİFT BASAMAK OYNAMAK İÇİN
    } else if (firstInp.value == 2 && secondInp.value == 2) {
      start.innerHTML = "Yeni Soru"
      function getRandomInt() {
        return Math.floor(Math.random() * 90 + 10);
      }
      question.innerHTML = getRandomInt() + "X" + getRandomInt()
      console.log(question.innerHTML)
    }
  })
  //ÇARPMA İŞLEM KONTROLÜ
  let sayac = 0
  let sayac2 = 0
  apr.addEventListener("click", () => {
    const [a, b] = question.innerHTML.split("+").map((x) => parseInt(x.trim()));
    const correctAnswer = a * b;
    const userAnswer = parseInt(result.value.trim());
    if (userAnswer === correctAnswer) {
      console.log("Doğru!");
      sayac += 1
      count1.innerHTML = sayac
      ball.style.animation = "none";
      ball.offsetHeight;
      ball.style.animation = "ball 1s linear";
      result.value = null
      return carpma()
    } else {
      console.log("Yanlış!");
      sayac2 += 1
      count2.innerHTML = sayac2
      ball2.style.animation = "none";
      ball2.offsetHeight;
      ball2.style.animation = "ball2 1s linear";
      result.value = null
      return carpma()
    }
  }
  )
}



//TOPLAMA
function addition() {
  extrac.setAttribute("disabled", "")
  multip.setAttribute("disabled", "")
  start.addEventListener("click", toplama = () => {
    //TEK BASAMAKLA OYNAMAK İÇİN
    if (firstInp.value == 1 && secondInp.value == 1) {
      start.innerHTML = "Yeni Soru"
      function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
      question.innerHTML = getRandomInt(10) + "+" + getRandomInt(10)
      console.log(question.innerHTML)
      //ÇİFT BASAMAK OYNAMAK İÇİN
    } else if (firstInp.value == 2 && secondInp.value == 2) {
      start.innerHTML = "Yeni Soru"
      function getRandomInt(max) {
        return Math.floor(Math.random() * 90 + 10);
      }
      question.innerHTML = getRandomInt() + "+" + getRandomInt()
      console.log(question.innerHTML)
    }
  }
  )

  //TOPLAMA İŞLEM KONTROLÜ
  ball.style.animation = "none";
  ball2.style.animation = "none";
  let sayac = 0
  let sayac2 = 0
  apr.addEventListener("click", () => {
    const [a, b] = question.innerHTML.split("+").map((x) => parseInt(x.trim()));
    const correctAnswer = a + b;
    const userAnswer = parseInt(result.value.trim());
    if (userAnswer === correctAnswer) {
      console.log("Doğru!");
      sayac += 1
      count1.innerHTML = sayac
      ball.style.animation = "none";
      ball.offsetHeight;
      ball.style.animation = "ball 1s linear";
      result.value = null
      return toplama()
    } else {
      console.log("Yanlış!");
      sayac2 += 1
      count2.innerHTML = sayac2
      ball2.style.animation = "none";
      ball2.offsetHeight;
      ball2.style.animation = "ball2 1s linear";
      result.value = null
      return toplama()
    }
  }
  )
}


//ÇIKARMA 
function extraction() {
  add.setAttribute("disabled", "");
  multip.setAttribute("disabled", "");
  start.addEventListener("click", cikartma = () => {
    //TEK BASAMAKLA OYNAMAK İÇİN
    if (firstInp.value == 1 && secondInp.value == 1) {
      start.innerHTML = "Yeni Soru"
      function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
      question.innerHTML = getRandomInt(10) + "-" + getRandomInt(10)
      console.log(question.innerHTML)
      //ÇİFT BASAMAK OYNAMAK İÇİN
    } else if (firstInp.value == 2 && secondInp.value == 2) {
      start.innerHTML = "Yeni Soru"
      function getRandomInt(max) {
        return Math.floor(Math.random() * 90 + 10);
      }
      question.innerHTML = getRandomInt() + "-" + getRandomInt()
      console.log(question.innerHTML)
    }
  })

  //ÇIKARTMA İŞLEM KONTOLÜ
  let sayac = 0
  let sayac2 = 0
  apr.addEventListener("click", () => {
    const [x, y] = question.innerHTML.split("-").map((z) => parseInt(z.trim()));
    const correctAnswer = x - y;
    const userAnswer = parseInt(result.value.trim());
    if (userAnswer === correctAnswer) {
      console.log("Doğru!");
      sayac += 1
      count1.innerHTML = sayac
      ball.style.animation = "none";
      ball.offsetHeight;
      ball.style.animation = "ball 1s linear";
      result.value = null
      return cikartma()
    } else {
      console.log("Yanlış!");
      sayac2 += 1
      count2.innerHTML = sayac2
      ball2.style.animation = "none";
      ball2.offsetHeight;
      ball2.style.animation = "ball2 1s linear";
      result.value = null
      return cikartma()
    }
  }
  )
}















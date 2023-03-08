const ilkSayi = document.getElementById("ilk-sayi");
const ikinciSayi = document.getElementById("ikinci-sayi");
const toplaCheck = document.getElementById("topla");
const cikarCheck = document.getElementById("cikar");
const carpCheck = document.getElementById("carp");
const bolCheck = document.getElementById("bolme");
const girisSayfasi = document.querySelector(".giris-sayfasi");
const oyunBaslatBtn = document.getElementById("oyun-baslat");
const oyunSayfasi = document.querySelector(".oyun-sayfasi");
const geriDonBtn = document.getElementById("geri-don");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const islemSembol = document.getElementById("islem-sembol");
const inputBtnGrup = document.querySelector(".input-btn-grup");
const cevapInput = document.getElementById("cevap-input");
const myCar = document.getElementById("myCar");
const soruCevapDOM = document.querySelector(".soru-cevap-main");
const geriSayimDOM = document.querySelector("#geri-sayim-zaman");
const timeStartInput = document.querySelector("#zaman-baslangic-input");

let genislik = window.matchMedia("(max-width: 896px)")
let carPositionLeft;
let carPositionBottom;
function carPosition(genislik) {
    if (genislik.matches) {
        carPositionLeft = 220;
        carPositionBottom = 120;
    } else {
        carPositionLeft = 880;
        carPositionBottom = 360;
    }
}
carPosition(genislik);

//CheckBoxlar içinden yalnızca biri seçilebilir..
const checkboxes = document.querySelectorAll("input[type='checkbox']");
checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("click", function () {
        if (this.checked) {
            const group = "input[type='checkbox'][name='" + this.name + "']";
            document.querySelectorAll(group).forEach(function (checkbox) {
                checkbox.checked = false;
            });
            this.checked = true;
        } else {
            this.checked = false;
        }
    });
});

let randomNumber1;
let randomNumber2;
oyunBaslatBtn.addEventListener("click", baslatFunc)
function baslatFunc() {
    if (Number(ilkSayi.value) == 1 && Number(ikinciSayi.value) == 1) {
        randomNumber1 = Math.floor(Math.random() * 9);
        randomNumber2 = Math.floor(Math.random() * 9);
    }
    else if (Number(ilkSayi.value) == 2 && Number(ikinciSayi.value) == 2) {
        randomNumber1 = Math.floor(Math.random() * 89 + 10);
        randomNumber2 = Math.floor(Math.random() * 89 + 10);
    }
    cevapInput.value = null;
    num1.innerHTML = randomNumber1;
    num2.innerHTML = randomNumber2;
    let toplamSonuc;
    if (toplaCheck.checked) {
        islemSembol.innerHTML = "+";
        toplamSonuc = randomNumber1 + randomNumber2;
    } else if (cikarCheck.checked) {
        islemSembol.innerHTML = "-";
        toplamSonuc = randomNumber1 - randomNumber2;
    } else if (carpCheck.checked) {
        islemSembol.innerHTML = "X";
        toplamSonuc = randomNumber1 * randomNumber2;
    } else if (bolCheck.checked) {
        randomNumber2 = Math.floor(Math.random() * 8 + 1);
        if(randomNumber1%randomNumber2==0){
            islemSembol.innerHTML = "/";
            num2.innerHTML = randomNumber2;
            toplamSonuc = randomNumber1 / randomNumber2;
        }else{
            return baslatFunc();

        }
    }
    function keydownHandler(e) {
        if (e.key == "Enter") {
            if (toplamSonuc == Number(cevapInput.value)) {
                console.log("doğru cevap");
                carPositionLeft -= 30;
                carPositionBottom -= 20;
                myCar.style.left = `${carPositionLeft}px`
                myCar.style.bottom = `${carPositionBottom}px`
                if (carPositionLeft == 460 && carPositionBottom == 80) {
                    soruCevapDOM.innerHTML = "Tebrikler..";
                } else if (carPositionLeft == 70 && carPositionBottom == 20) {
                    soruCevapDOM.innerHTML = "Tebrikler..";
                }
            } else {
                console.log("yanlış cevap");
            }
            cevapInput.removeEventListener("keydown", keydownHandler);
            return baslatFunc();
        }
    }
    if(parseInt(timeStartInput.value)<10){
        alert("10 saniyeden küçük değer girilemez")
    }else{
        cevapInput.addEventListener("keydown", keydownHandler);
        setTimeout(() => {
            oyunSayfasi.style.display = "block";
            girisSayfasi.style.display = "none";
        }, 700)
    }
}

oyunBaslatBtn.addEventListener("click", setIntervalFunc)
function setIntervalFunc() {
    console.log("butona tıklandı")
    if(parseInt(timeStartInput.value)<10){
        console.log("10 saniyeden küçük değer girilemez")
    }else{
        let saniyeGeriBaslangic = parseInt(timeStartInput.value);
        let geriSayim = setInterval(geriSayimFunc, 1000);
        function geriSayimFunc() {
            saniyeGeriBaslangic--
            geriSayimDOM.innerHTML = `${saniyeGeriBaslangic} sn`;
            if (saniyeGeriBaslangic == 0) {
                inputBtnGrup.innerText = "Süre Doldu.."
                clearInterval(geriSayim)
            }
        }
    }
}

geriDonBtn.addEventListener("click", () => {
    girisSayfasi.style.display = "flex";
    oyunSayfasi.style.display = "none";
    window.location.reload();
})







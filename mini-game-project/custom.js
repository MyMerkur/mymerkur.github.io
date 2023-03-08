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
const cevapInput = document.getElementById("cevap-input");
const myCar = document.getElementById("myCar");





let genislik = window.matchMedia("(max-width: 896px)")
let carPositionLeft;
let carPositionRight;
function carPosition(genislik) {
    if (genislik.matches) {
        carPositionLeft = 220;
        carPositionRight = 120;
    } else {
        carPositionLeft = 880;
        carPositionRight = 360;
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




function baslatFunc() {
    //Toplama işlemi------------
    if (toplaCheck.checked) {
        if (Number(ilkSayi.value) == 1 && Number(ikinciSayi.value) == 1) {
            let randomNumber1 = Math.floor(Math.random() * 9);
            let randomNumber2 = Math.floor(Math.random() * 9);
            cevapInput.value = null;
            num1.innerHTML = randomNumber1;
            num2.innerHTML = randomNumber2;
            islemSembol.innerHTML = "+";
            let toplamSonuc = randomNumber1 + randomNumber2;
            const keydownHandler = (e) => {
                if (e.key == "Enter") {
                    if (toplamSonuc == Number(cevapInput.value)) {
                        console.log("doğru cevap");
                        carPositionLeft -= 30;
                        carPositionRight -= 20;
                        console.log(carPositionLeft);
                        console.log(carPositionRight);
                        myCar.style.left = `${carPositionLeft}px`
                        myCar.style.bottom = `${carPositionRight}px`
                    } else {
                        console.log("yanlış cevap");
                    }
                    cevapInput.removeEventListener("keydown", keydownHandler);
                    return baslatFunc();
                }
            }
            cevapInput.addEventListener("keydown", keydownHandler);
        } else if (Number(ilkSayi.value) == 2 && Number(ikinciSayi.value) == 2) {
            let randomNumber1 = Math.floor(Math.random() * 89 + 10);
            let randomNumber2 = Math.floor(Math.random() * 89 + 10);
            cevapInput.value = null;
            if (randomNumber1 >= 10 && randomNumber2 >= 10) {
                num1.innerHTML = randomNumber1;
                num2.innerHTML = randomNumber2;
                islemSembol.innerHTML = "+";
                let toplamSonuc = randomNumber1 + randomNumber2;
                const keydownHandler = (e) => {
                    if (e.key == "Enter") {
                        if (toplamSonuc == Number(cevapInput.value)) {
                            console.log("doğru cevap");
                            carPositionLeft -= 30;
                            carPositionRight -= 20;
                            myCar.style.left = `${carPositionLeft}px`
                            myCar.style.bottom = `${carPositionRight}px`
                        } else {
                            console.log("yanlış cevap");
                        }
                        cevapInput.removeEventListener("keydown", keydownHandler);
                        return baslatFunc();
                    }
                }
                cevapInput.addEventListener("keydown", keydownHandler);
            }
        }
        oyunSayfasi.style.display = "block";
        girisSayfasi.style.display = "none";
    }
    //Toplama işlemi End----------

    //Çıkarma işlemi-----------
    else if (cikarCheck.checked) {
            if (Number(ilkSayi.value) == 1 && Number(ikinciSayi.value) == 1) {
                let randomNumber1 = Math.floor(Math.random() * 9);
                let randomNumber2 = Math.floor(Math.random() * 9);
                cevapInput.value = null;
                num1.innerHTML = randomNumber1;
                num2.innerHTML = randomNumber2;
                islemSembol.innerHTML = "-";
                let toplamSonuc = randomNumber1 - randomNumber2;

                const keydownHandler = (e) => {
                    if (e.key == "Enter") {
                        if (toplamSonuc == Number(cevapInput.value)) {
                            console.log("doğru cevap");
                            carPositionLeft -= 30;
                            carPositionRight -= 20;
                            myCar.style.left = `${carPositionLeft}px`
                            myCar.style.bottom = `${carPositionRight}px`
                        } else {
                            console.log("yanlış cevap");
                        }
                        cevapInput.removeEventListener("keydown", keydownHandler);
                        return baslatFunc();
                    }
                }
                cevapInput.addEventListener("keydown", keydownHandler);
            } else if (Number(ilkSayi.value) == 2 && Number(ikinciSayi.value) == 2) {
                let randomNumber1 = Math.floor(Math.random() * 89 + 10);
                let randomNumber2 = Math.floor(Math.random() * 89 + 10);
                cevapInput.value = null;
                num1.innerHTML = randomNumber1;
                num2.innerHTML = randomNumber2;
                islemSembol.innerHTML = "-";
                let toplamSonuc = randomNumber1 - randomNumber2;
                const keydownHandler = (e) => {
                    if (e.key == "Enter") {
                        if (toplamSonuc == Number(cevapInput.value)) {
                            console.log("doğru cevap");
                            carPositionLeft -= 30;
                            carPositionRight -= 20;
                            myCar.style.left = `${carPositionLeft}px`
                            myCar.style.bottom = `${carPositionRight}px`
                        } else {
                            console.log("yanlış cevap");
                        }
                        cevapInput.removeEventListener("keydown", keydownHandler);
                        return baslatFunc();
                    }
                }
                cevapInput.addEventListener("keydown", keydownHandler);
                
            }
            oyunSayfasi.style.display = "block";
            girisSayfasi.style.display = "none";
    }
    //Çıkarma işlemi End----------

    //Çarpma işlemi Start----------
    else if (carpCheck.checked) {
        if (Number(ilkSayi.value) == 1 && Number(ikinciSayi.value) == 1) {
            let randomNumber1 = Math.floor(Math.random() * 8+1);
            let randomNumber2 = Math.floor(Math.random() * 8+1);
            cevapInput.value = null;
            num1.innerHTML = randomNumber1;
            num2.innerHTML = randomNumber2;
            islemSembol.innerHTML = "X";
            let toplamSonuc = randomNumber1 * randomNumber2;
            const keydownHandler = (e) => {
                if (e.key == "Enter") {
                    if (toplamSonuc == Number(cevapInput.value)) {
                        console.log("doğru cevap");
                        carPositionLeft -= 30;
                        carPositionRight -= 20;
                        myCar.style.left = `${carPositionLeft}px`
                        myCar.style.bottom = `${carPositionRight}px`
                    } else {
                        console.log("yanlış cevap");
                    }
                    cevapInput.removeEventListener("keydown", keydownHandler);
                    return baslatFunc();
                }
            }
            cevapInput.addEventListener("keydown", keydownHandler);
        } else if (Number(ilkSayi.value) == 2 && Number(ikinciSayi.value) == 2) {
            let randomNumber1 = Math.floor(Math.random() * 89 + 10);
            let randomNumber2 = Math.floor(Math.random() * 89 + 10);
            cevapInput.value = null;
            num1.innerHTML = randomNumber1;
            num2.innerHTML = randomNumber2;
            islemSembol.innerHTML = "X";
            let toplamSonuc = randomNumber1 * randomNumber2;
            const keydownHandler = (e) => {
                if (e.key == "Enter") {
                    if (toplamSonuc == Number(cevapInput.value)) {
                        console.log("doğru cevap");
                        carPositionLeft -= 30;
                        carPositionRight -= 20;
                        myCar.style.left = `${carPositionLeft}px`
                        myCar.style.bottom = `${carPositionRight}px`
                    } else {
                        console.log("yanlış cevap");
                    }
                    cevapInput.removeEventListener("keydown", keydownHandler);
                    return baslatFunc();
                }
            }
            cevapInput.addEventListener("keydown", keydownHandler);
        }
        oyunSayfasi.style.display = "block";
        girisSayfasi.style.display = "none";
    }
    //Çarpma işlemi End----------,

    //Bölme işlemi Start-----------
    else if (bolCheck.checked) {
        if (Number(ilkSayi.value) == 1 && Number(ikinciSayi.value) == 1) {
            let randomNumber1 = Math.floor(Math.random() * 9);
            let randomNumber2 = Math.floor(Math.random() * 8+1);
            
            cevapInput.value = null;
            num1.innerHTML = randomNumber1;
            num2.innerHTML = randomNumber2;
            islemSembol.innerHTML = "/";
            let toplamSonuc = randomNumber1 / randomNumber2;

            const keydownHandler = (e) => {
                if (e.key == "Enter") {
                    if (toplamSonuc == Number(cevapInput.value)) {
                        console.log("doğru cevap");
                        carPositionLeft -= 30;
                        carPositionRight -= 20;
                        myCar.style.left = `${carPositionLeft}px`
                        myCar.style.bottom = `${carPositionRight}px`
                    } else {
                        console.log("yanlış cevap");
                    }
                    cevapInput.removeEventListener("keydown", keydownHandler);
                    return baslatFunc();
                }
            }
            cevapInput.addEventListener("keydown", keydownHandler);
        } else if (Number(ilkSayi.value) == 2 && Number(ikinciSayi.value) == 2) {
            let randomNumber1 = Math.floor(Math.random() * 89 + 10);
            let randomNumber2 = Math.floor(Math.random() * 89 + 10);
            cevapInput.value = null;
            num1.innerHTML = randomNumber1;
            num2.innerHTML = randomNumber2;
            islemSembol.innerHTML = "/";
            let toplamSonuc = randomNumber1 / randomNumber2;
            const keydownHandler = (e) => {
                if (e.key == "Enter") {
                    if (toplamSonuc == Number(cevapInput.value)) {
                        console.log("doğru cevap");
                        carPositionLeft -= 30;
                        carPositionRight -= 20;
                        myCar.style.left = `${carPositionLeft}px`
                        myCar.style.bottom = `${carPositionRight}px`
                    } else {
                        console.log("yanlış cevap");
                    }
                    cevapInput.removeEventListener("keydown", keydownHandler);
                    return baslatFunc();
                }
            }
            cevapInput.addEventListener("keydown", keydownHandler);
        }
        oyunSayfasi.style.display = "block";
        girisSayfasi.style.display = "none";
    }
    //Bölme işlemi End-----------
    else{
        alert("bir seçim yapmadınız")
    } 
    
}


geriDonBtn.addEventListener("click", () => {
    girisSayfasi.style.display = "flex";
    oyunSayfasi.style.display = "none";
    window.location.reload();
    
})







var input = document.querySelector('input'),
    span = document.querySelector('span'),
    titleInput = document.querySelector('.title');
//  xử lí handle khi focus vào input
titleInput.onclick = () => {
    input.focus();
}
input.onfocus = function() {
    span.classList.add("active");
}
input.onblur = function() {
    if(input.value == "") {
        span.classList.remove("active");
    }
}
// tạo array chứa thông tin
var result = new Array();
var boxSoluong = document.querySelector('.btn');
boxSoluong.addEventListener('click', function() {
    handleRandom();
});
input.addEventListener('keydown', function(e) {
    if(e.keyCode == 13) {
        handleRandom();
    }
})

let clear = document.querySelector(".btn_clear");
if(clear) {
    clear.onclick = () => {
        let text = document.querySelector(".random");
        text.innerHTML = "";
    }
}

let hre = document.querySelector('.copy'),
    copyDone = document.querySelector('.done');
if(hre) {
    hre.addEventListener('click', function(e) {
        e.preventDefault();
        let text = document.querySelector(".random").innerText;
        let input = document.createElement('input');
        document.body.appendChild(input);
        input.value = text;
        input.select();
        document.execCommand('copy'); 
        input.remove();
        copyDone.classList.add('active');
        setTimeout(function() {
            copyDone.classList.remove('active');
        }, 5000)
    });
}

function handleRandom() {
    result = [];
    var inputValue = input.value;
    if(inputValue == "" || inputValue <= 0 || isNaN(inputValue)) {
        alert("Trường này phải là 1 số dương!!");
        return 0;
    }
    for(var i = 1; i <= inputValue; i++) {
        random(Math.floor(Math.random() * 10) + 3);
        if(i == inputValue) {
            result = result.join(' ');
            document.querySelector(".random").innerHTML = result;
        }
    }
    function random(soluong) {
        let chuhoa = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let chuthuong = "abcdefghijklmnopqrstuvwxyz";
        let so = "0123456789";
        var arr = [];
        var tiso = Math.floor(Math.random() * 10);
        for(var i = 0; i < soluong; i++) {
            if(tiso < 2) {
                arr.push(chuhoa[(Math.floor(Math.random()*26) + 1) % 26]);
                tiso = Math.floor(Math.random() * 10);
            } else if(tiso >= 2 && tiso < 8) {
                arr.push(chuthuong[(Math.floor(Math.random()*26) + 1) % 26]);
                tiso = Math.floor(Math.random() * 10);
            } else {
                arr.push(so[Math.floor(Math.random() * 10)]);
                tiso = Math.floor(Math.random() * 10);
            }
        }
        arr = arr.join('');
        result.push(arr);
    }
}

// dard mode
let btn_change = document.querySelector(".change_btn"),
    box_dark = document.querySelector(".box_dark_mode"),
    body_web = document.querySelector("body");
//  check isDark
let getDark = JSON.parse(localStorage.getItem("isDark"));
if(getDark == true) {
    box_dark.classList.toggle("active");
    body_web.classList.toggle("active");
}
btn_change.onclick = function() {
    box_dark.classList.toggle("active");
    body_web.classList.toggle("active");
    let isDark = false;
    if(box_dark.classList.contains("active")){
        isDark = true;
    }
    localStorage.setItem("isDark", JSON.stringify(isDark));
}


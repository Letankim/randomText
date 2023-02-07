var input = document.querySelector('input'),
    span = document.querySelector('span');
input.onfocus = function() {
    span.classList.add("active");
}
input.onblur = function() {
    if(input.value == "") {
        span.classList.remove("active");
    }
}
var result = new Array();
var boxSoluong = document.querySelector('.btn button');
boxSoluong.addEventListener('click', function() {
    handleRandom();
});
input.addEventListener('keydown', function(e) {
    if(e.keyCode == 13) {
        handleRandom();
    }
})

function handleRandom() {
    result = [];
    var inputValue = input.value;
    if(inputValue == "") {
        alert("Hãy điền số từ bạn muốn!!");
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

let hre = document.querySelector('.copy'),
    copyDone = document.querySelector('.done');
if(hre) {
    hre.addEventListener('click', function(e) {
        e.preventDefault();
        let text = document.querySelector(".random").innerText;
        let input = document.createElement('input');
        document.body.appendChild(input) ;
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
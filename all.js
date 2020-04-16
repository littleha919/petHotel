function caculateDog(event) {
    event.preventDefault();
    var weightPrice = parseInt(document.querySelector('#weight').value);
    var dogDayPrice = parseInt(document.querySelector('#dDay').value);
    var bathPrice = parseInt(document.querySelector('input[name="bathDog"]:checked').value);

    var dogTotal = (weightPrice*dogDayPrice)+(bathPrice*weightPrice*0.5);

    document.querySelector('#dTotal').textContent = dogTotal;
}

document.querySelector('#dog-submit-btn').onclick = caculateDog;



function catPrice(amount, cDay) {
    var price = 0;

    switch(amount) {
        case 1:
            price = 500;
            break;
        case 2:
            price = 650;
            break;
        case 3:
            price = 750;
            break;
        default:
    }

    return cDay * price;
}

function caculateCat(event) {
    event.preventDefault();
    var num = parseInt(document.querySelector('#num').value);
    var day = parseInt(document.querySelector('#cDay').value);
    var bathPrice = parseInt(document.querySelector('input[name="bathCat"]:checked').value);
    var livePrice = catPrice(num, day);
    
    
    var cTotal = livePrice + (bathPrice * num);
    document.querySelector('#cTotal').textContent = cTotal;
}

document.querySelector('#cat-submit-btn').onclick = caculateCat;
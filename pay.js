const accept = document.getElementById('gridCheck')
const orderButton = document.getElementById('order')

if (accept.checked == 0){
    orderButton.disabled = true;
}

function acceptButton() {
    if (accept.checked == 0){
        orderButton.disabled = true;
    }
    else if (accept.checked == 1){
        orderButton.disabled = false;
        console.log('asd');
    }
}

accept.addEventListener('click', acceptButton)


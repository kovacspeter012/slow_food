const phone = document.querySelector('.phone');
const phoneNumber = document.getElementById('phoneNumber')

function Phone() {
    phoneNumber.style.display = 'inline'
}

phone.addEventListener('click', Phone)

const select = document.getElementById('rendelOption2')


function map() {
    scrollBy(0, 1000) 
}

select.addEventListener('click', map)






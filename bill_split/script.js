const price =document.querySelector('#price');
const people =document.querySelector('#people');
const tip =document.querySelector('#tip');
const error =document.querySelector('.error');
const count =document.querySelector('.count');
const costInfo =document.querySelector('.cost-info');
const cost =document.querySelector('.cost');

const showBill = () => {
    if(price.value === '' || people.value === '' || tip.value === 0 ) {
        error.textContent = 'Fill all fields';
        costInfo.style.display = 'none';
    } else {
        error.textContent = '';
        countBill();
    }
}

const countBill = () => {
    const priceValue = parseFloat(price.value);
    const numberOfPeople = parseInt(people.value);
    const tipValue = parseFloat(tip.value);

    const sum = (priceValue + (priceValue * tipValue)) / numberOfPeople;
    costInfo.style.display = 'block';

    cost.textContent = sum.toFixed()
}

count.addEventListener('click', showBill);
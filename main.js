const form = document.querySelector('.tip-calculator__form');
const tipPercentages = document.querySelectorAll('.tip-calculator__percentage');

const tipAmount = document.querySelector('.tip-amount');
const tipTotal = document.querySelector('.tip-total');

const resetButton = document.querySelector('.tip-calculator__reset');
const feedback = document.querySelector('.feedback');
let selectedPercentage;


form.addEventListener('click', e => {
    if (e.target.classList.contains('tip-calculator__percentage')) {
        tipPercentages.forEach(option => {
            option.classList.remove('selected');
        });
        
        e.target.classList.add('selected');
    }
    
    selectedPercentage = document.querySelector('.selected');

    if (form.numberOfPeople.value != 0  
        && form.bill.value != 0
        && selectedPercentage != null) {
            const calculatedTipAmount = (form.bill.value * selectedPercentage.value / 100) / form.numberOfPeople.value;
            const calculatedTipTotal = (form.bill.value / form.numberOfPeople.value) + calculatedTipAmount;
            
            tipAmount.textContent = `$${calculatedTipAmount.toFixed(2)}`;
            tipTotal.textContent = `$${calculatedTipTotal.toFixed(2)}`;

            resetButton.toggleAttribute('disabled');
            resetButton.classList.add('active');
    }
});

resetButton.onclick = function() {
    form.reset();
    selectedPercentage.classList.remove('selected');

    resetButton.toggleAttribute('disabled');
    resetButton.classList.remove('active');

    tipAmount.textContent = '$0.00';
    tipTotal.textContent = '$0.00';
}
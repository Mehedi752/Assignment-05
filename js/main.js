document.getElementById('history-button').addEventListener('click', function () {
    document.getElementById('donation-button').classList.remove('bg-[#B4F461]');
    document.getElementById('history-button').classList.add('bg-[#B4F461]');
})

document.getElementById('donation-button').addEventListener('click', function () {
    document.getElementById('history-button').classList.remove('bg-[#B4F461]');
    document.getElementById('donation-button').classList.add('bg-[#B4F461]');
})


// Donation Process for Noakhali.
document.getElementById('noakhali-donation-button').addEventListener('click', function (event) {

    //Prevent the default behaviour or not to reload the page.
    event.preventDefault();

    const donationAmount = getInputValueByID('noakhali-donation-input');
    const myCurrentBalance = getTextValueByID('my-current-balance');
    const noakhaliCurrentBalance = getTextValueByID('noakhali-current-amount');
    console.log(donationAmount, myCurrentBalance, noakhaliCurrentBalance);

    if (donationAmount > myCurrentBalance || isNaN(donationAmount)) {
        alert('Invalid amount. Please try again.');
        return;
    }

    const myNewBalance = myCurrentBalance - donationAmount;
    document.getElementById('my-current-balance').innerText = myNewBalance;

    const noakhaliNewBalance = noakhaliCurrentBalance + donationAmount;
    document.getElementById('noakhali-current-amount').innerText = noakhaliNewBalance;

})



// Donation Process for Feni.
document.getElementById('feni-donation-button').addEventListener('click', function (event) {

    //Prevent the default behaviour or not to reload the page.
    event.preventDefault();

    const donationAmount = getInputValueByID('feni-donation-input');
    const myCurrentBalance = getTextValueByID('my-current-balance');
    const feniCurrentBalance = getTextValueByID('feni-current-amount');
    console.log(donationAmount, myCurrentBalance, feniCurrentBalance);

    if (donationAmount > myCurrentBalance || isNaN(donationAmount)) {
        alert('Invalid amount. Please try again.');
        return;
    }

    const myNewBalance = myCurrentBalance - donationAmount;
    document.getElementById('my-current-balance').innerText = myNewBalance;

    const feniNewBalance = feniCurrentBalance + donationAmount;
    document.getElementById('feni-current-amount').innerText = feniNewBalance;

})



// Donation Process for Quota Movement.
document.getElementById('quota-donation-button').addEventListener('click', function (event) {

    //Prevent the default behaviour or not to reload the page.
    event.preventDefault();

    const donationAmount = getInputValueByID('quota-donation-input');
    const myCurrentBalance = getTextValueByID('my-current-balance');
    const quotaCurrentBalance = getTextValueByID('quota-current-amount');
    console.log(donationAmount, myCurrentBalance, quotaCurrentBalance);

    if (donationAmount > myCurrentBalance || isNaN(donationAmount)) {
        alert('Invalid amount. Please try again.');
        return;
    }

    const myNewBalance = myCurrentBalance - donationAmount;
    document.getElementById('my-current-balance').innerText = myNewBalance;

    const quotaNewBalance = quotaCurrentBalance + donationAmount;
    document.getElementById('quota-current-amount').innerText = quotaNewBalance;

})
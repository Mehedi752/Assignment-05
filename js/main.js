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


    // Added Transaction History.
    const newEntry = document.createElement('div');

    // Added Some Class.
    newEntry.classList.add('w-full');
    newEntry.classList.add('mt-[30px]');
    newEntry.classList.add('p-[32px]');
    newEntry.classList.add('border');
    newEntry.classList.add('border-solid');
    newEntry.classList.add('rounded-[16px]');
    newEntry.classList.add('border-[#1111111A/10]');

    //Added an innerHTML.
    newEntry.innerHTML =
        `<p class="font-bold">${donationAmount} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
        Date :  ${formatCurrentDate()} GMT +0600 (Bangladesh Standard Time)`
    document.getElementById('transaction-container').appendChild(newEntry);

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




    // Added Transaction History.
    const newEntry = document.createElement('div');

    // Added Some Class.
    newEntry.classList.add('w-full');
    newEntry.classList.add('mt-[30px]');
    newEntry.classList.add('p-[32px]');
    newEntry.classList.add('border');
    newEntry.classList.add('border-solid');
    newEntry.classList.add('rounded-[16px]');
    newEntry.classList.add('border-[#1111111A/10]');

    //Added an innerHTML.
    newEntry.innerHTML =
        `<p class="font-bold">${donationAmount} Taka is Donated for Flood Relief in Feni, Bangladeshh</p>
         Date :  ${formatCurrentDate()} GMT +0600 (Bangladesh Standard Time)`
    document.getElementById('transaction-container').appendChild(newEntry);

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



    // Added Transaction History.
    const newEntry = document.createElement('div');

    // Added Some Class.
    newEntry.classList.add('w-full');
    newEntry.classList.add('mt-[30px]');
    newEntry.classList.add('p-[32px]');
    newEntry.classList.add('border');
    newEntry.classList.add('border-solid');
    newEntry.classList.add('rounded-[16px]');
    newEntry.classList.add('border-[#1111111A/10]');

    //Added an innerHTML.
    newEntry.innerHTML =
        `<p class="font-bold">${donationAmount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
         Date :  ${formatCurrentDate()} GMT +0600 (Bangladesh Standard Time)`
    document.getElementById('transaction-container').appendChild(newEntry);

})



// Transaction Process.
document.getElementById('history-button').addEventListener('click', function () {
    document.getElementById('donation-part').classList.add('hidden');
    document.getElementById('transaction-container').classList.remove('hidden');
})

document.getElementById('donation-button').addEventListener('click', function () {
    document.getElementById('transaction-container').classList.add('hidden');
    document.getElementById('donation-part').classList.remove('hidden');
})
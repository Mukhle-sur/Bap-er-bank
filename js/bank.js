// frist ckick handeler added to deposite button 
document.getElementById('deposite-button').addEventListener('click', function () {
    // second get input to find input 
    const depositeField = document.getElementById('user-deposite');
    // third get input value
    const newDepositeAmountString = depositeField.value;
    // 4 find input to empty from
    depositeField.value = '';
    // 5 convert string to number 
    const newDepositeAmount = parseFloat(newDepositeAmountString);

    // 6th get deposite previus amount
    const depositetTotal = document.getElementById('deposite-total');
    // 7th deposite amaunt er inner text get.
    const previusAmountString = depositetTotal.innerText;
    // 8 convert string to number 
    const previusAmount = parseFloat(previusAmountString);
    // 9 than sum of newDpositeamount and previus amount total get
    const totalAddAmount = newDepositeAmount + previusAmount
    // 10then output to deposite totatAmount
    depositetTotal.innerText = totalAddAmount;

    // 11 get output deposite amount and previous total balance sum and output to new total balance
    const previusTotalBalance = document.getElementById('Balance-total')
    const balanceString = previusTotalBalance.innerText;
    const balance = parseFloat(balanceString);
    const totalBalance = balance + totalAddAmount;
    previusTotalBalance.innerText = totalBalance;
})

// withdeow area 

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawField = document.getElementById('user-withdrow');
    const withdrawAmountString = withdrawField.value;
    withdrawField.value = '';
    const newWithdrawAmount = parseFloat(withdrawAmountString);

    const withdrowTotalElement = document.getElementById('withdrow');
    const prevWithdTotalStr = withdrowTotalElement.innerText;
    const previousWithdTotal = parseFloat(prevWithdTotalStr);


    const previusTotalBalance = document.getElementById('Balance-total')
    const balanceString = previusTotalBalance.innerText;
    const balance = parseFloat(balanceString);

    if (newWithdrawAmount > balance) {
        alert("Bap er Bank e eto tk na");
        return;
    }

    const currentWithdrowTotla = newWithdrawAmount + previousWithdTotal;
    withdrowTotalElement.innerText = currentWithdrowTotla;


    const totalBalance = balance - currentWithdrowTotla;
    previusTotalBalance.innerText = totalBalance;
})
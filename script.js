
document.getElementById("MainCalculation").addEventListener('click', function(){
    let food = document.getElementById("Food").value;
    let rent = document.getElementById("Rent").value;
    let clothes = document.getElementById("Cloths").value;
    let Income = document.getElementById("Income").value;

    let foodInt = parseFloat(food);
    let rentInt = parseFloat(rent);
    let clothesInt = parseFloat(clothes);

    let totalExpense = foodInt + rentInt + clothesInt;
    let totalExpenseValue = document.getElementById("totalExpenses").innerText;
    let totalExpensesParse = parseFloat(totalExpenseValue);
    let connectWithTotalExpense = totalExpensesParse + totalExpense
    document.getElementById("totalExpenses").innerText = connectWithTotalExpense

    if(document.getElementById("Income").value){
        let incomeFLoat = parseFloat(Income)
        let existingIncome = incomeFLoat - totalExpense  ;
        let RemainingBal = document.getElementById("remainingBal").innerText;
    
        let remainingBalFloat = parseFloat(RemainingBal)
        let totalexistingIncome = existingIncome + remainingBalFloat;
        document.getElementById("remainingBal").innerText = totalexistingIncome;
        document.getElementById("error1").innerText = "";
    }
    else{
        document.getElementById("error1").innerText = "Please insert your income to see the balance"
    }

    
    

})

document.getElementById("SavingSBtn").addEventListener('click', function(){
   if(document.getElementById("Income").value){
    let savingParsent = document.getElementById('savingParsent').value;
    let savingParsentFloat = parseFloat(savingParsent);
    let Income = document.getElementById("Income").value;
    let incomeFLoat = parseFloat(Income)
    let totalSaving = incomeFLoat * savingParsentFloat / 100;
    let SavingBalance = document.getElementById('SavingBalance').innerText
    let savingBalFLoat = parseFloat(SavingBalance);
     
    let totalSavingAMmount = savingBalFLoat + totalSaving;
    document.getElementById('SavingBalance').innerText = totalSavingAMmount;

    let totalBalance = incomeFLoat - totalSaving;

    let MainReamingBal = document.getElementById("MainReamingBal").innerText;

    let mainReamingBalFloat = parseFloat(MainReamingBal)

    let totalBalOfSaving = totalBalance + mainReamingBalFloat

    document.getElementById("MainReamingBal").innerText = totalBalOfSaving;
   }
   else{
    document.getElementById("error-2").innerText = "Please insert the income to see the savings"
    
   }
    

})

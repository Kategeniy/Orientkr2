function checkAmount() {
    var amount = parseInt(document.getElementById('amount').value);
    var result = document.getElementById('result');
    var resultStatus = document.getElementById('result-status'); 
    

    result.classList.add('hidden');
    
    if (isNaN(amount) || amount <= 0) {
        result.textContent = "Пожалуйста, введите положительную сумму.";
        result.style.color = "red";
        result.classList.remove('hidden');
        resultStatus.value = "Невозможно"; 
        return;
    }

    var remainingAmount = amount;
    var notes500 = Math.floor(remainingAmount / 500);
    remainingAmount -= notes500 * 500;
    
    var notes100 = Math.floor(remainingAmount / 100);
    remainingAmount -= notes100 * 100;
    
    var notes10 = Math.floor(remainingAmount / 10);
    remainingAmount -= notes10 * 10;
    
    var coins2 = Math.floor(remainingAmount / 2);
    remainingAmount -= coins2 * 2;

    if (remainingAmount > 0) {
        result.textContent = "Невозможно разменять данную сумму.";
        result.style.color = "red";
        resultStatus.value = "Невозможно"; 
    } else {
        result.textContent = "Возможно разменять сумму: 500x" + notes500 + ", 100x" + notes100 + ", 10x" + notes10 + ", 2x" + coins2;
        result.style.color = "green";
        resultStatus.value = "Возможно";  
    }

    result.classList.remove('hidden');
}
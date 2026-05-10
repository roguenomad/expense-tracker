document.addEventListener('DOMContentLoaded', () => {
    const expenseForm = document.getElementById('expense-form');
    const monthSelect = document.getElementById('month');
    const yearSelect = document.getElementById('year');
    const amountInput = document.getElementById('amount');
    const expenseChart = document.getElementById('expense-chart');

    //Generate year options dynamically

    for (let year = 2020; year <= 2040; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }

    //Initialize expenses object with categories

    const expenses = {
        January: {Rent: 0, Food: 0, Transportation: 0, Bills: 0, Miscellaneous: 0 },
        Febuary: {Rent: 0, Food: 0, Transportation: 0, Bills: 0, Miscellaneous: 0 },
        March: {Rent: 0, Food: 0, Transportation: 0, Bills: 0, Miscellaneous: 0 },
        April: {Rent: 0, Food: 0, Transportation: 0, Bills: 0, Miscellaneous: 0 },
        May: {Rent: 0, Food: 0, Transportation: 0, Bills: 0, Miscellaneous: 0 },
        June: {Rent: 0, Food: 0, Transportation: 0, Bills: 0, Miscellaneous: 0 },
        July: {Rent: 0, Food: 0, Transportation: 0, Bills: 0, Miscellaneous: 0 },
        August: {Rent: 0, Food: 0, Transportation: 0, Bills: 0, Miscellaneous: 0 },
        September: {Rent: 0, Food: 0, Transportation: 0, Bills: 0, Miscellaneous: 0 },
        October: {Rent: 0, Food: 0, Transportation: 0, Bills: 0, Miscellaneous: 0 },
        November: {Rent: 0, Food: 0, Transportation: 0, Bills: 0, Miscellaneous: 0 },
        December: {Rent: 0, Food: 0, Transportation: 0, Bills: 0, Miscellaneous: 0 },
    };

    console.log(expenses.November);

    //Set default month and year based on current month and year

    function setDefaultMonthYear() {
        const now = new Date();
        const initialMonth = now.toLocaleString('default', { month: 'long'});
        const initialYear = now.getFullYear();
        monthSelect.value = initialMonth;
        yearSelect.value = initialYear;
    }

    setDefaultMonthYear();

});
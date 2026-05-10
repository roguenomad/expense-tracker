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

    // Load expenses
    function getExpensesFromLocalStorage(month, year) {
        const key = `${month}-${year}`;
        return JSON.parse(localStorage.getItem(key)) || {};
    }

    // Save expenses

    function saveExpensesToLocalStorage(month, year) {
        const key = `${month}-${year}`;
        localStorage.setItem(key, JSON.stringify(expenses[month]));
    }

    //Update Chart
    function updateChart () {
        const ctx = expenseChart.getContext('2d');
        
        new Chart(ctx, {
            type: 'bar',
            data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1
            }]
            },
            options: {
            scales: {
                y: {
                beginAtZero: true
                }
            }
            }
        });
    }

    // Handle form submission
    function handleSubmit(event) {
        event.preventDefault();
        
        const selectedMonth = monthSelect.value;
        const selectedYear = yearSelect.value;
        const category = event.target.category.value;
        const amount = parseFloat(event.target.amount.value);

        if (!selectedMonth || !selectedYear) {
            alert("Month or year not selected");
            return;
        }

        if (!expenses[selectedMonth]) {
            expenses[selectedMonth] = { Rent: 0, Food: 0, Transportation: 0, Bills: 0, Miscellaneous: 0 };
        }

        const expenseData = getExpensesFromLocalStorage(selectedMonth, selectedYear);
        Object.assign(expenses[selectedMonth], expenseData);

        const currentAmount = expenses[selectedMonth][category] || 0;

        if (amount > 0) {
            expenses[selectedMonth][category] = currentAmount + amount;
        } else if (amount < 0 && currentAmount >= Math.abs(amount)) {
             expenses[selectedMonth][category] = currentAmount + amount;
        } else {
            alert('Invalid amount: Amount cannot be below zero');
        }

        console.log(expenses[selectedMonth], expenses[selectedMonth][category]);
        saveExpensesToLocalStorage(selectedMonth, selectedYear);
        amountInput.value = "";
    }

    expenseForm.addEventListener('submit', handleSubmit);

    //Set default month and year based on current month and year

    function setDefaultMonthYear() {
        const now = new Date();
        const initialMonth = now.toLocaleString('default', { month: 'long'});
        const initialYear = now.getFullYear();
        monthSelect.value = initialMonth;
        yearSelect.value = initialYear;
    }

    setDefaultMonthYear();
    updateChart();
});
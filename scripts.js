const creditCheckboxes = document.querySelectorAll('.credit-checkbox');
const totalCreditsElement = document.getElementById('total-credits');

function calculateTotalCredits() {
    let totalCredits = 0;

    creditCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            totalCredits += parseFloat(checkbox.dataset.credits);
        }
    });
    totalCreditsElement.textContent = totalCredits;
}

creditCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', calculateTotalCredits);
});

calculateTotalCredits();

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

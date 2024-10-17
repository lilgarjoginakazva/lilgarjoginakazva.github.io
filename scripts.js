// Select all credit checkboxes
const creditCheckboxes = document.querySelectorAll('.credit-checkbox');
const totalCreditsElement = document.getElementById('total-credits');

// Function to calculate total credits passed
function calculateTotalCredits() {
    let totalCredits = 0;
    
    // Loop through each checkbox
    creditCheckboxes.forEach(checkbox => {
        // If the checkbox is checked, add its data-credits value to totalCredits
        if (checkbox.checked) {
            totalCredits += parseFloat(checkbox.dataset.credits);
        }
    });
    
    // Update the total credits element with the calculated total
    totalCreditsElement.textContent = totalCredits;
}

// Add event listeners to each checkbox
creditCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', calculateTotalCredits);
});

// Initial calculation on page load
calculateTotalCredits();

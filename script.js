
// Function to update the counter
function updateCounter() {
    // the value of active count is set to the number of elements which have the notifications and active classes
    const activeCount = document.querySelectorAll('.notifications.active').length; // select all the elements with both classes, .lenght gives the total elements with the classes present 
    // select the counter element and alter its textContent to display the activeCount constant
    document.querySelector('.counter').textContent = activeCount;

}

function markAllAsRead() { 
    // redeclare the variables, since they've been declared in other block-scoped level elements only
    const activeNotis = document.querySelectorAll('.notifications.active');
    activeNotis.forEach((noti) => {
        noti.classList.remove('active');

        const redDot = noti.querySelector('.red-dot');
        if (redDot) {
            redDot.style.display = 'none';
        }
    });

    updateCounter();
}

// Select all active notifications
const activeNotis = document.querySelectorAll('.notifications.active');

activeNotis.forEach((noti) => {
    noti.addEventListener('click', () => {
        // removes the class 'active' of the elements, which contains the bg color, thus removing the bg color on click
        noti.classList.remove('active');

        // declare a const referencing the div with the class '.red-dot'
        const redDot = noti.querySelector('.red-dot');
        // if redDot = 'true', on click make it be displayed as 'none'.
        if (redDot) {
            redDot.style.display = 'none';
        }

        // after themoving the active class and red dot, we call the function to update the counter, to ensure the number displayed reflect with the current number of notis containing the active class

        updateCounter();
    });
});

// add an event listener to the button that runs the function 'markAllAsRead'
document.querySelector('.noti-btn').addEventListener('click', markAllAsRead);

// updates the function initially when the script first runs, to ensure the counter is active based on the initial nr of the notifications holding the acrive class 
updateCounter();













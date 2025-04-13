const currentDate = new Date();

const lastVisit = localStorage.getItem('lastVisit');

if (!lastVisit) {
    document.getElementById('visitor-message').textContent = 'Welcome! Let us know if you have any questions.';   
}
else {
    const lastVisitDate = new Date(lastVisit);
    const timeDifference = currentDate-lastVisitDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference < 1) {
        document.getElementById('visitor-message').textContent = 'Back so soon? Awesome!';   
    }
    else {
        let dayText = daysDifference === 1 ? 'day' : 'days';
        document.getElementById('visitor-message').textContent = `You last visited ${daysDifference} ${dayText} ago.`;
    }
}

localStorage.setItem('lastVisit', currentDate.toISOString());

const message = document.getElementById('visitor-section');

message.addEventListener('click', () => {
    message.style.display = 'none';
});
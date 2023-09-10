const events = [
    { date: '2017', description: 'Started high school' },
    { date: '2019', description: 'Graduated from high school' },
    { date: '2023', description: 'Graduated from college' },
    // Add more events here
];

// Function to generate the HTML for the timeline
function generateTimelineHTML() {
    const timeline = document.getElementById('timeline');

    events.forEach(event => {
        const eventHTML = `
            <div class="timeline-event">
                <div class="event-date">${event.date}</div>
                <div class="event-description">${event.description}</div>
            </div>
        `;
        timeline.innerHTML += eventHTML;
    });
}

// Call the function to generate the timeline
generateTimelineHTML();


function toggleMode() {
    const body = document.body;

    // Check if the current mode is dark
    if (body.classList.contains("dark-mode")) {
        // Switch to light mode
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
    } else {
        // Switch to dark mode
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
    }
}
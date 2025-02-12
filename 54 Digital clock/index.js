// DIGITAL CLOCK PROGRAM

// Function to update the clock every second
function updateClock() {
    // Get the current date and time
    const now = new Date();

    // Extract the current hour and determine AM/PM
    let hours = now.getHours(); // Get the hour in 24-hour format
    const meridiem = hours >= 12 ? "PM" : "AM"; // Determine AM or PM

    // Convert hours to 12-hour format (adjust for 12 AM and 12 PM)
    hours = hours % 12 || 12; // If hours is 0 (midnight), set it to 12

    // Ensure hours are always 2 digits (e.g., "02" instead of "2")
    hours = hours.toString().padStart(2, 0);

    // Extract minutes and ensure they are 2 digits
    const minutes = now.getMinutes().toString().padStart(2, 0);

    // Extract seconds and ensure they are 2 digits
    const seconds = now.getSeconds().toString().padStart(2, 0);

    // Format the time string as "HH:MM:SS AM/PM"
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;

    // Update the content of the HTML element with ID "clock" to display the time
    document.getElementById("clock").textContent = timeString;
}

// Call the function immediately to display the time when the page loads
updateClock();

// Set an interval to update the clock every second (1000 milliseconds)
setInterval(updateClock, 1000);

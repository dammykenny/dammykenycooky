// Get the display element where the stopwatch time will be shown
const display = document.getElementById("display");

// Variables to keep track of the timer state and elapsed time
let timer = null;       // Holds the setInterval ID for the timer
let startTime = 0;      // The time when the stopwatch starts
let elapsedTime = 0;    // Total elapsed time in milliseconds
let isRunning = false;  // Indicates whether the stopwatch is currently running

// Function to start the stopwatch
function start() {
    if (!isRunning) { // Ensure the stopwatch is not already running
        // Set the start time to the current time minus any previously elapsed time
        startTime = Date.now() - elapsedTime;

        // Start the timer to update the display every 10 milliseconds
        timer = setInterval(Update, 10);

        // Set the running state to true
        isRunning = true;
    }
}

// Function to stop the stopwatch
function stop() {
    if (isRunning) { // Ensure the stopwatch is running before stopping
        // Clear the timer interval to stop updating the display
        clearInterval(timer);

        // Calculate the total elapsed time up to the stop moment
        elapsedTime = Date.now() - startTime;

        // Set the running state to false
        isRunning = false;
    }
}

// Function to reset the stopwatch
function reset() {
    // Clear the timer interval to stop any ongoing updates
    clearInterval(timer);

    // Reset all variables to their initial states
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;

    // Reset the display to the initial time format
    display.textContent = "00:00:00:00";
}

// Function to update the stopwatch display
function Update() {
    // Get the current time
    const currentTime = Date.now();

    // Calculate the total elapsed time
    elapsedTime = currentTime - startTime;

    // Convert elapsed time into hours, minutes, seconds, and milliseconds
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60)); // Calculate hours
    let minutes = Math.floor(elapsedTime / (1000 * 60)) % 60; // Calculate minutes
    let seconds = Math.floor(elapsedTime / 1000) % 60; // Calculate seconds
    let milliseconds = Math.floor((elapsedTime % 1000) / 10); // Calculate milliseconds (2-digit precision)

    // Pad hours, minutes, seconds, and milliseconds with leading zeros if needed
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    // Update the display with the formatted time
    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

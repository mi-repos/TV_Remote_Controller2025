let powerStatus = false;
let currentChannel = 1;
let currentVolume = 10;

const powerButton = document.getElementById("power");
const volumeUpButton = document.getElementById("volume-up");
const volumeDownButton = document.getElementById("volume-down");
const channelUpButton = document.getElementById("channel-up");
const channelDownButton = document.getElementById("channel-down");
const screenOutput = document.getElementById("screen-output");
const tvStatus = document.getElementById("tv-status");
const channelDisplay = document.getElementById("channel");
const volumeDisplay = document.getElementById("volume");

// Update TV screen based on state
function updateScreen() {
    if (!powerStatus) {
        tvStatus.textContent = "Power: OFF";
        channelDisplay.textContent = "Channel: --";
        volumeDisplay.textContent = "Volume: --";
    } else {
        tvStatus.textContent = "Power: ON";
        channelDisplay.textContent = `Channel: ${currentChannel}`;
        volumeDisplay.textContent = `Volume: ${currentVolume}`;
    }
}

// Power toggle
powerButton.addEventListener("click", function () {
    powerStatus = !powerStatus;
    updateScreen();
});

// Volume up
volumeUpButton.addEventListener("click", function () {
    if (powerStatus && currentVolume < 100) {
        currentVolume++;
        updateScreen();
    }
});

// Volume down
volumeDownButton.addEventListener("click", function () {
    if (powerStatus && currentVolume > 0) {
        currentVolume--;
        updateScreen();
    }
});

// Channel up
channelUpButton.addEventListener("click", function () {
    if (powerStatus && currentChannel < 100) {
        currentChannel++;
        updateScreen();
    }
});

// Channel down
channelDownButton.addEventListener("click", function () {
    if (powerStatus && currentChannel > 1) {
        currentChannel--;
        updateScreen();
    }
});

// Number buttons
const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(button => {
    button.addEventListener("click", function () {
        if (powerStatus) {
            currentChannel = parseInt(this.getAttribute("data-number"));
            updateScreen();
        }
    });
});

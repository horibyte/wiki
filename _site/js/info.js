var intervalId;

function displayUserAgent() {
  var userAgentString = navigator.userAgent;
  var originalText = '<span>Build 1.0.1.367.main.250515-1422</span><br>';
  var htmlContent = originalText; // Default to original text

  const isLocalhost = window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost";

  document.getElementById('userAgent').innerHTML = htmlContent;
}

function updateDateTime() {
    var now = new Date();
    var options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };
  
    var dateTimeString = now.toLocaleString(undefined, options);
  
    // Get the timezone offset in minutes
    var offset = now.getTimezoneOffset();
    var sign = offset < 0 ? '+' : '-';
    var hours = Math.abs(offset / 60);
    var minutes = Math.abs(offset % 60);
  
    var gmtOffset = `GMT${sign}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    var htmlContent = '<i class="fas fa-user-clock"></i>&nbsp;' + dateTimeString + ` (${gmtOffset})`;
    document.getElementById('dateTime').innerHTML = htmlContent;
  }

function handleShiftKeyPress(event) {
  if (event.keyCode === 16) {
    displayUserAgent();
    updateDateTime();
    // Start the interval only if it's not already running
    if (!intervalId) {
      intervalId = setInterval(updateDateTime, 1000);
    }
  }
}

function handleShiftKeyRelease(event) {
  if (event.keyCode === 16) {
    // Clear the interval if it's running
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null; // Reset intervalId to prevent unexpected behavior
    }
    document.getElementById('userAgent').innerHTML = '';
    document.getElementById('dateTime').innerHTML = '';
  }
}

document.addEventListener('keydown', handleShiftKeyPress);
document.addEventListener('keyup', handleShiftKeyRelease);
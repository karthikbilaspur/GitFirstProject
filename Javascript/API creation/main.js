const progressText = 
    document.getElementById('progressText');
const progressBar = 
    document.getElementById('progressBar');
const gradientEnd = 
    document.getElementById('gradientEnd');

let progress = 0;
const updateInterval = 50;
const maxProgress = 65;

function updateProgress() {
    progress++;
    if (progress > maxProgress) {
        clearInterval(interval);
        progress = maxProgress;
    }
    progressText.textContent = 
        progress + '%';
    progressBar.style.strokeDashoffset = 
        520 - (520 * progress) / 100;

    const gradientProgress = progress / maxProgress;
    gradientEnd.setAttribute('offset', 
        `${gradientProgress * 100}%`);
}

updateProgress();
const interval = setInterval(updateProgress, updateInterval);

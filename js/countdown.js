/**
 * COUNTDOWN BANNER
 * Manages the countdown timer and scroll behavior
 */

class CountdownBanner {
    constructor() {
        this.banner = document.getElementById('countdownBanner');
        this.hoursEl = document.getElementById('hoursCountdown');
        this.minutesEl = document.getElementById('minutesCountdown');
        this.secondsEl = document.getElementById('secondsCountdown');
        this.lastScrollY = window.scrollY;
        this.scrollThreshold = 100; // Pixels to scroll before hiding
        this.countdownInterval = null;
        this.init();
    }

    init() {
        if (!this.banner) return;

        // Start countdown
        this.updateCountdown();
        this.countdownInterval = setInterval(() => this.updateCountdown(), 1000);

        // Handle scroll behavior
        window.addEventListener('scroll', () => this.handleScroll());

        // Handle visibility when page loads at scrolled position
        if (window.scrollY > this.scrollThreshold) {
            this.banner.classList.add('hidden');
            document.body.classList.add('banner-hidden');
        }
    }

    updateCountdown() {
        const now = new Date();
        const midnight = new Date();
        midnight.setHours(24, 0, 0, 0);

        const timeLeft = midnight - now;

        if (timeLeft <= 0) {
            // Reset to next day at midnight
            this.hoursEl.textContent = '00';
            this.minutesEl.textContent = '00';
            this.secondsEl.textContent = '00';
            return;
        }

        const hours = Math.floor(timeLeft / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        this.hoursEl.textContent = String(hours).padStart(2, '0');
        this.minutesEl.textContent = String(minutes).padStart(2, '0');
        this.secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    handleScroll() {
        const currentScrollY = window.scrollY;

        if (currentScrollY > this.scrollThreshold && currentScrollY > this.lastScrollY) {
            // Scrolling down past threshold - hide banner
            this.banner.classList.add('hidden');
            document.body.classList.add('banner-hidden');
        } else if (currentScrollY <= this.scrollThreshold) {
            // Scrolled back to top - show banner
            this.banner.classList.remove('hidden');
            document.body.classList.remove('banner-hidden');
        }

        this.lastScrollY = currentScrollY;
    }

    destroy() {
        if (this.countdownInterval) {
            clearInterval(this.countdownInterval);
        }
    }
}

// Initialize the countdown banner when the DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new CountdownBanner();
    });
} else {
    new CountdownBanner();
}

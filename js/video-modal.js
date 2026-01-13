/**
 * VIDEO MODAL
 * Manages the video modal for trailers
 */

class VideoModal {
    constructor() {
        this.modal = document.getElementById('videoModal');
        this.closeBtn = document.getElementById('closeVideoModal');
        this.video = document.getElementById('videoPlayer');
        this.init();
    }

    init() {
        if (!this.modal) return;

        // Close button click
        this.closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.hide();
        });

        // Prevent clicks on video content from closing the modal
        const videoContent = this.modal.querySelector('.video-modal-content');
        if (videoContent) {
            videoContent.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }

        // Close on overlay click (click outside video)
        this.modal.addEventListener('click', (e) => {
            this.hide();
        });

        // Close on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.hide();
            }
        });

        // Listen for video trigger events
        this.setupTriggers();
    }

    setupTriggers() {
        // Delegate event for dynamically created elements
        document.addEventListener('click', (e) => {
            // Check if clicked element or its parent has data-video-trigger
            const trigger = e.target.closest('[data-video-trigger]');
            if (trigger) {
                e.preventDefault();
                this.show();
            }
        });
    }

    show() {
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Play video automatically when modal opens
        if (this.video) {
            this.video.currentTime = 0;
            this.video.play().catch(err => {
                console.log('Video autoplay prevented:', err);
            });
        }
    }

    hide() {
        this.modal.classList.remove('active');
        document.body.style.overflow = '';

        // Pause and reset video when modal closes
        if (this.video) {
            this.video.pause();
            this.video.currentTime = 0;
        }
    }
}

// Initialize the video modal when the DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new VideoModal();
    });
} else {
    new VideoModal();
}

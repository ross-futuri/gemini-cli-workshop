document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.getElementById('next-btn');
    const backBtn = document.getElementById('back-btn');
    const progressBar = document.querySelector('.progress-bar');

    let currentSlide = 0;

    function getSlideIndexFromHash() {
        const slideId = window.location.hash.substring(1);
        if (slideId) {
            const slideIndex = Array.from(slides).findIndex(slide => slide.id === slideId);
            return slideIndex !== -1 ? slideIndex : 0;
        }
        return 0;
    }

    function updatePresentation(isInitialLoad = false) {
        // On initial load, immediately set the correct current slide without transitions
        if (isInitialLoad) {
            currentSlide = getSlideIndexFromHash();
        }

        slides.forEach((slide, index) => {
            // Temporarily disable transitions during initial setup to prevent flashes
            if (isInitialLoad) {
                slide.style.transition = 'none';
            }

            slide.classList.remove('active', 'previous');
            if (index === currentSlide) {
                slide.classList.add('active');
            } else if (index < currentSlide) {
                slide.classList.add('previous');
            }

            // Restore transitions after the initial setup
            if (isInitialLoad) {
                // Use a timeout to ensure the styles are applied before re-enabling transitions
                setTimeout(() => {
                    slide.style.transition = '';
                }, 50);
            }
        });

        // Update URL hash, but not on initial load or hash change event
        if (!isInitialLoad) {
             const slideId = slides[currentSlide].id;
             // Use replaceState to avoid polluting browser history on every step
             history.replaceState(null, null, `#${slideId}`);
        }

        // Update progress bar
        const progress = slides.length > 1 ? (currentSlide / (slides.length - 1)) * 100 : 0;
        progressBar.style.width = `${progress}%`;
    }

    function showNextSlide() {
        if (currentSlide < slides.length - 1) {
            currentSlide++;
            updatePresentation();
        }
    }

    function showBackSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            updatePresentation();
        }
    }

    // Event Listeners
    nextBtn.addEventListener('click', showNextSlide);
    backBtn.addEventListener('click', showBackSlide);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            showNextSlide();
        } else if (e.key === 'ArrowLeft') {
            showBackSlide();
        }
    });

    window.addEventListener('hashchange', () => {
        currentSlide = getSlideIndexFromHash();
        updatePresentation();
    });

    // Initial Load
    updatePresentation(true);
});

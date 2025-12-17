document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');
    const videoThumb = document.getElementById("thumb");
    const playerBox = document.getElementById("playerBox");

    // 1. Toggle Menu
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Change icon from Bars to X
            const icon = hamburger.querySelector('i');
            if (icon) {
                if (navLinks.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }

    // 2. Video Player Logic (YouTube Embed)
    // We check if 'videoThumb' exists to avoid errors on pages without the video
    if (videoThumb && playerBox) {
        videoThumb.addEventListener("click", function () {
            playerBox.innerHTML = `
                <iframe width="100%" height="400"
                    src="https://www.youtube.com/embed/Y3NKkyleyBE?autoplay=1"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen>
                </iframe>`;
        });
    }

    // 3. Close menu when a link is clicked (UX improvement)
    if (navItems) {
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    
                    // Reset the icon back to bars
                    const icon = hamburger.querySelector('i');
                    if (icon) {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            });
        });
    }
});
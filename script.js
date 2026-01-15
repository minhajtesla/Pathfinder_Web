document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Download button interaction
    const downloadBtn = document.getElementById('downloadBtn');
    
    downloadBtn.addEventListener('click', (e) => {
        // Optional: Add analytics or confirmation here
        const isPlaceholder = downloadBtn.getAttribute('href').includes('YOUR_GITHUB');
        
        if (isPlaceholder) {
            e.preventDefault();
            alert('Please replace "YOUR_GITHUB_APK_LINK_HERE" in index.html with your actual GitHub APK link!');
        } else {
            console.log('Download started');
            // Add a visual feedback
            downloadBtn.innerHTML = `
                <div class="icon-container">
                    <i class="fa-solid fa-check"></i>
                </div>
                <div class="btn-text">
                    <span class="small-text">Downloading...</span>
                    <span class="big-text">Thank You!</span>
                </div>
            `;
            
            setTimeout(() => {
                downloadBtn.innerHTML = `
                    <div class="icon-container">
                        <i class="fa-brands fa-android"></i>
                    </div>
                    <div class="btn-text">
                        <span class="small-text">Download for</span>
                        <span class="big-text">Android</span>
                    </div>
                `;
            }, 3000);
        }
    });

    // Phone mockup 3D tilt effect on mouse move
    const heroVisual = document.querySelector('.hero-visual');
    const phone = document.querySelector('.phone-mockup');

    heroVisual.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        phone.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    heroVisual.addEventListener('mouseenter', () => {
        phone.style.transition = 'none';
    });

    heroVisual.addEventListener('mouseleave', () => {
        phone.style.transition = 'all 0.5s ease';
        phone.style.transform = `rotateY(-15deg) rotateX(10deg)`;
    });
});

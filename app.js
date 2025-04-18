const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');
const video4 = document.getElementById('projectVideo4');
const hoverSign = document.querySelector(".hover-sign");
const videoList = [video1, video2, video3, video4];
videoList.forEach(function (video) {
    video.addEventListener('mouseover', function () {
        video.play()
        hoverSign.classList.add("active")
    })
    video.addEventListener('mouseout', function () {
        video.pause();
        hoverSign.classList.remove("active")
    })
})





const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset: true
})
sr.reveal('.section-title', { delay: 300 });
sr.reveal('.section-title', { delay: 300 });
sr.reveal('.section-title', { delay: 300 });




// Create an Intersection Observer to detect when the element enters the viewport
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add the 'visible' class to trigger animation
            observer.unobserve(entry.target); // Stop observing the element after it comes into view
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% of the element is in view

// Select the element and observe it
document.querySelectorAll('.fadeInRight').forEach(element => {
    observer.observe(element);
});












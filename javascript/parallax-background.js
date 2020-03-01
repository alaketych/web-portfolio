function parallax(event) {
    this.querySelectorAll('.layer').forEach(layer => {
        let parallaxSpeed = layer.getAttribute('data-parallax')
        layer.style.transform = `translate(${event.clientX*parallaxSpeed/1000}px, ${event.clientY*parallaxSpeed/1000}px)`
    });
}

document.addEventListener('mousemove', parallax)
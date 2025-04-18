document.addEventListener("DOMContentLoaded", function() {
    const services = document.querySelectorAll('.service');
    const options = {
      threshold: 0.5
    };
  
    const observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = `${entry.target.dataset.delay}s`;
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, options);
  
    services.forEach((service, index) => {
      service.dataset.delay = index * 0.3;
      observer.observe(service);
    });
  });
  
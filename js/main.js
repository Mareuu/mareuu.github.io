const sections = document.querySelectorAll('.section');

const reveal = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        // Optional: stop observing once shown to optimize performance
        reveal.unobserve(entry.target); 
      }
    });
  },
  { 
    threshold: 0.1, // Triggers slightly earlier for smoother presentation
    rootMargin: "0px 0px -50px 0px"
  }
);

sections.forEach(section => reveal.observe(section));

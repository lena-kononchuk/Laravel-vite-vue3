export default {
    mounted(el) {
      const options = { threshold: 0.1 };

      const callback = (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            el.classList.add('animate-visible');
            el.classList.remove('before-visible');
          } else {
            el.classList.remove('animate-visible');
            el.classList.add('before-visible');
          }
        });
      };

      el.classList.add('before-visible');

      const observer = new IntersectionObserver(callback, options);
      observer.observe(el);
    }
  }

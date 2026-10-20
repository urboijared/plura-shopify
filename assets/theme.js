// PLURA — comportamiento mínimo; el tema funciona sin JavaScript.

(function () {
  const header = document.querySelector('[data-site-header]');
  if (header) {
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Cierra el menú móvil con Escape o al pasar a escritorio.
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  if (mobileMenu) {
    mobileMenu.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && mobileMenu.open) {
        mobileMenu.open = false;
        mobileMenu.querySelector('summary').focus();
      }
    });
    window.matchMedia('(min-width: 990px)').addEventListener('change', (mq) => {
      if (mq.matches) mobileMenu.open = false;
    });
  }

  // Actualiza precio y disponibilidad al cambiar de plan/variante.
  document.querySelectorAll('[data-product-form]').forEach((form) => {
    const dataEl = form.querySelector('[data-variants]');
    if (!dataEl) return;
    const variants = JSON.parse(dataEl.textContent);
    const priceEl = document.querySelector(`[data-price-for="${form.dataset.productForm}"]`);
    const submit = form.querySelector('[type="submit"]');

    form.addEventListener('change', (event) => {
      if (event.target.name !== 'id') return;
      const variant = variants.find((v) => String(v.id) === event.target.value);
      if (!variant) return;
      if (priceEl) {
        priceEl.querySelector('.price__current').textContent = variant.price;
        const compare = priceEl.querySelector('.price__compare');
        if (compare) compare.remove();
        if (variant.compare_at_price) {
          const s = document.createElement('s');
          s.className = 'price__compare';
          s.textContent = variant.compare_at_price;
          priceEl.querySelector('.price__current').after(s);
        }
        priceEl.classList.toggle('price--sale', Boolean(variant.compare_at_price));
      }
      if (submit) {
        submit.disabled = !variant.available;
        submit.querySelector('span').textContent = variant.available
          ? submit.dataset.labelAvailable
          : submit.dataset.labelSoldOut;
      }
      const url = new URL(window.location.href);
      url.searchParams.set('variant', variant.id);
      window.history.replaceState({}, '', url);
    });
  });
})();

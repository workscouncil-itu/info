document.addEventListener('DOMContentLoaded', function () {

    /* ── Active Nav Link ── */
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-menu a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    /* ── Header Shadow on Scroll ── */
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 20);
        }, { passive: true });
    }

    /* ── Hamburger Menu ── */
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navOverlay = document.querySelector('.nav-overlay');

    function closeNav() {
        if (!navMenu) return;
        navMenu.classList.remove('nav-open');
        if (hamburger) {
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.classList.remove('is-active');
        }
        if (navOverlay) navOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {
            const isOpen = navMenu.classList.toggle('nav-open');
            hamburger.setAttribute('aria-expanded', String(isOpen));
            hamburger.classList.toggle('is-active');
            if (navOverlay) navOverlay.classList.toggle('active', isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeNav);
        });

        if (navOverlay) {
            navOverlay.addEventListener('click', closeNav);
        }

        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') closeNav();
        });
    }

    /* ── Back to Top ── */
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            backToTop.classList.toggle('visible', window.scrollY > 400);
        }, { passive: true });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ── Scroll Reveal ── */
    const reveals = document.querySelectorAll('.reveal');
    if (reveals.length) {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

            reveals.forEach(el => observer.observe(el));
        } else {
            reveals.forEach(el => el.classList.add('visible'));
        }
    }

    /* ── Blog Post Modals ── */
    const blogCards = document.querySelectorAll('.blog-card.expandable');
    if (blogCards.length) {

        // Inject modal HTML once
        document.body.insertAdjacentHTML('beforeend', `
            <div class="post-modal" id="postModal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
                <div class="post-modal-container">
                    <button class="post-modal-close" aria-label="Close">&times;</button>
                    <div class="post-modal-meta">
                        <span class="blog-category" id="modalCategory"></span>
                        <time id="modalDate"></time>
                    </div>
                    <h2 class="post-modal-title" id="modalTitle"></h2>
                    <div class="post-modal-body" id="modalBody"></div>
                    <div class="post-modal-share">
                        <button class="post-modal-share-btn" id="modalShareBtn">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>
                            Copy link
                        </button>

                        <span class="post-modal-share-confirm" id="modalShareConfirm">Link copied!</span>
                    </div>
                </div>
            </div>`);

        const modal        = document.getElementById('postModal');
        const modalCat     = document.getElementById('modalCategory');
        const modalDate    = document.getElementById('modalDate');
        const modalTitle   = document.getElementById('modalTitle');
        const modalBody    = document.getElementById('modalBody');
        const modalClose   = modal.querySelector('.post-modal-close');
        const shareBtn     = document.getElementById('modalShareBtn');

        const shareConfirm = document.getElementById('modalShareConfirm');

        function openModal(card) {
            modalCat.textContent   = card.querySelector('.blog-category')?.textContent ?? '';
            modalDate.textContent  = card.querySelector('time')?.textContent ?? '';
            modalTitle.textContent = card.querySelector('h2')?.textContent ?? '';

            const img     = card.querySelector('.blog-card-image');
            const content = card.querySelector('.blog-card-content')?.innerHTML ?? '';
            modalBody.innerHTML = (img ? `<img src="${img.src}" alt="${img.alt}" class="post-modal-image">` : '') + content;

            modal.classList.add('open');
            document.body.style.overflow = 'hidden';

            if (card.id) history.pushState({ postId: card.id }, '', '#' + card.id);
            setTimeout(() => modalClose.focus(), 50);
        }

        function closeModal() {
            modal.classList.remove('open');
            document.body.style.overflow = '';
            if (window.location.hash) {
                history.pushState(null, '', window.location.pathname + window.location.search);
            }
        }

        // "Read more" opens modal
        blogCards.forEach(card => {
            card.querySelector('.expand-toggle')?.addEventListener('click', e => {
                e.stopPropagation();
                openModal(card);
            });
        });

        // Close handlers
        modalClose.addEventListener('click', closeModal);
        modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
        });

        // Copy link
        shareBtn.addEventListener('click', () => {
            const url = window.location.href;
            (navigator.clipboard
                ? navigator.clipboard.writeText(url)
                : Promise.resolve((() => {
                    const t = Object.assign(document.createElement('textarea'), { value: url });
                    document.body.appendChild(t); t.select();
                    document.execCommand('copy'); t.remove();
                })())
            ).then(() => {
                shareConfirm.classList.add('visible');
                setTimeout(() => shareConfirm.classList.remove('visible'), 2200);
            });
        });


        // Auto-open from URL hash
        function openFromHash() {
            const id = window.location.hash.slice(1);
            if (!id) return;
            const card = document.getElementById(id);
            if (card?.classList.contains('blog-card')) openModal(card);
        }
        openFromHash();

        // Browser back / forward
        window.addEventListener('popstate', () => {
            if (window.location.hash) {
                const card = document.getElementById(window.location.hash.slice(1));
                if (card?.classList.contains('blog-card')) { openModal(card); return; }
            }
            if (modal.classList.contains('open')) closeModal();
        });
    }

});

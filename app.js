/* ============================================================
   KFB STORE — 100% vanilla JavaScript application logic
   No frameworks, no build tools.
   ============================================================ */

(function() {
    'use strict';

    /* ====================== STATE ====================== */
    var state = {
        lang: localStorage.getItem('kfb_lang') || 'fr',
        theme: localStorage.getItem('kfb_theme') || 'light',
        route: 'home',
        params: {},
        favs: JSON.parse(localStorage.getItem('kfb_favs') || '[]'),
        search: '',
        orderProduct: null,
        toast: '',
    };

    function save() {
        localStorage.setItem('kfb_lang', state.lang);
        localStorage.setItem('kfb_theme', state.theme);
        localStorage.setItem('kfb_favs', JSON.stringify(state.favs));
    }

    function t() { return T[state.lang]; }

    function navigate(route, params) {
        state.route = route;
        state.params = params || {};
        window.scrollTo({ top: 0, behavior: 'smooth' });
        render();
    }

    function showToast(msg) {
        state.toast = msg;
        var el = document.getElementById('toast');
        if (!el) return;
        el.innerHTML = svg('check') + '<span>' + msg + '</span>';
        el.style.display = 'flex';
        clearTimeout(el._timer);
        el._timer = setTimeout(function() { el.style.display = 'none'; }, 3000);
    }

    function toggleFav(id) {
        var idx = state.favs.indexOf(id);
        if (idx === -1) state.favs.push(id);
        else state.favs.splice(idx, 1);
        save();
        updateFavBadge();
    }

    function isFav(id) { return state.favs.indexOf(id) !== -1; }

    function updateFavBadge() {
        var badge = document.querySelector('.fav-badge');
        if (badge) {
            badge.textContent = state.favs.length;
            badge.style.display = state.favs.length > 0 ? 'flex' : 'none';
        }
    }

    /* ====================== ICONS (inline SVG) ====================== */
    var ICONS = {
        smartphone: '<rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18"/>',
        tablet: '<rect x="4" y="2" width="16" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18"/>',
        laptop: '<rect x="3" y="4" width="18" height="12" rx="1"/><line x1="2" y1="20" x2="22" y2="20"/>',
        tv: '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',
        headphones: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>',
        watch: '<rect x="6" y="6" width="12" height="12" rx="3"/><path d="M9 2h6l1 4H8zM9 22h6l1-4H8z"/>',
        charge: '<path d="M11 2L5 12h5l-1 8 7-10h-5z"/>',
        battery: '<rect x="2" y="7" width="16" height="10" rx="2"/><line x1="22" y1="11" x2="22" y2="13"/><line x1="6" y1="12" x2="14" y2="12"/>',
        shield: '<path d="M12 2L4 6v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6z"/>',
        camera: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',
        storage: '<rect x="2" y="3" width="20" height="6" rx="1"/><rect x="2" y="15" width="20" height="6" rx="1"/><line x1="6" y1="6" x2="6" y2="6"/><line x1="6" y1="18" x2="6" y2="18"/>',
        gamepad: '<line x1="6" y1="11" x2="10" y2="11"/><line x1="8" y1="9" x2="8" y2="13"/><line x1="15" y1="12" x2="15.01" y2="12"/><line x1="18" y1="10" x2="18.01" y2="10"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.594l-1.58 10.526A2.532 2.532 0 0 0 4.17 22c.99 0 1.85-.59 2.28-1.45L8.4 17.6a2 2 0 0 1 1.79-1.1h3.62a2 2 0 0 1 1.79 1.1l1.95 3.95c.43.86 1.29 1.45 2.28 1.45a2.532 2.532 0 0 0 3.05-2.88l-1.58-10.526A4 4 0 0 0 17.32 5z"/>',
        keyboard: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M8 12h.01M12 12h.01M16 12h.01M7 16h10"/>',
        speaker: '<rect x="4" y="2" width="16" height="20" rx="2"/><circle cx="12" cy="14" r="5"/><line x1="12" y1="6" x2="12" y2="6"/>',
        cable: '<path d="M4 9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2zM4 9v6a4 4 0 0 0 4 4h2"/><path d="M20 15a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2zM20 15v-6a4 4 0 0 0-4-4h-2"/>',
        sun: '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>',
        usb: '<circle cx="12" cy="3" r="2"/><path d="M11 5v6l-4 4v5h2v-3l4-3 4 3v3h2v-5l-4-4V5"/>',
        book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
        briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
        clapperboard: '<path d="M2 11V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zM2 11h20M7 3l2 4M12 3l2 4M17 3l2 4"/>',
        gift: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5"/>',
        home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
        truck: '<path d="M10 17h4V5H2v12h3"/><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>',
        creditcard: '<rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>',
        undo: '<path d="M9 14l-4-4 4-4"/><path d="M5 10h11a4 4 0 0 1 0 8h-1"/>',
        badge: '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76z"/><path d="M9 12l2 2 4-4"/>',
        refresh: '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/>',
        plug: '<path d="M12 22v-6M9 8V2M15 8V2M5 8h14v4a7 7 0 0 1-14 0z"/>',
        star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
        heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
        search: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
        menu: '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>',
        x: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
        chevron: '<polyline points="6 9 12 15 18 9"/>',
        map: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
        phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>',
        mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22 6 12 13 2 6"/>',
        message: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
        send: '<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',
        check: '<polyline points="20 6 9 17 4 12"/>',
        globe: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
        moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
        chevrondown: '<polyline points="6 9 12 15 18 9"/>',
    };

    function svg(name, cls) {
        var c = cls || '';
        var path = ICONS[name] || ICONS.smartphone;
        return '<svg class="icon-svg ' + c + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">' + path + '</svg>';
    }

    /* Boxicons (used for social network icons only — see cdn link in index.html) */
    function bxIcon(name, cls) {
        var c = cls || '';
        return '<i class="bx ' + name + ' icon-bx ' + c + '"></i>';
    }

    function starSVG(filled) {
        return '<svg class="icon-svg sm" viewBox="0 0 24 24" fill="' + (filled ? 'currentColor' : 'none') + '" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">' + (ICONS.star) + '</svg>';
    }

    /* ====================== HTML BUILDERS ====================== */

    function productCard(p) {
        var tr = t();
        var badges = '';
        if (p.isNew) badges += '<span class="badge badge-new">' + tr.new + '</span>';
        if (p.isPromo && p.oldPrice) {
            var pct = Math.round((1 - p.price / p.oldPrice) * 100);
            badges += '<span class="badge badge-promo">-' + pct + '%</span>';
        }
        if (p.isBestSeller) badges += '<span class="badge badge-best">' + tr.bestseller + '</span>';

        var img = p.image ?
            '<img src="' + p.image + '" alt="' + p.name + '" loading="lazy">' :
            '<div class="product-img-fallback">' + svg(p.icon, 'xl') + '</div>';

        var stars = '';
        for (var i = 0; i < 5; i++) {
            stars += starSVG(i < Math.round(p.rating));
        }

        var oldPrice = p.oldPrice ? '<span class="old">' + formatPrice(p.oldPrice) + '</span>' : '';

        return '<div class="product-card" data-pid="' + p.id + '">' +
            '<div class="product-img-wrap" onclick="KFB.navigate(\'product\',{id:\'' + p.id + '\'})">' +
            '<div class="badges">' + badges + '</div>' +
            '<button class="fav-btn ' + (isFav(p.id) ? 'active' : '') + '" onclick="event.stopPropagation();KFB.toggleFav(\'' + p.id + '\')" aria-label="' + tr.addFav + '">' + svg('heart', 'sm') + '</button>' +
            img +
            '</div>' +
            '<div class="product-body">' +
            '<div class="product-brand">' + p.brand + '</div>' +
            '<div class="product-name" onclick="KFB.navigate(\'product\',{id:\'' + p.id + '\'})">' + p.name + '</div>' +
            '<div class="product-rating"><span class="stars">' + stars + '</span><span class="count">' + p.rating + ' (' + p.ratingCount + ')</span></div>' +
            '<div class="product-price"><span class="now">' + formatPrice(p.price) + '</span>' + oldPrice + '</div>' +
            '<div class="product-actions">' +
            '<button class="btn-order" onclick="KFB.openOrder(\'' + p.id + '\')">' + tr.order + '</button>' +
            '<button class="btn-details" onclick="KFB.navigate(\'product\',{id:\'' + p.id + '\'})">' + tr.details + '</button>' +
            '</div>' +
            '</div>' +
            '</div>';
    }

    function productGrid(products) {
        if (products.length === 0) return '<p class="empty">' + t().noResults + '</p>';
        return '<div class="product-grid">' + products.map(productCard).join('') + '</div>';
    }

    function sectionTitle(title, subtitle) {
        return '<div class="section-title"><h2>' + title + '</h2>' +
            (subtitle ? '<p>' + subtitle + '</p>' : '') +
            '<div class="line"></div></div>';
    }

    /* ====================== PAGE RENDERERS ====================== */

    function homePage() {
        var tr = t();
        var products = visibleProducts();
        var newP = products.filter(function(p) { return p.isNew; }).slice(0, 8);
        var promoP = products.filter(function(p) { return p.isPromo; }).slice(0, 8);
        var bestP = products.filter(function(p) { return p.isBestSeller; }).slice(0, 8);
        var cats = visibleDeviceTypes();

        var html = '<div class="page">';
        /* Hero */
        html += '<section class="hero"><h1><span class="gold">KFB Store</span><br>' +
            (state.lang === 'fr' ? 'Votre boutique high-tech au Cameroun' : 'Your tech shop in Cameroon') +
            '</h1><p>' + (state.lang === 'fr' ?
                'Téléphones, tablettes, ordinateurs, télévisions et accessoires. Produits authentiques, commande facile via WhatsApp.' :
                'Phones, tablets, computers, TVs and accessories. Authentic products, easy ordering via WhatsApp.') + '</p>' +
            '<div class="hero-actions">' +
            '<button class="btn btn-primary" onclick="KFB.navigate(\'telephones\',{devtype:\'telephones\'})">' + tr.viewAllProducts + '</button>' +
            '<a class="btn btn-outline" href="' + waLink(tr.waMsg) + '" target="_blank" rel="noopener">' + svg('message', 'sm') + ' WhatsApp</a>' +
            '</div></section>';

        /* Categories */
        html += '<section class="section container">' + sectionTitle(tr.catTitle, tr.catSubtitle) + '<div class="cat-grid">';
        cats.forEach(function(c) {
            html += '<div class="cat-card" onclick="KFB.navigate(\'telephones\',{devtype:\'' + c.id + '\'})">' +
                '<div class="cat-icon">' + svg(c.icon, 'lg') + '</div>' +
                '<span>' + (state.lang === 'fr' ? c.labelFr : c.labelEn) + '</span></div>';
        });
        html += '</div></section>';

        /* New */
        if (newP.length) {
            html += '<section class="section container">' + sectionTitle(tr.newTitle, tr.newSubtitle) + productGrid(newP) + '</section>';
        }
        /* Promo */
        if (promoP.length) {
            html += '<section class="section container">' + sectionTitle(tr.promoTitle, tr.promoSubtitle) + productGrid(promoP) + '</section>';
        }
        /* Best */
        if (bestP.length) {
            html += '<section class="section container">' + sectionTitle(tr.bestTitle, tr.bestSubtitle) + productGrid(bestP) + '</section>';
        }

        html += '</div>';
        return html;
    }

    function catalogPage() {
        var tr = t();
        var all = visibleProducts();
        var isAcc = state.params.cat !== undefined;

        var filtered = all;
        if (state.params.devtype) filtered = filtered.filter(function(p) { return p.category === state.params.devtype; });
        else if (state.params.cat) filtered = filtered.filter(function(p) { return p.category === 'accessoires' && p.sub === state.params.cat; });
        else if (state.params.condition === 'reconditionne') filtered = filtered.filter(function(p) { return p.condition === 'reconditionne'; });

        /* Brand filter */
        var brandFilter = state._brandFilter || '';
        if (brandFilter) filtered = filtered.filter(function(p) { return p.brand === brandFilter; });

        /* Sort */
        var sortBy = state._sortBy || 'new';
        if (sortBy === 'priceAsc') filtered = filtered.slice().sort(function(a, b) { return a.price - b.price; });
        else if (sortBy === 'priceDesc') filtered = filtered.slice().sort(function(a, b) { return b.price - a.price; });
        else if (sortBy === 'rating') filtered = filtered.slice().sort(function(a, b) { return b.rating - a.rating; });
        else filtered = filtered.slice().sort(function(a, b) { return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0); });

        /* Title */
        var title = '';
        if (state.params.devtype) {
            var dt = visibleDeviceTypes().find(function(d) { return d.id === state.params.devtype; });
            title = dt ? (state.lang === 'fr' ? dt.labelFr : dt.labelEn) : tr.nav.telephones;
        } else if (state.params.cat) {
            var ac = visibleAccessoryCats().find(function(a) { return a.id === state.params.cat; });
            title = ac ? (state.lang === 'fr' ? ac.labelFr : ac.labelEn) : tr.nav.accessoires;
        } else if (state.params.condition === 'reconditionne') {
            title = tr.nav.reconditionnes;
        } else {
            title = isAcc ? tr.nav.accessoires : tr.nav.telephones;
        }

        /* Available brands */
        var availBrands = [];
        all.forEach(function(p) {
            if (!state.params.devtype || p.category === state.params.devtype) {
                if (availBrands.indexOf(p.brand) === -1) availBrands.push(p.brand);
            }
        });

        var html = '<div class="page container section">';
        html += '<div class="page-head"><h1>' + title + '</h1><p>' + filtered.length + ' ' + tr.productCount + '</p></div>';

        html += '<div class="filters">';
        html += '<select class="filter-select" onchange="KFB.setBrandFilter(this.value)">';
        html += '<option value="">' + tr.allBrands + '</option>';
        availBrands.forEach(function(b) {
            html += '<option value="' + b + '"' + (brandFilter === b ? ' selected' : '') + '>' + b + '</option>';
        });
        html += '</select>';
        html += '<select class="filter-select" onchange="KFB.setSortBy(this.value)">';
        html += '<option value="new"' + (sortBy === 'new' ? ' selected' : '') + '>' + tr.sortNew + '</option>';
        html += '<option value="priceAsc"' + (sortBy === 'priceAsc' ? ' selected' : '') + '>' + tr.sortPriceAsc + '</option>';
        html += '<option value="priceDesc"' + (sortBy === 'priceDesc' ? ' selected' : '') + '>' + tr.sortPriceDesc + '</option>';
        html += '<option value="rating"' + (sortBy === 'rating' ? ' selected' : '') + '>' + tr.sortRating + '</option>';
        html += '</select></div>';

        html += productGrid(filtered);
        html += '</div>';
        return html;
    }

    function productDetailPage() {
        var tr = t();
        var product = visibleProducts().find(function(p) { return p.id === state.params.id; });
        if (!product) return '<div class="page container section empty">' + tr.noResults + '</div>';

        var related = visibleProducts().filter(function(p) { return p.category === product.category && p.id !== product.id; }).slice(0, 4);

        var img = product.image ?
            '<img src="' + product.image + '" alt="' + product.name + '">' :
            '<div style="color:rgba(212,175,55,0.4);font-size:120px">' + svg(product.icon, 'xl') + '</div>';

        var desc = state.lang === 'fr' ? product.descFr : product.descEn;
        var oldPrice = product.oldPrice ? '<span class="old">' + formatPrice(product.oldPrice) + '</span>' : '';

        var stars = '';
        for (var i = 0; i < 5; i++) stars += starSVG(i < Math.round(product.rating));

        var specsHTML = '';
        Object.keys(product.specs).forEach(function(k, i) {
            specsHTML += '<div class="specs-row"><span class="key">' + k + '</span><span class="val">' + product.specs[k] + '</span></div>';
        });

        var html = '<div class="page container section">';
        html += '<button class="btn btn-sm" style="color:var(--gold);margin-bottom:1rem" onclick="KFB.navigate(\'telephones\',{devtype:\'' + product.category + '\'})">' + svg('chevron', 'sm') + ' ' + tr.backToShop + '</button>';

        html += '<div class="detail-grid">';
        html += '<div class="detail-img">' + img + '</div>';
        html += '<div>';
        html += '<div class="detail-brand">' + product.brand + '</div>';
        html += '<h1 class="detail-name">' + product.name + '</h1>';
        html += '<div class="detail-rating"><span style="color:var(--gold)">' + stars + '</span><span style="font-size:.875rem;color:var(--dim)">' + product.rating + ' (' + product.ratingCount + ' ' + (state.lang === 'fr' ? 'avis' : 'reviews') + ')</span></div>';
        html += '<div class="detail-price"><span class="now">' + formatPrice(product.price) + '</span>' + oldPrice + '</div>';
        html += '<p class="detail-desc">' + desc + '</p>';
        html += '<div class="detail-actions">';
        html += '<button class="btn btn-primary" onclick="KFB.openOrder(\'' + product.id + '\')">' + tr.order + '</button>';
        html += '<button class="btn btn-outline" onclick="KFB.toggleFav(\'' + product.id + '\');KFB.rerender()">' + svg('heart', 'sm') + ' ' + tr.addFav + '</button>';
        html += '</div>';
        html += '<h3 class="specs-title">' + tr.specs + '</h3>';
        html += '<div class="specs-table">' + specsHTML + '</div>';
        html += '</div></div>';

        if (related.length) {
            html += '<section style="margin-top:3rem"><h2 style="font-size:1.25rem;color:var(--fg);margin-bottom:1rem">' + tr.relatedProducts + '</h2>' + productGrid(related) + '</section>';
        }

        html += '</div>';
        return html;
    }

    function simpleListPage(type) {
        var tr = t();
        var products = visibleProducts().filter(function(p) { return type === 'new' ? p.isNew : p.isPromo; });
        return '<div class="page container section">' +
            sectionTitle(type === 'new' ? tr.newTitle : tr.promoTitle, type === 'new' ? tr.newSubtitle : tr.promoSubtitle) +
            productGrid(products) + '</div>';
    }

    function promotionsPage() {
        var tr = t();
        var products = visibleProducts().filter(function(p) { return p.isPromo; });
        var html = '<div class="page container section">';
        html += sectionTitle(tr.promoTitle, tr.promoSubtitle);
        if (products.length) html += productGrid(products) + '<div style="height:3rem"></div>';

        /* Reviews */
        html += sectionTitle(tr.reviewsTitle, tr.reviewsSubtitle);
        html += '<div class="review-grid">';
        REVIEWS.forEach(function(r) {
            var stars = '';
            for (var i = 0; i < 5; i++) stars += '<span class="' + (i < r.stars ? 'star-on' : 'star-off') + '">' + starSVG(i < r.stars) + '</span>';
            html += '<div class="review-card"><div class="review-head">' +
                (r.avatar ? '<img class="review-avatar" src="' + r.avatar + '" alt="' + r.name + '">' : '<div class="review-avatar" style="background:var(--gold);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700">' + r.name.charAt(0) + '</div>') +
                '<div><div class="review-name">' + r.name + '</div><div class="review-stars">' + stars + '</div></div>' +
                '</div><p class="review-text">' + (state.lang === 'fr' ? r.textFr : r.textEn) + '</p></div>';
        });
        html += '</div></div>';
        return html;
    }

    function collectionsPage() {
        var tr = t();
        var html = '<div class="page container section">' + sectionTitle(tr.collectionsTitle, tr.collectionsSubtitle) + '<div class="coll-grid">';
        COLLECTIONS.forEach(function(c) {
            var items = state.lang === 'fr' ? c.itemsFr : c.itemsEn;
            html += '<div class="coll-card"><div class="coll-icon">' + svg(c.icon, 'lg') + '</div>' +
                '<div class="coll-title">' + (state.lang === 'fr' ? c.titleFr : c.titleEn) + '</div>' +
                '<p class="coll-desc">' + (state.lang === 'fr' ? c.descFr : c.descEn) + '</p>' +
                '<ul class="coll-items">' + items.map(function(i) { return '<li>' + i + '</li>'; }).join('') + '</ul>' +
                '<button class="btn btn-sm" style="width:100%;background:rgba(212,175,55,.1);color:var(--gold)" onclick="KFB.navigate(\'contact\')">' + tr.order + '</button></div>';
        });
        html += '</div></div>';
        return html;
    }

    function guidesPage() {
        var tr = t();
        var html = '<div class="page container section" style="max-width:56rem">' + sectionTitle(tr.guidesTitle, tr.guidesSubtitle);
        html += '<div style="display:flex;flex-direction:column;gap:.75rem">';
        GUIDES.forEach(function(g) {
            html += '<div class="accordion"><div class="acc-item" id="guide-' + g.slug + '">' +
                '<button class="acc-head" onclick="KFB.toggleAccordion(\'guide-' + g.slug + '\')">' +
                '<span style="display:flex;align-items:center;gap:.75rem">' + svg(g.icon) +
                '<span><div>' + (state.lang === 'fr' ? g.titleFr : g.titleEn) + '</div>' +
                '<div style="font-size:.75rem;font-weight:400;color:var(--dim);margin-top:2px">' + (state.lang === 'fr' ? g.summaryFr : g.summaryEn) + '</div></span>' +
                '</span><span class="acc-arrow">' + svg('chevron') + '</span></button>' +
                '<div class="acc-body" style="display:none">' +
                g.steps.map(function(s, i) {
                    return '<div class="guide-step"><div class="guide-num">' + (i + 1) + '</div><div><h4>' + (state.lang === 'fr' ? s.titleFr : s.titleEn) + '</h4><p>' + (state.lang === 'fr' ? s.textFr : s.textEn) + '</p></div></div>';
                }).join('') +
                '</div></div></div>';
        });
        html += '</div></div>';
        return html;
    }

    function brandsPage() {
        var tr = t();
        var html = '<div class="page container section">' + sectionTitle(tr.nav.allbrands, state.lang === 'fr' ? 'Découvrez nos produits par marque' : 'Discover our products by brand') + '<div class="brands-grid">';
        BRANDS.forEach(function(b) {
            var count = visibleProducts().filter(function(p) { return p.brand === b; }).length;
            if (count === 0) return;
            html += '<div class="brand-card" onclick="KFB.navigate(\'telephones\',{devtype:\'telephones\',brand:\'' + b + '\'})"><div class="name">' + b + '</div><div class="count">' + count + ' ' + tr.productCount + '</div></div>';
        });
        html += '</div></div>';
        return html;
    }

    function servicePage() {
        var tr = t();
        var html = '<div class="page container section" style="max-width:56rem">' + sectionTitle(tr.serviceTitle, tr.serviceSubtitle);
        html += '<div class="service-grid">';
        SERVICE_CARDS.forEach(function(s) {
            html += '<div class="service-card"><div class="service-icon">' + svg(s.icon, 'lg') + '</div><div class="service-title">' + (state.lang === 'fr' ? s.titleFr : s.titleEn) + '</div><p class="service-text">' + (state.lang === 'fr' ? s.textFr : s.textEn) + '</p></div>';
        });
        html += '</div>';
        html += sectionTitle(tr.faqTitle);
        html += '<div style="display:flex;flex-direction:column;gap:.75rem">';
        FAQ.forEach(function(f, i) {
            html += '<div class="accordion"><div class="acc-item" id="faq-' + i + '">' +
                '<button class="acc-head" onclick="KFB.toggleAccordion(\'faq-' + i + '\')">' +
                '<span>' + (state.lang === 'fr' ? f.qFr : f.qEn) + '</span>' +
                '<span class="acc-arrow">' + svg('chevron') + '</span></button>' +
                '<div class="acc-body" style="display:none">' + (state.lang === 'fr' ? f.aFr : f.aEn) + '</div></div></div>';
        });
        html += '</div></div>';
        return html;
    }

    function contactPage() {
        var tr = t();
        var socials = [
            { label: tr.whatsapp, icon: 'bxl-whatsapp', href: STORE_INFO.whatsapp },
            { label: tr.instagram, icon: 'bxl-instagram', href: STORE_INFO.instagram },
            { label: tr.telegram, icon: 'bxl-telegram', href: STORE_INFO.telegram },
            { label: tr.mail, icon: 'bx-envelope', href: 'mailto:' + STORE_INFO.email },
            { label: tr.facebook, icon: 'bxl-facebook-circle', href: STORE_INFO.facebook },
        ];

        var html = '<div class="page container section">' + sectionTitle(tr.contactTitle, tr.contactSubtitle);
        html += '<div class="contact-grid">';
        /* Form */
        html += '<div class="contact-form-card" id="contact-form-card">' +
            '<form onsubmit="KFB.submitContact(event)">' +
            '<div class="form-group"><label class="form-label">' + tr.contactForm.name + '</label><input class="form-input" required></div>' +
            '<div class="form-group"><label class="form-label">' + tr.contactForm.email + '</label><input class="form-input" type="email" required></div>' +
            '<div class="form-group"><label class="form-label">' + tr.contactForm.message + '</label><textarea class="form-input" rows="4" required></textarea></div>' +
            '<button type="submit" class="btn btn-primary" style="width:100%">' + tr.contactForm.send + '</button>' +
            '</form></div>';
        /* Socials + Map */
        html += '<div><div class="contact-form-card"><h3 style="font-family:Montserrat,sans-serif;font-size:1.125rem;color:var(--fg);margin-bottom:1rem">' + (state.lang === 'fr' ? 'Nos réseaux' : 'Our networks') + '</h3><div class="social-list">';
        socials.forEach(function(s) {
            html += '<a class="social-link" href="' + s.href + '" target="_blank" rel="noopener">' + bxIcon(s.icon, 'lg') + '<span>' + s.label + '</span></a>';
        });
        html += '</div></div>';
        /* Map */
        html += '<div class="map-card"><h3>' + tr.mapTitle + '</h3><iframe src="' + STORE_INFO.mapsEmbed + '" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><a class="map-link" href="' + STORE_INFO.mapsLink + '" target="_blank" rel="noopener">' + svg('map', 'sm') + ' ' + tr.findUs + '</a></div>';
        html += '</div></div></div>';
        return html;
    }

    function favorisPage() {
        var tr = t();
        var favProducts = visibleProducts().filter(function(p) { return isFav(p.id); });
        return '<div class="page container section">' + sectionTitle(tr.nav.favoris) +
            (favProducts.length === 0 ? '<p class="empty">' + tr.emptyFav + '</p>' : productGrid(favProducts)) + '</div>';
    }

    function searchPage() {
        var tr = t();
        var q = state.search.toLowerCase();
        var products = visibleProducts().filter(function(p) {
            return p.name.toLowerCase().indexOf(q) !== -1 || p.brand.toLowerCase().indexOf(q) !== -1;
        });
        return '<div class="page container section"><div class="page-head"><h1>"' + state.search + '"</h1><p>' + products.length + ' ' + tr.results + '</p></div>' +
            (products.length === 0 ? '<p class="empty">' + tr.noResults + '</p>' : productGrid(products)) + '</div>';
    }

    /* ====================== ORDER MODAL ====================== */

    function openOrder(productId) {
        var product = visibleProducts().find(function(p) { return p.id === productId; });
        if (!product) return;
        state.orderProduct = product;
        renderOrderModal();
    }

    function closeOrder() {
        state.orderProduct = null;
        var el = document.getElementById('modal-root');
        if (el) el.innerHTML = '';
        document.body.style.overflow = '';
    }

    function renderOrderModal() {
        var p = state.orderProduct;
        if (!p) return;
        var tr = t();
        var img = p.image ? '<img src="' + p.image + '" alt="' + p.name + '">' : '<div style="width:64px;height:64px;border-radius:8px;background:var(--surface);display:flex;align-items:center;justify-content:center">' + svg(p.icon) + '</div>';

        var html = '<div class="modal-overlay" onclick="KFB.closeOrder()">' +
            '<div class="modal" onclick="event.stopPropagation()">' +
            '<div class="modal-head"><div><h2>' + tr.orderModal.title + '</h2><p>' + tr.orderModal.sub + '</p></div>' +
            '<button class="modal-close" onclick="KFB.closeOrder()">' + svg('x') + '</button></div>' +
            '<div class="modal-body">' +
            '<div class="order-summary">' + img + '<div class="info"><div class="brand">' + p.brand + '</div><div class="name">' + p.name + '</div><div class="price">' + formatPrice(p.price) + '</div></div></div>' +
            '<form onsubmit="KFB.submitOrder(event)">' +
            '<div class="form-row">' +
            '<div class="form-group"><label class="form-label">' + tr.orderModal.firstName + '</label><input class="form-input" id="ord-fname" required></div>' +
            '<div class="form-group"><label class="form-label">' + tr.orderModal.lastName + '</label><input class="form-input" id="ord-lname" required></div>' +
            '</div>' +
            '<div class="form-group"><label class="form-label">' + tr.orderModal.email + '</label><input class="form-input" type="email" id="ord-email" required></div>' +
            '<div class="form-group"><label class="form-label">' + tr.orderModal.phone + '</label><input class="form-input" id="ord-phone" placeholder="+237..." required></div>' +
            '<div class="form-row">' +
            '<div class="form-group"><label class="form-label">' + tr.orderModal.city + '</label><input class="form-input" id="ord-city" required></div>' +
            '<div class="form-group"><label class="form-label">' + tr.orderModal.country + '</label><input class="form-input" id="ord-country" value="Cameroun"></div>' +
            '</div>' +
            '<div class="form-group"><label class="form-label">' + tr.orderModal.gender + '</label><select class="form-input" id="ord-gender" required><option value="">' + tr.selectPlaceholder + '</option><option value="M">' + tr.orderModal.genderM + '</option><option value="F">' + tr.orderModal.genderF + '</option></select></div>' +
            '<div class="modal-actions">' +
            '<button type="button" class="btn" style="flex:1;border:1px solid var(--line)" onclick="KFB.closeOrder()">' + tr.orderModal.cancel + '</button>' +
            '<button type="submit" class="btn btn-primary" style="flex:1">' + svg('check', 'sm') + ' ' + tr.orderModal.submit + '</button>' +
            '</div>' +
            '</form>' +
            '</div>' +
            '</div>' +
            '</div>';

        var el = document.getElementById('modal-root');
        if (el) el.innerHTML = html;
        document.body.style.overflow = 'hidden';
    }

    /* ====================== PDF GENERATION (jsPDF via CDN) ====================== */
    function generatePdf(form, product) {
        var tr = t();
        var lang = state.lang;

        /* Wait for jsPDF to be loaded */
        if (typeof window.jspdf === 'undefined') {
            /* Load dynamically */
            var script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
            script.onload = function() { generatePdf(form, product); };
            document.head.appendChild(script);
            return;
        }

        var doc = new window.jspdf.jsPDF();
        var W = doc.internal.pageSize.getWidth();

        /* Header — black background */
        doc.setFillColor(10, 10, 10);
        doc.rect(0, 0, W, 35, 'F');
        doc.setTextColor(212, 175, 55);
        doc.setFontSize(20);
        doc.setFont('helvetica', 'bold');
        doc.text('KFB STORE', 14, 18);
        doc.setFontSize(9);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(180, 180, 180);
        doc.text(STORE_INFO.address, 14, 25);
        doc.text('Tel: ' + STORE_INFO.phoneDisplay + ' | ' + STORE_INFO.email, 14, 30);

        /* Logo */
        try {
            doc.addImage('file_00000000703081f4ac5235fa837b022c.png', 'PNG', W - 30, 6, 18, 18);
        } catch (e) { /* logo optional */ }

        var y = 48;
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text(lang === 'fr' ? 'BON DE COMMANDE' : 'ORDER FORM', 14, y);
        y += 10;

        /* Product image */
        if (product.image) {
            try {
                doc.addImage(product.image, 'JPEG', 14, y, 50, 40);
            } catch (e) { /* skip CORS */ }
        }

        /* Product info */
        doc.setFontSize(11);
        doc.setFont('helvetica', 'bold');
        doc.text((lang === 'fr' ? 'Produit: ' : 'Product: ') + product.name, 75, y + 5);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        doc.text((lang === 'fr' ? 'Marque: ' : 'Brand: ') + product.brand, 75, y + 12);
        doc.text((lang === 'fr' ? 'Prix: ' : 'Price: ') + formatPrice(product.price), 75, y + 19);
        doc.text((lang === 'fr' ? 'État: ' : 'Condition: ') + (product.condition === 'reconditionne' ? (lang === 'fr' ? 'Reconditionné' : 'Refurbished') : (lang === 'fr' ? 'Neuf' : 'New')), 75, y + 26);

        y += 50;

        /* Specs */
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(12);
        doc.text(lang === 'fr' ? 'Fiche technique' : 'Specifications', 14, y);
        y += 6;
        doc.setDrawColor(212, 175, 55);
        doc.line(14, y, W - 14, y);
        y += 6;
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        Object.keys(product.specs).forEach(function(k) {
            doc.setFont('helvetica', 'bold');
            doc.text(k + ':', 14, y);
            doc.setFont('helvetica', 'normal');
            doc.text(String(product.specs[k]), 70, y);
            y += 6;
        });

        y += 6;
        /* Customer info */
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(12);
        doc.text(lang === 'fr' ? 'Informations client' : 'Customer information', 14, y);
        y += 6;
        doc.setDrawColor(212, 175, 55);
        doc.line(14, y, W - 14, y);
        y += 6;
        doc.setFontSize(10);
        var cust = [
            [lang === 'fr' ? 'Nom' : 'Last name', form.lastName],
            [lang === 'fr' ? 'Prénom' : 'First name', form.firstName],
            ['Email', form.email],
            [lang === 'fr' ? 'Téléphone' : 'Phone', form.phone],
            [lang === 'fr' ? 'Ville' : 'City', form.city],
            [lang === 'fr' ? 'Pays' : 'Country', form.country],
            [lang === 'fr' ? 'Sexe' : 'Gender', form.gender === 'M' ? (lang === 'fr' ? 'Homme' : 'Male') : (lang === 'fr' ? 'Femme' : 'Female')],
        ];
        cust.forEach(function(row) {
            doc.setFont('helvetica', 'bold');
            doc.text(row[0] + ':', 14, y);
            doc.setFont('helvetica', 'normal');
            doc.text(row[1], 70, y);
            y += 6;
        });

        /* Footer */
        var H = doc.internal.pageSize.getHeight();
        doc.setFillColor(10, 10, 10);
        doc.rect(0, H - 15, W, 15, 'F');
        doc.setTextColor(212, 175, 55);
        doc.setFontSize(8);
        doc.text(STORE_INFO.phoneDisplay + ' | ' + STORE_INFO.email + ' | ' + STORE_INFO.address, 14, H - 6);

        doc.save('KFB_Commande_' + product.name.replace(/\s+/g, '_') + '.pdf');
    }

    function submitOrder(e) {
        e.preventDefault();
        var form = {
            firstName: document.getElementById('ord-fname').value,
            lastName: document.getElementById('ord-lname').value,
            email: document.getElementById('ord-email').value,
            phone: document.getElementById('ord-phone').value,
            city: document.getElementById('ord-city').value,
            country: document.getElementById('ord-country').value,
            gender: document.getElementById('ord-gender').value,
        };
        var product = state.orderProduct;
        /* Send WhatsApp message */
        window.open(waLink(t().waMsg), '_blank');
        /* Generate PDF */
        generatePdf(form, product);
        /* Toast */
        showToast(state.lang === 'fr' ? 'PDF téléchargé et message WhatsApp envoyé !' : 'PDF downloaded and WhatsApp message sent!');
        closeOrder();
    }

    function submitContact(e) {
        e.preventDefault();
        var tr = t();
        var card = document.getElementById('contact-form-card');
        if (card) {
            card.innerHTML = '<div class="form-success"><div class="ico">' + svg('check', 'xl') + '</div><p style="font-weight:600;color:var(--fg)">' + tr.contactForm.sent + '</p></div>';
        }
        showToast(tr.contactForm.sent);
    }

    /* ====================== HEADER ====================== */

    function headerHTML() {
        var tr = t();
        var navItems = [
            { id: 'home', label: tr.nav.home },
            { id: 'telephones', label: tr.nav.telephones, mega: true },
            { id: 'accessoires', label: tr.nav.accessoires, mega: true },
            { id: 'nouveautes', label: tr.nav.nouveautes },
            { id: 'promotions', label: tr.nav.promotions },
            { id: 'collections', label: tr.nav.collections },
            { id: 'guides', label: tr.nav.guides },
            { id: 'service-client', label: tr.nav.service },
            { id: 'contact', label: tr.nav.contact },
        ];

        var deviceMega = [
            { label: tr.nav.allphones, icon: 'smartphone', route: 'telephones', params: { devtype: 'telephones' } },
            { label: tr.nav.tablettes, icon: 'tablet', route: 'telephones', params: { devtype: 'tablettes' } },
            { label: tr.nav.ordinateurs, icon: 'laptop', route: 'telephones', params: { devtype: 'ordinateurs' } },
            { label: tr.nav.televisions, icon: 'tv', route: 'telephones', params: { devtype: 'televisions' } },
            { label: tr.nav.reconditionnes, icon: 'refresh', route: 'telephones', params: { condition: 'reconditionne' } },
            { label: tr.nav.allbrands, icon: 'badge', route: 'marques', params: {} },
        ];

        var accCats = visibleAccessoryCats();

        var html = '<div class="topbar"><div class="container">' +
            '<div class="topbar-left">' + svg('map', 'sm') + ' ' + tr.topbarLoc + '</div>' +
            '<div class="topbar-right">' +
            '<button onclick="KFB.navigate(\'service-client\')">' + tr.nav.service + '</button>' +
            '<button onclick="KFB.navigate(\'guides\')">' + tr.nav.guides + '</button>' +
            '<button onclick="KFB.toggleTheme()">' + (state.theme === 'dark' ? svg('sun', 'sm') : svg('moon', 'sm')) + ' ' + tr.theme + '</button>' +
            '<button class="lang-btn" onclick="KFB.toggleLang()">' + svg('globe', 'sm') + ' ' + (state.lang === 'fr' ? 'EN' : 'FR') + '</button>' +
            '</div></div></div>';

        html += '<header class="header"><div class="container">' +
            '<div class="brand" onclick="KFB.navigate(\'home\')">' +
            '<img class="brand-logo" src="file_00000000703081f4ac5235fa837b022c.png" alt="KFB Store">' +
            '<div class="brand-text"><div class="name">KFB</div><div class="sub">STORE</div></div>' +
            '</div>';

        /* Desktop nav */
        html += '<nav class="nav">';
        navItems.forEach(function(item) {
            html += '<div class="nav-item"><button class="nav-link' + (state.route === item.id ? ' active' : '') + '" onclick="KFB.navigate(\'' + item.id + '\')">' + item.label;
            if (item.mega) html += ' <span class="nav-arrow">' + svg('chevron', 'sm') + '</span>';
            html += '</button>';

            if (item.mega && item.id === 'telephones') {
                html += '<div class="mega">';
                deviceMega.forEach(function(m) {
                    html += '<div class="mega-item" onclick="KFB.navigate(\'' + m.route + '\',' + JSON.stringify(m.params) + ')">' + svg(m.icon, 'sm') + ' ' + m.label + '</div>';
                });
                html += '</div>';
            }

            if (item.mega && item.id === 'accessoires') {
                html += '<div class="mega mega-grid">';
                accCats.forEach(function(m) {
                    html += '<div class="mega-item" onclick="KFB.navigate(\'accessoires\',{cat:\'' + m.id + '\'})">' + svg(m.icon, 'sm') + ' ' + (state.lang === 'fr' ? m.labelFr : m.labelEn) + '</div>';
                });
                html += '</div>';
            }
            html += '</div>';
        });
        html += '</nav>';

        /* Actions */
        html += '<div class="header-actions">' +
            '<div class="search-box">' + svg('search', 'sm') + '<input type="text" placeholder="' + tr.search + '" value="' + state.search + '" oninput="KFB.setSearch(this.value)" onkeydown="if(event.key===\'Enter\')KFB.navigate(\'search\')"></div>' +
            '<button class="icon-btn" onclick="KFB.navigate(\'favoris\')" aria-label="' + tr.nav.favoris + '">' + svg('heart') + '<span class="fav-badge" style="display:' + (state.favs.length > 0 ? 'flex' : 'none') + '">' + state.favs.length + '</span></button>' +
            '<button class="icon-btn mobile-toggle" onclick="KFB.toggleMobileMenu()">' + svg('menu') + '</button>' +
            '</div>';

        html += '</div></header>';

        /* Mobile menu */
        html += '<div class="mobile-menu" id="mobile-menu">';
        navItems.forEach(function(item) {
            html += '<div class="mobile-nav-item" onclick="KFB.navigate(\'' + item.id + '\')">' + item.label + '</div>';
        });
        if (accCats.length) {
            html += '<div style="padding:.5rem 1rem;font-size:.75rem;color:var(--dim);text-transform:uppercase">' + tr.nav.accessoires + '</div>';
            accCats.forEach(function(m) {
                html += '<div class="mobile-nav-item mobile-sub" onclick="KFB.navigate(\'accessoires\',{cat:\'' + m.id + '\'})">' + (state.lang === 'fr' ? m.labelFr : m.labelEn) + '</div>';
            });
        }
        html += '</div>';

        return html;
    }

    function footerHTML() {
        var tr = t();
        var socials = [
            { icon: 'bxl-whatsapp', href: STORE_INFO.whatsapp },
            { icon: 'bxl-facebook-circle', href: STORE_INFO.facebook },
            { icon: 'bxl-instagram', href: STORE_INFO.instagram },
            { icon: 'bxl-telegram', href: STORE_INFO.telegram },
            { icon: 'bx-envelope', href: 'mailto:' + STORE_INFO.email },
        ];

        var html = '<footer class="footer">';
        html += '<div class="footer-main container">' +
            '<div>' +
            '<div class="footer-brand"><img class="brand-logo" src="file_00000000703081f4ac5235fa837b022c.png" alt="KFB Store"><div class="name"><span class="white">KFB</span> <span class="gold">STORE</span></div></div>' +
            '<p class="footer-about">' + tr.footerAbout + '</p>' +
            '<div class="footer-contact">' +
            '<div>' + svg('map', 'sm') + ' Bafoussam, Cameroun</div>' +
            '<div>' + svg('phone', 'sm') + ' +237 688 75 32 48</div>' +
            '<div>' + svg('mail', 'sm') + ' brayanfotso237@icloud.com</div>' +
            '</div>' +
            '</div>' +
            '<div class="footer-col"><h4>' + tr.footerShop + '</h4><ul>' +
            '<li><button onclick="KFB.navigate(\'telephones\',{devtype:\'telephones\'})">' + tr.nav.telephones + '</button></li>' +
            '<li><button onclick="KFB.navigate(\'telephones\',{devtype:\'tablettes\'})">' + tr.nav.tablettes + '</button></li>' +
            '<li><button onclick="KFB.navigate(\'telephones\',{devtype:\'ordinateurs\'})">' + tr.nav.ordinateurs + '</button></li>' +
            '<li><button onclick="KFB.navigate(\'telephones\',{devtype:\'televisions\'})">' + tr.nav.televisions + '</button></li>' +
            '<li><button onclick="KFB.navigate(\'accessoires\')">' + tr.nav.accessoires + '</button></li>' +
            '</ul></div>' +
            '<div class="footer-col"><h4>' + tr.footerCats + '</h4><ul>' +
            '<li><button onclick="KFB.navigate(\'nouveautes\')">' + tr.nav.nouveautes + '</button></li>' +
            '<li><button onclick="KFB.navigate(\'promotions\')">' + tr.nav.promotions + '</button></li>' +
            '<li><button onclick="KFB.navigate(\'collections\')">' + tr.nav.collections + '</button></li>' +
            '<li><button onclick="KFB.navigate(\'marques\')">' + tr.nav.allbrands + '</button></li>' +
            '<li><button onclick="KFB.navigate(\'favoris\')">' + tr.nav.favoris + '</button></li>' +
            '</ul></div>' +
            '<div class="footer-col"><h4>' + tr.footerService + '</h4><ul>' +
            '<li><button onclick="KFB.navigate(\'service-client\')">' + tr.faqTitle + '</button></li>' +
            '<li><button onclick="KFB.navigate(\'guides\')">' + tr.nav.guides + '</button></li>' +
            '<li><button onclick="KFB.navigate(\'contact\')">' + tr.nav.contact + '</button></li>' +
            '</ul></div>' +
            '<div class="footer-col"><h4>' + tr.footerLegal + '</h4><ul>' +
            '<li><span>' + tr.legal.cgu + '</span></li>' +
            '<li><span>' + tr.legal.privacy + '</span></li>' +
            '<li><span>' + tr.legal.mentions + '</span></li>' +
            '</ul></div>' +
            '</div>';

        html += '<div class="footer-bottom"><div class="container">' +
            '<span class="footer-copy">' + tr.rights + '</span>' +
            '<div class="footer-socials">' +
            socials.map(function(s) { return '<a href="' + s.href + '" target="_blank" rel="noopener" aria-label="' + s.icon.replace('bxl-', '').replace('bx-', '') + '">' + bxIcon(s.icon, 'sm') + '</a>'; }).join('') +
            '</div>' +
            '</div></div></footer>';

        return html;
    }

    /* ====================== RENDER ====================== */

    function pageHTML() {
        switch (state.route) {
            case 'home':
                return homePage();
            case 'telephones':
            case 'accessoires':
                return catalogPage();
            case 'product':
                return productDetailPage();
            case 'nouveautes':
                return simpleListPage('new');
            case 'promotions':
                return promotionsPage();
            case 'collections':
                return collectionsPage();
            case 'guides':
                return guidesPage();
            case 'marques':
                return brandsPage();
            case 'service-client':
                return servicePage();
            case 'contact':
                return contactPage();
            case 'favoris':
                return favorisPage();
            case 'search':
                return searchPage();
            default:
                return homePage();
        }
    }

    function render() {
        var root = document.getElementById('app');
        if (!root) return;

        root.innerHTML =
            '<div class="aurora"><div class="aurora-blob b1"></div><div class="aurora-blob b2"></div></div>' +
            headerHTML() +
            '<main>' + pageHTML() + '</main>' +
            footerHTML() +
            '<div id="modal-root"></div>' +
            '<div class="toast" id="toast" style="display:none"></div>';

        /* Apply theme */
        document.documentElement.setAttribute('data-theme', state.theme);
        document.documentElement.setAttribute('lang', state.lang);

        /* Close mobile menu on navigate */
        var mm = document.getElementById('mobile-menu');
        if (mm) mm.classList.remove('open');

        /* If order modal was open, re-render it */
        if (state.orderProduct) renderOrderModal();

        updateFavBadge();
    }

    function rerender() { render(); }

    /* ====================== ACTIONS ====================== */

    function toggleTheme() {
        state.theme = state.theme === 'light' ? 'dark' : 'light';
        save();
        render();
    }

    function toggleLang() {
        state.lang = state.lang === 'fr' ? 'en' : 'fr';
        save();
        render();
    }

    function toggleMobileMenu() {
        var mm = document.getElementById('mobile-menu');
        if (mm) mm.classList.toggle('open');
    }

    function setSearch(val) { state.search = val; }

    function setBrandFilter(val) {
        state._brandFilter = val;
        render();
    }

    function setSortBy(val) {
        state._sortBy = val;
        render();
    }

    function toggleAccordion(id) {
        var item = document.getElementById(id);
        if (!item) return;
        var body = item.querySelector('.acc-body');
        var isOpen = body.style.display !== 'none';
        body.style.display = isOpen ? 'none' : 'block';
        item.classList.toggle('open', !isOpen);
    }

    /* ====================== INIT ====================== */
    function init() {
        document.documentElement.setAttribute('data-theme', state.theme);
        render();
    }

    /* ====================== PUBLIC API ====================== */
    window.KFB = {
        navigate: navigate,
        toggleFav: toggleFav,
        isFav: isFav,
        openOrder: openOrder,
        closeOrder: closeOrder,
        submitOrder: submitOrder,
        submitContact: submitContact,
        toggleTheme: toggleTheme,
        toggleLang: toggleLang,
        toggleMobileMenu: toggleMobileMenu,
        toggleAccordion: toggleAccordion,
        setSearch: setSearch,
        setBrandFilter: setBrandFilter,
        setSortBy: setSortBy,
        rerender: rerender,
        init: init,
    };

    /* Start when DOM ready */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
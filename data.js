/* ============================================================
   KFB STORE — Données du site (FR/EN), produits, avis, etc.
   100% vanilla JavaScript. No frameworks.
   Prix en FCFA. Thème noir/or.
   ============================================================ */

/* ---------------- INFOS BOUTIQUE ---------------- */
const STORE_INFO = {
    name: 'KFB Store',
    city: 'Bafoussam, Cameroun',
    address: 'Bafoussam, Cameroun',
    phoneDisplay: '+237 688 75 32 48',
    phoneWa: '237688753248',
    email: 'brayanfotso237@icloud.com',
    facebook: 'https://www.facebook.com/profile.php?id=61592451110647',
    instagram: 'https://www.instagram.com/cabrel_dev?igsh=ZHZvd2xkeGZ5aG1z',
    telegram: 'https://t.me/Cabreldev',
    whatsapp: 'https://wa.me/237688753248',
    mapsEmbed: 'https://www.google.com/maps?q=Bafoussam,Cameroun&output=embed',
    mapsLink: 'https://www.google.com/maps?q=Bafoussam,Cameroun',
};

function waLink(message) {
    return 'https://wa.me/' + STORE_INFO.phoneWa + '?text=' + encodeURIComponent(message);
}

/* ---------------- TRANSLATIONS FR / EN ---------------- */
const T = {
    fr: {
        topbarLoc: 'Bafoussam & Douala, Cameroun',
        theme: 'Thème',
        nav: {
            home: 'Accueil',
            telephones: 'Téléphones',
            accessoires: 'Accessoires',
            nouveautes: 'Nouveautés',
            promotions: 'Promotions',
            collections: 'Collections',
            guides: "Guides d'achat",
            service: 'Service client',
            contact: 'Contact',
            favoris: 'Favoris',
            allphones: 'Tous les téléphones',
            tablettes: 'Tablettes',
            ordinateurs: 'Ordinateurs',
            televisions: 'Télévisions',
            reconditionnes: 'Reconditionnés',
            allbrands: 'Toutes les marques',
            audio: 'Audio',
            wearables: 'Wearables',
            charge: 'Charge',
            protection: 'Protection',
            photo: 'Photo',
            stockage: 'Stockage',
            gaming: 'Gaming',
            claviers: 'Claviers',
        },
        search: 'Rechercher un produit…',
        new: 'Nouveau',
        promo: 'Promo',
        bestseller: 'Best-seller',
        recond: 'Reconditionné',
        order: 'Commander',
        details: 'Détails',
        addFav: 'Ajouter aux favoris',
        viewAll: 'Voir tout',
        viewAllProducts: 'Voir tous les produits',
        from: 'Dès',
        save: 'Économisez',
        catTitle: 'Catégories',
        catSubtitle: 'Explorez nos univers high-tech',
        newTitle: 'Nouveautés',
        newSubtitle: 'Les derniers arrivages à ne pas manquer',
        promoTitle: 'Promotions',
        promoSubtitle: 'Profitez de nos offres exceptionnelles',
        bestTitle: 'Best-sellers',
        bestSubtitle: 'Les plus plébiscités par nos clients',
        reviewsTitle: 'Avis de nos clients',
        reviewsSubtitle: 'Ce que pensent nos clients de KFB Store',
        collectionsTitle: 'Nos Collections',
        collectionsSubtitle: 'Des packs pensés pour vos besoins',
        guidesTitle: "Guides d'achat",
        guidesSubtitle: 'Nos conseils pour bien choisir',
        serviceTitle: 'Service client',
        serviceSubtitle: 'Notre engagement pour votre satisfaction',
        faqTitle: 'Questions fréquentes',
        contactTitle: 'Contactez-nous',
        contactSubtitle: 'Une question ? Écrivez-nous !',
        contactForm: { name: 'Nom', email: 'E-mail', message: 'Message', send: 'Envoyer', sent: 'Message envoyé ! Nous vous répondrons vite.' },
        footerAbout: "Votre boutique spécialisée en téléphones, tablettes, ordinateurs et accessoires au Cameroun. Produits authentiques, service de proximité, commande simple via WhatsApp.",
        footerShop: 'Boutique',
        footerCats: 'Catégories',
        footerService: 'Service client',
        footerAbout2: 'À propos',
        footerLegal: 'Légal',
        legal: { cgu: 'Conditions générales', privacy: 'Politique de confidentialité', mentions: 'Mentions légales' },
        rights: '© 2026 KFB Store — Bafoussam, Cameroun.',
        orderModal: {
            title: 'Formulaire de commande',
            sub: 'Remplissez vos informations pour recevoir votre commande',
            firstName: 'Prénom',
            lastName: 'Nom',
            email: 'E-mail',
            phone: 'Téléphone',
            city: 'Ville',
            country: 'Pays',
            gender: 'Sexe',
            genderM: 'Homme',
            genderF: 'Femme',
            submit: 'Soumettre',
            cancel: 'Annuler',
            product: 'Produit',
            price: 'Prix',
            qty: 'Quantité',
        },
        waMsg: "Salut Mr/Mme je viens vers vous pour acheter l'un de vos produits proposés dans votre site",
        loading: 'Chargement…',
        noResults: 'Aucun produit trouvé.',
        filters: 'Filtrer',
        sortBy: 'Trier',
        sortNew: 'Nouveautés',
        sortPriceAsc: 'Prix croissant',
        sortPriceDesc: 'Prix décroissant',
        sortRating: 'Mieux notés',
        brand: 'Marque',
        allBrands: 'Toutes les marques',
        condition: 'État',
        all: 'Tous',
        specs: 'Fiche technique',
        description: 'Description',
        relatedProducts: 'Produits similaires',
        backToShop: 'Retour à la boutique',
        emptyFav: 'Aucun favori pour le moment.',
        removeFav: 'Retirer',
        noProducts: 'Aucun produit dans cette catégorie.',
        mapTitle: 'Notre localisation',
        findUs: 'Nous trouver',
        whatsapp: 'WhatsApp',
        call: 'Appeler',
        telegram: 'Telegram',
        facebook: 'Facebook',
        instagram: 'Instagram',
        mail: 'iCloud',
        selectPlaceholder: 'Sélectionner…',
        required: 'Ce champ est requis',
        downloadPdf: 'Télécharger le PDF',
        productCount: 'produit(s)',
        results: 'résultat(s)',
    },
    en: {
        topbarLoc: 'Bafoussam & Douala, Cameroon',
        theme: 'Theme',
        nav: {
            home: 'Home',
            telephones: 'Phones',
            accessoires: 'Accessories',
            nouveautes: 'New arrivals',
            promotions: 'Promotions',
            collections: 'Collections',
            guides: 'Buying guides',
            service: 'Customer service',
            contact: 'Contact',
            favoris: 'Wishlist',
            allphones: 'All phones',
            tablettes: 'Tablets',
            ordinateurs: 'Computers',
            televisions: 'Televisions',
            reconditionnes: 'Refurbished',
            allbrands: 'All brands',
            audio: 'Audio',
            wearables: 'Wearables',
            charge: 'Charging',
            protection: 'Protection',
            photo: 'Photo',
            stockage: 'Storage',
            gaming: 'Gaming',
            claviers: 'Keyboards',
        },
        search: 'Search a product…',
        new: 'New',
        promo: 'Sale',
        bestseller: 'Best-seller',
        recond: 'Refurbished',
        order: 'Order',
        details: 'Details',
        addFav: 'Add to wishlist',
        viewAll: 'View all',
        viewAllProducts: 'View all products',
        from: 'From',
        save: 'Save',
        catTitle: 'Categories',
        catSubtitle: 'Explore our tech universes',
        newTitle: 'New arrivals',
        newSubtitle: 'The latest arrivals not to be missed',
        promoTitle: 'Promotions',
        promoSubtitle: 'Take advantage of our exceptional offers',
        bestTitle: 'Best-sellers',
        bestSubtitle: 'The most praised by our customers',
        reviewsTitle: 'Customer reviews',
        reviewsSubtitle: 'What our customers think of KFB Store',
        collectionsTitle: 'Our Collections',
        collectionsSubtitle: 'Packs designed for your needs',
        guidesTitle: 'Buying guides',
        guidesSubtitle: 'Our advice to choose well',
        serviceTitle: 'Customer service',
        serviceSubtitle: 'Our commitment to your satisfaction',
        faqTitle: 'Frequently asked questions',
        contactTitle: 'Contact us',
        contactSubtitle: 'A question? Write to us!',
        contactForm: { name: 'Name', email: 'Email', message: 'Message', send: 'Send', sent: 'Message sent! We will reply soon.' },
        footerAbout: "Your shop specialized in phones, tablets, computers and accessories in Cameroon. Authentic products, local service, easy ordering via WhatsApp.",
        footerShop: 'Shop',
        footerCats: 'Categories',
        footerService: 'Customer service',
        footerAbout2: 'About',
        footerLegal: 'Legal',
        legal: { cgu: 'Terms & conditions', privacy: 'Privacy policy', mentions: 'Legal notice' },
        rights: '© 2026 KFB Store — Bafoussam, Cameroon.',
        orderModal: {
            title: 'Order form',
            sub: 'Fill in your details to receive your order',
            firstName: 'First name',
            lastName: 'Last name',
            email: 'Email',
            phone: 'Phone',
            city: 'City',
            country: 'Country',
            gender: 'Gender',
            genderM: 'Male',
            genderF: 'Female',
            submit: 'Submit',
            cancel: 'Cancel',
            product: 'Product',
            price: 'Price',
            qty: 'Quantity',
        },
        waMsg: "Hello Mr/Mrs, I am reaching out to buy one of the products offered on your website",
        loading: 'Loading…',
        noResults: 'No product found.',
        filters: 'Filter',
        sortBy: 'Sort',
        sortNew: 'Newest',
        sortPriceAsc: 'Price: low to high',
        sortPriceDesc: 'Price: high to low',
        sortRating: 'Top rated',
        brand: 'Brand',
        allBrands: 'All brands',
        condition: 'Condition',
        all: 'All',
        specs: 'Specifications',
        description: 'Description',
        relatedProducts: 'Related products',
        backToShop: 'Back to shop',
        emptyFav: 'No favorites yet.',
        removeFav: 'Remove',
        noProducts: 'No products in this category.',
        mapTitle: 'Our location',
        findUs: 'Find us',
        whatsapp: 'WhatsApp',
        call: 'Call',
        telegram: 'Telegram',
        facebook: 'Facebook',
        instagram: 'Instagram',
        mail: 'iCloud',
        selectPlaceholder: 'Select…',
        required: 'This field is required',
        downloadPdf: 'Download PDF',
        productCount: 'product(s)',
        results: 'result(s)',
    },
};

/* ---------------- CATÉGORIES ----------------
   Pour masquer une catégorie: passer hidden: true.
   Les produits de cette catégorie disparaissent automatiquement. */
const DEVICE_TYPES = [
    { id: 'telephones', labelFr: 'Téléphones', labelEn: 'Phones', icon: 'smartphone', hidden: false },
    { id: 'tablettes', labelFr: 'Tablettes', labelEn: 'Tablets', icon: 'tablet', hidden: false },
    { id: 'ordinateurs', labelFr: 'Ordinateurs', labelEn: 'Computers', icon: 'laptop', hidden: false },
    { id: 'televisions', labelFr: 'Télévisions', labelEn: 'Televisions', icon: 'tv', hidden: false },
];

/* Pour masquer une sous-catégorie accessoires: passer hidden: true */
const ACCESSORY_CATS = [
    { id: 'audio', labelFr: 'Audio', labelEn: 'Audio', icon: 'headphones', hidden: false },
    { id: 'wearables', labelFr: 'Wearables', labelEn: 'Wearables', icon: 'watch', hidden: false },
    { id: 'charge', labelFr: 'Charge', labelEn: 'Charging', icon: 'charge', hidden: false },
    { id: 'protection', labelFr: 'Protection', labelEn: 'Protection', icon: 'shield', hidden: false },
    { id: 'photo', labelFr: 'Photo', labelEn: 'Photo', icon: 'camera', hidden: false },
    { id: 'stockage', labelFr: 'Stockage', labelEn: 'Storage', icon: 'storage', hidden: false },
    { id: 'gaming', labelFr: 'Gaming', labelEn: 'Gaming', icon: 'gamepad', hidden: false },
    { id: 'claviers', labelFr: 'Claviers', labelEn: 'Keyboards', icon: 'keyboard', hidden: false },
];

const BRANDS = ['Apple', 'Samsung', 'Xiaomi', 'Tecno', 'Infinix', 'HP', 'Dell', 'Lenovo', 'LG', 'Sony', 'JBL', 'Anker', 'Huawei', 'Itel'];

/* ---------------- PRODUITS ----------------
   Pour supprimer un produit: supprimez sa ligne P({...}).
   Pour ajouter: copiez une ligne P({...}) et modifiez les champs.
   image: URL d'une photo. Sinon icône affichée. */
let _pid = 0;

function P(o) {
    _pid++;
    return Object.assign({ id: 'p' + _pid, rating: 4.3, ratingCount: 20, condition: 'neuf' }, o);
}

const PRODUCTS = [
    // --- Téléphones ---

    P({ name: 'iPhone 15 Pro 256Go', brand: 'Apple', category: 'telephones', icon: 'smartphone', image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600', price: 590000, oldPrice: 990000, isNew: true, rating: 4.9, ratingCount: 142, specs: { 'Écran': '6.1" Super Retina XDR', 'Stockage': '256 Go', 'RAM': '8 Go', 'Batterie': '3274 mAh', 'Réseau': '5G', 'Couleur': 'Titane naturel' }, descFr: "Le fleuron d'Apple avec puce A17 Pro, châssis en titane et système photo triple objectif 48 Mpx.", descEn: "Apple's flagship with A17 Pro chip, titanium chassis and 48MP triple camera system." }),
    P({ name: 'Samsung Galaxy S25 Ultra', brand: 'Samsung', category: 'telephones', icon: 'smartphone', image: 'https://gfx3.senetic.com/akeneo-catalog/b/a/2/3/ba23c08ebb36d63dcf9634a49a0fead935dad9ba_1755602__normalized_image1.jpg?_gl=1*htnv99*_gcl_au*NzIyODU2MTQxLjE3ODQ5MjQxMzA.jpg', price: 780000, oldPrice: 860000, isPromo: true, rating: 4.8, ratingCount: 98, specs: { 'Écran': '6.8" Dynamic AMOLED', 'Stockage': '256 Go', 'RAM': '12 Go', 'Batterie': '5000 mAh', 'Réseau': '5G', 'Couleur': 'Noir titane' }, descFr: 'S Pen intégré, zoom 100x et intelligence artificielle Galaxy AI embarquée.', descEn: 'Built-in S Pen, 100x zoom and onboard Galaxy AI artificial intelligence.' }),
   
    P({ name: 'Xiaomi Redmi Note 13 Pro', brand: 'Xiaomi', category: 'telephones', icon: 'smartphone', image: 'https://globalmarket.promo/cdn/shop/files/Note13P_1024x1024@2x.jpg?v=1714060823', price: 165000, isNew: true, rating: 4.5, ratingCount: 76, specs: { 'Écran': '6.67" AMOLED 120Hz', 'Stockage': '256 Go', 'RAM': '8 Go', 'Batterie': '5100 mAh', 'Réseau': '4G', 'Couleur': 'Bleu glacier' }, descFr: 'Excellent rapport qualité-prix avec charge rapide 67W et capteur 200 Mpx.', descEn: 'Excellent value for money with 67W fast charging and 200MP sensor.' }),
    P({ name: 'Tecno Camon 20 Pro', brand: 'Tecno', category: 'telephones', icon: 'smartphone', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2G1i96_LF6ffJNGYwnlIJ8H-PaMq4zw9bd8uwnoIVGg&s=10', price: 145000, rating: 4.2, ratingCount: 54, isBestSeller: true, specs: { 'Écran ': ' 6.67 " AMOLED', 'Stockage': '256 Go', 'RAM': '8 Go', 'Batterie': '5000 mAh', 'Réseau': '4G', 'Couleur': 'Vert émeraude' }, descFr: 'Un best-seller au Cameroun : design premium et excellente autonomie au quotidien.', descEn: 'A best-seller in Cameroon: premium design and excellent daily battery life.' }),

    P({ name: 'Infinix Note 30', brand: 'Infinix', category: 'telephones', icon: 'smartphone', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL7o00vsCpAMMswRrF51krj_K8kFwi_3Mq7tU5uHpq1Q&s=10', price: 120000, oldPrice: 138000, isPromo: true, rating: 4.3, ratingCount: 61, specs: { 'Écran': '6.78" AMOLED', 'Stockage': '128 Go', 'RAM': '8 Go', 'Batterie': '5000 mAh', 'Réseau': '4G', 'Couleur': 'Noir' }, descFr: 'Charge ultra rapide 68W et grand écran incurvé pour un usage intensif.', descEn: '68W ultra-fast charging and large curved screen for intensive use.' }),
    P({
  name: 'Infinix Smart 7',
  brand: 'Infinix',
  category: 'telephones',
  icon: 'smartphone',
  image: 'https://kmerphone.com/cdn/shop/files/Infinix-Smart-7-Plus-Noir_018a542e-3b3e-4235-8127-473317442c12_1024x1024.jpg?v=1697277270',
  price: 60000,
  rating: 3.8,
  ratingCount: 22,
  specs: { 'Écran': '6.6" IPS LCD', 'Stockage': '64 Go', 'RAM': '6 Go (3+3 virtuelle)', 'Batterie': '5000 mAh', 'Réseau': '4G', 'Couleur': 'Noir' },
  descFr: 'Smartphone très abordable avec double caméra et empreinte digitale, garantie 12 mois.',
  descEn: 'Very affordable smartphone with dual camera and fingerprint sensor, 12-month warranty.'
}),

P({
  name: 'Infinix Smart 8',
  brand: 'Infinix',
  category: 'telephones',
  icon: 'smartphone',
  image: 'https://kmerphone.com/cdn/shop/files/Infinix-Smart-8-Noir_6d7853f8-7937-47dd-bc15-82b3ed7965b7_1024x1024.jpg?v=1701466259',
  price: 65900,
  rating: 4.0,
  ratingCount: 47,
  specs: { 'Écran': '6.6" IPS LCD', 'Stockage': '128 Go', 'RAM': '8 Go (4+4 virtuelle)', 'Batterie': '5000 mAh', 'Réseau': '4G', 'Couleur': 'Noir' },
  descFr: 'Smartphone fiable avec grande batterie et empreinte digitale, garantie 12 mois.',
  descEn: 'Reliable smartphone with large battery and fingerprint sensor, 12-month warranty.'
}),

P({
  name: 'Infinix Hot 12',
  brand: 'Infinix',
  category: 'telephones',
  icon: 'smartphone',
  image: 'https://kmerphone.com/cdn/shop/products/Infinix-Hot-12-Bleu_1024x1024.jpg?v=1652047139',
  price: 100900,
  rating: 3.9,
  ratingCount: 31,
  specs: { 'Écran': '6.82" IPS LCD, 90Hz', 'Stockage': '128 Go', 'RAM': '7 Go (4+3 virtuelle)', 'Batterie': '5000 mAh', 'Réseau': '4G LTE', 'Couleur': 'Bleu' },
  descFr: 'Grand écran 6.82" avec triple caméra 13+2+2MP, empreinte digitale, garantie 12 mois.',
  descEn: 'Large 6.82" screen with 13+2+2MP triple camera, fingerprint sensor, 12-month warranty.'
}),

P({
  name: 'Infinix Hot 40i',
  brand: 'Infinix',
  category: 'telephones',
  icon: 'smartphone',
  image: 'https://kmerphone.com/cdn/shop/files/Infinix-Hot-40i-Noir_58ea4a62-acbe-4c2c-9bcc-69a04f18a532_1024x1024.jpg?v=1704029444',
  price: 77900,
  rating: 4.1,
  ratingCount: 39,
  specs: { 'Écran': '6.56" IPS LCD, 90Hz', 'Stockage': '128 Go', 'RAM': '16 Go (8+8 virtuelle)', 'Batterie': '5000 mAh', 'Réseau': '4G LTE', 'Couleur': 'Noir' },
  descFr: 'Double caméra 50+2MP, selfie 32MP et charge rapide 18W, garantie 12 mois.',
  descEn: '50+2MP dual camera, 32MP selfie camera and 18W fast charging, 12-month warranty.'
}),

P({
  name: 'Infinix Hot 30',
  brand: 'Infinix',
  category: 'telephones',
  icon: 'smartphone',
  image: 'https://kmerphone.com/cdn/shop/files/Infinix-Hot-30-Noir_69d938c1-aac6-4ba6-9607-65a558a0c8a2_1024x1024.jpg?v=1693610463',
  price: 110000,
  oldPrice: 175400,
  isPromo: true,
  rating: 4.2,
  ratingCount: 28,
  specs: { 'Écran': '6.78" IPS LCD, 90Hz', 'Stockage': '128 Go', 'RAM': '16 Go (8+8 virtuelle)', 'Batterie': '5000 mAh', 'Réseau': '4G LTE', 'Couleur': 'Noir' },
  descFr: 'Grand écran 6.78" avec charge rapide 33W, idéal pour la productivité et le jeu.',
  descEn: 'Large 6.78" screen with 33W fast charging, ideal for productivity and gaming.'
}),

P({
  name: 'Infinix Note 30',
  brand: 'Infinix',
  category: 'telephones',
  icon: 'smartphone',
  image: 'https://kmerphone.com/cdn/shop/files/Infinix-Note-30-Or_1024x1024.jpg?v=1686517683',
  price: 109900,
  rating: 4.3,
  ratingCount: 61,
  specs: { 'Écran': '6.78" IPS LCD, 120Hz', 'Stockage': '256 Go', 'RAM': '16 Go (8+8 virtuelle)', 'Batterie': '5000 mAh', 'Réseau': '4G LTE', 'Couleur': 'Or' },
  descFr: 'Triple caméra 64+2+2MP, écran 120Hz et charge ultra rapide 45W.',
  descEn: '64+2+2MP triple camera, 120Hz screen and ultra-fast 45W charging.'
}),

P({
  name: 'Infinix Note 30 Pro',
  brand: 'Infinix',
  category: 'telephones',
  icon: 'smartphone',
  image: 'https://kmerphone.com/cdn/shop/files/Infinix-Note-30-Pro-Gold_1024x1024.jpg?v=1686034115',
  price: 160000,
  rating: 4.4,
  ratingCount: 44,
  specs: { 'Écran': '6.78" AMOLED, 120Hz', 'Stockage': '256 Go', 'RAM': '16 Go (8+8 virtuelle)', 'Batterie': '5000 mAh', 'Réseau': '4G LTE', 'Couleur': 'Or' },
  descFr: 'Écran AMOLED, triple caméra 108+2+2MP et charge ultra rapide 68W (80% en 30 min).',
  descEn: 'AMOLED display, 108+2+2MP triple camera and ultra-fast 68W charging (80% in 30 min).'
}),

P({
  name: 'Infinix Note 40',
  brand: 'Infinix',
  category: 'telephones',
  icon: 'smartphone',
  image: 'https://kmerphone.com/cdn/shop/files/Infinix-Note-40-Prix-Cameroun-Noir_1024x1024.jpg?v=1713644964',
  price: 155000,
  rating: 4.4,
  ratingCount: 33,
  specs: { 'Écran': '6.78" AMOLED, 120Hz', 'Stockage': '256 Go', 'RAM': '16 Go (8+8 virtuelle)', 'Batterie': '5000 mAh', 'Réseau': '4G LTE', 'Couleur': 'Noir' },
  descFr: 'Écran AMOLED 1300 nits, triple caméra 108MP et charge rapide 45W (50% en 26 min).',
  descEn: 'AMOLED 1300-nit display, 108MP triple camera and 45W fast charging (50% in 26 min).'
}),

P({
  name: 'Infinix Note 40 Pro',
  brand: 'Infinix',
  category: 'telephones',
  icon: 'smartphone',
  image: 'https://kmerphone.com/cdn/shop/files/Infinix-Note-40-Pro-Prix-Cameroun-Or_1024x1024.jpg?v=1713643919',
  price: 179900,
  rating: 4.5,
  ratingCount: 52,
  specs: { 'Écran': '6.78" AMOLED, 120Hz', 'Stockage': '256 Go', 'RAM': '16 Go (8+8 virtuelle)', 'Batterie': '5000 mAh', 'Réseau': '4G LTE', 'Couleur': 'Or' },
  descFr: 'Écran AMOLED 1300 nits, triple caméra 108MP et charge ultra rapide 70W (50% en 20 min).',
  descEn: 'AMOLED 1300-nit display, 108MP triple camera and ultra-fast 70W charging (50% in 20 min).'
}),

P({
  name: 'Infinix Note 40 Pro+',
  brand: 'Infinix',
  category: 'telephones',
  icon: 'smartphone',
  image: 'https://kmerphone.com/cdn/shop/files/Infinix-Note-40-Pro-Prix-Cameroun-Vert_1024x1024.jpg?v=1713643918',
  price: 189900,
  rating: 4.5,
  ratingCount: 29,
  specs: { 'Écran': '6.78" AMOLED, 120Hz', 'Stockage': '256 Go', 'RAM': '24 Go (12+12 virtuelle)', 'Batterie': '4600 mAh', 'Réseau': '4G LTE', 'Couleur': 'Vert' },
  descFr: 'Chipset Dimensity 7020, triple caméra 108+2+2MP et grande capacité RAM 24 Go.',
  descEn: 'Dimensity 7020 chipset, 108+2+2MP triple camera and huge 24GB RAM capacity.'
}),
       P({ name: 'Samsung Galaxy A55', brand: 'Samsung', category: 'telephones', icon: 'smartphone', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0DFIkIoOlopY3f4QqEm16Em5skkK3eTErrDzl6XxeMA&s=10', price: 285000, rating: 4.6, ratingCount: 88, specs: { 'Écran': '6.6" Super AMOLED', 'Stockage': '256 Go', 'RAM': '8 Go', 'Batterie': '5000 mAh', 'Réseau': '5G', 'Couleur': 'Bleu marine' }, descFr: 'Milieu de gamme robuste, IP67 et Android One UI fluide.', descEn: 'Robust mid-range, IP67 and smooth Android One UI.' }),
    P({ name: 'iPhone 13', brand: 'Apple', category: 'telephones', icon: 'smartphone', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAhDdRVf4-rL5iGqiVNmCPunAHLAUQCxvBgacv9Pgz6Q&s=10', price: 420000, oldPrice: 470000, condition: 'reconditionne', rating: 4.7, ratingCount: 133, specs: { 'Écran': '6.1" Super Retina XDR', 'Stockage': '128 Go', 'RAM': '4 Go', 'Batterie': '3240 mAh', 'Réseau': '5G', 'Couleur': 'Minuit' }, descFr: 'Reconditionné grade A, testé et garanti 6 mois. Comme neuf à prix réduit.', descEn: 'Refurbished grade A, tested and 6-month warranty. Like new at reduced price.' }),
   P({
  name: 'Apple iPhone 12',
  brand: 'Apple',
  category: 'telephones',
  icon: 'smartphone',
  image: 'https://kmerphone.com/cdn/shop/products/Sanstitre-2021-01-24T201253.144_1_1024x1024.jpg?v=1701644446',
  price: 205000,
  condition: 'reconditionne',
  rating: 4.5,
  ratingCount: 76,
  specs: { 'Écran': '6.1" Super Retina XDR OLED', 'Stockage': '64 Go', 'RAM': '4 Go', 'Batterie': '2815 mAh', 'Réseau': '5G', 'Couleur': 'Assortie' },
  descFr: 'Remis à neuf scellé, puce A14 Bionic, double caméra 12+12MP, mode nuit.',
  descEn: 'Sealed refurbished, A14 Bionic chip, 12+12MP dual camera, night mode.'
}),

P({
  name: 'Apple iPhone 12 Pro',
  brand: 'Apple',
  category: 'telephones',
  icon: 'smartphone',
  image: 'https://kmerphone.com/cdn/shop/products/Sanstitre-2021-01-24T204150.466_1_1024x1024.jpg?v=1611517586',
  price: 229999,
  oldPrice: 294500,
  condition: 'reconditionne',
  isPromo: true,
  rating: 4.5,
  ratingCount: 44,
  specs: { 'Écran': '6.1" Super Retina XDR OLED', 'Stockage': '128 Go', 'RAM': '6 Go', 'Batterie': '2815 mAh', 'Réseau': '5G', 'Couleur': 'Noir' },
  descFr: 'Remis à neuf scellé, triple caméra 12+12+12MP, scanner LiDAR, Ceramic Shield.',
  descEn: 'Sealed refurbished, 12+12+12MP triple camera, LiDAR scanner, Ceramic Shield.'
}),

P({
  name: 'Apple iPhone 12 Pro Max',
  brand: 'Apple',
  category: 'telephones',
  icon: 'smartphone',
  image: 'https://kmerphone.com/cdn/shop/products/Sanstitre-2021-01-24T203957.746_1_056231d3-666a-41b0-b320-50ca50c6ae5a_1024x1024.jpg?v=1611518074',
  price: 255000,
  oldPrice: 378500,
  condition: 'reconditionne',
  isPromo: true,
  rating: 4.6,
  ratingCount: 39,
  specs: { 'Écran': '6.7" Super Retina XDR OLED', 'Stockage': '128 Go', 'RAM': '6 Go', 'Batterie': '3687 mAh', 'Réseau': '5G', 'Couleur': 'Assortie' },
  descFr: 'Remis à neuf scellé, triple caméra 12MP, mode Portrait amélioré, scanner LiDAR.',
  descEn: 'Sealed refurbished, 12MP triple camera, enhanced Portrait mode, LiDAR scanner.'
}),

P({
  name: 'Apple iPhone 14 Pro',
  brand: 'Apple',
  category: 'telephones',
  icon: 'smartphone',
  image: 'https://kmerphone.com/cdn/shop/products/iPhone-14-Pro-Max-White_1890cbc0-dd3d-42e3-b6f5-f22cf5a80b14_1024x1024.jpg?v=1663521683',
  price: 349990,
  condition: 'reconditionne',
  rating: 4.7,
  ratingCount: 31,
  specs: { 'Écran': '6.1" Super Retina XDR OLED, 120Hz', 'Stockage': '128 Go', 'RAM': '6 Go', 'Batterie': '3200 mAh', 'Réseau': '5G', 'Couleur': 'Assortie' },
  descFr: 'Remis à neuf scellé, puce A16 Bionic, Dynamic Island, Always-On Display.',
  descEn: 'Sealed refurbished, A16 Bionic chip, Dynamic Island, Always-On Display.'
}),

P({
  name: 'Apple iPhone 14 Pro Max',
  brand: 'Apple',
  category: 'telephones',
  icon: 'smartphone',
  image: 'https://kmerphone.com/cdn/shop/products/iPhone-14-Pro-Max-Gold_f93857ea-019e-458e-83dc-62bfa0d5dfbe_1024x1024.jpg?v=1663521683',
  price: 399990,
  oldPrice: 872400,
  condition: 'reconditionne',
  isPromo: true,
  rating: 4.8,
  ratingCount: 88,
  specs: { 'Écran': '6.7" Super Retina XDR OLED, 120Hz', 'Stockage': '128 Go', 'RAM': '6 Go', 'Batterie': '4323 mAh', 'Réseau': '5G', 'Couleur': 'Or' },
  descFr: 'Remis à neuf scellé, puce A16 Bionic, écran 2000 nits, quadruple caméra 48MP.',
  descEn: 'Sealed refurbished, A16 Bionic chip, 2000-nit display, 48MP quad camera.'
}),

P({
  name: 'Apple iPhone 15 Pro',
  brand: 'Apple',
  category: 'telephones',
  icon: 'smartphone',
  image: 'https://kmerphone.com/cdn/shop/files/Apple-iPhone-15-Pro-Max-Prix-Cameroun-Natural_1024x1024.jpg?v=1713657231',
  price: 469990,
  oldPrice: 646700,
  condition: 'reconditionne',
  isPromo: true,
  rating: 4.8,
  ratingCount: 42,
  specs: { 'Écran': '6.1" OLED, 120Hz', 'Stockage': '128 Go', 'RAM': '8 Go', 'Batterie': '3274 mAh', 'Réseau': '5G', 'Couleur': 'Naturel (titane)' },
  descFr: 'Design en titane, puce A17 Pro, Wi-Fi 6E, triple caméra 48+12+12MP.',
  descEn: 'Titanium design, A17 Pro chip, Wi-Fi 6E, 48+12+12MP triple camera.'
}),

P({
  name: 'Apple iPhone XR',
  brand: 'Apple',
  category: 'telephones',
  icon: 'smartphone',
  image: 'https://kmerphone.com/cdn/shop/products/Apple-iPhone-XR-Bleu_7ca82d65-a234-4369-9698-5b46cffa5c24_1024x1024.jpg?v=1701643334',
  price: 119900,
  oldPrice: 187000,
  condition: 'reconditionne',
  isPromo: true,
  rating: 4.2,
  ratingCount: 41,
  specs: { 'Écran': '6.1" Liquid Retina IPS LCD', 'Stockage': '128 Go', 'RAM': '3 Go', 'Batterie': '2942 mAh', 'Réseau': '4G', 'Couleur': 'Bleu' },
  descFr: 'Remis à neuf scellé, puce A12 Bionic, Face ID et charge rapide 15W.',
  descEn: 'Sealed refurbished, A12 Bionic chip, Face ID and 15W fast charging.'
}),

P({
  name: 'Apple iPhone 11',
  brand: 'Apple',
  category: 'telephones',
  icon: 'smartphone',
  image: 'https://kmerphone.com/cdn/shop/products/Apple-iPhone-11-Rouge_1024x1024.jpg?v=1648274274',
  price: 215000,
  condition: 'reconditionne',
  rating: 4.4,
  ratingCount: 67,
  specs: { 'Écran': '6.1" Liquid Retina IPS LCD', 'Stockage': '64 Go', 'RAM': '4 Go', 'Batterie': '3110 mAh', 'Réseau': '4G', 'Couleur': 'Rouge' },
  descFr: 'Remis à neuf scellé, puce A13 Bionic, double caméra 12+12MP.',
  descEn: 'Sealed refurbished, A13 Bionic chip, 12+12MP dual camera.'
}),

P({
  name: 'Apple iPhone 13',
  brand: 'Apple',
  category: 'telephones',
  icon: 'smartphone',
  image: 'https://kmerphone.com/cdn/shop/products/apple_iphone_13_3_1024x1024.jpg?v=1633904757',
  price: 215000,
  oldPrice: 387500,
  condition: 'reconditionne',
  isPromo: true,
  rating: 4.6,
  ratingCount: 98,
  specs: { 'Écran': '6.1" Super Retina XDR OLED', 'Stockage': '128 Go', 'RAM': '4 Go', 'Batterie': '3240 mAh', 'Réseau': '5G', 'Couleur': 'Assortie' },
  descFr: 'Remis à neuf scellé, puce A15 Bionic, écran OLED 1200 nits.',
  descEn: 'Sealed refurbished, A15 Bionic chip, 1200-nit OLED display.'
}),

P({
  name: 'Apple iPhone 16',
  brand: 'Apple',
  category: 'telephones',
  icon: 'smartphone',
  isNew: true,
  image: 'https://kmerphone.com/cdn/shop/files/Apple-iPhone-16-Prix-Cameroun-en-FCFA-Rose_1024x1024.jpg?v=1754300550',
  price: 549990,
  oldPrice: 987400,
  isPromo: true,
  rating: 4.8,
  ratingCount: 52,
  specs: { 'Écran': '6.1" OLED Super Retina XDR, 120Hz', 'Stockage': '128 Go', 'RAM': '8 Go', 'Batterie': '3561 mAh', 'Réseau': '5G', 'Couleur': 'Rose' },
  descFr: 'Neuf scellé, puce A18, Apple Intelligence, caméra 48+12MP, écran 2000 nits.',
  descEn: 'Sealed new, A18 chip, Apple Intelligence, 48+12MP camera, 2000-nit display.'
}),

P({
  name: 'Apple iPhone 17 Pro Max',
  brand: 'Apple',
  category: 'telephones',
  icon: 'smartphone',
  isNew: true,
  image: 'https://kmerphone.com/cdn/shop/files/Apple-iPhone-17-Pro-Max-Orange_1024x1024.jpg?v=1760358512',
  price: 1099990,
  rating: 4.9,
  ratingCount: 8,
  specs: { 'Écran': '6.9" Super Retina XDR OLED, 120Hz', 'Stockage': '512 Go', 'RAM': '12 Go', 'Batterie': '5088 mAh (4823 nominale)', 'Réseau': '5G', 'Couleur': 'Orange' },
  descFr: 'Le tout dernier modèle Apple : puce A19 Pro, triple caméra 48MP, écran 3000 nits, USB-C 40W+.',
  descEn: 'The very latest Apple model: A19 Pro chip, 48MP triple camera, 3000-nit display, 40W+ USB-C.'
}),

P({
  name: 'Apple iPhone 15 Pro Max',
  brand: 'Apple',
  category: 'telephones',
  icon: 'smartphone',
  image: 'https://kmerphone.com/cdn/shop/files/Apple-iPhone-15-Pro-Max-Prix-Cameroun-Blanc_1024x1024.jpg?v=1713657231',
  price: 515000,
  oldPrice: 779400,
  condition: 'reconditionne',
  isPromo: true,
  rating: 4.9,
  ratingCount: 57,
  specs: { 'Écran': '6.7" OLED Super Retina XDR, 120Hz', 'Stockage': '256 Go', 'RAM': '8 Go', 'Batterie': '4441 mAh', 'Réseau': '5G', 'Couleur': 'Blanc (titane)' },
  descFr: 'Puce A17 Pro 3nm, USB-C 10Gbit/s, triple caméra 48+12+12MP, 29h de vidéo.',
  descEn: 'A17 Pro 3nm chip, 10Gbit/s USB-C, 48+12+12MP triple camera, 29h video playback.'
}),
    P({ name: 'Huawei Nova 11', brand: 'Huawei', category: 'telephones', icon: 'smartphone', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqm2Kc4ErQhhH3YGrbHeAXHWa3RRzC_TbbrpsyjdfWeg&s=10', price: 215000, rating: 4.4, ratingCount: 40, specs: { 'Écran': '6.7" OLED 120Hz', 'Stockage': '256 Go', 'RAM': '8 Go', 'Batterie': '4500 mAh', 'Réseau': '4G', 'Couleur': 'Blanc perle' }, descFr: 'Design ultra fin avec charge Supercharge 100W.', descEn: 'Ultra-thin design with 100W Supercharge.' }),
    P({ name: 'Itel P55+', brand: 'Itel', category: 'telephones', icon: 'smartphone', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjMVQALXCbviotfVPzic1T3TPhX26x7Npg7FkSK5xIxw&s=10', price: 68000, rating: 4.0, ratingCount: 29, specs: { 'Écran': '6.6" HD+', 'Stockage': '128 Go', 'RAM': '6 Go', 'Batterie': '5000 mAh', 'Réseau': '4G', 'Couleur': 'Gris' }, descFr: "Le meilleur prix d'entrée de gamme pour un usage quotidien fiable.", descEn: 'The best entry-level price for reliable daily use.' }),
    P({
  name: 'Samsung Galaxy Z Flip 4 5G',
  brand: 'Samsung',
  category: 'telephones',
  icon: 'smartphone',
  image: 'https://kmerphone.com/cdn/shop/products/samsung-galaxy-z-flip-3-5g_2_d0becdd9-ae2a-4b36-838d-af2b55bf3bd9_1024x1024.jpg?v=1662018977',
  price: 750000,
  rating: 4.4,
  ratingCount: 26,
  specs: { 'Écran': '6.7" AMOLED pliable (+ écran couvre 1.9")', 'Stockage': '256 Go', 'RAM': '8 Go', 'Batterie': '3700 mAh', 'Réseau': '5G', 'Couleur': 'Assortie' },
  descFr: 'Remis à neuf scellé, Snapdragon 8+ Gen 1, format compact pliable avec double caméra 12+12MP.',
  descEn: 'Sealed refurbished, Snapdragon 8+ Gen 1, compact foldable form with 12+12MP dual camera.'
}),

P({
  name: 'Samsung Galaxy Z Flip 4 5G',
  brand: 'Samsung',
  category: 'telephones',
  icon: 'smartphone',
  image: 'https://kmerphone.com/cdn/shop/products/samsung-galaxy-z-flip-3-5g_2_641adae9-9975-463b-b956-99b935ded528_1024x1024.jpg?v=1662019529',
  price: 799900,
  rating: 4.5,
  ratingCount: 18,
  specs: { 'Écran': '6.7" AMOLED pliable', 'Stockage': '512 Go', 'RAM': '8 Go', 'Batterie': '3700 mAh', 'Réseau': '5G', 'Couleur': 'Assortie' },
  descFr: 'Version 512 Go, stockage maximal pour ce modèle pliable compact.',
  descEn: '512GB version, maximum storage for this compact foldable model.'
}),

P({
  name: 'Samsung Galaxy Z Fold 4 5G',
  brand: 'Samsung',
  category: 'telephones',
  icon: 'smartphone',
  image: 'https://kmerphone.com/cdn/shop/products/samsung-galaxy-z-fold-3-5g_3_12ce6a12-02ac-4c4b-90cf-9f21dd9cd39c_1024x1024.jpg?v=1759056738',
  price: 389990,
  oldPrice: 447800,
  isPromo: true,
  rating: 4.6,
  ratingCount: 22,
  specs: { 'Écran': '7.6" AMOLED pliable + 6.2" externe', 'Stockage': '256 Go', 'RAM': '12 Go', 'Batterie': '4400 mAh', 'Réseau': '5G', 'Couleur': 'Noir' },
  descFr: 'Remis à neuf scellé, Snapdragon 8+ Gen 1, triple caméra 50+12+10MP, zoom optique 3x.',
  descEn: 'Sealed refurbished, Snapdragon 8+ Gen 1, 50+12+10MP triple camera, 3x optical zoom.'
}),

P({
  name: 'Samsung Galaxy Z Fold 6 5G',
  brand: 'Samsung',
  category: 'telephones',
  icon: 'smartphone',
  isNew: true,
  image: 'https://kmerphone.com/cdn/shop/files/Samsung-Galaxy-Z-Fold-6-5G-Rose_1024x1024.jpg?v=1728261536',
  price: 599990,
  oldPrice: 674500,
  isPromo: true,
  rating: 4.8,
  ratingCount: 34,
  specs: { 'Écran': '7.6" AMOLED pliable 120Hz + 6.3" externe', 'Stockage': '256 Go', 'RAM': '12 Go', 'Batterie': '4400 mAh', 'Réseau': '5G', 'Couleur': 'Rose' },
  descFr: 'Snapdragon 8 Gen 3, Galaxy AI, écran 2600 nits, design ultra-léger et fin.',
  descEn: 'Snapdragon 8 Gen 3, Galaxy AI, 2600-nit display, ultra-light and slim design.'
}),
  P({
  name: 'Samsung Galaxy A05',
  brand: 'Samsung',
  category: 'telephones',
  icon: 'smartphone',
  image: 'https://kmerphone.com/cdn/shop/files/Samsung-Galaxy-A05-Noir_35753124-c44c-4148-ac65-88a8766867a9_1024x1024.jpg?v=1705604094',
  price: 65990,
  oldPrice: 79800,
  isPromo: true,
  rating: 3.7,
  ratingCount: 24,
  specs: { 'Écran': '6.7" PLS LCD', 'Stockage': '128 Go', 'RAM': '4 Go', 'Batterie': '5000 mAh', 'Réseau': '4G', 'Couleur': 'Noir' },
  descFr: 'Entrée de gamme Samsung avec double caméra 50+2MP et garantie 24 mois.',
  descEn: 'Samsung entry-level with 50+2MP dual camera and 24-month warranty.'
}),

P({
  name: 'Samsung Galaxy A06',
  brand: 'Samsung',
  category: 'telephones',
  icon: 'smartphone',
  image: 'https://kmerphone.com/cdn/shop/files/Samsung-Galaxy-A06-128Go-Prix-Cameroun-en-FCFA-Or_1024x1024.jpg?v=1754250650',
  price: 67000,
  oldPrice: 79800,
  isPromo: true,
  rating: 3.8,
  ratingCount: 31,
  specs: { 'Écran': '6.7" PLS LCD, 90Hz', 'Stockage': '64 Go', 'RAM': '4 Go', 'Batterie': '5000 mAh', 'Réseau': '4G', 'Couleur': 'Or' },
  descFr: 'Processeur Helio G85, Samsung Knox Vault et charge rapide 25W.',
  descEn: 'Helio G85 processor, Samsung Knox Vault and 25W fast charging.'
}),

P({
  name: 'Samsung Galaxy A05s',
  brand: 'Samsung',
  category: 'telephones',
  icon: 'smartphone',
  image: 'https://kmerphone.com/cdn/shop/files/Samsung-Galaxy-A05s-Vert_1024x1024.jpg?v=1744335583',
  price: 82000,
  oldPrice: 127800,
  isPromo: true,
  rating: 3.9,
  ratingCount: 27,
  specs: { 'Écran': '6.7" PLS LCD, 90Hz', 'Stockage': '128 Go', 'RAM': '4 Go', 'Batterie': '5000 mAh', 'Réseau': '4G', 'Couleur': 'Vert' },
  descFr: 'Snapdragon 680, triple caméra 50+2+2MP et empreinte digitale latérale.',
  descEn: 'Snapdragon 680, 50+2+2MP triple camera and side fingerprint sensor.'
}),

P({
  name: 'Samsung Galaxy A07',
  brand: 'Samsung',
  category: 'telephones',
  icon: 'smartphone',
  image: 'https://kmerphone.com/cdn/shop/files/Samsung-Galaxy-A07-Vert_1024x1024.jpg?v=1755965132',
  price: 73990,
  rating: 4.0,
  ratingCount: 19,
  specs: { 'Écran': '6.7" PLS LCD, 90Hz', 'Stockage': '64 Go', 'RAM': '4 Go', 'Batterie': '5000 mAh', 'Réseau': '4G LTE', 'Couleur': 'Vert' },
  descFr: 'Modèle récent (2026), Android 15, double caméra 50+2MP et charge rapide 15W.',
  descEn: 'Recent 2026 model, Android 15, 50+2MP dual camera and 15W fast charging.'
}),

P({
  name: 'Samsung Galaxy A16',
  brand: 'Samsung',
  category: 'telephones',
  icon: 'smartphone',
  image: 'https://kmerphone.com/cdn/shop/files/Samsung-Galaxy-A16-Gris_1024x1024.jpg?v=1764689205',
  price: 79990,
  rating: 4.1,
  ratingCount: 43,
  specs: { 'Écran': '6.7" Super AMOLED, 90Hz', 'Stockage': '128 Go', 'RAM': '4 Go', 'Batterie': '5000 mAh', 'Réseau': '4G LTE', 'Couleur': 'Gris' },
  descFr: 'Écran Super AMOLED 800 nits, triple caméra 50+5+2MP, moins de 120 000 FCFA.',
  descEn: 'Super AMOLED 800-nit display, 50+5+2MP triple camera, under 120,000 FCFA.'
}),

P({
  name: 'Samsung Galaxy A17',
  brand: 'Samsung',
  category: 'telephones',
  icon: 'smartphone',
  image: 'https://kmerphone.com/cdn/shop/files/Samsung-Galaxy-A17-Noir_1024x1024.jpg?v=1764690610',
  price: 132000,
  rating: 4.3,
  ratingCount: 21,
  specs: { 'Écran': '6.7" Super AMOLED, 90Hz', 'Stockage': '128 Go', 'RAM': '6 Go', 'Batterie': '5000 mAh', 'Réseau': '4G/5G', 'Couleur': 'Noir' },
  descFr: 'IP54, Gorilla Glass Victus, triple caméra OIS 50MP et 6 ans de mises à jour.',
  descEn: 'IP54, Gorilla Glass Victus, 50MP OIS triple camera and 6 years of updates.'
}),

P({
  name: 'Samsung Galaxy A55 5G',
  brand: 'Samsung',
  category: 'telephones',
  icon: 'smartphone',
  image: 'https://kmerphone.com/cdn/shop/files/Samsung-Galaxy-A55-5G-Prix-Cameroun-Noir_ef53a57d-2460-452e-b45e-96fd8bb6e013_1024x1024.jpg?v=1713735308',
  price: 179990,
  rating: 4.5,
  ratingCount: 58,
  specs: { 'Écran': '6.6" Super AMOLED, 120Hz', 'Stockage': '128 Go', 'RAM': '8 Go', 'Batterie': '5000 mAh', 'Réseau': '5G', 'Couleur': 'Noir' },
  descFr: 'Gorilla Glass Victus+, Exynos 1480, triple caméra 50+12+5MP, autonomie 2 jours.',
  descEn: 'Gorilla Glass Victus+, Exynos 1480, 50+12+5MP triple camera, 2-day battery life.'
}),

P({
  name: 'Samsung Galaxy S23 Ultra 5G',
  brand: 'Samsung',
  category: 'telephones',
  icon: 'smartphone',
  isNew: false,
  image: 'https://kmerphone.com/cdn/shop/products/Samsung-Galaxy-S23-Ultra-5G-Blanc_1024x1024.jpg?v=1748341074',
  price: 325000,
  rating: 4.6,
  ratingCount: 37,
  specs: { 'Écran': '6.8" Dynamic AMOLED 2X, 120Hz', 'Stockage': '256 Go', 'RAM': '8 Go', 'Batterie': '5000 mAh', 'Réseau': '5G', 'Couleur': 'Blanc' },
  descFr: 'Remis à neuf scellé, Snapdragon 8 Gen 2, caméra 200MP et vidéo 8K.',
  descEn: 'Sealed refurbished, Snapdragon 8 Gen 2, 200MP camera and 8K video.'
}),

P({
  name: 'Samsung Galaxy S24 Ultra 5G',
  brand: 'Samsung',
  category: 'telephones',
  icon: 'smartphone',
  isNew: true,
  image: 'https://kmerphone.com/cdn/shop/files/Samsung-Galaxy-S24-Ultra-5G-Prix-Cameroun-Violet_1024x1024.jpg?v=1742448037',
  price: 475000,
  oldPrice: 687400,
  isPromo: true,
  rating: 4.7,
  ratingCount: 49,
  specs: { 'Écran': '6.8" Dynamic AMOLED 2X, 120Hz', 'Stockage': '256 Go', 'RAM': '12 Go', 'Batterie': '5000 mAh', 'Réseau': '5G', 'Couleur': 'Violet' },
  descFr: 'Snapdragon 8 Gen 3, S Pen en titane, Galaxy AI et caméra 200MP.',
  descEn: 'Snapdragon 8 Gen 3, titanium S Pen, Galaxy AI and 200MP camera.'
}),
    P({ name: 'Samsung Galaxy Z Flip5', brand: 'Samsung', category: 'telephones', icon: 'smartphone', image: 'https://files.refurbed.com/ii/samsung-galaxy-z-flip-5-1695814058.jpg', price: 690000, isNew: true, rating: 4.6, ratingCount: 22, specs: { 'Écran': '6.7" pliable Dynamic AMOLED', 'Stockage': '256 Go', 'RAM': '8 Go', 'Batterie': '3700 mAh', 'Réseau': '5G', 'Couleur': 'Lavande' }, descFr: 'Format pliable compact avec Flex Window pour les notifications.', descEn: 'Compact foldable form factor with Flex Window for notifications.' }),
       // --- Tablettes ---
    P({ name: 'iPad 10e génération', brand: 'Apple', category: 'tablettes', icon: 'tablet', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyWCxnroZbiFk7Kh27EA6ispEWT6OSlF11EwOUNw-pgA&s=10', price: 340000, rating: 4.8, ratingCount: 71, specs: { 'Écran': '10.9" Liquid Retina', 'Stockage': '64 Go', 'RAM': '4 Go', 'Batterie': '7606 mAh', 'Connectivité': 'Wi-Fi', 'Couleur': 'Bleu' }, descFr: "Parfait pour l'école et le divertissement, compatible Apple Pencil (1e gén).", descEn: 'Perfect for school and entertainment, Apple Pencil compatible (1st gen).' }),
    P({ name: 'Samsung Galaxy Tab S10', brand: 'Samsung', category: 'tablettes', icon: 'tablet', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIjAa82Iaeq5j9HqvGNt7wNldFmzXGX-w8HGK9mtygiA&s=10', price: 65000, isBestSeller: true, rating: 4.5, ratingCount: 58, specs: { 'Écran': '11" LCD 90Hz', 'Stockage': '128 Go', 'RAM': '8 Go', 'Batterie': '7040 mAh', 'Connectivité': 'Wi-Fi / LTE', 'Couleur': 'Graphite' }, descFr: 'Grand écran fluide, quadruple haut-parleurs Dolby Atmos.', descEn: 'Large smooth screen, quad Dolby Atmos speakers.' }),
    P({ name: 'Xiaomi Redmi Pad SE', brand: 'Xiaomi', category: 'tablettes', icon: 'tablet', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDINbxSAPNSSRnaCwqWwSIFwQnKuAvJVgrbwomslDXtA&s=10', price: 130000, oldPrice: 149000, isPromo: true, rating: 4.4, ratingCount: 33, specs: { 'Écran': '11" 90Hz', 'Stockage': '128 Go', 'RAM': '4 Go', 'Batterie': '8000 mAh', 'Connectivité': 'Wi-Fi', 'Couleur': 'Gris' }, descFr: 'Excellente autonomie pour la lecture, le streaming et le télétravail.', descEn: 'Excellent battery life for reading, streaming and remote work.' }),
    P({ name: 'Lenovo Tab M10 Plus', brand: 'Lenovo', category: 'tablettes', icon: 'tablet', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9k0GDD8T2SfkMlvRzvyV1--BLfJbUgvzHBe9d-9wWSw&s=10', price: 118000, rating: 4.2, ratingCount: 21, specs: { 'Écran': '10.6" 2K', 'Stockage': '64 Go', 'RAM': '4 Go', 'Batterie': '7700 mAh', 'Connectivité': 'Wi-Fi', 'Couleur': 'Bleu' }, descFr: "Compagnon idéal pour les enfants et l'usage familial (mode enfant intégré).", descEn: 'Ideal companion for kids and family use (built-in kids mode).' }),
    P({ name: 'iPad Air M2', brand: 'Apple', category: 'tablettes', icon: 'tablet', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2G19649bgVch9ttHFARM1ghzo-B5K6IXx_0wx8BuWw&s=10', price: 520000, isNew: true, rating: 4.9, ratingCount: 14, specs: { 'Écran': '11" Liquid Retina', 'Stockage': '128 Go', 'RAM': '8 Go', 'Batterie': '7606 mAh', 'Connectivité': 'Wi-Fi', 'Couleur': 'Gris sidéral' }, descFr: 'Puissance de la puce M2 pour la création graphique et le montage vidéo.', descEn: 'M2 chip power for graphic creation and video editing.' }),
  P({
  name: 'Xiaomi Redmi Pad 2 (Wi-Fi)',
  brand: 'Xiaomi',
  category: 'tablettes',
  icon: 'tablet',
  image: 'https://kmerphone.com/cdn/shop/files/Redmi-Pad-2-Gris_1024x1024.jpg',
  price: 92000,
  rating: 4.5,
  ratingCount: 0,
  specs: { 'Stockage': '128 Go', 'RAM': '4 Go', 'Caméra': '8MP/5MP', 'Batterie': '9000 mAh', 'Connectivité': 'Wi-Fi' },
  descFr: "Grande autonomie et grand écran, idéal pour le streaming et la lecture.",
  descEn: 'Large battery and screen, ideal for streaming and reading.'
}),

P({
  name: 'Xiaomi Redmi Pad 2 (Wi-Fi) 256Go',
  brand: 'Xiaomi',
  category: 'tablettes',
  icon: 'tablet',
  image: 'https://kmerphone.com/cdn/shop/files/Redmi-Pad-2-Gris_1024x1024.jpg',
  price: 112990,
  rating: 4.5,
  ratingCount: 0,
  specs: { 'Stockage': '256 Go', 'RAM': '8 Go', 'Caméra': '8MP/5MP', 'Batterie': '9000 mAh', 'Connectivité': 'Wi-Fi' },
  descFr: "Version 256 Go avec 8 Go de RAM pour plus de fluidité au quotidien.",
  descEn: '256GB version with 8GB RAM for smoother everyday use.'
}),

P({
  name: 'Xiaomi Redmi Pad 2 4G',
  brand: 'Xiaomi',
  category: 'tablettes',
  icon: 'tablet',
  icon: 'tablet',
  image: 'https://kmerphone.com/cdn/shop/files/Redmi-Pad-2-Gris_1024x1024.jpg',
  price: 109900,
  isBestSeller: true,
  rating: 4.6,
  ratingCount: 0,
  specs: { 'Stockage': '128 Go', 'RAM': '8 Go', 'Caméra': '8MP/5MP', 'Batterie': '9000 mAh', 'Connectivité': 'Wi-Fi / 4G' },
  descFr: "Connectivité 4G intégrée, parfaite pour rester connecté partout.",
  descEn: 'Built-in 4G connectivity, perfect for staying connected anywhere.'
}),

P({
  name: 'Blackview Tab 60 Pro',
  brand: 'Blackview',
  category: 'tablettes',
  icon: 'tablet',
  image: 'https://kmerphone.com/cdn/shop/files/Blackview-Tab-60-Pro-Bleu_1024x1024.jpg?v=1769491699',
  price: 100000,
  rating: 4.3,
  ratingCount: 0,
  specs: { 'Écran': '10.1" IPS LCD', 'Stockage': '128 Go', 'RAM': '8+16 Go', 'Batterie': '7700 mAh', 'Connectivité': '2 SIM / LTE', 'Processeur': 'Unisoc T606' },
  descFr: 'Polyvalente pour le travail et les études, clavier + souris + pochette offerts.',
  descEn: 'Versatile for work and study, free keyboard + mouse + case included.'
}),

P({
  name: 'Blackview Mega 2',
  brand: 'Blackview',
  category: 'tablettes',
  icon: 'tablet',
  image: 'https://kmerphone.com/cdn/shop/files/Tablette-Blackview-Mega-2-Full-Noir_1024x1024.jpg?v=1769487349',
  price: 229990,
  isBestSeller: true,
  rating: 4.6,
  ratingCount: 0,
  specs: { 'Écran': '12" IPS LCD 90Hz', 'Stockage': '256 Go', 'RAM': '6+18 Go', 'Batterie': '9000 mAh', 'Connectivité': '2 SIM / 4G', 'Processeur': 'Mediatek Helio G100 Ultra' },
  descFr: 'Grand écran 12", Android 15, clavier + souris + pochette + verre offerts.',
  descEn: 'Large 12" screen, Android 15, free keyboard + mouse + case + screen protector.'
}),

P({
  name: 'Tablette Kiddos Octopus (enfant)',
  brand: 'Kiddos',
  category: 'tablettes',
  icon: 'tablet',
  image: 'https://kmerphone.com/cdn/shop/files/Tablette-Kiddos-3_1024x1024.jpg?v=1764257582',
  price: 50000,
  rating: 4.1,
  ratingCount: 0,
  specs: { 'Écran': '7" IPS LCD', 'Stockage': '64 Go', 'RAM': '4 Go', 'Batterie': '3500 mAh', 'Connectivité': '1 SIM', 'Processeur': 'Unisoc 7731E' },
  descFr: 'Tablette conçue spécialement pour les enfants, robuste et abordable.',
  descEn: 'Tablet designed specifically for kids, sturdy and affordable.'
}),

P({
  name: 'Tablette Kiddos Bear (enfant)',
  brand: 'Kiddos',
  category: 'tablettes',
  icon: 'tablet',
  image: 'https://kmerphone.com/cdn/shop/files/Tablette-Kiddos-3_1024x1024.jpg?v=1764257582',
  price: 40990,
  rating: 4.2,
  ratingCount: 0,
  specs: { 'Écran': '8" IPS LCD', 'Stockage': '128 Go', 'RAM': '4 Go', 'Batterie': '5100 mAh', 'Connectivité': '1 SIM', 'Processeur': 'Unisoc 7731E' },
  descFr: 'Version 128 Go, plus de mémoire pour les jeux et applications éducatives.',
  descEn: '128GB version, more storage for games and educational apps.'
}),

    // --- Ordinateurs ---
    P({ name: 'HP Pavilion 15', brand: 'HP', category: 'ordinateurs', icon: 'laptop', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsQSEY3tlErAgpPUf8OYoz4PLbDLw9O4wwMva0kxOvyg&s=10', price: 385000, rating: 4.4, ratingCount: 67, specs: { 'Écran': '15.6" FHD', 'Processeur': 'Intel Core i5', 'RAM': '8 Go', 'Stockage': '512 Go SSD', 'Carte graphique': 'Intel Iris Xe', 'OS': 'Windows 11' }, descFr: 'Polyvalent pour le bureau et les études, châssis fin et léger.', descEn: 'Versatile for office and studies, thin and light chassis.' }),
    P({ name: 'Dell Inspiron 14', brand: 'Dell', category: 'ordinateurs', icon: 'laptop', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiOGs0zFdWnhgCOnJMnJPFvLuURbFIdAMoz4ikqYvJAQ&s=10', price: 425000, oldPrice: 460000, isPromo: true, rating: 4.5, ratingCount: 44, specs: { 'Écran': '14" FHD', 'Processeur': 'Intel Core i5', 'RAM': '8 Go', 'Stockage': '512 Go SSD', 'Carte graphique': 'Intel UHD', 'OS': 'Windows 11' }, descFr: 'Format compact 14 pouces avec autonomie longue durée.', descEn: 'Compact 14-inch form factor with long battery life.' }),
    P({ name: 'Lenovo ThinkPad E14', brand: 'Lenovo', category: 'ordinateurs', icon: 'laptop', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh6SX2nvkz0RpT2QtviE6Y08m9S8WX2bBFZ9azCJBhmg&s=10', price: 480000, rating: 4.7, ratingCount: 39, isBestSeller: true, specs: { 'Écran': '14" FHD IPS', 'Processeur': 'Intel Core i7', 'RAM': '16 Go', 'Stockage': '512 Go SSD', 'Carte graphique': 'Intel Iris Xe', 'OS': 'Windows 11 Pro' }, descFr: 'Référence professionnelle, robustesse certifiée MIL-STD et clavier ThinkPad.', descEn: 'Professional benchmark, MIL-STD certified ruggedness and ThinkPad keyboard.' }),
    P({ name: 'MacBook Air M2', brand: 'Apple', category: 'ordinateurs', icon: 'laptop', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUAUTa-QQ-k67_B5khEbQgbae6QzD7FcfFSvdJ8k1Yaw&s=10', price: 890000, isNew: true, rating: 4.9, ratingCount: 27, specs: { 'Écran': '13.6" Liquid Retina', 'Processeur': 'Apple M2', 'RAM': '8 Go', 'Stockage': '256 Go SSD', 'Carte graphique': 'GPU 8 cœurs', 'OS': 'macOS' }, descFr: "Ultra léger, silencieux (sans ventilateur) et jusqu'à 18h d'autonomie.", descEn: 'Ultra light, silent (fanless) and up to 18h battery life.' }),
    P({ name: 'HP 15 Ryzen 5', brand: 'HP', category: 'ordinateurs', icon: 'laptop', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6HCa1h6M_dND3He2lvqmKDqcMrfQ2_m2hpHoZSLMayQ&s=10', price: 320000, rating: 4.3, ratingCount: 52, specs: { 'Écran': '15.6" FHD', 'Processeur': 'AMD Ryzen 5', 'RAM': '8 Go', 'Stockage': '512 Go SSD', 'Carte graphique': 'AMD Radeon', 'OS': 'Windows 11' }, descFr: 'Excellent rapport performance-prix pour la bureautique avancée.', descEn: 'Excellent performance-price ratio for advanced office work.' }),
    P({ name: 'Dell Latitude 5420 (reconditionné)', brand: 'Dell', category: 'ordinateurs', icon: 'laptop', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9s6TXoEJR_rd8yQvApQy-o3W7Zi2CKJni-a46ZlMRMg&s=10', price: 240000, oldPrice: 290000, isPromo: true, condition: 'reconditionne', rating: 4.4, ratingCount: 31, specs: { 'Écran': '14" FHD', 'Processeur': 'Intel Core i5 (11e gén)', 'RAM': '8 Go', 'Stockage': '256 Go SSD', 'Carte graphique': 'Intel UHD', 'OS': 'Windows 11' }, descFr: 'Modèle professionnel reconditionné, garanti 6 mois, idéal pour le télétravail.', descEn: 'Refurbished professional model, 6-month warranty, ideal for remote work.' }),
  P({
  name: 'Toshiba Satellite L500',
  brand: 'Toshiba',
  category: 'ordinateurs',
  icon: 'laptop',
  image: 'https://i.ebayimg.com/images/g/L70AAMXQiM5Q9Nua/s-l640.jpg',
  price: 35000,
  rating: 3.9,
  ratingCount: 0,
  specs: { 'Écran': '15.6" HD', 'Processeur': 'Intel Core i5 430M', 'RAM': '4 Go', 'Stockage': '320 Go HDD', 'Système': 'Windows 7/10', 'Lecteur': 'DVD SuperMulti' },
  descFr: 'Option d\'entrée de gamme très abordable pour un usage basique (navigation, bureautique légère).',
  descEn: 'Very affordable entry-level option for basic use (browsing, light office work).'
}),

P({
  name: 'Asus TUF Gaming FX504GD (Gaming)',
  brand: 'Asus',
  category: 'ordinateurs',
  icon: 'laptop',
  image: 'https://i.ebayimg.com/images/g/WLUAAOSwvO1jEgwq/s-l640.jpg',
  price: 260000,
  rating: 5.0,
  ratingCount: 1,
  specs: { 'Écran': '15.6" FHD', 'Processeur': 'Intel Core i5-8300H', 'RAM': '8 Go', 'Stockage': '1 To HDD', 'GPU': 'NVIDIA GeForce GTX 1050 2 Go', 'Système': 'Windows 10' },
  descFr: 'PC gaming robuste avec clavier rétroéclairé et GPU dédié, bon rapport prix/performance.',
  descEn: 'Sturdy gaming laptop with backlit keyboard and dedicated GPU, great value for performance.'
}),
P({
  name: 'Dell Latitude E5440',
  brand: 'Dell',
  category: 'ordinateurs',
  icon: 'laptop',
  image: 'https://i.ebayimg.com/images/g/fb8AAeSwtsZoY~Vr/s-l500.jpg',
  price: 95000,
  rating: 4.1,
  ratingCount: 0,
  specs: { 'Écran': '14" HD', 'Processeur': 'Intel Core i5 4e gén.', 'RAM': '8 Go', 'Stockage': '250 Go SSD', 'Système': 'Windows 10/11', 'Connectivité': 'USB 3.0, HDMI' },
  descFr: 'Ordinateur professionnel robuste, reconditionné, idéal bureautique et études.',
  descEn: 'Sturdy business laptop, refurbished, ideal for office work and studies.'
}),

P({
  name: 'HP ProBook 4540s',
  brand: 'HP',
  category: 'ordinateurs',
  icon: 'laptop',
  image: 'https://i.ebayimg.com/images/g/PY8AAOSwRy5krHna/s-l1600.jpg',
  price: 65000,
  rating: 4.0,
  ratingCount: 0,
  specs: { 'Écran': '15.6" HD', 'Processeur': 'Intel Core i3/i5 3e gén.', 'RAM': '4 Go', 'Stockage': '250 Go SSD', 'Système': 'Windows 10', 'Lecteur': 'DVD-RW' },
  descFr: 'Entrée de gamme fiable pour la bureautique de base, reconditionné.',
  descEn: 'Reliable entry-level option for basic office tasks, refurbished.'
}),

P({
  name: 'Lenovo ThinkPad X280',
  brand: 'Lenovo',
  category: 'ordinateurs',
  icon: 'laptop',
  image: 'https://i.ebayimg.com/images/g/R5MAAOSwR51j7i6k/s-l1600.jpg',
  price: 240000,
  rating: 4.7,
  ratingCount: 2,
  specs: { 'Écran': '12.5" FHD tactile', 'Processeur': 'Intel Core i5 8e gén.', 'RAM': '8 Go', 'Stockage': '256 Go SSD', 'Système': 'Windows 10/11', 'Clavier': 'Rétroéclairé' },
  descFr: 'Ultraportable professionnel, léger et robuste, écran tactile FHD.',
  descEn: 'Professional ultraportable, light and sturdy, FHD touchscreen.'
}),

P({
  name: 'Dell Inspiron 15 3520',
  brand: 'Dell',
  category: 'ordinateurs',
  icon: 'laptop',
  image: 'https://i.ebayimg.com/images/g/fb8AAeSwtsZoY~Vr/s-l500.jpg',
  price: 230000,
  rating: 4.3,
  ratingCount: 0,
  specs: { 'Écran': '15.6" FHD', 'Processeur': 'Intel Core i5 11e gén.', 'RAM': '8 Go', 'Stockage': '256 Go SSD', 'Système': 'Windows 11' },
  descFr: 'Bon compromis performance/prix pour un usage quotidien récent.',
  descEn: 'Great performance-to-price balance for modern everyday use.'
}),

P({
  name: 'Acer Nitro 5 (Gaming)',
  brand: 'Acer',
  category: 'ordinateurs',
  icon: 'laptop',
  image: 'https://i.ebayimg.com/images/g/pTUAAOSw4ABfE~5e/s-l640.jpg',
  price: 295000,
  isBestSeller: true,
  rating: 4.9,
  ratingCount: 20,
  specs: { 'Écran': '15.6" FHD', 'Processeur': 'Intel Core i5 9e gén.', 'RAM': '8 Go', 'Stockage': '256 Go SSD', 'GPU': 'NVIDIA GeForce GTX 1650', 'Système': 'Windows 10/11' },
  descFr: 'PC gaming abordable avec GPU dédié GTX 1650, clavier rétroéclairé.',
  descEn: 'Affordable gaming laptop with dedicated GTX 1650 GPU, backlit keyboard.'
}),
P({
  name: 'Acer Nitro 7 (Gaming)',
  brand: 'Acer',
  category: 'ordinateurs',
  icon: 'laptop',
  image: 'https://i.ebayimg.com/images/g/pTUAAOSw4ABfE~5e/s-l640.jpg',
  price: 295000,
  isBestSeller: true,
  rating: 4.9,
  ratingCount: 20,
  specs: { 'Écran': '15.6" FHD', 'Processeur': 'Intel Core i5 9e gén.', 'RAM': '8 Go', 'Stockage': '256 Go SSD', 'GPU': 'NVIDIA GeForce GTX 1650', 'Système': 'Windows 10/11' },
  descFr: 'PC gaming abordable avec GPU dédié GTX 1650, clavier rétroéclairé.',
  descEn: 'Affordable gaming laptop with dedicated GTX 1650 GPU, backlit keyboard.'
}),
    // --- Télévisions ---
    P({ name: 'Samsung Smart TV 55" UHD 4K', brand: 'Samsung', category: 'televisions', icon: 'tv', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMS0u0cf2cCaE80H1mDD1PPnBU8NKli_hQfjO0E2l6PQ&s=10', price: 220000, isBestSeller: true, rating: 4.7, ratingCount: 63, specs: { 'Taille': '55 pouces', 'Résolution': '4K UHD', 'Système': 'Tizen Smart TV', 'Ports': '3x HDMI, 2x USB', 'Son': '20W', 'Garantie': '1 an' }, descFr: 'Image éclatante Crystal UHD avec accès direct Netflix, YouTube et Canal+.', descEn: 'Vivid Crystal UHD picture with direct access to Netflix, YouTube and Canal+.' }),
    P({ name: 'LG Smart TV 43" Full HD', brand: 'LG', category: 'televisions', icon: 'tv', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWOHGtXWKVFGwQOMD2MAdREaMpC_cCa--biIIiJ2mDJA&s=10', price: 210000, rating: 4.5, ratingCount: 48, specs: { 'Taille': '43 pouces', 'Résolution': 'Full HD', 'Système': 'webOS', 'Ports': '2x HDMI, 1x USB', 'Son': '10W x2', 'Garantie': '1 an' }, descFr: 'Format compact idéal pour salon ou chambre, webOS fluide et intuitif.', descEn: 'Compact format ideal for living room or bedroom, smooth and intuitive webOS.' }),
    P({ name: 'TCL 32" HD LED', brand: 'LG', category: 'televisions', icon: 'tv', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJxswMJBsmdMbir7IU_u3hxYx9Va6AkbsriFNuChw9mQ&s=10', price: 95000, oldPrice: 112000, isPromo: true, rating: 4.1, ratingCount: 35, specs: { 'Taille': '32 pouces', 'Résolution': 'HD', 'Système': 'Android TV', 'Ports': '2x HDMI, 1x USB', 'Son': '8W x2', 'Garantie': '1 an' }, descFr: 'Prix accessible, parfait pour une seconde télévision ou petit espace.', descEn: 'Affordable price, perfect for a second TV or small space.' }),
    P({ name: 'Sony Bravia 50" 4K HDR', brand: 'Sony', category: 'televisions', icon: 'tv', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLz0Bk1wU5CXOvWCNEqbCwE_LJcU8nnTQ20OYPGOlLSA&s=10', price: 210000, isNew: true, rating: 4.8, ratingCount: 19, specs: { 'Taille': '50 pouces', 'Résolution': '4K HDR', 'Système': 'Google TV', 'Ports': '4x HDMI, 2x USB', 'Son': '20W', 'Garantie': '1 an' }, descFr: 'Processeur X1 pour des couleurs naturelles et un contraste exceptionnel.', descEn: 'X1 processor for natural colors and exceptional contrast.' }),
    P({ name: 'Samsung Smart TV 65" QLED', brand: 'Samsung', category: 'televisions', icon: 'tv', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEBbVEMHnrPnF-9-nGR6QThdnO1rXKbJzVL80en2A1cA&s=10', price: 180000, rating: 4.9, ratingCount: 12, specs: { 'Taille': '65 pouces', 'Résolution': '4K QLED', 'Système': 'Tizen Smart TV', 'Ports': '4x HDMI, 2x USB', 'Son': '40W', 'Garantie': '1 an' }, descFr: 'Technologie Quantum Dot pour un salon home-cinéma haut de gamme.', descEn: 'Quantum Dot technology for a high-end home cinema living room.' }),

    // --- Accessoires : Audio ---
    P({ name: 'JBL Tune 720BT', brand: 'JBL', category: 'accessoires', sub: 'audio', icon: 'headphones', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6bcEta1jp8rBPei8VJup1rJDV1LFS3RdsKlZlAPghjg&s=10', price: 15000, isBestSeller: true, rating: 4.6, ratingCount: 91, specs: { 'Type': 'Casque sans fil', 'Autonomie': '76h', 'Bluetooth': '5.3', 'Micro': 'Oui', 'Couleur': 'Noir' }, descFr: 'Son JBL Pure Bass et confort longue durée pour un usage quotidien.', descEn: 'JBL Pure Bass sound and long-lasting comfort for daily use.' }),
    P({ name: 'AirPods 4', brand: 'Apple', category: 'accessoires', sub: 'audio', icon: 'headphones', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnWFkExsnCwaYnEU1rD9LNlyVHNME9g7_guZmUwck1g&s=10', price: 9000, isNew: true, rating: 4.8, ratingCount: 34, specs: { 'Type': 'Écouteurs sans fil', 'Autonomie': '30h (boîtier)', 'Bluetooth': '5.3', 'Micro': 'Oui', 'Couleur': 'Blanc' }, descFr: "Intégration parfaite avec l'écosystème Apple, audio spatial.", descEn: 'Perfect integration with the Apple ecosystem, spatial audio.' }),
    P({ name: 'JBL Flip 6', brand: 'JBL', category: 'accessoires', sub: 'audio', icon: 'speaker', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwm_dIq6lEA_zJ2pEDLEtUff50I-qB1XfBMejHH4hGUg&s=10', price: 90000, oldPrice: 105000, isPromo: true, rating: 4.7, ratingCount: 52, specs: { 'Type': 'Enceinte portable', 'Autonomie': '12h', 'Bluetooth': '5.1', 'Étanchéité': 'IP67', 'Couleur': 'Bleu' }, descFr: 'Son puissant et étanche, parfaite pour lextérieur.', descEn: 'Powerful and waterproof sound, perfect for outdoors.' }),
   P({ name: 'Écouteurs sans fil M90 Pro', brand: 'JBL', category: 'accessoires', sub: 'audio', icon: 'speaker', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwm_dIq6lEA_zJ2pEDLEtUff50I-qB1XfBMejHH4hGUg&s=10', price: 5000, rating: 4.7, ratingCount: 52, specs: { 'Type': 'Enceinte portable', 'Autonomie': '12h', 'Bluetooth': '5.1', 'Étanchéité': 'IP67', 'Couleur': 'Bleu' }, descFr: 'Son puissant et étanche, parfaite pour lextérieur.', descEn: 'Powerful and waterproof sound, perfect for outdoors.' }),
   P({ name: 'Kit oreillette Bluetooth', brand: 'JBL', category: 'accessoires', sub: 'audio', icon: 'speaker', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwm_dIq6lEA_zJ2pEDLEtUff50I-qB1XfBMejHH4hGUg&s=10', price: 7500, rating: 4.7, ratingCount: 52, specs: { 'Type': 'Enceinte portable', 'Autonomie': '12h', 'Bluetooth': '5.1', 'Étanchéité': 'IP67', 'Couleur': 'Bleu' }, descFr: 'Son puissant et étanche, parfaite pour lextérieur.', descEn: 'Powerful and waterproof sound, perfect for outdoors.' }),
   P({ name: 'Xiaomi Redmi Airdots Mi', brand: 'JBL', category: 'accessoires', sub: 'audio', icon: 'speaker', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwm_dIq6lEA_zJ2pEDLEtUff50I-qB1XfBMejHH4hGUg&s=10', price: 6000, rating: 4.7, ratingCount: 52, specs: { 'Type': 'Enceinte portable', 'Autonomie': '12h', 'Bluetooth': '5.1', 'Étanchéité': 'IP67', 'Couleur': 'Bleu' }, descFr: 'Son puissant et étanche, parfaite pour lextérieur.', descEn: 'Powerful and waterproof sound, perfect for outdoors.' }), 
   P({ name: 'Écouteur sans fil', brand: 'JBL', category: 'accessoires', sub: 'audio', icon: 'speaker', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwm_dIq6lEA_zJ2pEDLEtUff50I-qB1XfBMejHH4hGUg&s=10', price: 5000, rating: 4.7, ratingCount: 52, specs: { 'Type': 'Enceinte portable', 'Autonomie': '12h', 'Bluetooth': '5.1', 'Étanchéité': 'IP67', 'Couleur': 'Bleu' }, descFr: 'Son puissant et étanche, parfaite pour lextérieur.', descEn: 'Powerful and waterproof sound, perfect for outdoors.' }), 
   P({ name: 'Écouteurs sans fil élégants', brand: 'JBL', category: 'accessoires', sub: 'audio', icon: 'speaker', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwm_dIq6lEA_zJ2pEDLEtUff50I-qB1XfBMejHH4hGUg&s=10', price: 3500, rating: 4.7, ratingCount: 52, specs: { 'Type': 'Enceinte portable', 'Autonomie': '12h', 'Bluetooth': '5.1', 'Étanchéité': 'IP67', 'Couleur': 'Bleu' }, descFr: 'Son puissant et étanche, parfaite pour lextérieur.', descEn: 'Powerful and waterproof sound, perfect for outdoors.' }),
    P({
  name: 'Hopestar H13 Mini',
  brand: 'Hopestar',
  category: 'accessoires',
  sub: 'audio',
  icon: 'speaker',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwm_dIq6lEA_zJ2pEDLEtUff50I-qB1XfBMejHH4hGUg&s=10',
  price: 7000,
  rating: 4.2,
  ratingCount: 29,
  specs: {
    'Type': 'Enceinte portable mini',
    'Autonomie': '5h',
    'Bluetooth': '5.0',
    'Étanchéité': 'Résistant aux éclaboussures',
    'Couleur': 'Noir'
  },
  descFr: 'Mini enceinte compacte avec micro intégré, appels mains libres et lecteur carte TF.',
  descEn: 'Compact mini speaker with built-in mic, hands-free calls and TF card playback.'
}),

P({
  name: 'Kisonli L-8080',
  brand: 'JBL',
  category: 'accessoires',
  sub: 'audio',
  icon: 'speaker',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwm_dIq6lEA_zJ2pEDLEtUff50I-qB1XfBMejHH4hGUg&s=10',
  price: 5000,
  rating: 4.0,
  ratingCount: 18,
  specs: {
    'Type': 'Mini haut-parleur USB',
    'Autonomie': 'Alimentation USB (pas de batterie)',
    'Bluetooth': 'Non (jack 3.5mm / USB)',
    'Étanchéité': 'Non étanche',
    'Couleur': 'Noir'
  },
  descFr: 'Petit haut-parleur filaire USB, simple et économique pour ordinateur ou téléphone.',
  descEn: 'Small wired USB speaker, simple and affordable for computer or phone use.'
}),

P({
  name: 'Mini Enceinte Sans Fil Compact',
  brand: 'JBL',
  category: 'accessoires',
  sub: 'audio',
  icon: 'speaker',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwm_dIq6lEA_zJ2pEDLEtUff50I-qB1XfBMejHH4hGUg&s=10',
  price: 3500,
  rating: 3.8,
  ratingCount: 12,
  specs: {
    'Type': 'Enceinte portable mini',
    'Autonomie': '6h',
    'Bluetooth': '5.0',
    'Étanchéité': 'Non étanche',
    'Couleur': 'Noir et Bleu'
  },
  descFr: 'Mini enceinte légère et abordable, idéale pour un usage quotidien basique.',
  descEn: 'Lightweight and affordable mini speaker, ideal for basic everyday use.'
}),

P({
  name: 'ROCH RPS-10M2S Compact',
  brand: 'JBL',
  category: 'accessoires',
  sub: 'audio',
  icon: 'speaker',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwm_dIq6lEA_zJ2pEDLEtUff50I-qB1XfBMejHH4hGUg&s=10',
  price: 9000,
  rating: 4.3,
  ratingCount: 24,
  specs: {
    'Type': 'Enceinte rechargeable',
    'Autonomie': '8h',
    'Bluetooth': '5.0 + USB/AUX/SD',
    'Étanchéité': 'Résistant aux éclaboussures',
    'Couleur': 'Noir'
  },
  descFr: 'Enceinte rechargeable avec micro intégré, garantie 6 mois, idéale pour la maison.',
  descEn: 'Rechargeable speaker with built-in mic, 6-month warranty, ideal for home use.'
}),

P({
  name: 'ZQ Mini Karaoke',
  brand: 'JBL',
  category: 'accessoires',
  sub: 'audio',
  icon: 'speaker',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwm_dIq6lEA_zJ2pEDLEtUff50I-qB1XfBMejHH4hGUg&s=10',
  price: 6500,
  rating: 4.1,
  ratingCount: 15,
  specs: {
    'Type': 'Enceinte mini karaoké',
    'Autonomie': '4h',
    'Bluetooth': '5.0 + AUX/USB/TF',
    'Étanchéité': 'Non étanche',
    'Couleur': 'Rose'
  },
  descFr: 'Mini enceinte karaoké avec batterie lithium, parfaite pour les soirées entre amis.',
  descEn: 'Mini karaoke speaker with lithium battery, perfect for hangouts with friends.'
}),
P({
  name: 'Casque Bluetooth Hoco',
  brand: 'JBL',
  category: 'accessoires',
  sub: 'audio',
  icon: 'headphones',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwm_dIq6lEA_zJ2pEDLEtUff50I-qB1XfBMejHH4hGUg&s=10',
  price: 12000,
  rating: 4.4,
  ratingCount: 41,
  specs: {
    'Type': 'Casque supra-auriculaire Bluetooth',
    'Autonomie': '40h',
    'Bluetooth': '5.0',
    'Étanchéité': 'Non étanche',
    'Couleur': 'Noir'
  },
  descFr: 'Casque Bluetooth confortable avec grande autonomie, idéal pour un usage prolongé.',
  descEn: 'Comfortable Bluetooth headset with long battery life, ideal for extended use.'
}),

P({
  name: 'Écouteurs sans fil Oraimo FreePods',
  brand: 'JBL',
  category: 'accessoires',
  sub: 'audio',
  icon: 'headphones',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwm_dIq6lEA_zJ2pEDLEtUff50I-qB1XfBMejHH4hGUg&s=10',
  price: 9500,
  rating: 4.6,
  ratingCount: 67,
  specs: {
    'Type': 'Écouteurs intra-auriculaires TWS',
    'Autonomie': '5h (écoute) + 20h via boîtier',
    'Bluetooth': '5.1',
    'Étanchéité': 'Résistant à la sueur (IPX4)',
    'Couleur': 'Blanc'
  },
  descFr: 'Écouteurs sans fil de la marque Oraimo, très populaires au Cameroun pour leur bon rapport qualité-prix.',
  descEn: 'Wireless earbuds by Oraimo, very popular in Cameroon for their great value for money.'
}),

P({
  name: 'Haut-parleur MUSYL L8S',
  brand: 'JBL',
  category: 'accessoires',
  sub: 'audio',
  icon: 'speaker',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwm_dIq6lEA_zJ2pEDLEtUff50I-qB1XfBMejHH4hGUg&s=10',
  price: 8500,
  rating: 4.0,
  ratingCount: 22,
  specs: {
    'Type': 'Enceinte portable avec subwoofer',
    'Autonomie': '6h',
    'Bluetooth': '5.0',
    'Puissance': 'RMS 2x5W',
    'Couleur': 'Bleu'
  },
  descFr: 'Enceinte puissante avec micro intégré et effet subwoofer pour des basses renforcées.',
  descEn: 'Powerful speaker with built-in mic and subwoofer effect for enhanced bass.'
}),

P({
  name: 'Écouteurs filaires AKG',
  brand: 'JBL',
  category: 'accessoires',
  sub: 'audio',
  icon: 'headphones',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwm_dIq6lEA_zJ2pEDLEtUff50I-qB1XfBMejHH4hGUg&s=10',
  price: 3000,
  rating: 4.1,
  ratingCount: 34,
  specs: {
    'Type': 'Écouteurs filaires intra-auriculaires',
    'Connectique': 'Jack 3.5mm',
    'Microphone': 'Intégré',
    'Usage': 'Sport et footing',
    'Couleur': 'Noir'
  },
  descFr: 'Écouteurs filaires légers et robustes, parfaits pour le sport et l\'entraînement quotidien.',
  descEn: 'Lightweight and sturdy wired earphones, perfect for sports and daily workouts.'
}),

P({
  name: 'Montre connectée M5',
  brand: 'JBL',
  category: 'accessoires',
  sub: 'wearable',
  icon: 'watch',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwm_dIq6lEA_zJ2pEDLEtUff50I-qB1XfBMejHH4hGUg&s=10',
  price: 7500,
  rating: 3.9,
  ratingCount: 19,
  specs: {
    'Type': 'Montre intelligente / bracelet fitness',
    'Fonctions': 'Fréquence cardiaque, tension artérielle, podomètre',
    'Étanchéité': 'IP67',
    'Autonomie': '5-7 jours',
    'Couleur': 'Noir'
  },
  descFr: 'Montre connectée abordable avec suivi de la fréquence cardiaque et de la tension artérielle.',
  descEn: 'Affordable smartwatch with heart rate and blood pressure tracking.'
}),

P({
  name: 'Écouteurs sans fil JBL V7',
  brand: 'JBL',
  category: 'accessoires',
  sub: 'audio',
  icon: 'headphones',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwm_dIq6lEA_zJ2pEDLEtUff50I-qB1XfBMejHH4hGUg&s=10',
  price: 14000,
  rating: 4.3,
  ratingCount: 45,
  specs: {
    'Type': 'Écouteurs intra-auriculaires TWS',
    'Autonomie': '4h (écoute) + 16h via boîtier',
    'Bluetooth': '5.0',
    'Basses': 'Renforcées',
    'Couleur': 'Noir'
  },
  descFr: 'Écouteurs sans fil avec basses lourdes et bonne qualité sonore, alternative économique aux AirPods.',
  descEn: 'Wireless earbuds with deep bass and good sound quality, an affordable AirPods alternative.'
}),


    // --- Wearables ---
   /* P({ name: 'Apple Watch SE (2e gén)', brand: 'Apple', category: 'accessoires', sub: 'wearables', icon: 'watch', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg3BdAbVnVjU00YbM8k5WfQFG2LsrhWmXIOJcZwIFdEA&s=10', price: 200000, rating: 4.7, ratingCount: 26, specs: { 'Écran': '44mm Retina', 'Autonomie': '18h', 'Étanchéité': '50m', 'Capteurs': 'Cardio, sommeil', 'Couleur': 'Minuit' }, descFr: 'Suivi santé complet, compatible iPhone.', descEn: 'Complete health tracking, iPhone compatible.' }),*/
    P({ name: 'Xiaomi Smart Band 8', brand: 'Xiaomi', category: 'accessoires', sub: 'wearables', icon: 'watch', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4NhWiErG_bOymffvLNaWby-HBUfLiBr7ghL_VdBC0kA&s=10', price: 26000, isBestSeller: true, rating: 4.5, ratingCount: 84, specs: { 'Écran': '1.62" AMOLED', 'Autonomie': '16 jours', 'Étanchéité': '5ATM', 'Capteurs': 'Cardio, SpO2', 'Couleur': 'Noir' }, descFr: 'Le bracelet connecté le plus vendu, très bon rapport qualité-prix.', descEn: 'The best-selling fitness tracker, great value for money.' }),
    P({ name: 'Samsung Galaxy Watch6', brand: 'Samsung', category: 'accessoires', sub: 'wearables', icon: 'watch', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTej0hmorU9wjDfGW9ql9H9Y56an0xRk9bmekW9qdSaZg&s=10', price: 230000, isNew: true, rating: 4.6, ratingCount: 18, specs: { 'Écran': '44mm AMOLED', 'Autonomie': '40h', 'Étanchéité': '5ATM', 'Capteurs': 'Cardio, ECG', 'Couleur': 'Graphite' }, descFr: 'Suivi avancé du sommeil et de la composition corporelle.', descEn: 'Advanced sleep and body composition tracking.' }),
    P({
  name: 'Smartwatch Haylou RT2',
  brand: 'Haylou',
  category: 'accessoires',
  sub: 'montres',
  icon: 'watch',
  image: 'https://site.glotelho.cm/media/catalog/product/cache/a58e2aabece67ef1697e83a3a038bdf7//m/o/montre_intelligente_haylou_rt2_a.jpg',
  price: 29999,
  oldPrice: 35000,
  isPromo: true,
  rating: 4.2,
  ratingCount: 34,
  specs: { 'Écran': '1.32" HD Retina 360x360px', 'Batterie': '300mAh', 'Autonomie': '20 jours', 'Compatibilité': 'Android / iOS', 'Bluetooth': 'V5.0' },
  descFr: 'Montre ronde avec verre incurvé 2.5D, 12 modes d\'entraînement, résistante à l\'eau.',
  descEn: 'Round watch with 2.5D curved glass, 12 workout modes, water-resistant.'
}),

P({
  name: 'Smartwatch Oraimo Watch 2 Pro',
  brand: 'Oraimo',
  category: 'accessoires',
  sub: 'montres',
  icon: 'watch',
  image: 'https://site.glotelho.cm/media/catalog/product/cache/a58e2aabece67ef1697e83a3a038bdf7//s/m/smartwatch_oraimo_watch_2_pro-.jpg',
  price: 26999,
  oldPrice: 43750,
  isPromo: true,
  rating: 4.4,
  ratingCount: 58,
  specs: { 'Écran': '1,75"', 'Étanchéité': 'IP68', 'Bluetooth': 'V5.1', 'GPS': 'Intégré', 'Fonctions': 'Appels Bluetooth' },
  descFr: 'Autonomie jusqu\'à 3 semaines, appels Bluetooth et GPS intégré.',
  descEn: 'Up to 3 weeks battery life, Bluetooth calls and built-in GPS.'
}),

P({
  name: 'Montre connectée Redmi Smart Band 2',
  brand: 'Xiaomi',
  category: 'accessoires',
  sub: 'montres',
  icon: 'watch',
  image: 'https://site.glotelho.cm/media/catalog/product/cache/a58e2aabece67ef1697e83a3a038bdf7//m/o/montre_connect_e_band_2_a.jpg',
  price: 9999,
  oldPrice: 15000,
  isPromo: true,
  rating: 4.3,
  ratingCount: 41,
  specs: { 'Écran': '1,47" TFT', 'Étanchéité': '5 ATM (50m)', 'Modes sport': '30+', 'Autonomie': '14 jours (usage typique)' },
  descFr: 'Bracelet connecté fin et léger, 6 bracelets TPU interchangeables, capteur PPG haute précision.',
  descEn: 'Slim and light smart band, 6 interchangeable TPU straps, high-precision PPG sensor.'
}),

  P({
  name: 'Samsung Galaxy Watch 6 Classic 40mm',
  brand: 'Samsung',
  category: 'accessoires',
  sub: 'montres',
  icon: 'watch',
  image: 'https://site.glotelho.cm/media/catalog/product/cache/a58e2aabece67ef1697e83a3a038bdf7//s/a/samsung_galaxy_watch_6_-_40_mm_prix_cameroun_en_fcfa_-_g.jpg',
  price: 110500,
  oldPrice: 155000,
  isPromo: true,
  rating: 4.6,
  ratingCount: 27,
  specs: { 'Stockage': '16 Go', 'RAM': '2 Go', 'Bluetooth': 'V5.3', 'Fonctions': 'Surveillance de la santé, charge rapide' },
  descFr: 'Montre premium Samsung avec surveillance de la santé avancée et charge rapide.',
  descEn: 'Premium Samsung watch with advanced health monitoring and fast charging.'
}),

    // --- Charge ---
    P({ name: 'Chargeur rapide Anker 20W', brand: 'Anker', category: 'accessoires', sub: 'charge', icon: 'charge', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvneVKl9qxbidJw4qli6TzQzn3tmumfFSKsQ4oGI-pbA&s=10', price: 3500, isBestSeller: true, rating: 4.6, ratingCount: 120, specs: { 'Puissance': '20W', 'Port': 'USB-C PD', 'Compatibilité': 'Universelle', 'Câble inclus': 'Non' }, descFr: 'Charge rapide et sûre pour smartphones et tablettes.', descEn: 'Fast and safe charging for smartphones and tablets.' }),
    P({ name: 'Batterie externe Anker 20000mAh', brand: 'Anker', category: 'accessoires', sub: 'charge', icon: 'battery', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGUkXFgnL7LPBOu_xoWbPDPMqNZGGpPbyg53HDX0Bbmg&s=10', price: 10000, oldPrice: 33000, isPromo: true, rating: 4.7, ratingCount: 67, specs: { 'Capacité': '20000 mAh', 'Ports': '2x USB-A, 1x USB-C', 'Puissance': '22.5W', 'Poids': '345g' }, descFr: 'Plusieurs recharges complètes en déplacement, technologie PowerIQ.', descEn: 'Multiple full charges on the go, PowerIQ technology.' }),
    P({ name: 'Câble USB-C vers Lightning 1m', brand: 'Anker', category: 'accessoires', sub: 'charge', icon: 'cable', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPewZ8tNzOptQpIS4Vbcwx6UTP_fWmozbiV3xSBhb9nQ&s=10', price: 1500, rating: 4.4, ratingCount: 45, specs: { 'Longueur': '1 mètre', 'Connecteurs': 'USB-C / Lightning', 'Charge rapide': 'Oui', 'Garantie': '6 mois' }, descFr: 'Câble certifié résistant, compatible charge rapide Apple.', descEn: 'Certified resistant cable, Apple fast charge compatible.' }),
P({
  name: 'Cordon USB-A vers Type-C HOCO X88',
  brand: 'Anker',
  category: 'accessoires',
  sub: 'chargeurs',
  icon: 'cable',
  image: 'https://kmerphone.com/cdn/shop/files/HOCO-X88_037ad38b-e1e1-46d1-9ec7-3c7fae44a997_1024x1024.jpg?v=1783797473',
  price: 1000,
  oldPrice: 1290,
  isPromo: true,
  rating: 3.9,
  ratingCount: 21,
  specs: { 'Connecteur': 'USB-A vers Type-C', 'Sortie': '3A', 'Longueur': '1m', 'Couleurs': 'Blanc, Noir' },
  descFr: 'Câble de charge et transfert de données, souple et robuste.',
  descEn: 'Charging and data transfer cable, flexible and sturdy.'
}),

P({
  name: 'Cordon Tecno TCD-C12 USB-A vers Type-C',
  brand: 'Tecno',
  category: 'accessoires',
  sub: 'chargeurs',
  icon: 'cable',
  image: 'https://kmerphone.com/cdn/shop/files/Cordon-Tecno-TCD-C12_1024x1024.jpg?v=1783527107',
  price: 1000,
  oldPrice: 1990,
  isPromo: true,
  rating: 3.9,
  ratingCount: 24,
  specs: { 'Connecteur': 'USB-A vers Type-C', 'Sortie': '3A', 'Longueur': '1m', 'Transfert de données': 'Jusqu\'à 480 Mbps' },
  descFr: 'Câble de charge et transfert de données officiel Tecno.',
  descEn: 'Official Tecno charging and data transfer cable.'
}),

P({
  name: '38W DEPIN Boîtier de charge double sortie',
  brand: 'DEPIN',
  category: 'accessoires',
  sub: 'chargeurs',
  icon: 'plug',
  image: 'https://kmerphone.com/cdn/shop/files/DEPIN-38W-CG04-02-AC_1024x1024.jpg?v=1784038080',
  price: 2000,
  oldPrice: 2800,
  isPromo: true,
  rating: 4.0,
  ratingCount: 16,
  specs: { 'Puissance totale': '38W', 'Port 1': 'USB-A (QC 18W)', 'Port 2': 'USB-C (PD 20W)', 'Format': 'Ultra-compact' },
  descFr: 'Boîtier double sortie simultanée, format ultra-compact, protection contre la surcharge.',
  descEn: 'Simultaneous dual-output charger case, ultra-compact, overcharge protection.'
}),

P({
  name: 'Chargeur HOCO CS11A 2.1A',
  brand: 'Hoco',
  category: 'accessoires',
  sub: 'chargeurs',
  icon: 'plug',
  image: 'https://kmerphone.com/cdn/shop/files/Chargeur-Hoco-CS11A_1024x1024.jpg?v=1783705174',
  price: 2000,
  oldPrice: 2490,
  isPromo: true,
  rating: 4.0,
  ratingCount: 18,
  specs: { 'Sortie': '2.1A (10.5W max)', 'Port': 'USB-A', 'Câble inclus': 'USB-A vers Type-C 1m', 'Couleur': 'Blanc' },
  descFr: 'Chargeur complet avec câble inclus, compact et minimaliste.',
  descEn: 'Complete charger with included cable, compact and minimalist.'
}),

P({
  name: 'Cordon Apple USB-C vers USB-C Original 2m',
  brand: 'Apple',
  category: 'accessoires',
  sub: 'chargeurs',
  icon: 'cable',
  image: 'https://kmerphone.com/cdn/shop/files/AppleUSB-CversUSB-C_2_1024x1024.jpg?v=1784056939',
  price: 2000,
  oldPrice: 2990,
  isPromo: true,
  rating: 4.5,
  ratingCount: 31,
  specs: { 'Connecteurs': 'USB-C des deux côtés', 'Longueur': '2m', 'Compatibilité': 'iPhone 15/16, iPad USB-C, MacBook, AirPods Pro', 'Couleur': 'Blanc' },
  descFr: 'Câble officiel Apple, longueur confortable de 2m pour usage à distance d\'une prise.',
  descEn: 'Official Apple cable, comfortable 2m length for use away from an outlet.'
}),

P({
  name: 'Chargeur Tecno 18W',
  brand: 'Tecno',
  category: 'accessoires',
  sub: 'chargeurs',
  icon: 'plug',
  image: 'https://kmerphone.com/cdn/shop/files/Chargeur-Tecno-18W_1024x1024.jpg?v=1783526488',
  price: 2500,
  oldPrice: 3500,
  isPromo: true,
  rating: 4.0,
  ratingCount: 22,
  specs: { 'Puissance': '18W', 'Port': 'USB-A', 'Câble inclus': 'USB-A vers Type-C 1m', 'Compatibilité': 'Smartphones Tecno et appareils USB-C' },
  descFr: 'Chargeur complet avec câble inclus, idéal pour smartphones Tecno.',
  descEn: 'Complete charger with included cable, ideal for Tecno smartphones.'
}),

P({
  name: 'Chargeur Tecno TCD-E21D 20W',
  brand: 'Tecno',
  category: 'accessoires',
  sub: 'chargeurs',
  icon: 'plug',
  image: 'https://kmerphone.com/cdn/shop/files/Chargeur-Tecno-TCDE21D-20W_1024x1024.jpg?v=1783526090',
  price: 3500,
  oldPrice: 4500,
  isPromo: true,
  rating: 4.1,
  ratingCount: 14,
  specs: { 'Puissance': '20W', 'Port': 'USB-A', 'Câble inclus': 'USB-A vers Type-C (C11)', 'Garantie': '3 mois' },
  descFr: 'Chargeur complet 20W avec câble inclus, compatible smartphones Tecno.',
  descEn: 'Complete 20W charger with included cable, compatible with Tecno smartphones.'
}),

P({
  name: 'Chargeur Tecno U330TEA 33W Faster 3X',
  brand: 'Tecno',
  category: 'accessoires',
  sub: 'chargeurs',
  icon: 'plug',
  image: 'https://kmerphone.com/cdn/shop/files/Chargeur-tecno-U330TEA-33W_1024x1024.jpg?v=1783525830',
  price: 3500,
  rating: 4.2,
  ratingCount: 27,
  specs: { 'Puissance': '33W', 'Gamme': 'Faster 3X', 'Câble inclus': 'USB-A vers Type-C', 'Port': 'USB-A' },
  descFr: 'Charge jusqu\'à 3 fois plus vite, câble inclus, compatible smartphones Tecno.',
  descEn: 'Charges up to 3x faster, included cable, compatible with Tecno smartphones.'
}),

P({
  name: 'Boîtier chargeur Samsung 25W Super Fast Charging',
  brand: 'Anker',
  category: 'accessoires',
  sub: 'chargeurs',
  icon: 'plug',
  image: 'https://kmerphone.com/cdn/shop/files/Boitier-25W_2_1024x1024.jpg?v=1783509029',
  price: 3000,
  oldPrice: 3990,
  isPromo: true,
  rating: 4.3,
  ratingCount: 37,
  specs: { 'Puissance': '25W', 'Connectivité': 'USB-C', 'Câble inclus': 'Non (boîtier seul)', 'Technologie': 'Super Fast Charging' },
  descFr: 'Boîtier de charge rapide Samsung, pratique en remplacement ou secours, vendu sans câble.',
  descEn: 'Samsung fast-charging block, handy as a replacement or backup, sold without cable.'
}),

P({
  name: 'Chargeur Xiaomi 33W Charge Rapide',
  brand: 'Anker',
  category: 'accessoires',
  sub: 'chargeurs',
  icon: 'plug',
  image: 'https://kmerphone.com/cdn/shop/files/Chargeur-Redmi-33W_2_1024x1024.jpg?v=1783526885',
  price: 3990,
  rating: 4.4,
  ratingCount: 29,
  specs: { 'Puissance': '33W max', 'Ports': 'USB-C + USB-A', 'Câble inclus': 'USB-A vers USB-C', 'Fonction': 'Charge 2 appareils simultanément' },
  descFr: 'Charge rapide PD/QC avec 2 ports pour charger deux appareils en même temps.',
  descEn: 'PD/QC fast charging with 2 ports to charge two devices at once.'
}),

   /* // --- Protection ---
    P({ name: 'Coque silicone iPhone 15', brand: 'Apple', category: 'accessoires', sub: 'protection', icon: 'smartphone', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_PbAQKo0VM-iBc1EvQ4Jn4MNd-Ubi8QClRTSQlSPRSg&s=10', price: 10000, rating: 4.3, ratingCount: 38, specs: { 'Matériau': 'Silicone', 'Compatibilité': 'iPhone 15', 'Protection': 'Anti-choc', 'Couleur': 'Plusieurs coloris' }, descFr: 'Protection élégante et douce au toucher avec doublure microfibre.', descEn: 'Elegant and soft-to-touch protection with microfiber lining.' }),
    P({ name: 'Verre trempé universel (lot de 2)', brand: 'Anker', category: 'accessoires', sub: 'protection', icon: 'shield', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlE6DY2Fkp8lHXZncSf-VU5tIS6HkDrV7K4WQGS0WrBA&s', price: 4500, isBestSeller: true, rating: 4.5, ratingCount: 96, specs: { 'Dureté': '9H', 'Épaisseur': '0.3mm', 'Anti-traces': 'Oui', 'Compatibilité': 'Sur mesure' }, descFr: 'Protection écran anti-rayures avec kit de pose sans bulles.', descEn: 'Anti-scratch screen protection with bubble-free installation kit.' }),
    P({ name: 'Coque renforcée Samsung Galaxy S24', brand: 'Samsung', category: 'accessoires', sub: 'protection', icon: 'smartphone', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqin93rJAnerXPm79vdVdjQJBqMn86qWXXlBh317Td9g&s=10', price: 2500, rating: 4.4, ratingCount: 22, specs: { 'Matériau': 'TPU + PC', 'Compatibilité': 'Galaxy S24', 'Protection': 'Anti-choc renforcée', 'Couleur': 'Noir transparent' }, descFr: 'Coque robuste testée chute 2m, accès total aux boutons et caméra.', descEn: 'Rugged case tested 2m drop, full access to buttons and camera.' }),*/


    /*// --- Photo ---
    P({ name: 'Trépied smartphone Bluetooth', brand: 'Anker', category: 'accessoires', sub: 'photo', icon: 'camera', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHDGFS4HN11ZOcl_YIX0F5tYavW7euY2NAoJB5mU-ExA&s=10', price: 15000, rating: 4.2, ratingCount: 27, specs: { 'Hauteur': '1.6m', 'Télécommande': 'Bluetooth', 'Compatibilité': 'Universelle', 'Poids': '450g' }, descFr: 'Idéal pour vlogs, réseaux sociaux et appels vidéo.', descEn: 'Ideal for vlogs, social media and video calls.' }),
    P({ name: 'Ring light LED 10" avec support', brand: 'Anker', category: 'accessoires', sub: 'photo', icon: 'sun', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPwh3Hh4d-7fGbgvLufcAb3eNDkmxMCEKbRE7n3AovxA&s=10', price: 20000, oldPrice: 25000, isPromo: true, rating: 4.5, ratingCount: 33, specs: { 'Diamètre': '10 pouces', 'Luminosité': '3 modes', 'Alimentation': 'USB', 'Support téléphone': 'Inclus' }, descFr: 'Éclairage professionnel pour photos, lives et visioconférences.', descEn: 'Professional lighting for photos, live streams and video calls.' }),*/

    // --- Stockage ---
    P({ name: 'Carte mémoire SanDisk 128Go', brand: 'Anker', category: 'accessoires', sub: 'stockage', icon: 'storage', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Q1IUSY-YmS3TiBQj86nR0MmlfW8ZnPJijksPTbkhFQ&s=10', price: 12000, isBestSeller: true, rating: 4.6, ratingCount: 78, specs: { 'Capacité': '128 Go', 'Type': 'microSDXC', 'Vitesse': 'Classe 10 / U3', 'Compatibilité': 'Universelle' }, descFr: 'Stockage rapide et fiable pour photos, vidéos 4K et applications.', descEn: 'Fast and reliable storage for photos, 4K videos and apps.' }),
    P({ name: 'Clé USB SanDisk 64Go', brand: 'Anker', category: 'accessoires', sub: 'stockage', icon: 'usb', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC0AVLK4zc0XSaujWtq5dmxsoM4UpHoOJo79GMQQdr1Q&s=10', price: 8500, rating: 4.3, ratingCount: 41, specs: { 'Capacité': '64 Go', 'Interface': 'USB 3.0', 'Vitesse lecture': '130 Mo/s', 'Garantie': '1 an' }, descFr: 'Transfert rapide de fichiers volumineux, format compact.', descEn: 'Fast transfer of large files, compact format.' }),
    P({ name: 'Disque dur externe 1To', brand: 'Dell', category: 'accessoires', sub: 'stockage', icon: 'storage', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfsLX78GwOG_QW_MOb9XxztBtsbHIe0mAT50T-qUeVWA&s=10', price: 20000, rating: 4.5, ratingCount: 29, specs: { 'Capacité': '1 To', 'Interface': 'USB 3.0', 'Format': '2.5 pouces', 'Garantie': '2 ans' }, descFr: 'Sauvegarde fiable de vos documents, photos et vidéos.', descEn: 'Reliable backup for your documents, photos and videos.' }),
P({
  name: 'Carte mémoire microSD 128Go',
  brand: 'SanDisk Ultra',
  category: 'accessoires',
  sub: 'stockage',
  icon: 'sd-card',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwm_dIq6lEA_zJ2pEDLEtUff50I-qB1XfBMejHH4hGUg&s=10',
  price: 12000,
  rating: 4.6,
  ratingCount: 51,
  specs: { 'Capacité': '128 Go', 'Classe': 'Class 10 / UHS-I', 'Vitesse': 'Jusqu\'à 100 Mo/s', 'Adaptateur SD': 'Inclus' },
  descFr: 'Grande capacité pour smartphones haut de gamme et caméras d\'action.',
  descEn: 'Large capacity for high-end smartphones and action cameras.'
}),

P({
  name: 'Disque dur externe 500Go',
  brand: 'Toshiba',
  category: 'accessoires',
  sub: 'stockage',
  icon: 'hard-drive',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwm_dIq6lEA_zJ2pEDLEtUff50I-qB1XfBMejHH4hGUg&s=10',
  price: 19000,
  rating: 4.3,
  ratingCount: 24,
  specs: { 'Capacité': '500 Go', 'Interface': 'USB 3.0', 'Format': '2.5" portable', 'Compatibilité': 'PC, Mac, PS4/PS5' },
  descFr: 'Disque dur portable fiable pour sauvegardes et extension de stockage PC/console.',
  descEn: 'Reliable portable hard drive for backups and PC/console storage expansion.'
}),
P({
  name: 'Clé USB 8Go Faster',
  brand: 'Faster',
  category: 'accessoires',
  sub: 'stockage',
  icon: 'usb',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwm_dIq6lEA_zJ2pEDLEtUff50I-qB1XfBMejHH4hGUg&s=10',
  price: 2400,
  rating: 3.9,
  ratingCount: 27,
  specs: { 'Capacité': '8 Go', 'Interface': 'USB 2.0', 'Vitesse lecture': '~10 Mo/s', 'Compatibilité': 'PC, Mac, TV' },
  descFr: 'Clé USB compacte et fiable pour le stockage et transfert de fichiers au quotidien.',
  descEn: 'Compact and reliable USB drive for everyday file storage and transfer.'
}),

P({
  name: 'Clé USB 16Go Faster',
  brand: 'Faster',
  category: 'accessoires',
  sub: 'stockage',
  icon: 'usb',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwm_dIq6lEA_zJ2pEDLEtUff50I-qB1XfBMejHH4hGUg&s=10',
  price: 3000,
  rating: 4.0,
  ratingCount: 34,
  specs: { 'Capacité': '16 Go', 'Interface': 'USB 2.0', 'Vitesse lecture': '~10 Mo/s', 'Compatibilité': 'PC, Mac, TV' },
  descFr: 'Idéale pour stocker documents, musique et vidéos, format compact et robuste.',
  descEn: 'Ideal for storing documents, music and videos, compact and sturdy design.'
}),

P({
  name: 'Clé USB 32Go Faster',
  brand: 'Faster',
  category: 'accessoires',
  sub: 'stockage',
  icon: 'usb',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwm_dIq6lEA_zJ2pEDLEtUff50I-qB1XfBMejHH4hGUg&s=10',
  price: 4000,
  rating: 4.1,
  ratingCount: 41,
  specs: { 'Capacité': '32 Go', 'Interface': 'USB 2.0', 'Vitesse lecture': '~15 Mo/s', 'Compatibilité': 'PC, Mac, TV' },
  descFr: 'Capacité généreuse pour vos films, photos et sauvegardes importantes.',
  descEn: 'Generous capacity for your movies, photos and important backups.'
}),

P({
  name: 'Clé USB 64Go SanDisk',
  brand: 'SanDisk',
  category: 'accessoires',
  sub: 'stockage',
  icon: 'usb',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwm_dIq6lEA_zJ2pEDLEtUff50I-qB1XfBMejHH4hGUg&s=10',
  price: 6500,
  rating: 4.4,
  ratingCount: 29,
  specs: { 'Capacité': '64 Go', 'Interface': 'USB 3.0', 'Vitesse lecture': '~100 Mo/s', 'Compatibilité': 'PC, Mac, TV' },
  descFr: 'Marque reconnue, transfert rapide USB 3.0, idéale pour usage professionnel.',
  descEn: 'Trusted brand, fast USB 3.0 transfer, ideal for professional use.'
}),

P({
  name: 'Clé USB 128Go SanDisk',
  brand: 'SanDisk',
  category: 'accessoires',
  sub: 'stockage',
  icon: 'usb',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwm_dIq6lEA_zJ2pEDLEtUff50I-qB1XfBMejHH4hGUg&s=10',
  price: 11000,
  rating: 4.5,
  ratingCount: 22,
  specs: { 'Capacité': '128 Go', 'Interface': 'USB 3.0', 'Vitesse lecture': '~130 Mo/s', 'Compatibilité': 'PC, Mac, TV' },
  descFr: 'Grande capacité pour bibliothèques multimédia complètes, vitesse USB 3.0.',
  descEn: 'Large capacity for full media libraries, USB 3.0 speed.'
}),

P({
  name: 'Carte mémoire microSD 32Go',
  brand: 'Kingston',
  category: 'accessoires',
  sub: 'stockage',
  icon: 'sd-card',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwm_dIq6lEA_zJ2pEDLEtUff50I-qB1XfBMejHH4hGUg&s=10',
  price: 3500,
  rating: 4.2,
  ratingCount: 38,
  specs: { 'Capacité': '32 Go', 'Classe': 'Class 10', 'Usage': 'Téléphone, caméra, tablette', 'Adaptateur SD': 'Inclus' },
  descFr: 'Carte mémoire rapide et fiable pour smartphones, tablettes et caméras.',
  descEn: 'Fast and reliable memory card for smartphones, tablets and cameras.'
}),

P({
  name: 'Carte mémoire microSD 64Go',
  brand: 'Kingston',
  category: 'accessoires',
  sub: 'stockage',
  icon: 'sd-card',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwm_dIq6lEA_zJ2pEDLEtUff50I-qB1XfBMejHH4hGUg&s=10',
  price: 5500,
  rating: 4.3,
  ratingCount: 45,
  specs: { 'Capacité': '64 Go', 'Classe': 'Class 10 / UHS-I', 'Usage': 'Téléphone, caméra, tablette', 'Adaptateur SD': 'Inclus' },
  descFr: 'Idéale pour stocker photos HD, vidéos 4K et applications sur mobile.',
  descEn: 'Ideal for storing HD photos, 4K videos and apps on mobile devices.'
}),
P({
  name: 'Disque dur externe 1To',
  brand: 'Seagate',
  category: 'accessoires',
  sub: 'stockage',
  icon: 'hard-drive',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwm_dIq6lEA_zJ2pEDLEtUff50I-qB1XfBMejHH4hGUg&s=10',
  price: 25000,
  rating: 4.5,
  ratingCount: 33,
  specs: { 'Capacité': '1 To', 'Interface': 'USB 3.0', 'Format': '2.5" portable', 'Compatibilité': 'PC, Mac, PS4/PS5' },
  descFr: 'Grande capacité de stockage, idéal pour sauvegardes complètes et bibliothèques de jeux/films.',
  descEn: 'Large storage capacity, ideal for full backups and game/movie libraries.'
}),
    
    // --- Gaming ---
    P({ name: 'Manette sans fil compatible PC/Mobile', brand: 'Sony', category: 'accessoires', sub: 'gaming', icon: 'gamepad', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ZYY8OCyJFXus6iUo3_jhTLoiXNzYK9nOYixnEVYjzQ&s=10', price: 15000, rating: 4.5, ratingCount: 24, specs: { 'Connectivité': 'Bluetooth', 'Autonomie': '20h', 'Compatibilité': 'PC, Android, iOS', 'Vibration': 'Oui' }, descFr: 'Confort de jeu optimal pour vos sessions mobiles et PC.', descEn: 'Optimal gaming comfort for your mobile and PC sessions.' }),
    P({ name: 'Casque gaming RGB avec micro', brand: 'HP', category: 'accessoires', sub: 'gaming', icon: 'headphones', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXXbLxylRVjOzwAT3Ff2hQteY9Sxruu_ZI2VjCW6qBIg&s=10', price: 27000, oldPrice: 32000, isPromo: true, rating: 4.4, ratingCount: 31, specs: { 'Type': 'Casque filaire', 'Son': '7.1 virtuel', 'Micro': 'Amovible', 'Éclairage': 'RGB' }, descFr: 'Immersion sonore totale pour le gaming et les appels.', descEn: 'Total sound immersion for gaming and calls.' }),
    P({
  name: 'Manette PS3 sans fil',
  brand: 'Sony',
  category: 'gaming',
  icon: 'gamepad',
  image: 'https://site.glotelho.cm/media/catalog/product/cache/a58e2aabece67ef1697e83a3a038bdf7/M/a/Manette-PlayStation-3-Noir-en-vente-Glotelho_2nd.jpg',
  price: 8500,
  rating: 4.1,
  ratingCount: 17,
  specs: { 'Compatibilité': 'PlayStation 3', 'Connexion': 'Sans fil Bluetooth', 'Fonctions': 'Détection de mouvement Sixaxis, vibration', 'Couleur': 'Noir' },
  descFr: 'Manette officielle sans fil pour PS3, avec détection de mouvement et retour de vibration.',
  descEn: 'Official wireless PS3 controller with motion sensing and vibration feedback.'
}),

P({
  name: 'Manette PS4 DualShock 4',
  brand: 'Sony',
  category: 'gaming',
  icon: 'gamepad',
  image: 'https://site.glotelho.cm/media/catalog/product/cache/a58e2aabece67ef1697e83a3a038bdf7//p/l/playstation_dualshock_4_mannette_sans_fil_ps4_4_.jpg',
  price: 20000,
  oldPrice: 31250,
  isPromo: true,
  rating: 4.4,
  ratingCount: 47,
  specs: { 'Compatibilité': 'PlayStation 4', 'Connexion': 'Sans fil Bluetooth', 'Batterie': 'Rechargeable USB', 'Couleur': 'Noir' },
  descFr: 'Manette officielle Sony avec joysticks précis et sortie casque stéréo.',
  descEn: 'Official Sony controller with precise joysticks and stereo headset jack.'
}),

P({
  name: 'Manette PS5 DualSense',
  brand: 'Sony',
  category: 'gaming',
  icon: 'gamepad',
  image: 'https://site.glotelho.cm/media/catalog/product/cache/a58e2aabece67ef1697e83a3a038bdf7//g/l/glomasafips5_cm.jpg',
  price: 55000,
  rating: 4.7,
  ratingCount: 1,
  specs: { 'Compatibilité': 'PlayStation 5', 'Connexion': 'Sans fil Bluetooth', 'Fonctions': 'Retour haptique, gâchettes adaptatives, micro intégré', 'Couleur': 'Noir' },
  descFr: 'Manette nouvelle génération avec retour haptique immersif et gâchettes adaptatives.',
  descEn: 'Next-gen controller with immersive haptic feedback and adaptive triggers.'
}),

P({ name: 'PlayStation 4 Slim 500Go (occasion)',brand: 'Sony', category: 'gaming', icon: 'console', image:'https://site.glotelho.cm/media/catalog/product/cache/a58e2aabece67ef1697e83a3a038bdf7//p/l/playstation_4_slim500go_prix.jpg',price: 230000,  condition: 'occasion', rating: 4.3, ratingCount: 29, specs: { 'Stockage': '500 Go', 'RAM': '8 Go GDDR5', 'Manettes incluses': '1', 'Jeu offert': '1 jeu surprise', 'Garantie': '6 mois' }, descFr: 'Console PS4 Slim seconde main testée, garantie 6 mois, avec un jeu surprise offert.',  descEn: 'Tested second-hand PS4 Slim console, 6-month warranty, with a surprise game included.' }),
        // --- Claviers ---
    P({ name: 'Clavier sans fil + souris HP', brand: 'HP', category: 'accessoires', sub: 'claviers', icon: 'keyboard', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcri40uC_r19t4ZmLHqyx5VI_PF2KJV6tv1pyREx07RQ&s=10', price: 22500, isBestSeller: true, rating: 4.5, ratingCount: 57, specs: { 'Connectivité': 'Sans fil 2.4GHz', 'Autonomie': '12 mois (pile)', 'Compatibilité': 'Windows, Mac', 'Pack': 'Clavier + souris' }, descFr: 'Ensemble bureautique fiable et silencieux.', descEn: 'Reliable and silent office combo.' }),
    P({ name: 'Clavier mécanique compact RGB', brand: 'Lenovo', category: 'accessoires', sub: 'claviers', icon: 'keyboard', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_4Opa2izXU-9SnFUrwdobi_iAR1-RHu5dCJcCF4jsyg&s=10', price: 9000, isNew: true, rating: 4.6, ratingCount: 19, specs: { 'Type': 'Mécanique switch rouge', 'Connectivité': 'USB filaire', 'Éclairage': 'RGB', 'Format': 'TKL compact' }, descFr: 'Frappe précise et réactive pour la productivité et le gaming léger.', descEn: 'Precise and responsive typing for productivity and light gaming.' }),
];

/* ---------------- AVIS CLIENTS (page promotions) ----------------
   Pour ajouter un avis: ajoutez un objet {name, textFr, textEn, stars, avatar?}.
   Pour supprimer: retirez l'objet. */
const REVIEWS = [
    { name: 'Fowe Chimelle', textFr: 'Service impeccable, mon iPhone est arrivé en 24h à Bafoussam. Je recommande KFB Store !', textEn: 'Flawless service, my iPhone arrived in 24h in Bafoussam. I recommend KFB Store!', stars: 5, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyzgHGldRmy6F7rY2C5appVqQsqtlynZRWGn3kpO--7w&s=10' },
    { name: 'Brayan Kamga', textFr: 'Bon rapport qualité-prix. Le MacBook reconditionné est comme neuf, garantie respectée.', textEn: 'Good value for money. The refurbished MacBook is like new, warranty respected.', stars: 5, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1XGTAxsR5J7fr5z5x8nH_YHEFW9KkP-G4IOZEwV4pww&s=10' },
    { name: 'Sandra Nguepi', textFr: "J'ai commandé une tablette pour mes études. Livraison rapide et produit authentique.", textEn: 'I ordered a tablet for my studies. Fast delivery and authentic product.', stars: 4, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO_ZAy0xvjgx4YI3Q5nE04NPrEunZGq4EzEjZU3_qv4w&s=10' },
    { name: 'Junior Scoot', textFr: 'Très satisfaite de ma Smart TV. Lequipe répond vite sur WhatsApp.', textEn: 'Very satisfied with my Smart TV. The team responds quickly on WhatsApp.', stars: 5, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcKtkF1ZqEvFYmNSZmv4DJVfuP8Jm0sk-GQyYqEusecg&s=10' },
    { name: 'Sandra Erislaine', textFr: 'Accessoires de qualité à prix correct. Le chargeur Anker fonctionne parfaitement.', textEn: 'Quality accessories at a fair price. The Anker charger works perfectly.', stars: 4, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyx6dqFdZ4frTeYk1RlVLMHxloI9uG-VyWCotNaLU8Ug&s=10' },
];

/* ---------------- COLLECTIONS (packs) ---------------- */
const COLLECTIONS = [
    { slug: 'pack-etudiant', titleFr: 'Pack Étudiant', titleEn: 'Student Pack', icon: 'book', descFr: "Tablette ou ordinateur léger, accessoires de prise de notes et stockage pour réussir l'année scolaire.", descEn: 'Light tablet or computer, note-taking accessories and storage to succeed in the school year.', itemsFr: ['Ordinateur portable', 'Tablette', 'Clé USB', 'Sacoche'], itemsEn: ['Laptop', 'Tablet', 'USB drive', 'Bag'] },
    { slug: 'pack-bureau', titleFr: 'Pack Bureau', titleEn: 'Office Pack', icon: 'briefcase', descFr: 'Ordinateur performant, clavier/souris et disque externe pour un poste de travail complet.', descEn: 'Powerful computer, keyboard/mouse and external drive for a complete workstation.', itemsFr: ['Ordinateur portable', 'Clavier + souris', 'Disque dur externe', 'Batterie externe'], itemsEn: ['Laptop', 'Keyboard + mouse', 'External hard drive', 'Power bank'] },
    { slug: 'pack-gaming', titleFr: 'Pack Gaming Mobile', titleEn: 'Mobile Gaming Pack', icon: 'gamepad', descFr: 'Smartphone puissant, manette et casque pour une experience de jeu mobile immersive.', descEn: 'Powerful smartphone, controller and headset for an immersive mobile gaming experience.', itemsFr: ['Smartphone haut de gamme', 'Manette Bluetooth', 'Casque gaming', 'Batterie externe'], itemsEn: ['High-end smartphone', 'Bluetooth controller', 'Gaming headset', 'Power bank'] },
    { slug: 'pack-createur', titleFr: 'Pack Créateur de Contenu', titleEn: 'Content Creator Pack', icon: 'clapperboard', descFr: 'Smartphone photo, éclairage, trépied et stockage pour vos vidéos et réseaux sociaux.', descEn: 'Photo smartphone, lighting, tripod and storage for your videos and social media.', itemsFr: ['Smartphone (bon appareil photo)', 'Ring light', 'Trépied Bluetooth', 'Carte mémoire 128Go'], itemsEn: ['Smartphone (good camera)', 'Ring light', 'Bluetooth tripod', '128GB memory card'] },
    { slug: 'pack-cadeau', titleFr: 'Pack Cadeau', titleEn: 'Gift Pack', icon: 'gift', descFr: 'Montre connectée, écouteurs et coque élégante : lidée cadeau parfaite.', descEn: 'Smartwatch, earbuds and elegant case: the perfect gift idea.', itemsFr: ['Montre connectée', 'Écouteurs sans fil', 'Coque premium', 'Chargeur rapide'], itemsEn: ['Smartwatch', 'Wireless earbuds', 'Premium case', 'Fast charger'] },
    { slug: 'pack-famille', titleFr: 'Pack Famille & Maison', titleEn: 'Family & Home Pack', icon: 'home', descFr: 'Télévision, tablette enfant et enceinte pour toute la maison.', descEn: 'TV, kids tablet and speaker for the whole house.', itemsFr: ['Smart TV', 'Tablette', 'Enceinte Bluetooth', 'Câbles de charge'], itemsEn: ['Smart TV', 'Tablet', 'Bluetooth speaker', 'Charging cables'] },
];

/* ---------------- GUIDES D'ACHAT ---------------- */
const GUIDES = [{
        slug: 'choisir-smartphone',
        titleFr: 'Comment choisir son smartphone',
        titleEn: 'How to choose your smartphone',
        icon: 'smartphone',
        summaryFr: 'Budget, marque, autonomie, appareil photo : les critères essentiels avant dacheter.',
        summaryEn: 'Budget, brand, battery, camera: the essential criteria before buying.',
        steps: [
            { titleFr: 'Définir votre budget', titleEn: 'Define your budget', textFr: 'Fixez une fourchette de prix réaliste : entrée de gamme (moins de 100 000 FCFA), milieu de gamme (100 000 - 400 000 FCFA) ou premium (plus de 400 000 FCFA).', textEn: 'Set a realistic price range: entry-level (under 100,000 FCFA), mid-range (100,000 - 400,000 FCFA) or premium (over 400,000 FCFA).' },
            { titleFr: "Choisir l'usage principal", titleEn: 'Choose the main use', textFr: "Réseaux sociaux et appels, photo/vidéo, gaming ou productivité : chaque usage oriente vers des caractéristiques différentes.", textEn: 'Social media and calls, photo/video, gaming or productivity: each use points to different specs.' },
            { titleFr: "Vérifier l'autonomie", titleEn: 'Check battery life', textFr: 'Privilégiez une batterie dau moins 4500 mAh pour tenir une journée complète dutilisation intensive.', textEn: 'Prefer a battery of at least 4500 mAh to last a full day of intensive use.' },
            { titleFr: 'Évaluer le stockage et la RAM', titleEn: 'Assess storage and RAM', textFr: '128 Go minimum et 6 à 8 Go de RAM assurent fluidité et espace suffisant pour vos photos et applications.', textEn: '128GB minimum and 6 to 8GB RAM ensure smoothness and enough space for your photos and apps.' },
            { titleFr: 'Neuf ou reconditionné', titleEn: 'New or refurbished', textFr: 'Un modèle reconditionné garanti permet daccéder à un téléphone premium à prix réduit, avec une fiabilité testée.', textEn: 'A guaranteed refurbished model gives access to a premium phone at a reduced price, with tested reliability.' },
        ]
    },
    {
        slug: 'choisir-ordinateur',
        titleFr: 'Comment choisir son ordinateur',
        titleEn: 'How to choose your computer',
        icon: 'laptop',
        summaryFr: 'Processeur, RAM, stockage : nos conseils pour bureautique, études ou création.',
        summaryEn: 'Processor, RAM, storage: our advice for office, studies or creation.',
        steps: [
            { titleFr: 'Identifier votre usage', titleEn: 'Identify your use', textFr: 'Bureautique simple, montage vidéo, développement ou gaming : le besoin détermine la configuration adaptée.', textEn: 'Simple office, video editing, development or gaming: the need determines the right configuration.' },
            { titleFr: 'Comparer les processeurs', titleEn: 'Compare processors', textFr: 'Intel Core i5 / AMD Ryzen 5 conviennent à la majorité des usages ; visez i7/Ryzen 7 pour les tâches lourdes.', textEn: 'Intel Core i5 / AMD Ryzen 5 suits most uses; aim for i7/Ryzen 7 for heavy tasks.' },
            { titleFr: 'RAM et stockage SSD', titleEn: 'RAM and SSD storage', textFr: '8 Go de RAM minimum et un SSD (plus rapide quun disque dur classique) pour un démarrage instantané.', textEn: '8GB RAM minimum and an SSD (faster than a classic hard drive) for instant startup.' },
            { titleFr: 'Autonomie et poids', titleEn: 'Battery life and weight', textFr: 'Pour la mobilité, privilégiez un modèle de moins de 1.5kg avec au moins 8h dautonomie annoncée.', textEn: 'For mobility, prefer a model under 1.5kg with at least 8h advertised battery life.' },
            { titleFr: 'Garantie et service après-vente', titleEn: 'Warranty and after-sales service', textFr: 'Vérifiez la durée de garantie et la disponibilité du support technique local à Bafoussam.', textEn: 'Check the warranty period and the availability of local technical support in Bafoussam.' },
        ]
    },
    {
        slug: 'choisir-television',
        titleFr: 'Comment choisir sa télévision',
        titleEn: 'How to choose your TV',
        icon: 'tv',
        summaryFr: "Taille décran, résolution et distance de visionnage pour un salon parfaitement équipé.",
        summaryEn: 'Screen size, resolution and viewing distance for a perfectly equipped living room.',
        steps: [
            { titleFr: 'Calculer la taille idéale', titleEn: 'Calculate the ideal size', textFr: 'Divisez la distance de visionnage (en cm) par 1.5 à 2 pour obtenir la diagonale décran recommandée en pouces.', textEn: 'Divide the viewing distance (in cm) by 1.5 to 2 to get the recommended screen diagonal in inches.' },
            { titleFr: 'Choisir la résolution', titleEn: 'Choose the resolution', textFr: 'Le 4K UHD est désormais le standard recommandé, même pour des écrans à partir de 43 pouces.', textEn: '4K UHD is now the recommended standard, even for screens from 43 inches.' },
            { titleFr: 'Vérifier les fonctionnalités Smart TV', titleEn: 'Check Smart TV features', textFr: 'Assurez-vous de la présence de Netflix, YouTube, et dune bonne connectivité Wi-Fi pour le streaming.', textEn: 'Make sure Netflix, YouTube are available, and good Wi-Fi connectivity for streaming.' },
            { titleFr: 'Compter les ports HDMI', titleEn: 'Count HDMI ports', textFr: 'Prévoyez au moins 2 ports HDMI pour brancher décodeur, console ou clé de streaming simultanément.', textEn: 'Plan at least 2 HDMI ports to connect decoder, console or streaming stick simultaneously.' },
            { titleFr: 'Qualité sonore', titleEn: 'Sound quality', textFr: 'Pour un vrai confort, envisagez une barre de son ou enceinte Bluetooth en complément des haut-parleurs intégrés.', textEn: 'For real comfort, consider a soundbar or Bluetooth speaker in addition to built-in speakers.' },
        ]
    },
    {
        slug: 'accessoires-essentiels',
        titleFr: 'Les accessoires indispensables',
        titleEn: 'Essential accessories',
        icon: 'plug',
        summaryFr: 'Protéger, recharger et profiter pleinement de votre appareil dès le premier jour.',
        summaryEn: 'Protect, charge and fully enjoy your device from day one.',
        steps: [
            { titleFr: 'Protection dès lachat', titleEn: 'Protection from purchase', textFr: 'Coque et verre trempé doivent être installés immédiatement pour éviter tout dommage accidentel.', textEn: 'Case and tempered glass should be installed immediately to avoid accidental damage.' },
            { titleFr: 'Chargeur et câble adaptés', titleEn: 'Suitable charger and cable', textFr: 'Optez pour un chargeur certifié à la bonne puissance pour préserver la longévité de la batterie.', textEn: 'Choose a certified charger with the right power to preserve battery longevity.' },
            { titleFr: 'Stockage additionnel', titleEn: 'Additional storage', textFr: 'Une carte mémoire ou un disque externe évite de saturer lespace de stockage interne.', textEn: 'A memory card or external drive avoids saturating the internal storage space.' },
            { titleFr: 'Accessoires audio', titleEn: 'Audio accessories', textFr: 'Écouteurs ou enceinte Bluetooth pour profiter pleinement de la musique et des appels en mains libres.', textEn: 'Earbuds or Bluetooth speaker to fully enjoy music and hands-free calls.' },
            { titleFr: 'Sauvegarde régulière', titleEn: 'Regular backup', textFr: 'Pensez à sauvegarder vos données importantes sur le cloud ou un support externe.', textEn: 'Remember to back up your important data to the cloud or an external drive.' },
        ]
    },
    {
        slug: 'neuf-vs-reconditionne',
        titleFr: 'Neuf ou reconditionné : que choisir ?',
        titleEn: 'New or refurbished: which to choose?',
        icon: 'refresh',
        summaryFr: 'Comprendre les avantages du reconditionné avant de faire votre choix.',
        summaryEn: 'Understand the benefits of refurbished before making your choice.',
        steps: [
            { titleFr: "Qu'est-ce qu'un appareil reconditionné", titleEn: 'What is a refurbished device', textFr: 'Un appareil doccasion contrôlé, réparé si nécessaire, testé et remis à neuf esthétiquement.', textEn: 'A used device checked, repaired if necessary, tested and cosmetically restored to new.' },
            { titleFr: 'Les grades de qualité', titleEn: 'Quality grades', textFr: 'Grade A : état quasi neuf. Grade B : traces dusage légères. Chez nous, seul le grade A est proposé.', textEn: 'Grade A: near-new condition. Grade B: light wear marks. We only offer grade A.' },
            { titleFr: 'Économies réalisées', titleEn: 'Savings achieved', textFr: 'Comptez 20% à 40% déconomie par rapport au prix du neuf pour un modèle équivalent.', textEn: 'Expect 20% to 40% savings compared to the new price for an equivalent model.' },
            { titleFr: 'Garantie proposée', titleEn: 'Warranty offered', textFr: 'Chaque appareil reconditionné est garanti 6 mois minimum contre tout défaut de fonctionnement.', textEn: 'Each refurbished device is guaranteed 6 months minimum against any operating defect.' },
            { titleFr: 'Impact environnemental', titleEn: 'Environmental impact', textFr: 'Choisir le reconditionné prolonge la durée de vie des appareils et réduit les déchets électroniques.', textEn: 'Choosing refurbished extends the life of devices and reduces e-waste.' },
        ]
    },
    {
        slug: 'paiement-livraison',
        titleFr: 'Paiement et livraison au Cameroun',
        titleEn: 'Payment and delivery in Cameroon',
        icon: 'truck',
        summaryFr: 'Comment commander, payer et être livré partout à Bafoussam et Douala.',
        summaryEn: 'How to order, pay and be delivered across Bafoussam and Douala.',
        steps: [
            { titleFr: 'Passer commande via WhatsApp', titleEn: 'Order via WhatsApp', textFr: 'Contactez-nous directement au +237 697 18 65 64 avec le nom du produit souhaité.', textEn: 'Contact us directly at +237 697 18 65 64 with the name of the desired product.' },
            { titleFr: 'Confirmer les détails', titleEn: 'Confirm details', textFr: 'Notre équipe confirme la disponibilité, le prix final et ladresse de livraison avec vous.', textEn: 'Our team confirms availability, final price and delivery address with you.' },
            { titleFr: 'Choisir le mode de paiement', titleEn: 'Choose payment method', textFr: 'Mobile Money (Orange Money, MTN MoMo), espèces à la livraison ou virement bancaire.', textEn: 'Mobile Money (Orange Money, MTN MoMo), cash on delivery or bank transfer.' },
            { titleFr: 'Livraison rapide', titleEn: 'Fast delivery', textFr: 'Livraison gratuite dès 50 000 FCFA à Bafoussam et Douala, sous 24 à 72h selon la zone.', textEn: 'Free delivery from 50,000 FCFA in Bafoussam and Douala, within 24 to 72h depending on the area.' },
            { titleFr: 'Vérification à la réception', titleEn: 'Verification on receipt', textFr: 'Vérifiez lappareil devant le livreur avant de valider le paiement final.', textEn: 'Check the device in front of the delivery person before validating the final payment.' },
        ]
    },
];

/* ---------------- SERVICE CLIENT ---------------- */
const SERVICE_CARDS = [
    { icon: 'truck', titleFr: 'Livraison', titleEn: 'Delivery', textFr: 'Livraison gratuite à Bafoussam et Douala dès 50 000 FCFA dachat, sous 24 à 72h.', textEn: 'Free delivery in Bafoussam and Douala from 50,000 FCFA purchase, within 24 to 72h.' },
    { icon: 'shield', titleFr: 'Garantie', titleEn: 'Warranty', textFr: 'Tous nos produits neufs sont garantis 12 mois ; les reconditionnés, 6 mois minimum.', textEn: 'All our new products are guaranteed 12 months; refurbished, 6 months minimum.' },
    { icon: 'creditcard', titleFr: 'Paiement sécurisé', titleEn: 'Secure payment', textFr: 'Mobile Money, espèces à la livraison ou virement bancaire, en toute confiance.', textEn: 'Mobile Money, cash on delivery or bank transfer, with confidence.' },
    { icon: 'headphones', titleFr: 'Support réactif', titleEn: 'Responsive support', textFr: 'Une question ? Notre équipe répond sur WhatsApp du lundi au samedi, 8h-19h.', textEn: 'A question? Our team answers on WhatsApp Monday to Saturday, 8am-7pm.' },
    { icon: 'undo', titleFr: 'Retour facile', titleEn: 'Easy return', textFr: 'Retour possible sous 48h en cas de non-conformité du produit livré.', textEn: 'Return possible within 48h in case of non-conformity of the delivered product.' },
    { icon: 'badge', titleFr: 'Produits authentiques', titleEn: 'Authentic products', textFr: 'Tous nos appareils sont sourcés auprès de distributeurs officiels et vérifiés.', textEn: 'All our devices are sourced from official distributors and verified.' },
];

const FAQ = [
    { qFr: 'Quels sont les délais de livraison ?', qEn: 'What are the delivery times?', aFr: 'Entre 24h et 72h à Bafoussam et Douala selon la zone. Pour les autres villes, comptez 3 à 5 jours ouvrés.', aEn: 'Between 24h and 72h in Bafoussam and Douala depending on the area. For other cities, allow 3 to 5 business days.' },
    { qFr: 'Puis-je payer à la livraison ?', qEn: 'Can I pay on delivery?', aFr: 'Oui, le paiement en espèces ou par Mobile Money à la livraison est disponible à Bafoussam et Douala.', aEn: 'Yes, cash or Mobile Money payment on delivery is available in Bafoussam and Douala.' },
    { qFr: 'Les téléphones reconditionnés sont-ils fiables ?', qEn: 'Are refurbished phones reliable?', aFr: 'Oui, chaque appareil reconditionné est testé sur plus de 30 points de contrôle et garanti 6 mois minimum.', aEn: 'Yes, each refurbished device is tested on more than 30 control points and guaranteed 6 months minimum.' },
    { qFr: 'Comment suivre ma commande ?', qEn: 'How do I track my order?', aFr: 'Après confirmation, notre équipe vous tient informé par WhatsApp à chaque étape jusquà la livraison.', aEn: 'After confirmation, our team keeps you informed by WhatsApp at every step until delivery.' },
    { qFr: 'Proposez-vous une garantie sur les accessoires ?', qEn: 'Do you offer a warranty on accessories?', aFr: 'Oui, une garantie de 3 à 12 mois selon le produit, contre tout défaut de fabrication.', aEn: 'Yes, a 3 to 12 month warranty depending on the product, against any manufacturing defect.' },
    { qFr: 'Comment vous contacter rapidement ?', qEn: 'How to contact you quickly?', aFr: 'Le plus rapide est WhatsApp au +237 688 75 32 48. Vous pouvez aussi nous écrire par e-mail.', aEn: 'The fastest is WhatsApp at +237 688 75 32 48. You can also email us.' },
];

/* ---------------- HELPERS ---------------- */
function formatPrice(p) {
    return p.toLocaleString('fr-FR') + ' FCFA';
}

function visibleProducts() {
    var hiddenCats = DEVICE_TYPES.filter(function(d) { return d.hidden; }).map(function(d) { return d.id; });
    var hiddenSubs = ACCESSORY_CATS.filter(function(a) { return a.hidden; }).map(function(a) { return a.id; });
    return PRODUCTS.filter(function(p) {
        if (hiddenCats.indexOf(p.category) !== -1) return false;
        if (p.category === 'accessoires' && p.sub && hiddenSubs.indexOf(p.sub) !== -1) return false;
        return true;
    });
}

function visibleDeviceTypes() {
    return DEVICE_TYPES.filter(function(d) { return !d.hidden; });
}

function visibleAccessoryCats() {
    return ACCESSORY_CATS.filter(function(a) { return !a.hidden; });
}

function visibleAccessoryCats() {
    return ACCESSORY_CATS.filter(function(a) { return !a.hidden; });
}

function visibleAccessoryCats() {
    return ACCESSORY_CATS.filter(function(a) { return !a.hidden; });
}

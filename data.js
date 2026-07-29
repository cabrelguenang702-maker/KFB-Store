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
       P({ name: 'Samsung Galaxy A55', brand: 'Samsung', category: 'telephones', icon: 'smartphone', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0DFIkIoOlopY3f4QqEm16Em5skkK3eTErrDzl6XxeMA&s=10', price: 285000, rating: 4.6, ratingCount: 88, specs: { 'Écran': '6.6" Super AMOLED', 'Stockage': '256 Go', 'RAM': '8 Go', 'Batterie': '5000 mAh', 'Réseau': '5G', 'Couleur': 'Bleu marine' }, descFr: 'Milieu de gamme robuste, IP67 et Android One UI fluide.', descEn: 'Robust mid-range, IP67 and smooth Android One UI.' }),
    P({ name: 'iPhone 13', brand: 'Apple', category: 'telephones', icon: 'smartphone', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAhDdRVf4-rL5iGqiVNmCPunAHLAUQCxvBgacv9Pgz6Q&s=10', price: 420000, oldPrice: 470000, condition: 'reconditionne', rating: 4.7, ratingCount: 133, specs: { 'Écran': '6.1" Super Retina XDR', 'Stockage': '128 Go', 'RAM': '4 Go', 'Batterie': '3240 mAh', 'Réseau': '5G', 'Couleur': 'Minuit' }, descFr: 'Reconditionné grade A, testé et garanti 6 mois. Comme neuf à prix réduit.', descEn: 'Refurbished grade A, tested and 6-month warranty. Like new at reduced price.' }),
    P({ name: 'Huawei Nova 11', brand: 'Huawei', category: 'telephones', icon: 'smartphone', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqm2Kc4ErQhhH3YGrbHeAXHWa3RRzC_TbbrpsyjdfWeg&s=10', price: 215000, rating: 4.4, ratingCount: 40, specs: { 'Écran': '6.7" OLED 120Hz', 'Stockage': '256 Go', 'RAM': '8 Go', 'Batterie': '4500 mAh', 'Réseau': '4G', 'Couleur': 'Blanc perle' }, descFr: 'Design ultra fin avec charge Supercharge 100W.', descEn: 'Ultra-thin design with 100W Supercharge.' }),
    P({ name: 'Itel P55+', brand: 'Itel', category: 'telephones', icon: 'smartphone', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjMVQALXCbviotfVPzic1T3TPhX26x7Npg7FkSK5xIxw&s=10', price: 68000, rating: 4.0, ratingCount: 29, specs: { 'Écran': '6.6" HD+', 'Stockage': '128 Go', 'RAM': '6 Go', 'Batterie': '5000 mAh', 'Réseau': '4G', 'Couleur': 'Gris' }, descFr: "Le meilleur prix d'entrée de gamme pour un usage quotidien fiable.", descEn: 'The best entry-level price for reliable daily use.' }),
    P({ name: 'Samsung Galaxy Z Flip5', brand: 'Samsung', category: 'telephones', icon: 'smartphone', image: 'https://files.refurbed.com/ii/samsung-galaxy-z-flip-5-1695814058.jpg', price: 690000, isNew: true, rating: 4.6, ratingCount: 22, specs: { 'Écran': '6.7" pliable Dynamic AMOLED', 'Stockage': '256 Go', 'RAM': '8 Go', 'Batterie': '3700 mAh', 'Réseau': '5G', 'Couleur': 'Lavande' }, descFr: 'Format pliable compact avec Flex Window pour les notifications.', descEn: 'Compact foldable form factor with Flex Window for notifications.' }),
       // --- Tablettes ---
    P({ name: 'iPad 10e génération', brand: 'Apple', category: 'tablettes', icon: 'tablet', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyWCxnroZbiFk7Kh27EA6ispEWT6OSlF11EwOUNw-pgA&s=10', price: 340000, rating: 4.8, ratingCount: 71, specs: { 'Écran': '10.9" Liquid Retina', 'Stockage': '64 Go', 'RAM': '4 Go', 'Batterie': '7606 mAh', 'Connectivité': 'Wi-Fi', 'Couleur': 'Bleu' }, descFr: "Parfait pour l'école et le divertissement, compatible Apple Pencil (1e gén).", descEn: 'Perfect for school and entertainment, Apple Pencil compatible (1st gen).' }),
    P({ name: 'Samsung Galaxy Tab A9+', brand: 'Samsung', category: 'tablettes', icon: 'tablet', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIjAa82Iaeq5j9HqvGNt7wNldFmzXGX-w8HGK9mtygiA&s=10', price: 165000, isBestSeller: true, rating: 4.5, ratingCount: 58, specs: { 'Écran': '11" LCD 90Hz', 'Stockage': '128 Go', 'RAM': '8 Go', 'Batterie': '7040 mAh', 'Connectivité': 'Wi-Fi / LTE', 'Couleur': 'Graphite' }, descFr: 'Grand écran fluide, quadruple haut-parleurs Dolby Atmos.', descEn: 'Large smooth screen, quad Dolby Atmos speakers.' }),
    P({ name: 'Xiaomi Redmi Pad SE', brand: 'Xiaomi', category: 'tablettes', icon: 'tablet', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDINbxSAPNSSRnaCwqWwSIFwQnKuAvJVgrbwomslDXtA&s=10', price: 130000, oldPrice: 149000, isPromo: true, rating: 4.4, ratingCount: 33, specs: { 'Écran': '11" 90Hz', 'Stockage': '128 Go', 'RAM': '4 Go', 'Batterie': '8000 mAh', 'Connectivité': 'Wi-Fi', 'Couleur': 'Gris' }, descFr: 'Excellente autonomie pour la lecture, le streaming et le télétravail.', descEn: 'Excellent battery life for reading, streaming and remote work.' }),
    P({ name: 'Lenovo Tab M10 Plus', brand: 'Lenovo', category: 'tablettes', icon: 'tablet', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9k0GDD8T2SfkMlvRzvyV1--BLfJbUgvzHBe9d-9wWSw&s=10', price: 118000, rating: 4.2, ratingCount: 21, specs: { 'Écran': '10.6" 2K', 'Stockage': '64 Go', 'RAM': '4 Go', 'Batterie': '7700 mAh', 'Connectivité': 'Wi-Fi', 'Couleur': 'Bleu' }, descFr: "Compagnon idéal pour les enfants et l'usage familial (mode enfant intégré).", descEn: 'Ideal companion for kids and family use (built-in kids mode).' }),
    P({ name: 'iPad Air M2', brand: 'Apple', category: 'tablettes', icon: 'tablet', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2G19649bgVch9ttHFARM1ghzo-B5K6IXx_0wx8BuWw&s=10', price: 520000, isNew: true, rating: 4.9, ratingCount: 14, specs: { 'Écran': '11" Liquid Retina', 'Stockage': '128 Go', 'RAM': '8 Go', 'Batterie': '7606 mAh', 'Connectivité': 'Wi-Fi', 'Couleur': 'Gris sidéral' }, descFr: 'Puissance de la puce M2 pour la création graphique et le montage vidéo.', descEn: 'M2 chip power for graphic creation and video editing.' }),

    // --- Ordinateurs ---
    P({ name: 'HP Pavilion 15', brand: 'HP', category: 'ordinateurs', icon: 'laptop', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsQSEY3tlErAgpPUf8OYoz4PLbDLw9O4wwMva0kxOvyg&s=10', price: 385000, rating: 4.4, ratingCount: 67, specs: { 'Écran': '15.6" FHD', 'Processeur': 'Intel Core i5', 'RAM': '8 Go', 'Stockage': '512 Go SSD', 'Carte graphique': 'Intel Iris Xe', 'OS': 'Windows 11' }, descFr: 'Polyvalent pour le bureau et les études, châssis fin et léger.', descEn: 'Versatile for office and studies, thin and light chassis.' }),
    P({ name: 'Dell Inspiron 14', brand: 'Dell', category: 'ordinateurs', icon: 'laptop', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiOGs0zFdWnhgCOnJMnJPFvLuURbFIdAMoz4ikqYvJAQ&s=10', price: 425000, oldPrice: 460000, isPromo: true, rating: 4.5, ratingCount: 44, specs: { 'Écran': '14" FHD', 'Processeur': 'Intel Core i5', 'RAM': '8 Go', 'Stockage': '512 Go SSD', 'Carte graphique': 'Intel UHD', 'OS': 'Windows 11' }, descFr: 'Format compact 14 pouces avec autonomie longue durée.', descEn: 'Compact 14-inch form factor with long battery life.' }),
    P({ name: 'Lenovo ThinkPad E14', brand: 'Lenovo', category: 'ordinateurs', icon: 'laptop', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh6SX2nvkz0RpT2QtviE6Y08m9S8WX2bBFZ9azCJBhmg&s=10', price: 480000, rating: 4.7, ratingCount: 39, isBestSeller: true, specs: { 'Écran': '14" FHD IPS', 'Processeur': 'Intel Core i7', 'RAM': '16 Go', 'Stockage': '512 Go SSD', 'Carte graphique': 'Intel Iris Xe', 'OS': 'Windows 11 Pro' }, descFr: 'Référence professionnelle, robustesse certifiée MIL-STD et clavier ThinkPad.', descEn: 'Professional benchmark, MIL-STD certified ruggedness and ThinkPad keyboard.' }),
    P({ name: 'MacBook Air M2', brand: 'Apple', category: 'ordinateurs', icon: 'laptop', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUAUTa-QQ-k67_B5khEbQgbae6QzD7FcfFSvdJ8k1Yaw&s=10', price: 890000, isNew: true, rating: 4.9, ratingCount: 27, specs: { 'Écran': '13.6" Liquid Retina', 'Processeur': 'Apple M2', 'RAM': '8 Go', 'Stockage': '256 Go SSD', 'Carte graphique': 'GPU 8 cœurs', 'OS': 'macOS' }, descFr: "Ultra léger, silencieux (sans ventilateur) et jusqu'à 18h d'autonomie.", descEn: 'Ultra light, silent (fanless) and up to 18h battery life.' }),
    P({ name: 'HP 15 Ryzen 5', brand: 'HP', category: 'ordinateurs', icon: 'laptop', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6HCa1h6M_dND3He2lvqmKDqcMrfQ2_m2hpHoZSLMayQ&s=10', price: 320000, rating: 4.3, ratingCount: 52, specs: { 'Écran': '15.6" FHD', 'Processeur': 'AMD Ryzen 5', 'RAM': '8 Go', 'Stockage': '512 Go SSD', 'Carte graphique': 'AMD Radeon', 'OS': 'Windows 11' }, descFr: 'Excellent rapport performance-prix pour la bureautique avancée.', descEn: 'Excellent performance-price ratio for advanced office work.' }),
    P({ name: 'Dell Latitude 5420 (reconditionné)', brand: 'Dell', category: 'ordinateurs', icon: 'laptop', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9s6TXoEJR_rd8yQvApQy-o3W7Zi2CKJni-a46ZlMRMg&s=10', price: 240000, oldPrice: 290000, isPromo: true, condition: 'reconditionne', rating: 4.4, ratingCount: 31, specs: { 'Écran': '14" FHD', 'Processeur': 'Intel Core i5 (11e gén)', 'RAM': '8 Go', 'Stockage': '256 Go SSD', 'Carte graphique': 'Intel UHD', 'OS': 'Windows 11' }, descFr: 'Modèle professionnel reconditionné, garanti 6 mois, idéal pour le télétravail.', descEn: 'Refurbished professional model, 6-month warranty, ideal for remote work.' }),

    // --- Télévisions ---
    P({ name: 'Samsung Smart TV 55" UHD 4K', brand: 'Samsung', category: 'televisions', icon: 'tv', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMS0u0cf2cCaE80H1mDD1PPnBU8NKli_hQfjO0E2l6PQ&s=10', price: 385000, isBestSeller: true, rating: 4.7, ratingCount: 63, specs: { 'Taille': '55 pouces', 'Résolution': '4K UHD', 'Système': 'Tizen Smart TV', 'Ports': '3x HDMI, 2x USB', 'Son': '20W', 'Garantie': '1 an' }, descFr: 'Image éclatante Crystal UHD avec accès direct Netflix, YouTube et Canal+.', descEn: 'Vivid Crystal UHD picture with direct access to Netflix, YouTube and Canal+.' }),
    P({ name: 'LG Smart TV 43" Full HD', brand: 'LG', category: 'televisions', icon: 'tv', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWOHGtXWKVFGwQOMD2MAdREaMpC_cCa--biIIiJ2mDJA&s=10', price: 210000, rating: 4.5, ratingCount: 48, specs: { 'Taille': '43 pouces', 'Résolution': 'Full HD', 'Système': 'webOS', 'Ports': '2x HDMI, 1x USB', 'Son': '10W x2', 'Garantie': '1 an' }, descFr: 'Format compact idéal pour salon ou chambre, webOS fluide et intuitif.', descEn: 'Compact format ideal for living room or bedroom, smooth and intuitive webOS.' }),
    P({ name: 'TCL 32" HD LED', brand: 'LG', category: 'televisions', icon: 'tv', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJxswMJBsmdMbir7IU_u3hxYx9Va6AkbsriFNuChw9mQ&s=10', price: 95000, oldPrice: 112000, isPromo: true, rating: 4.1, ratingCount: 35, specs: { 'Taille': '32 pouces', 'Résolution': 'HD', 'Système': 'Android TV', 'Ports': '2x HDMI, 1x USB', 'Son': '8W x2', 'Garantie': '1 an' }, descFr: 'Prix accessible, parfait pour une seconde télévision ou petit espace.', descEn: 'Affordable price, perfect for a second TV or small space.' }),
    P({ name: 'Sony Bravia 50" 4K HDR', brand: 'Sony', category: 'televisions', icon: 'tv', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLz0Bk1wU5CXOvWCNEqbCwE_LJcU8nnTQ20OYPGOlLSA&s=10', price: 465000, isNew: true, rating: 4.8, ratingCount: 19, specs: { 'Taille': '50 pouces', 'Résolution': '4K HDR', 'Système': 'Google TV', 'Ports': '4x HDMI, 2x USB', 'Son': '20W', 'Garantie': '1 an' }, descFr: 'Processeur X1 pour des couleurs naturelles et un contraste exceptionnel.', descEn: 'X1 processor for natural colors and exceptional contrast.' }),
    P({ name: 'Samsung Smart TV 65" QLED', brand: 'Samsung', category: 'televisions', icon: 'tv', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEBbVEMHnrPnF-9-nGR6QThdnO1rXKbJzVL80en2A1cA&s=10', price: 620000, rating: 4.9, ratingCount: 12, specs: { 'Taille': '65 pouces', 'Résolution': '4K QLED', 'Système': 'Tizen Smart TV', 'Ports': '4x HDMI, 2x USB', 'Son': '40W', 'Garantie': '1 an' }, descFr: 'Technologie Quantum Dot pour un salon home-cinéma haut de gamme.', descEn: 'Quantum Dot technology for a high-end home cinema living room.' }),

    // --- Accessoires : Audio ---
    P({ name: 'JBL Tune 720BT', brand: 'JBL', category: 'accessoires', sub: 'audio', icon: 'headphones', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6bcEta1jp8rBPei8VJup1rJDV1LFS3RdsKlZlAPghjg&s=10', price: 38000, isBestSeller: true, rating: 4.6, ratingCount: 91, specs: { 'Type': 'Casque sans fil', 'Autonomie': '76h', 'Bluetooth': '5.3', 'Micro': 'Oui', 'Couleur': 'Noir' }, descFr: 'Son JBL Pure Bass et confort longue durée pour un usage quotidien.', descEn: 'JBL Pure Bass sound and long-lasting comfort for daily use.' }),
    P({ name: 'AirPods 4', brand: 'Apple', category: 'accessoires', sub: 'audio', icon: 'headphones', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnWFkExsnCwaYnEU1rD9LNlyVHNME9g7_guZmUwck1g&s=10', price: 92000, isNew: true, rating: 4.8, ratingCount: 34, specs: { 'Type': 'Écouteurs sans fil', 'Autonomie': '30h (boîtier)', 'Bluetooth': '5.3', 'Micro': 'Oui', 'Couleur': 'Blanc' }, descFr: "Intégration parfaite avec l'écosystème Apple, audio spatial.", descEn: 'Perfect integration with the Apple ecosystem, spatial audio.' }),
    P({ name: 'JBL Flip 6', brand: 'JBL', category: 'accessoires', sub: 'audio', icon: 'speaker', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwm_dIq6lEA_zJ2pEDLEtUff50I-qB1XfBMejHH4hGUg&s=10', price: 65000, oldPrice: 75000, isPromo: true, rating: 4.7, ratingCount: 52, specs: { 'Type': 'Enceinte portable', 'Autonomie': '12h', 'Bluetooth': '5.1', 'Étanchéité': 'IP67', 'Couleur': 'Bleu' }, descFr: 'Son puissant et étanche, parfaite pour lextérieur.', descEn: 'Powerful and waterproof sound, perfect for outdoors.' }),

    // --- Wearables ---
    P({ name: 'Apple Watch SE (2e gén)', brand: 'Apple', category: 'accessoires', sub: 'wearables', icon: 'watch', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg3BdAbVnVjU00YbM8k5WfQFG2LsrhWmXIOJcZwIFdEA&s=10', price: 175000, rating: 4.7, ratingCount: 26, specs: { 'Écran': '44mm Retina', 'Autonomie': '18h', 'Étanchéité': '50m', 'Capteurs': 'Cardio, sommeil', 'Couleur': 'Minuit' }, descFr: 'Suivi santé complet, compatible iPhone.', descEn: 'Complete health tracking, iPhone compatible.' }),
    P({ name: 'Xiaomi Smart Band 8', brand: 'Xiaomi', category: 'accessoires', sub: 'wearables', icon: 'watch', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4NhWiErG_bOymffvLNaWby-HBUfLiBr7ghL_VdBC0kA&s=10', price: 22000, isBestSeller: true, rating: 4.5, ratingCount: 84, specs: { 'Écran': '1.62" AMOLED', 'Autonomie': '16 jours', 'Étanchéité': '5ATM', 'Capteurs': 'Cardio, SpO2', 'Couleur': 'Noir' }, descFr: 'Le bracelet connecté le plus vendu, très bon rapport qualité-prix.', descEn: 'The best-selling fitness tracker, great value for money.' }),
    P({ name: 'Samsung Galaxy Watch6', brand: 'Samsung', category: 'accessoires', sub: 'wearables', icon: 'watch', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTej0hmorU9wjDfGW9ql9H9Y56an0xRk9bmekW9qdSaZg&s=10', price: 165000, isNew: true, rating: 4.6, ratingCount: 18, specs: { 'Écran': '44mm AMOLED', 'Autonomie': '40h', 'Étanchéité': '5ATM', 'Capteurs': 'Cardio, ECG', 'Couleur': 'Graphite' }, descFr: 'Suivi avancé du sommeil et de la composition corporelle.', descEn: 'Advanced sleep and body composition tracking.' }),

    // --- Charge ---
    P({ name: 'Chargeur rapide Anker 20W', brand: 'Anker', category: 'accessoires', sub: 'charge', icon: 'charge', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvneVKl9qxbidJw4qli6TzQzn3tmumfFSKsQ4oGI-pbA&s=10', price: 9500, isBestSeller: true, rating: 4.6, ratingCount: 120, specs: { 'Puissance': '20W', 'Port': 'USB-C PD', 'Compatibilité': 'Universelle', 'Câble inclus': 'Non' }, descFr: 'Charge rapide et sûre pour smartphones et tablettes.', descEn: 'Fast and safe charging for smartphones and tablets.' }),
    P({ name: 'Batterie externe Anker 20000mAh', brand: 'Anker', category: 'accessoires', sub: 'charge', icon: 'battery', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGUkXFgnL7LPBOu_xoWbPDPMqNZGGpPbyg53HDX0Bbmg&s=10', price: 28000, oldPrice: 33000, isPromo: true, rating: 4.7, ratingCount: 67, specs: { 'Capacité': '20000 mAh', 'Ports': '2x USB-A, 1x USB-C', 'Puissance': '22.5W', 'Poids': '345g' }, descFr: 'Plusieurs recharges complètes en déplacement, technologie PowerIQ.', descEn: 'Multiple full charges on the go, PowerIQ technology.' }),
    P({ name: 'Câble USB-C vers Lightning 1m', brand: 'Anker', category: 'accessoires', sub: 'charge', icon: 'cable', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPewZ8tNzOptQpIS4Vbcwx6UTP_fWmozbiV3xSBhb9nQ&s=10', price: 6500, rating: 4.4, ratingCount: 45, specs: { 'Longueur': '1 mètre', 'Connecteurs': 'USB-C / Lightning', 'Charge rapide': 'Oui', 'Garantie': '6 mois' }, descFr: 'Câble certifié résistant, compatible charge rapide Apple.', descEn: 'Certified resistant cable, Apple fast charge compatible.' }),


    // --- Protection ---
    P({ name: 'Coque silicone iPhone 15', brand: 'Apple', category: 'accessoires', sub: 'protection', icon: 'smartphone', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_PbAQKo0VM-iBc1EvQ4Jn4MNd-Ubi8QClRTSQlSPRSg&s=10', price: 12000, rating: 4.3, ratingCount: 38, specs: { 'Matériau': 'Silicone', 'Compatibilité': 'iPhone 15', 'Protection': 'Anti-choc', 'Couleur': 'Plusieurs coloris' }, descFr: 'Protection élégante et douce au toucher avec doublure microfibre.', descEn: 'Elegant and soft-to-touch protection with microfiber lining.' }),
    P({ name: 'Verre trempé universel (lot de 2)', brand: 'Anker', category: 'accessoires', sub: 'protection', icon: 'shield', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlE6DY2Fkp8lHXZncSf-VU5tIS6HkDrV7K4WQGS0WrBA&s', price: 4500, isBestSeller: true, rating: 4.5, ratingCount: 96, specs: { 'Dureté': '9H', 'Épaisseur': '0.3mm', 'Anti-traces': 'Oui', 'Compatibilité': 'Sur mesure' }, descFr: 'Protection écran anti-rayures avec kit de pose sans bulles.', descEn: 'Anti-scratch screen protection with bubble-free installation kit.' }),
    P({ name: 'Coque renforcée Samsung Galaxy S24', brand: 'Samsung', category: 'accessoires', sub: 'protection', icon: 'smartphone', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqin93rJAnerXPm79vdVdjQJBqMn86qWXXlBh317Td9g&s=10', price: 14500, rating: 4.4, ratingCount: 22, specs: { 'Matériau': 'TPU + PC', 'Compatibilité': 'Galaxy S24', 'Protection': 'Anti-choc renforcée', 'Couleur': 'Noir transparent' }, descFr: 'Coque robuste testée chute 2m, accès total aux boutons et caméra.', descEn: 'Rugged case tested 2m drop, full access to buttons and camera.' }),


    // --- Photo ---
    P({ name: 'Trépied smartphone Bluetooth', brand: 'Anker', category: 'accessoires', sub: 'photo', icon: 'camera', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHDGFS4HN11ZOcl_YIX0F5tYavW7euY2NAoJB5mU-ExA&s=10', price: 15000, rating: 4.2, ratingCount: 27, specs: { 'Hauteur': '1.6m', 'Télécommande': 'Bluetooth', 'Compatibilité': 'Universelle', 'Poids': '450g' }, descFr: 'Idéal pour vlogs, réseaux sociaux et appels vidéo.', descEn: 'Ideal for vlogs, social media and video calls.' }),
    P({ name: 'Ring light LED 10" avec support', brand: 'Anker', category: 'accessoires', sub: 'photo', icon: 'sun', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPwh3Hh4d-7fGbgvLufcAb3eNDkmxMCEKbRE7n3AovxA&s=10', price: 21000, oldPrice: 25000, isPromo: true, rating: 4.5, ratingCount: 33, specs: { 'Diamètre': '10 pouces', 'Luminosité': '3 modes', 'Alimentation': 'USB', 'Support téléphone': 'Inclus' }, descFr: 'Éclairage professionnel pour photos, lives et visioconférences.', descEn: 'Professional lighting for photos, live streams and video calls.' }),

    // --- Stockage ---
    P({ name: 'Carte mémoire SanDisk 128Go', brand: 'Anker', category: 'accessoires', sub: 'stockage', icon: 'storage', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Q1IUSY-YmS3TiBQj86nR0MmlfW8ZnPJijksPTbkhFQ&s=10', price: 12000, isBestSeller: true, rating: 4.6, ratingCount: 78, specs: { 'Capacité': '128 Go', 'Type': 'microSDXC', 'Vitesse': 'Classe 10 / U3', 'Compatibilité': 'Universelle' }, descFr: 'Stockage rapide et fiable pour photos, vidéos 4K et applications.', descEn: 'Fast and reliable storage for photos, 4K videos and apps.' }),
    P({ name: 'Clé USB SanDisk 64Go', brand: 'Anker', category: 'accessoires', sub: 'stockage', icon: 'usb', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC0AVLK4zc0XSaujWtq5dmxsoM4UpHoOJo79GMQQdr1Q&s=10', price: 8500, rating: 4.3, ratingCount: 41, specs: { 'Capacité': '64 Go', 'Interface': 'USB 3.0', 'Vitesse lecture': '130 Mo/s', 'Garantie': '1 an' }, descFr: 'Transfert rapide de fichiers volumineux, format compact.', descEn: 'Fast transfer of large files, compact format.' }),
    P({ name: 'Disque dur externe 1To', brand: 'Dell', category: 'accessoires', sub: 'stockage', icon: 'storage', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfsLX78GwOG_QW_MOb9XxztBtsbHIe0mAT50T-qUeVWA&s=10', price: 42000, rating: 4.5, ratingCount: 29, specs: { 'Capacité': '1 To', 'Interface': 'USB 3.0', 'Format': '2.5 pouces', 'Garantie': '2 ans' }, descFr: 'Sauvegarde fiable de vos documents, photos et vidéos.', descEn: 'Reliable backup for your documents, photos and videos.' }),
    
    // --- Gaming ---
    P({ name: 'Manette sans fil compatible PC/Mobile', brand: 'Sony', category: 'accessoires', sub: 'gaming', icon: 'gamepad', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ZYY8OCyJFXus6iUo3_jhTLoiXNzYK9nOYixnEVYjzQ&s=10', price: 15000, rating: 4.5, ratingCount: 24, specs: { 'Connectivité': 'Bluetooth', 'Autonomie': '20h', 'Compatibilité': 'PC, Android, iOS', 'Vibration': 'Oui' }, descFr: 'Confort de jeu optimal pour vos sessions mobiles et PC.', descEn: 'Optimal gaming comfort for your mobile and PC sessions.' }),
    P({ name: 'Casque gaming RGB avec micro', brand: 'HP', category: 'accessoires', sub: 'gaming', icon: 'headphones', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXXbLxylRVjOzwAT3Ff2hQteY9Sxruu_ZI2VjCW6qBIg&s=10', price: 27000, oldPrice: 32000, isPromo: true, rating: 4.4, ratingCount: 31, specs: { 'Type': 'Casque filaire', 'Son': '7.1 virtuel', 'Micro': 'Amovible', 'Éclairage': 'RGB' }, descFr: 'Immersion sonore totale pour le gaming et les appels.', descEn: 'Total sound immersion for gaming and calls.' }),
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
    { qFr: 'Comment vous contacter rapidement ?', qEn: 'How to contact you quickly?', aFr: 'Le plus rapide est WhatsApp au +237 697 18 65 64. Vous pouvez aussi nous écrire par e-mail.', aEn: 'The fastest is WhatsApp at +237 697 18 65 64. You can also email us.' },
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
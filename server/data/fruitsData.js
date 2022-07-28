const fruits = [
    {
        name: 'Pinkglow® Pineapples',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/image-of-pinkglow-pineapple-fruit-28658079825964_400x400.jpg?v=1628013489',
        countInStock: 8,
    },
    {
        name: 'Pinkglow® Pineapples - Ship to California Only',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/image-of-pinkglow-pineapple-ship-to-california-only-fruit-28034665054252_400x400.jpg?v=1633363174',
        countInStock: 5,
    },
    {
        name: 'Passion Fruit',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/image-of-passion-fruit-fruit-28624075980844_512x512.jpg?v=1630618715',
        countInStock: 5,
    },
    {
        name: 'Finger Limes',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/image-of-finger-limes-fruit-28659990102060_512x512.jpg?v=1627986326',
        countInStock: 5,
    },
    {
        name: 'South African Baby Pineapples',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/image-of-south-african-baby-pineapples-fruit-14763538972716_512x448.jpg?v=1616817396',
        countInStock: 3,
    },
    {
        name: 'Rambutans',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/2-pounds-image-of-rambutans-fruit-30307756703788_512x512.jpg?v=1652473211',
        countInStock: 0,
    },
    {
        name: 'Strawberry Papayas',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/4-count-image-of-strawberry-papaya-fruit-29921774338092_512x512.jpg?v=1648081939',
        countInStock: 9,
    },
    {
        name: 'Cherimoya',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/image-of-cherimoya-fruit-14763825397804_512x512.jpg?v=1620856869',
        countInStock: 5,
    },
    {
        name: 'Dragon Fruit (White)',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/3-count-image-of-dragon-fruit-white-fruit-29921760706604_512x512.jpg?v=1648081574',
        countInStock: 3,
    },
    {
        name: 'Baby Pineapple Crate',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/image-of-baby-pineapple-crate-fruit-14764298731564_512x512.jpg?v=1616890602',
        countInStock: 6,
    },
    {
        name: 'Banana Sampler',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/image-of-banana-sampler-fruit-14764386811948_512x512.jpg?v=1616893029',
        countInStock: 2,
    },
    {
        name: 'Burro Bananas',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/5-pounds-image-of-burro-bananas-fruit-29921637007404_512x512.jpg?v=1648078698',
        countInStock: 1,
    },
    {
        name: 'Cactus Pears',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/image-of-cactus-pears-fruit-14764088590380_512x512.jpg?v=1620763917',
        countInStock: 0,
    },
    {
        name: 'Manzano Bananas',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/image-of-manzano-bananas-fruit-14764176244780_400x400.jpg?v=1625603425',
        countInStock: 2,
    },
    {
        name: 'Mangosteens',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/2-pounds-image-of-mangosteens-fruit-28658377621548_512x512.jpg?v=1628027136',
        countInStock: 3,
    },
    {
        name: 'Feijoas',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/image-of-feijoas-fruit-14764130730028_512x512.jpg?v=1624392032',
        countInStock: 1,
    },
    {
        name: 'Lychees',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/image-of-lychee-fruit-28657324589100_400x400.jpg?v=1628106349',
        countInStock: 7,
    },
    {
        name: 'Asian Pears',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/image-of-asian-pear-fruit-28658780471340_512x512.jpg?v=1627990450',
        countInStock: 0,
    },
    {
        name: 'Sweet Young Coconuts',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/image-of-sweet-young-coconut-fruit-28663799775276_512x512.jpg?v=1628111391',
        countInStock: 7,
    },
    {
        name: 'Dragon Fruit (Yellow)',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/image-of-dragon-fruit-yellow-fruit-28656609099820_512x512.jpg?v=1628100756',
        countInStock: 4,
    },
    {
        name: 'Kiwano Horned Melons',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/image-of-kiwano-horned-melon-fruit-14764461883436_512x512.jpg?v=1616872562',
        countInStock: 6,
    },
    {
        name: 'Baby Bananas',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/image-of-baby-bananas-fruit-28661413642284_400x400.jpg?v=1628003405',
        countInStock: 2,
    },
    {
        name: 'Mangos',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/image-of-mangoes-fruit-14764291883052_512x512.jpg?v=1616857622',
        countInStock: 4,
    },
    {
        name: 'Kiwi Berries',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/image-of-kiwi-berries-fruit-30307993944108_512x512.jpg?v=1652475731',
        countInStock: 8,
    },
    {
        name: 'Pomegranates',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/image-of-pomegranates-fruit-14763950538796_512x512.jpg?v=1633024951',
        countInStock: 6,
    },
    {
        name: 'Pinkglow® Pineapples - Ship to California Only - 2 Count',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/image-of-pinkglow-pineapple-ship-to-california-only-2-count-fruit-29982453891116_400x400.jpg?v=1648682054',
        countInStock: 2,
    },
    {
        name: 'Starfruit',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/image-of-starfruit-fruit-14763596546092_400x400.jpg?v=1632495752',
        countInStock: 5,
    },
    {
        name: 'Fuyu Persimmons',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/2-pounds-image-of-fuyu-persimmons-fruit-30307737075756_512x512.jpg?v=1652472851',
        countInStock: 8,
    },
    {
        name: 'Guavas',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/3-pounds-image-of-guavas-fruit-28634842038316_512x512.jpg?v=1628087082',
        countInStock: 8,
    },
    {
        name: 'EZ Open Sweet Young Coconuts',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/image-of-ez-open-sweet-young-coconuts-other-28656831987756_512x512.jpg?v=1628109755',
        countInStock: 4,
    },
    {
        name: 'Organic Papayas',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/2-count-about-4-5-pounds-total-image-of-organic-papayas-fruit-28656407805996_400x400.jpg?v=1628113355',
        countInStock: 2,
    },
    {
        name: 'Keitt Mangos',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/image-of-keitt-mango-fruit-14764473286700_512x512.jpg?v=1616929197',
        countInStock: 3,
    },
    {
        name: 'Pineapple Quince',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/4-pounds-image-of-pineapple-quince-fruit-30307785408556_512x512.jpg?v=1652473932',
        countInStock: 7,
    },
    {
        name: 'Quick Crack Coconuts',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/image-of-quick-crack-coconuts-other-14763951521836_400x400.jpg?v=1633537595',
        countInStock: 4,
    },
    {
        name: 'Cinnamon Persimmons',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/image-of-cinnamon-persimmons-fruit-14764149112876_512x512.jpg?v=1633094803',
        countInStock: 2,
    },
    {
        name: 'Organic Kiwi',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/2-pounds-image-of-organic-kiwi-fruit-30307832725548_512x512.jpg?v=1652475192',
        countInStock: 4,
    },
    {
        name: 'Gold Pineapples with Corer',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/image-of-gold-pineapples-with-corer-fruit-14764454674476_512x512.png?v=1616927671',
        countInStock: 7,
    },
    {
        name: 'Satsuma Tangerines',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/5-pounds-image-of-satsuma-tangerines-fruit-29275215626284_512x512.jpg?v=1638834623',
        countInStock: 0,
    },
    {
        name: 'Pomegranate Arils (5 oz.)',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/image-of-pomegranate-arils-5-oz-fruit-14763969019948_512x512.jpg?v=1618238294',
        countInStock: 0,
    },
    {
        name: 'Tai Nung Papayas',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/image-of-tai-nung-papaya-fruit-30308078125100_512x512.jpg?v=1652479332',
        countInStock: 8,
    },
    {
        name: 'Gold Pineapples',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/image-of-gold-pineapple-fruit-17005178748972_400x400.jpg?v=1616879160',
        countInStock: 9,
    },
    {
        name: 'Honey Mangos',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/image-of-honey-mango-fruit-14764017451052_400x400.jpg?v=1616942881',
        countInStock: 2,
    },
    {
        name: 'Caribbean Red Papayas',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/image-of-caribbean-red-papaya-fruit-14764358172716_400x400.jpg?v=1622061791',
        countInStock: 6,
    },
    {
        name: "Buddha's Hand",
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/image-of-buddha-s-hand-fruit-14764499501100_400x400.jpg?v=1616895064',
        countInStock: 1,
    },
    {
        name: 'Loquats',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/image-of-loquats-fruit-14764487606316_512x512.jpg?v=1625600302',
        countInStock: 3,
    },
    {
        name: 'Pinkglow® Pineapples - 2 Count',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/2-count-avg-wt-3-pounds-each-image-of-pinkglow-pineapple-2-count-fruit-30029883375660_400x400.jpg?v=1649207474',
        countInStock: 7,
    },
    {
        name: 'Green Lychees',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/image-of-green-lychee-fruit-14764437471276_400x400.jpg?v=1624900238',
        countInStock: 2,
    },
    {
        name: 'Cavendish Bananas',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/image-of-cavendish-bananas-fruit-17004825083948_400x398.jpg?v=1616919794',
        countInStock: 0,
    },
];

export default fruits;

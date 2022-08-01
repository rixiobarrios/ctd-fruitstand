
![CTD_Logo1](https://user-images.githubusercontent.com/55994508/163671705-1ac3ca46-1f1c-4474-b26b-007ebb019f4d.jpg)

# Overview

This basic app was created as an assignment in order to be considered for the apprenticeship program at [Code The Dream](https://codethedream.org/) found [here](https://codethedream.org/ctd-labs-apprenticeship-application-assignment/).

# Requirements

- Keep track of at least one product, for example, bananas.

- Manage the quantities of the product(s). There should be a way to increase and decrease the number of items of the product(s) in the inventory.

- Send an email if the quantity of a product hits zero.

- We should be able to read your code and understand what is going on.

- it should be built in a way that will allow us to pull the code and run it locally.

**Areas that will be included in the assessment:**

1. Create a React Application using create-react-app  or next.js that:

2. Uses a variety of data types: integer, string, boolean, arrays, object;

3. Has at least one dynamic route set up;

4. Shows wireframes that express functionality of application and how a user flows through the app (optional);

5. Uses at least one external API that highlights the use of array mapping and object manipulation, e.g. fetching data. It doesn’t have to perfectly fit the context of your app, you may have a personal website or an inventory tracker but decide to use a weather API to show us the next 5 days weather, for example;

6. Implements some aspect of filtering or sorting data (can be related to number 5 but doesn’t have to be);

7. Demonstrates some example of inputting data via form elements/controls and should include several types of input fields.  You might use text fields, drop-down lists, checkboxes, radio buttons, and/or others, and there should be some links to connect the application together; 

8. Implements Error handling in at least one place;

9. Uses hooks and functional components;

10. Incorporates links or buttons to help the users navigate to different views/containers within the application.

11. API keys should not be exposed in the code or on github (use a .env file).

12. Application code should be stored in GITHUB.

13. Style your application by adding CSS, SCSS, or a UI framework or library and using your own custom CSS.

14. The application should be attractive with inclusion of images, color, fonts and other CSS styling.

15. App must be responsive.

**Extra**

The following are not necessary, but are examples of things that would be nice bonuses:

- Building a full-stack app with both client and server code

- Working with a database and/or creating an API

- Allowing the user to determine what kinds of products the inventory tracks

- Testing/linting

- A particularly well-designed GUI

- A working version of the app hosted in a cloud environment (with a link to the URL)

# The Project

[![Netlify Status](https://api.netlify.com/api/v1/badges/22f29b1c-c0c6-424b-b464-570e1496d694/deploy-status)](https://app.netlify.com/sites/ctd-fruitstand/deploys)

![fruitstandlogo](https://user-images.githubusercontent.com/55994508/181415630-757d113c-78ab-4ad6-b938-978659e7054c.jpg)

1. The project uses React, CSS and Javascript.

2. The styling is done in Material UI.

3. The data for this project was scrapped from <source below>

`https://www.melissas.com/`

Sample code:

```        {
        name: 'Deluxe Exotic and Tropical Fruit Basket',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/image-of-deluxe-exotic-and-tropical-fruit-basket-gifts-28658361729068_512x512.jpg?v=1627864559',
        details:
            'https://www.melissas.com/collections/gift-baskets/products/deluxe-exotic-and-tropical-fruit-basket',
        price: 84.49,
        countInStock: 6,
        rating: 2.96,
        description:
            "Quantity/Pack:  7 - 8 lbs.\nLooking for a fresh, juicy selection of the season's best exotic fruits?\n\nThis stunning assortment arranged in a woven basket with cellophane wrapping and colorful ribbon may include (depending on seasonal availability): Asian Pear, Baby Pineapple, Blood Orange, Cherimoya, Feijoas, Kiwis, Kumquats, Lychees, Mango, Papaya, Passion Fruit, Persimmons, Pomegranate, Rambutans, Specialty Bananas, Starfruit and Tamarillos.\n\nThe following prohibit shipment of any citrus into their state: Arizona, Florida, Georgia, Louisiana, Texas and Hawaii. If you would like to order this gift for shipment to an address in AZ, FL, GA, LA, TX, or HI, we will substitute the citrus for another seasonal fruit variety.\nHawaii prohibits the shipment of any pineapple into their state.\n\nThis item is perishable and must ship at least 2nd day.\nAny orders that do not have the appropriate shipping method selected will not be shipped. For assistance, please call us at 800-588-0151.\n",
        itemType: 'Basket',
    },
    {
        name: 'Baby Vegetables Basket',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/add-a-knife-to-this-item-image-of-baby-vegetables-basket-gifts-28663296393260_512x512.jpg?v=1628086387',
        details:
            'https://www.melissas.com/collections/gift-baskets/products/baby-vegetables-basket',
        price: 77.49,
        countInStock: 8,
        rating: 3.62,
        description:
            'Quantity/Pack:  6 lbs.\nSeasonality:  Year Round\n\n\nEach delicately woven basket is brimming with fresh vegetables which are artfully arranged to provide a charming presentation.\n',
        itemType: 'Basket',
    },
    {
        name: 'Baby Pineapple Crate',
        image: 'https://cdn.shopify.com/s/files/1/0336/7167/5948/products/image-of-baby-pineapple-crate-fruit-14764298731564_512x512.jpg?v=1616890602',
        details:
            'https://www.melissas.com/collections/gift-baskets/products/baby-pineapple-crate',
        price: 82.49,
        countInStock: 9,
        rating: 2.94,
        description:
            'Quantity/Pack: 6 - 7 count\nSeasonality: Year Round\nOrigin: South Africa\n\nSouth Africa is noted for these baby pineapples, also known as Queen Victoria Pineapples, which thrive in the hot and humid climate.\n\nThese sweet, tart baby pineapples have a bold, rich flavor. They have a fragrant, golden skin and brilliantly colored yellow flesh. South African baby pineapples are entirely edible, with no need to remove the core. The size of an average fruit is about 4.5 inches high (not including leaves) and about 3.5 inches in diameter, making it a perfect individual serving.\n\nPacked in a reusable wood crate, our South African Baby Pineapples serve as a wonderfully exotic gift.\n\nLook for fruit with bright coloring and deep green leaves. Avoid pineapples with brown or soft spots and dry brown leaves. Keep in refrigeration for up to ten days.\n\nRemove crown and a small portion of the base, or simply cut in half, leaving crown on, for a beautiful, succulent plate garnish.\n\nNo need to cut out the core of the pineapple, it is entirely edible and not tough at all. These pineapples are low in acid and delicious when eaten fresh out of hand or added to fruit salads.\n\nHawaii prohibits the shipment of any pineapple into their state.\n\nThis item is perishable and must ship at least 2nd day. \nAny orders that do not have the appropriate shipping method selected will not be shipped. For assistance, please call us at 800-588-0151.\n',
        itemType: 'Basket',
    },
```

4. How to download and run this project:
- You can either clone the repository from the github or download the zip.
- clone link and download option can be found from right side of the repository  page
- Unzip the file and open the project on your terminal by navigating to the folder

5. Data for fruits with quantities are displayed

6. Two buttons provide a way to add or subtract fruits

7. Models allow to view the fruits in the fruit stand

8. You can submit a request for a fruit

9. Repository has been created [here](https://github.com/rixiobarrios/ctd-fruitstand)

**See deployed version [here](https://ctd-fruitstand.netlify.app/)**
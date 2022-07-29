
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

```    const fruitPUT = async (e) => {
        e.preventDefault();
        console.log(e.target.value);
        const body = {};
        if (e.target.value === 'add') {
            body.countInStock = fruit.countInStock + 1;
        } else if (e.target.value === 'eat') {
            body.countInStock = fruit.countInStock - 1;
        }
        const id = fruit._id;
        console.log(id, body);
        const res = await axios.put(
            `http://localhost:1337/api/fruits/${id}/`,
            body
        );
        console.log(res.data.countInStock);
        setFruit({ ...res.data });
        if (res.data.countInStock === 0) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    };
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
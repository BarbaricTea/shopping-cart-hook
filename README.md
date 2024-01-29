# The Partnersense fullstack code test

Welcome and good luck to you!

## Scope

Try to spend approximately four hours on the test.

We will of corse look at your code, but the most important for us is to understand how you approach problems, how you structure your work, what you find hard and what you find easy.

We don't expect a finished solution after these four hours you will spend on this code but rather this four hours is a good time for you to get familiar with the code and solution to get a good enough understanding of the solution to be able to have a discussion with us regarding the pros and cons of this solution and of code in general.

## Language, Frameworks and libs

The code is setup with Next js, TypeScript, Tailwind and react-use-cart.

### NEXT JS

Built with Next js. Next js is an open-source development framework built on top of Node. js enabling React based web applications functionalities such as server-side rendering and generating static websites.
https://nextjs.org/

### Tailwind

A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
https://tailwindcss.com/

### React-use-cart

"react-use-cart is a lightweight shopping cart hook for React, Next. js, and Gatsby. Create persistent carts with local storage, or your own adaptor. react-use-cart supports flexible cart item schemas, multiple carts per page and offers cart handlers that let you trigger actions on item add, update or remove.
https://www.npmjs.com/package/react-use-cart

## Prerequisite

Download and install node.
https://nodejs.org/en/

## Download the repo and start the solution

Download the Repo

Open the Repo in a command prompt / terminal and run:

`npm i`

and then

`npm run dev`

Now your solution should have built and started in a browser.

## The assignment

The scenario is that we have started on a new e-commerce solution and we are several developers working on the solution at the same time. We did start with the frontend and almost all frontend is done so you shouldn´t need to spend to much time on frontend.

[![](https://res.cloudinary.com/partnersense-ab/image/upload/v1641157013/git/Ska%CC%88rmavbild_2022-01-02_kl._21.54.51_xxwxyx.png)](https://res.cloudinary.com/partnersense-ab/image/upload/v1641157013/git/Ska%CC%88rmavbild_2022-01-02_kl._21.54.51_xxwxyx.png)

But in the initial steps that have been done some mock data have bean used to create the pages either hard coded in the markup or as a local array in the pages. Now a friendly developer have setup some more proper products in the `data/constants.js` file and several of the components and pages are using this data, this file is the one you should use for product information changes if needed.

[![](https://res.cloudinary.com/partnersense-ab/image/upload/v1641157013/git/Ska%CC%88rmavbild_2022-01-02_kl._21.55.02_ze4169.png)](https://res.cloudinary.com/partnersense-ab/image/upload/v1641157013/git/Ska%CC%88rmavbild_2022-01-02_kl._21.55.02_ze4169.png)

Another developer have implemented the react-use-cart hook and have started implementing real cart functionality that adds products to the cart from the `app/products/[id]/page.tsx` to the cart and shows the cart items amount in the header.

Now it's your time to make the cart page more dynamic. For now the cart page is just markup and all markup is directly placed in the page `app/cart/page.tsx`.

[![](https://res.cloudinary.com/partnersense-ab/image/upload/v1641157013/git/Ska%CC%88rmavbild_2022-01-02_kl._21.55.11_pc1aja.png)](https://res.cloudinary.com/partnersense-ab/image/upload/v1641157013/git/Ska%CC%88rmavbild_2022-01-02_kl._21.55.11_pc1aja.png)

### Your assignment is to:

- Split up the `app/cart/page.tsx` to instead use components.
- Implement the react-use-cart in this page / components as well
- Instead of listing mock data please list the items from in react-use-cart instead
- Add functionality to remove cart item rows
- Add functionality to change the cart item amounts
- Add functionality to see the cart item rows total cost
- Add functionality to see the entire carts sub total cost
- Add functionality to clear the cart when you click the Checkout button and redirect to the startpage

### Tips and Hints

Remember that you only need to spend **four hours** on this and that it's not your code that will be the deciding factor for us but rather our discussion regarding the solution and code and your ability to approach situations like this one.

Start small! In our opinion it's better to have something that works (one product or one attribute) and focus on the process and flow rather than having everything perfect from the beginning.

We promote iterating our solutions and help each other with the iterations so often our first lines of code in our solutions are just the staring point and could be seen more as POC (Proof of Concept) rather then production ready code.

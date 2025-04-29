const projects = [
    {
        id: 1,
        name: "Walmart Website Redesign",
        text: `This project is a modern, responsive redesign of the Walmart website, built using React. The goal was to improve the user experience with a clean, component-based architecture while maintaining core e-commerce functionality. The app features two main pages—a visually refreshed Home page and a Shop page—both accessible via a persistent navigation bar. The Shop page dynamically pulls product data from the FakeStore API and displays it using custom product card components, each with quantity controls and an “Add to Cart” button to enhance usability.
The shopping cart experience is integrated directly into the navigation bar, showing real-time updates to the item count and providing a smooth UI flow toward checkout. The redesign emphasizes improved layout, streamlined user interaction, and responsiveness across devices. The application is fully styled with modern UI design principles and showcases both front-end development skills and a thoughtful approach to redesigning a real-world retail interface.
`,
        url: "https://walmart-database-production.up.railway.app",
        types: ["Node.js", "Express", "PG", "EJS"],
        background: "/images/grey1.png",
        image: "/images/walmart-logo.png",
        images: ["/images/walmart/walmart-1.png","/images/walmart/walmart-2.png"],
    },
    {
        id: 2,
        name: "Mini Message Board",
        text: `This project is a lightweight, server-rendered message board application built with Express and EJS. The goal was to create a functional and user-friendly platform for posting and viewing short messages, while practicing core back-end development concepts. The app features two main routes: a homepage that displays all messages and a form page for submitting new ones. Each message displays the author, content, and timestamp, and users can add new messages through a simple, styled form interface.
Messages are stored in-memory using an array and are dynamically rendered on the homepage using EJS templating. The app handles form submissions with Express middleware and routing, and supports POST requests to add new messages to the board. A detail view is also included for each message, accessible via a link next to the post. The project is organized with a clear folder structure for routes, views, and static assets, and is pushed to GitHub as part of the version control and project sharing process. This app demonstrates foundational back-end skills including routing, templating, middleware configuration, and user input handling.`,
        url: "",
        types: ["Node.js", "Express", "EJS"],
        background: "/images/grey2.png",
        image: "/images/logo-message.png",
        images: ["/images/message-board/message1.png","/images/message-board/message2.png"],
    },
    {
        id: 3,
        name: "Best Buy UX Redesign",
        text: `This project is a lightweight, server-rendered message board application built with Express and EJS. The goal was to create a functional and user-friendly platform for posting and viewing short messages, while practicing core back-end development concepts. The app features two main routes: a homepage that displays all messages and a form page for submitting new ones. Each message displays the author, content, and timestamp, and users can add new messages through a simple, styled form interface.
Messages are stored in-memory using an array and are dynamically rendered on the homepage using EJS templating. The app handles form submissions with Express middleware and routing, and supports POST requests to add new messages to the board. A detail view is also included for each message, accessible via a link next to the post. The project is organized with a clear folder structure for routes, views, and static assets, and is pushed to GitHub as part of the version control and project sharing process. This app demonstrates foundational back-end skills including routing, templating, middleware configuration, and user input handling.`,
        url: "https://xd.adobe.com/view/c594a082-e432-4391-81e7-e159e655aab7-90c7/",
        types: ["Figma", "Adobe XD"],
        background: "/images/grey3.png",
        image: "/images/logo-bestbuy.png",
        images: [`/images/best_buy/image copy 2.png`,
"/images/best_buy/image copy 3.png",
"/images/best_buy/image copy 4.png",
"/images/best_buy/image copy 5.png",
"/images/best_buy/image copy.png",
"/images/best_buy/image.png",],
    },
]

module.exports = projects;
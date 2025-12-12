💧 WaterWiz - Professional Plumbing Services Website

**Contributors:**
* **Yashpal Singh** 
* **Ram Sharma** 
* **Vishwajit Jayswal** 

A fully responsive, multi-page website designed for a modern plumbing service agency. This project demonstrates core frontend development skills using semantic HTML5, modern CSS3, and JavaScript for interactive logic.

🚀 Project Overview
WaterWiz is a website that allows users to:

Browse plumbing services.

Add services to a functional shopping cart.

View a filtered gallery of past projects.

Contact the business via a form or interactive map.

Learn about the team.

✨ Key Features
1. 🏠 Home Page (index.html)
Hero Section: Full-screen background with a call-to-action.

Popup Modal: A "Get a Quote" button triggers a JavaScript modal form without refreshing the page.

2. 🛠 Services Page (services.html)
Split-Screen Layout: Urban Company-style layout with a sticky sidebar.

Interactive Cart:

Add items to cart using data-attributes.

Cart updates in real-time (DOM manipulation).

Calculate total price dynamically.

Remove items functionality.

Auto-Scroll: Clicking a category on the left smoothly scrolls to that section on the right.

3. 🖼 Gallery Page (gallery.html)
Category Filtering: Filter images by "Bathroom", "Kitchen", or "Repair" using JavaScript.

Visual Effects: CSS Grid layout with professional gradient overlays on hover.

4. 📞 Contact Page (contact.html)
Layout: Split-screen design (Info vs. Form).

Integration: Embedded Google Map using an iframe.

Form Handling: JavaScript intercepts the submit event to simulate sending a message.

5. 👥 About Page (about.html)
Story & Stats: A clean layout showcasing the company history and team members.

🛠 Tech Stack
HTML5: Semantic structure (<nav>, <section>, <article>, <footer>).

CSS3:

Flexbox: Used for Navbars and row layouts.

CSS Grid: Used for the Gallery and Team sections.

Animations: Keyframes for modal slides and hover effects.

JavaScript (Vanilla):

DOM Selection (document.querySelector, getElementById).

Event Listeners (addEventListener).

Array & Object manipulation (for the Shopping Cart logic).

Icons: Google Material Symbols.

Fonts: Google Fonts (Arial/Verdana fallback).

📂 Folder Structure
Plaintext

WaterWiz-Project/
│
├── index.html       # Home Page
├── services.html    # Services & Cart Logic
├── gallery.html     # Filterable Image Gallery
├── contact.html     # Contact Form & Map
├── about.html       # Team & Company Info
│
├── style.css        # All styling for the website
├── script.js        # All interactive logic
└── README.md        # Project Documentation
💻 How to Run
Download or Clone the project folder.

Open the folder on your computer.

Double-click index.html to open it in your web browser (Chrome, Edge, Firefox, etc.).

Navigate through the links in the navbar to explore the site.

🧠 JavaScript Concepts Used
This project focuses on the fundamental pillars of JavaScript as taught in the curriculum:

DOM Selectors: Using .querySelector() and .querySelectorAll() to target HTML elements.

Event Handling: Using .addEventListener('click', ...) instead of inline HTML JS.

Arrays & Objects: The shopping cart stores data as an Array of Objects: [{name: "Tap Repair", price: 79}].

Loops: Using for loops to iterate through button lists and cart items.

Console Logging: Used console.log() to verify actions (adding/removing items).

🔮 Future Improvements
Connect the Contact Form to a real backend (like PHP or Node.js) to send actual emails.

Add a "Dark Mode" toggle.

Make the Shopping Cart persistent using LocalStorage (so items stay in the cart after refresh).

Make the checkout functional by adding login page and integrating payment gateway
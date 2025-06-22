# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




🧾 Project Name:
InventoryHub – Full-Stack Item Management System

📄 Project Description:
InventoryHub is a full-stack web application designed to streamline the process of managing, adding, and viewing inventory items such as clothing, shoes, sports gear, and more. This application allows users to input detailed item information, upload multiple images, and visually browse the inventory with an engaging and responsive user interface.

Built using modern web technologies, InventoryHub consists of a React.js frontend styled with Tailwind CSS, connected to an Express.js + MongoDB backend, providing real-time item storage, retrieval, and email-based enquiry functionality.

🚀 Core Features:
🔹 Add Items
A dedicated "Add Items" page with a user-friendly form.

Allows input of item name, type, description, cover image, and multiple additional image URLs.

Sends the data to a backend server which stores it in a MongoDB database.

Displays a success message after submission.

🔹 View Items
A "View Items" page displaying all stored items in a responsive card layout.

Shows the item name and cover image.

Clicking on an item opens a modal showing:

Full item details

An image carousel with all images

An "Enquire" button for contact

🔹 Email Enquiry System (via Backend)
When a user clicks the “Enquire” button, the app sends an email containing item details using Nodemailer through the backend.

Email template includes item name, type, and description.

Uses secure environment variables to protect email credentials.

🛠️ Tech Stack:
🔸 Frontend:
React.js (with React Router)

Tailwind CSS

Axios (for HTTP communication)

🔸 Backend:
Node.js with Express.js

MongoDB with Mongoose

Nodemailer (for sending emails)

🔸 Additional Tools:
Vite (for fast frontend setup)

UUID (for unique item IDs)

.env for environment-based configuration

EmailJS or SMTP via Nodemailer for communication

✅ Functional Highlights:
Full CRUD-capable setup (can easily be extended)

Real-time database updates using REST API

Modular and clean code structure

Fully responsive layout

Seamless frontend–backend integration

Email-based enquiry trigger through backend

📈 Future Improvements:
Image file uploads using Cloudinary or Firebase Storage

User authentication for secure access (Admin panel)

Editable and deletable items

Pagination and filtering in View Items page

Role-based permissions and audit logs

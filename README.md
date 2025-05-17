# React Registration Form with Redux & Formik

This project is a simple registration form built using:

- ✅ React (with Vite)
- ✅ Redux Toolkit
- ✅ React Redux
- ✅ Formik (form handling)
- ✅ Yup (form validation)
- ✅ Axios (API requests)
- ✅ TailwindCSS (UI styling)

It demonstrates:

- Form validation using Formik + Yup
- Form submission using Axios
- Global state management of loading, success, and error using Redux Toolkit
- Clean UI using TailwindCSS

---

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

---

## 🔧 Folder Structure

```
src/
├── App.jsx              # Main component with the registration form
├── main.jsx             # Entry point, wraps App with Redux Provider
├── redux/
│   ├── store.js         # Redux store configuration
│   └── formSlice.js     # Redux slice for handling form submission states
├── schemas/
│   └── index.jsx        # Yup validation schema
└── App.css              # Styles (using Tailwind)
```

---

## 🧠 Features

- Formik handles form state and events
- Yup provides schema-based validation
- Redux Toolkit manages:
  - Loading state
  - Success state
  - Error state
- Axios performs a POST request to:
  - `https://jsonplaceholder.typicode.com/users`
- Clean and responsive UI with TailwindCSS

---

## 🧪 Form Fields

- Name
- Email
- Password / Confirm Password
- Age
- Gender (dropdown)
- Terms & Conditions (checkbox)

---

## 📌 Notes

- API endpoint used is a placeholder from [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com)
- Form resets and success/error messages clear automatically after 3 seconds

---

## 🧩 Dependencies

```json
"@reduxjs/toolkit": "^2.8.2",
"@tailwindcss/vite": "^4.1.7",
"axios": "^1.9.0",
"formik": "^2.4.6",
"react": "^19.1.0",
"react-dom": "^19.1.0",
"react-redux": "^9.2.0",
"tailwindcss": "^4.1.7",
"yup": "^1.6.1"
```

## 🛠️ Dev Dependencies

```json
"@eslint/js": "^9.25.0",
"@types/react": "^19.1.2",
"@types/react-dom": "^19.1.2",
"@vitejs/plugin-react": "^4.4.1",
"eslint": "^9.25.0",
"eslint-plugin-react-hooks": "^5.2.0",
"eslint-plugin-react-refresh": "^0.4.19",
"globals": "^16.0.0",
"vite": "^6.3.5"
```

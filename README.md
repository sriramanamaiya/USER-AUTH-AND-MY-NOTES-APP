# USER-AUTH & NOTES APP (REACT + REDUX)     

A Simple Note Taking App for authenticated Users.

### 🛠️ Tech Stark

- 💻 JavaScript | ES6
- 🌐 React JS
- 🔧 Git 
- 📦 [Redux](https://github.com/reduxjs/redux), [Redux-Thunk](https://github.com/reduxjs/redux-thunk), [React-Redux](https://github.com/reduxjs/react-redux), [Material-UI](https://github.com/mui-org/material-ui) ,[react-router-dom](https://www.npmjs.com/package/react-router-dom), [axios](https://www.npmjs.com/package/axios), [Formik](https://github.com/formium/formik), [yup](https://github.com/jquense/yup)

---
## Demo
User Registration Demo:
![user-auth-registration](https://user-images.githubusercontent.com/93823982/142834598-82ab49f1-5b6e-49d5-ac63-3609cc0177d9.gif)

User Login & MyNotes (CRUD Operation) Demo:
![user-auth-mynotes](https://user-images.githubusercontent.com/93823982/142836903-892c3d5b-4e9c-45cb-b6f2-f2565ec30524.gif)

---
### Features

- User Authentication.
  - User can Register and then log into the account.
  - Used Formik to build forms and for validation used Yup.
  - User Account Details are shown on the Account Page.
- My Notes
  - User can add, update, edit, delete and view his favorite notes.
  - Users can view individual notes & their captions in a Modal format.
  - User Notes are stored in the backend so that the user can log in to his account to view them anytime.

More about the Project:
 - On User Logging In fetching user account details & notes, so that no need to make a request again when the user is switching between the account and notes Page.
  - After Log Out if a user tries to access the account page he will be redirected to the login page.

## Manual Setup
- Download the project folder, then run `npm start` to view the Project.

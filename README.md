# USER-AUTH & NOTES APP (REACT + REDUX)     

A Simple Note Taking App for authenticated Users.

### 🛠️ Tech Stark

- 💻 JavaScript | ES6
- 🌐 React JS
- 🔧 Git 
- 📦 [Redux](https://github.com/reduxjs/redux), [Redux-Thunk](https://github.com/reduxjs/redux-thunk), [React-Redux](https://github.com/reduxjs/react-redux), [Material-UI](https://github.com/mui-org/material-ui) ,[react-router-dom](https://www.npmjs.com/package/react-router-dom), [axios](https://www.npmjs.com/package/axios), [Formik](https://github.com/formium/formik), [yup](https://github.com/jquense/yup)

---
## Demo



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
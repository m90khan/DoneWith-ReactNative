### DoneWith - React Native

<br />
<p align="center">
  <a href="https://mifolio-react-app.vercel.app/">
    <img src="./app/assets/icon.png" alt="Logo" width="120" height="120">
  </a>

  <h3 align="center">DoneWith | Marketplace </h3>

  <p align="center">
Listings Marketplace <br />
    <a href="uxdkhan@gmail.com"><strong>Contact Me</strong></a>
    <br />
    <br />
    <a href="https://mifolio-react-app.vercel.app/">View Demo</a>

   </p>
</p>

## Table of Contents

- [About the Project](#about-the-project)
- [Process](#process)
- [Skills](#skills)
- [Code Snipet](#code)
- [Connect with me](#Contact)

---

### About the Project

Live: https://mifolio-react-app.vercel.app/

<img src="./app/assets/done-cover.jpg">

#### Process

- Frontend is based on atomic design concept
- Formik and Yup for forms
- User permission for camera and location access
- React navigation to implement nested navigators: with both stack and tab navigators
- ApiSauce : to get data from backend
- Api custom hooks
- offline support such as netinfo - to detect network , if isInternetReachable ? 'message' : App
- Implement Caching
- Offline Notice
- useContext to handle user state
- Push Notification using expo

<img src="./app/assets/done.jpg">

---

### Skills

[<img align="left" alt="Visual Studio Code" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" />][youtube]

[<img align="left" alt="CSS3" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />][youtube]
[<img align="left" alt="JavaScript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />][youtube]
[<img align="left" alt="React" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />][youtube]
[<img align="left" alt="CSS3" width="26px" src="https://www.cdnpkg.com/fontisto/file/nodejs.png" />][youtube]
[<img align="left" alt="Git" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />][youtube]
[<img align="left" alt="GitHub" width="26px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" />][youtube]
[<img align="left" alt="Terminal" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png" />][youtube]
<br />
<br />

---

### Code Snippet

```javascript
import { useContext } from 'react';
import jwtDecode from 'jwt-decode';
import AuthContext from './context';
import authStorage from './storage';
export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);
  const logIn = (authToken) => {
    const user = jwtDecode(authToken);
    setUser(user);
    authStorage.storeToken(authToken);
  };
  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };
  return { user, logIn, logOut };
};
```

---

### Connect with me:

[<img align="left" alt="Khan | YouTube" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/youtube.svg" />][youtube]

[<img align="left" alt="twitter | Twitter" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg" />][twitter]
[<img align="left" alt="khanmohsinx | LinkedIn" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />][linkedin]
[<img align="left" alt="khanuxd | Instagram" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/instagram.svg" />][instagram]
[<img align="left" alt="khanuxd | Instagram" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/behance.svg" />][behance]
[<img align="left" alt="khanuxd | Instagram" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/dribbble.svg" />][dribble]
<br />

---

[youtube]: https://www.youtube.com/channel/UC96rVfdTKsjZpREnH6CaCOw
[twitter]: https://twitter.com/uxdkhan
[linkedin]: https://www.linkedin.com/in/uxdkhan
[instagram]: https://www.instagram.com/uxdkhan/
[behance]: https://www.behance.net/Khan_Mohsin
[dribble]: https://dribbble.com/uxdkhan

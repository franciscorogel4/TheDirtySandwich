<img src="https://github.com/franciscorogel4/TheDirtySandwich/blob/master/images/NovaEmporiumLogoCopy.png?raw=true" width="250">

# What is Nova Emporium?
Team DirtySandwich proudly presents Nova Emporium: an online marketplace mobile app for iOS and Android that allows Villanova students to help other one another.  

# What can I do with Nova Emporium?
Nova Emporium provides a simple feature set that still allows users to find what they're looking for and sell what they want to sell.
* Account creation, deletion, password reset, and log in as guest
* Search through listings of each category
* View specific listing information
* **(Requires Account)** Listing creation in 5 categories: books, furniture, tutoring, carpool, and roommate finding
* **(Requires Account)** Bookmark listings to view at a later date

|<img src="https://raw.githubusercontent.com/franciscorogel4/TheDirtySandwich/master/images/logIn.png" width="250">|
<img src="https://raw.githubusercontent.com/franciscorogel4/TheDirtySandwich/master/images/carpool.png" width="250">|
<img src="https://raw.githubusercontent.com/franciscorogel4/TheDirtySandwich/master/images/createListing.png" width="250">|

|<img src="https://raw.githubusercontent.com/franciscorogel4/TheDirtySandwich/master/images/selectImg.png" width="250">|
<img src="https://raw.githubusercontent.com/franciscorogel4/TheDirtySandwich/master/images/bookmark.png" width="250">|
<img src="https://raw.githubusercontent.com/franciscorogel4/TheDirtySandwich/master/images/deleteAccount.png" width="250">|

# Technology
<img width="200">
<img src="http://geekycentral.com/wp-content/uploads/2017/09/react-native.png" width="250">
<img src="https://firebase.google.com/images/social.png" width="310">

We at Team DirtySandwich value the ability for users to access their information and applications on multiple platforms. We do not want to exclude any of the student body from accessing our service, and thus we opted to create our app using Facebook's [React Native.](https://facebook.github.io/react-native/) React Native allows us to create a multi-platform app using one codebase with flags which determine the use of platform specific features. By using CSS styling in a mobile app, we can easily move GUI elements and allow the app to adjust to varying screen sizes. Using React Native allows us to create a simple and elegant interface for a high quality user experience. 

Our user's experience is important to us, so in order to support that we needed a backend server implementation that would bolster that experience. Google's [Firebase](https://firebase.google.com/) allows us to easily store created listings, store listing images, authenticate users, and keep track of user data. Firebase has made backend management easy for us so we can focus on providing users with the highest quality service we can provide. 

These two products feel like a perfect match for each other. However, in order to upload files, such as listing images, is not supported by React Native by default. Firebase requires the `Blob` or `File` types of Javascript in order to upload files. React Native does not support these objects so we had to use an external React Native module, `react-native-fetch-blob`. Our app contains a few more external modules to help expedite development such as `react-navigation` and `react-native-elements`.

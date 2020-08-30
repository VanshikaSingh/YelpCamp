# YelpCamp
A Node.js web application project from Colt Steele's Udemy course - The Web Developer Bootcamp
## View the App here

<a href="https://sheltered-mountain-89057.herokuapp.com/">YelpCamp!</a>
# Features 
 * Authentication:

   - User signup with username, password and invitation code

   - User login with username and password

   - Admin login with admin username and password

* Authorization:

  - One cannot create new posts or view user profile without being authenticated

  - One cannot edit or delete existing posts and comments created by other users

  - Admin can manage all posts and comments

  - Admin can generate invitation code for user to sign up

* Functionalities of campground posts and comments:

  - Create, view, edit and delete posts and comments

  - Upload campground photos from local

  - Display campground location on Google Maps

* Flash messages responding to users’ interaction with the app

* Responsive web design

## Custom Enhancements
- Embedded comment show page in single campground show page to look more user friendly

- Added Pricing feature to let users put any price they want for their campgrounds

- Created a User Profile Page where a user has a list of all the campgrounds they posted and their email

- Used momentJS to show post and comment creation and update timestamp

- Added Admin invitation code generation functionality

## Built with

### Front-end

* [ejs](http://ejs.co/)
* [Google Maps APIs](https://developers.google.com/maps/)
* [Bootstrap](https://getbootstrap.com/docs/3.3/)

### Back-end

* [express](https://expressjs.com/)
* [mongoDB](https://www.mongodb.com/)
* [mongoose](http://mongoosejs.com/)
* [helmet](https://helmetjs.github.io/)
* [passport](http://www.passportjs.org/)
* [passport-local](https://github.com/jaredhanson/passport-local#passport-local)
* [express-session](https://github.com/expressjs/session#express-session)
* [method-override](https://github.com/expressjs/method-override#method-override)
* [moment](https://momentjs.com/)
* [connect-flash](https://github.com/jaredhanson/connect-flash#connect-flash)

### Platforms

* [Heroku](https://www.heroku.com/)
* [Goorm](https://ide.goorm.io/)
## License

#### [MIT](./LICENSE)

# YelpCamp
A Node.js web application project from Colt Steele's Udemy course - The Web Developer Bootcamp

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

- Changed comment post and put routes to redirect back to single campground show page

- Used Google Fonts and Font Awesome instead default fonts

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
* [async](http://caolan.github.io/async/)
* [crypto](https://nodejs.org/api/crypto.html#crypto_crypto)
* [helmet](https://helmetjs.github.io/)
* [passport](http://www.passportjs.org/)
* [passport-local](https://github.com/jaredhanson/passport-local#passport-local)
* [express-session](https://github.com/expressjs/session#express-session)
* [method-override](https://github.com/expressjs/method-override#method-override)
* [nodemailer](https://nodemailer.com/about/)
* [moment](https://momentjs.com/)
* [cloudinary](https://cloudinary.com/)
* [geocoder](https://github.com/wyattdanger/geocoder#geocoder)
* [connect-flash](https://github.com/jaredhanson/connect-flash#connect-flash)

### Platforms

* [Cloudinary](https://cloudinary.com/)
* [Heroku](https://www.heroku.com/)
* [Cloud9](https://aws.amazon.com/cloud9/?origin=c9io)
## License

#### [MIT](./LICENSE)

# Shake It!

## [See the App!](https://shakeit-project.netlify.app)

![App Logo](https://ibb.co/L8pb1WD)

## Description
Shake It! is a web app for creating, editing, and managing cocktails. Users can create their own cocktail recipes, edit and delete them, comment on other users cocktails, and add their favorites to a personal list.

**NOTE -** Describe your project in one/two lines.

#### [Client Repo here](https://github.com/Valveider-X/ShakeIt)
#### [Server Repo here](https://github.com/Valveider-X/ShakeIt-Server)

## Technologies & Libraries used

**NOTE -** 
- HTML
- CSS
- JavaScript
- Express
- React
- Axios
- React Context
- MongoDB
- Mongoose
- MUI
- Leaflet
- Cloudinary
- Carrousel-react-mui

## Backlog Functionalities
- Create your own cocktails
- Edit and Delete your own cocktails
- Comment system for cocktails
- Favorite system for cocktails
- User profiles with favorites

**NOTE -** All cocktail abrs of Madrid in the Map

# Client Structure

## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault 
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to access the homepage so that I see what the app is about and login and signup
- **sign up** - As a user I want to sign up on the webpage so that I can see all the events that I could attend
- **login** - As a user I want to be able to log in on the webpage so that I can get back to my account
- **logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account
- **cocktail list** -  As a user, I want to see all available cocktails to choose which ones to try or favorite
- **cocktail create** - As a user, I want to create a cocktail so that I can share my recipes with others.
- **cocktail edit** - As a user, I want to edit my cocktail recipes to improve or update them.
- **cocktail delete** - As a user, I want to delete my cocktail recipes if I no longer want to share them.
- **comment** - As a user, I want to comment on other users' cocktails to share my thoughts and feedback.
- **favorite** - As a user, I want to add cocktails to my favorites list for easy access.


## Client Routes
## React Router Routes (React App)
<table>
  <tr>
    <th>Path</th>
    <th>Page</th>
    <th>Components</th>
    <th>Permissions</th>
    <th>Behavior</th>
  </tr>
  <tr>
    <td>/</td>
    <td>Home</td>
    <td></td>
    <td>public</td>
    <td>Home page</td>
  </tr>
  <tr>
    <td>/signup</td>
    <td>Signup</td>
    <td></td>
    <td>anon only &lt;IsAnon&gt;</td>
    <td>Signup form, link to login, navigate to homepage after signup</td>
  </tr>
  <tr>
    <td>/login</td>
    <td>Login</td>
    <td></td>
    <td>anon only &lt;IsAnon&gt;</td>
    <td>Login form, link to signup, navigate to homepage after login</td>
  </tr>
  <tr>
    <td>/profile</td>
    <td>Profile</td>
    <td>EditProfile</td>
    <td>user only &lt;IsPrivate&gt;</td>
    <td>User profile page with edit options</td>
  </tr>
  <tr>
    <td>/cocktails</td>
    <td>CocktailList</td>
    <td>CocktailCard</td>
    <td>public</td>
    <td>Shows all available cocktails</td>
  </tr>
  <tr>
    <td>/cocktails/create</td>
    <td>CreateCocktail</td>
    <td></td>
    <td>user only &lt;IsPrivate&gt;</td>
    <td>Form to create a new cocktail</td>
  </tr>
  <tr>
    <td>/cocktails/:id/edit</td>
    <td>EditCocktail</td>
    <td></td>
    <td>user only &lt;IsPrivate&gt;</td>
    <td>Form to edit an existing cocktail</td>
  </tr>
  <tr>
    <td>/cocktails/:id</td>
    <td>CocktailDetail</td>
    <td>CommentSection</td>
    <td>public</td>
    <td>Shows details of a specific cocktail and its comments</td>
  </tr>
  <tr>
    <td>/favorites</td>
    <td>FavoriteList</td>
    <td>CocktailCard</td>
    <td>user only &lt;IsPrivate&gt;</td>
    <td>Shows user's favorite cocktails</td>
  </tr>
</table>

## Other Components

- Navbar

## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.verify()

- Cocktail Service
    - cocktail.list()
    - cocktail.detail(id)
    - cocktail.create(data)
    - cocktail.edit(id, data)
    - cocktail.delete(id)

- Comment Service
    - comment.create(cocktailId, content)
    - comment.list(cocktailId)
  
## Context

- Auth Context

  
## Links

### Collaborators

[Xavi](www.github-url.com)

### Project

[Shake It! Client](https://github.com/Valveider-X/ShakeIt)

[Shake It! Server](https://github.com/Valveider-X/ShakeIt-Server)

[Deploy Link](https://shakeit-project.netlify.app/)



### Slides

[Slides Link](www.your-slides-url-here.com)
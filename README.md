# Information from Contributor

## Summary

This project was created in order to complete the requirements for the phase-4 project for Flatiron school. The basic dependencies for the front-end side and backend api were cloned from the school. The backend was setup through rails in order to setup a database with users, events attended by users and tickets to setup the association between the two. An alias called creator was used to show what users created which events.

On the frontside, react was used for the view. I used the opportunity to learn Redux for global state. This state kept track of the events and which events to show along with what user was logged in. The majority of the styling was done through React Bootstrap to show different components and error messages.

## Directions for App
1. First go to the signup page to create a user. Once created, it will automatically login.
2. Once inside the app, you can create an event, or look at the currently created event.
3. Users can edit the events that they created and can attend their own or any of the other events.
4. Users can switch views between all events, events the user is attending, or the events being hosted.
5. Cookies and sessions are used to automatically log in the user if they haven't logged out.

## Setup
Use `sudo service postgresql start` to start postgresql
Use `rails s` to start server on `http://localhost:3000`
Use `npm start --prefix client` to run the front end on `http://localhost:4000`

## Link to depolyed site
`https://event-app-26zc.onrender.com/`
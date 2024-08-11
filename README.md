# Todo Application Project

This is a todo application using React for the frontend and Node.js with express with backend. Also added SQLite for the data storage. In this app user can add todo item to the todo list and check off or delete item from the todo list.

## Start in production mode

- `npm install`
- `npm start`

In a browser, go to `http://localhost:3000` and add some todos.

## Start in development mode

- `npm install`
- in the current Terminal tab, run `npm run dev` to run Express
- in a new Terminal tab, run `npm run dev:react` to run React

In browser, go to `http://localhost:5173/` and add some todos.

## Application details

### Frontend

I used React for the frontend. It gets and updates data from backend.

### Backend

I used ExpressJS for the backend. It has an api that connects to the database. It also serves the frontend in production mode.

### Database

I used SQLite for the database. It allows for an in-memory data store. That means it will be reset every time the backend is restarted.
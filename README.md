# Todo List with React JS

![Thumbnail](../screenshot-app.png?raw=true)

A Todo-List App built with ReactJS.

### Prerequisites

You need to create a MONGO_URI in order to store your todos in a database (https://www.mongodb.com/)  
Create a config.env file inside `/server/config` and put your Connection String in there

```
MONGO_URI=yourconnectionstring
```

## Installing

- CD into the project directory and run `npm install` in both the client and server folder
- After that run `npm start` in the client and server folders respectively

## Functionality

- Create new Todo Items and assign them a priority
- Todo's automatically get sorted by their pirority (Todo with priority 1 on top, another one with 2 below it and so on)
- Clicking on the Dots-Icon opens up a context-menu with `Edit` `Delete` options
- Clicking on Edit allows the editing of an existing Todo-Item
- Clicking on Delete will delete the chosen Todo-Item

## Built With

- [React JS](https://reactjs.org/)
- [Styled Components](https://www.styled-components.com)
- [MongoDB](https://www.mongodb.com/)

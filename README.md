## TDD

In the following ex you will have to complete web application that serve contact list management, the application should answer the following:

1. Let the user add new contacts, the new contact will be displayed on the table, please note that when there is no text in the input, the ADD CONTACT should be disabled.
2. Let user to delete contact and undo the delete action, means that on each row you will have "Delete" button and above the table you will have Undelete, this will undo the last delete action.
3. Let the user to fetch contacts from API and update the table as soon as there is response, you should mock a server with a response that fits your data structure.
4. Let the user to paginate by adding Next and Previous button below the table.


### Simulation

Find the video - Simulation.webm to understand how the application behave.

### Task

You will need to complete the code to make the tests pass, the application state is managed with redux and for each file there is a test.js, the code is partially completed for each functionality.
1. Start the tests on watch mode
2. Start your application

### Setup:
```
npm install
```

### Start app:
```
npm run start
```

### Unit test:
```
npm run test
```

### e2e/feature test:
```
npm run selenium-setup   // run only once
npm run selenium-start   // app must also be started with npm start
npm run e2e-tests
npm run e2e-tests-watch  // if you want to run e2e in watch mode
```



### Home task – Home task – Node.js Week 2

*Add MongoDB and Mongoose to your BE application*
1. Add schemas for Task, Achievement, Challenge and User 
2. Prepare a separate script that can clear your database and seed it with initial data for Tasks and Achievements from corresponding json files. It should also add one “hard-coded” User
3. Add “/login” endpoint to your API. Follow this guide to implement user authentication with Passport and JWT
4. Make all endpoints implemented in the previous home task secure - they should return data only with valid token. Corresponding validation should be done as well when API receives messages from a client by WebSocket connection
5. Upgrade your endpoints and WS message handlers from the previous home task to read and update real data from the database 

*Note:*
* For task 2 you are free to use mongoose-seed, mongoose-data-seed or any similar package 
* User registration flow is omitted to decrease the scope of the project

 Mark | Evaluation criteria
------------|-------------
0 | Nothing done
1 | Task 1 is fully implemented
2 | Tasks 1-2 are fully implemented
3 | Tasks 1-3 are fully implemented
4 | Tasks 1-4 are fully implemented
5 | Tasks 1-5 are fully implemented

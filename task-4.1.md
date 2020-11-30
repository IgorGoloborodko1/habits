### Home task – Home task – Node.js Week 1

*Add Express to your BE application. Using functions and data from previous home tasks:*
1. Add an endpoint for starting of a new challenge. When a request is received, the new challenge is created, and its id is sent in a response
2. Add endpoints:
* to get a current task 
* to get achievements  
* to get task archive 

*Add Socket.IO to both FE and BE applications. After a connection is established:*
1. The client sends a message that the current task is completed. The server should update the current task status
2. After that the server should launch calculateAchievementsStatus function from the previous home task. When the achievements status is updated, the message with corresponding achievements data should be send back to the client

*In your BE application schedule the following tasks:*
1. Set the current task status to Failure at 12 AM every day during the challenge, if the task was not completed by a user this day
2. Calculate the achievements status and the challenge state at 12 AM of the last day of the challenge

*Note:*
* The database setup is planned for the next home task. No need to add it now
* Use Postman to test your API that are done in scope of tasks 1-2 
* or tasks 3-4 there is no need to add any UI framework yet. Add a simple button to trigger the current task complete on click, then log the received achievements into the console
* For tasks 5-6 you can use node-schedule or any similar package

 Mark | Evaluation criteria
------------|-------------
0 | Nothing done
1 | Task 1 is fully implemented
2 | Tasks 1-2 are fully implemented
3 | Tasks 1-3 are fully implemented
4 | Tasks 1-4 are fully implemented
5 | Tasks 1-6 are fully implemented

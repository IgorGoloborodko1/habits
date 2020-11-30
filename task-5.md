### Home task – JavaScript Frameworks 

*You can pick any of these three frameworks for your FE application: Angular, React, Vue.js. But please do NOT select the same framework that is used on your current project. Try something new!*
1. For your BE application add an endpoint that returns an active challenge data for the user and null if there is no challenge created yet.
2. In your FE application start from Login page implementation. Add integration with BE “/login” endpoint done in previous home tasks. After successful login the active challenge endpoint is called to check if the user has an active challenge.
3. If the user has not had an active challenge yet they should be redirected to New Challenge page with Start button. Start button should call corresponding API that creates a new challenge.
4. After the active challenge data is received (after steps described in task 2 or task 3) the user should be redirected to Active Challenge page with a current task and achievements received from API.
5. Intergate the current task completion with WebSocket API implemented in the previous home tasks. Task completion should lead to the achievement's status update.
6. Add Task archive page that shows all previous tasks and their statuses. Add Back button that returns on Active Challenge page.
7. If the user’s active challenge is finished (for example, after 30 days), the active challenge state will be Success (>=90% of tasks completed) or Failure. In this case the user is redirected to Challenge Result page where they can review tasks and achievements statuses and the challenge result.
8. “Start new 30 days challenge” will create a new challenge and redirect the user to Active Challenge page again 

*Note:*
* Use CLI or any popular boilerplate for the framework of your choice to simplify development
* Styling is not important. You can use any component library that integrates with your framework or just use default browser elements. “Looks ugly but works” principle is applicable
* You are free to use mock data if the API is not implemented in previous home tasks 

 Mark | Evaluation criteria
------------|-------------
0 | Nothing done
1 | Tasks 1-2 are fully implemented
2 | Tasks 1-3 are fully implemented
3 | Tasks 1-4 are fully implemented
4 | Tasks 1-6 are fully implemented
5 | Tasks 1-8 are fully implemented

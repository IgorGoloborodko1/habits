### Home task – TypeScript

*For both BE and FE applications:*
* Add tsconfig.json
* Add any popular ESLint config for TypeScript, but override at least 5 different rules of your own choice

*In BE application:*
* Define interfaces for main instances that will be used in the future app:

 Name | Properties | Comments
------------|----------------------------------------------|------------------------------------------------------------- 
Task        | **id**;<br/> **description** | Task describes a single action that should be done by the user. For example: “Go for a 10 minutes run” or “Go to bed before 11:00 PM”
Achievement | **id**;<br/> **description**;<br/> **image**;<br/> **checkComplete** (a method that can return an achievement status by tasks status)| Achievement describes a set of several tasks accomplished in the specific way. For example: “Complete each task 7 days in a row” or “Complete 5 tasks before 8:00 AM”
Status      | **state** (Pending, Success, Failure); **updated** | Status describes a state of  some item (a task or an achievement) and a timestamp, when this state was updated 
Challenge   | **id**;<br/> **state** (can be: In Progress, Success, Failure);<br/> **startDate** (timestamp when the challenge was created);<br/> **tasksOrder** (ordered set of tasks for the challenge);<br/> **tasksStatus** (describes current status for all tasks in the challenge);<br/> **achievementsStatus** (describes current status for all achievements in the challenge) | Challenge describes a 30-days period, during which randomly chosen 30 tasks and 5 achievements are assigned for the user. Starting from the first day, the user will receive a new task every day, which should be completed before the midnight, overwise it will be marked as failed. Achievements status is calculated based on tasks completion. After 30 days the challenge could be successful (>= 90% tasks completed) or failed (<90% tasks completed)

* Using the interfaces from the previous task add additional ones for:

 Name | Properties | Comments
------------|-------------------------|------------------------------------------------------------- 
ArchiveItem | **id**;<br/> **description**;<br/> **status** | ArchiveItem describes a task and its status for all past tasks in the challenge
ActualTask  | **id**;<br/> **description**;<br/> **status** | ActualTask provides information about a task and its current status in scope of the challenge
ActualAchievement   | **id**;<br/> **description**;<br/> **image**;<br/> **status** | ActualAchievement provides information about an achievement and its current status in scope of the challenge

* Define types for some of the future functions:

Name | Description |
------------|-------------------------
getCurrentTask  | Returns a current task with its status by the challenge id
getAchievements | Returns a list of actual achievements by the challenge id
getTaskArchive | Returns all past tasks with their results by the challenge id 
startNewChallenge | Returns a new challenge using the following parameters: a list of tasks, a list of challenges, challenge duration that by default should be 30 days, number of achievements – by default, challenge duration / 6 
calculateAchievementsStatus | Returns achievements status for the challenge by its achievements list and tasks status 

* Add a documentation generator support and needed comments to all your files. The corresponding script should be added to your package.json


 Mark | Evaluation criteria
------------|-------------
0 | Nothing done
1 | Tasks 1-2 are fully implemented
2 | Tasks 1-3 are fully implemented
3 | Tasks 1-4 are fully implemented
4 | Tasks 1-5 are fully implemented
5 | Tasks 1-6 are fully implemented

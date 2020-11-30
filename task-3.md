 ### Home task – Test Driven Development

*In BE application*
1. Add json files with Tasks and Achievements following to Task and Achievement interfaces from the previous home task. You can use the list below or you can make up
your own tasks and achievements (for example, related to sport or English learning, etc.).
2. Using TDD write tests and implementations for the following functions:
 
Name | Description | Return interface
------------|-------------------------|------------------------------------------------------------- 
1). getCurrentTask | Returns a current task with its status by the challenge id. Should find a required challenge from all challenges and pick a task for today using the challenge startDate and tasksOrder for calculation. For example, if today is a ten’s day of the challenge the corresponding task should be returned. | ActualTask
2). getAchievements | Returns a list of actual achievements by the challenge id. Should find a required challenge from all challenges and return data for its achievements with their statuses. | ActualAchievement[] 
3). getTaskArchive | Returns all past tasks with their results by the challenge id. Should find a required challenge from all challenges and return a list of previous tasks with their statuses. | ArchiveItem[]
4). startNewChallenge | Returns a new challenge using the following parameters: a list of tasks, a list of challenges, challenge duration that by default should be 30 days, number of achievements – by default, challenge duration / 6. The challenge start date should be set for today’s date, state – In Progress, tasksOrder - randomly picked and shuffled. Depending on number of achievements, they should be randomly picked from a list of all achievements but “Complete half of the tasks” and “Complete all tasks” should always be present. | Challenge
5). calculateAchievementsStatus | Returns achievements status for the challenge by its achievements list and tasks status. | Map<Achievement id, Status>
 
Note: for this task you can write the functions in a way that all required data is received as parameters. For example, getCurrentTask/getAchievements/getTaskArchive
would receive a challenge id and a list of all challenges as parameters as well as a complete list of tasks or achievements if needed.
 
 Mark | Evaluation criteria
------------|-------------
0 | Nothing done
1 | Task 1 are fully implemented
2 | Tasks 1, 2.1 are fully implemented and covered with tests 
3 | Tasks 1, 2.1-2.3 are fully implemented and covered with tests 
4 | Tasks 1, 2.1-2.4 are fully implemented and covered with tests 
5 | Tasks 1, 2.1-2.5 are fully implemented and covered with tests 

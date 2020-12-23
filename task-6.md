### Home task – Modern Browser APIs

1. Add vibration when the user completes current task
2. Change the greeting text depending on the user’s device. For example: "Hello my
Apple/Android/Windows friend"
3. When the device is offline, at the top of the screen show a notification with a corresponding message. Update the message when it becomes online and hide the notification after a few seconds
4. Add manifest.json and register Service worker for offline support. Try your PWA on your device
5. You will need to host your FE app using HTTPS. Heroku is a free and quite simple tool for this task
* Sign up for free
* Create new app
* In the Deploy tab select Deployment method - Heroku Git and follow the instructions
* Install serve or any similar package to your project dependencies for serving your FE application on Heroku
* Add corresponding script to your "scripts" section: "serve": "serve -s build"
* Add Procfile to your project root with the following line: web: npm run serve
* Commit and push your changes to Heroku
* After automatic build and deploy you will be open to open the application

 Mark | Evaluation criteria
------------|-------------
0 | Nothing done
1 | Task 1 is fully implemented
2 | Tasks 1-2 are fully implemented
3 | Tasks 1-3 are fully implemented
4 | Tasks 1-4 are fully implemented
5 | Tasks 1-5 are fully implemented

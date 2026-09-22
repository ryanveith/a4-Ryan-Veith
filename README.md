`Assignment 4 - Components
===

Due: September 30th, by 11:59 AM.

For this assignment you will re-implement the client side portion of *either* A2 or A3 using either React or Svelte components. If you choose A3 you only need to use components for the data display / updating; you can leave your login UI as is.

[Svelte Tutorial](https://github.com/cs-4241-2024/cs-4241-2024.github.io/blob/main/using.svelte.md)  
[React Tutorial](https://github.com/cs-4241-2024/cs-4241-2024.github.io/blob/main/using.react.md)  

This project can be implemented on any hosting service (Glitch, DigitalOcean, Heroku etc.), however, you must include all files in your GitHub repo so that the course staff can view them.

Deliverables
---

Do the following to complete this assignment:

1. Implement your project with the above requirements.
3. Test your project to make sure that when someone goes to your main page on Glitch/Heroku/etc., it displays correctly.
4. Ensure that your project has the proper naming scheme `a4-firstname-lastname` so we can find it.
5. Fork this repository and modify the README to the specifications below. Be sure to add *all* project files.
6. Create and submit a Pull Request to the original repo. Name the pull request using the following template: `a4-firstname-lastname`.

Sample Readme (delete the above when you're ready to submit, and modify the below so with your links and descriptions)
---

## Scoredisplay (verison 2)

your hosting link: https://a4-ryan-veith.onrender.com/

Include a very brief summary of your project here and what you changed / added to assignment #3. Briefly (3–4 sentences) answer the following question: did the new technology improve or hinder the development experience?

Project is still generally the same. It allows you to type in games and highscores and keeps track of them for you. You may log in/out, create an account, change your nickname, password, and profile picutre as well. The biggest chnage on how things worded was being able to varous constsants there were made up of html over to seperate componsents. Nice since it looks a lot better and was really what I wanted to be able to do in assignment 3, annoying since I had to refator them a bit to do this. There was a few other changes, but all only for transitioning code over to work with vite-express so I did not loose any funcitonality.


I would say the new techonlogy improved the development experince. It was so easy to create the project with vite-express. I am also a big fan of being able to put js in with the html so it was nice to have jsx be the default agian. One thing that was somewhat annoying was adding all the '\' self closing tags, I had not done that for input so I had to go and fix that when moving it over.

To run the server naviagate to the Assignment-4-Components-Vite-Express-Project folder
npm install
npm run dev


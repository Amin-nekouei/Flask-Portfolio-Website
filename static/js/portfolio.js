/* 
File name: portfolio.js
Author: Amin Nekouei-041139676
Course: CST8285_S24
Assignment: assignment1
Date: 9-8-2024
Professor: Prof Alem Legesse.
purpose:portfolio website
*/
// This array stores information about  projects
const projects = [
    {
        "title": "Telegram Stock Alert Bot",
        "description": "Developed a Telegram bot to deliver real-time stock alerts and news updates, utilizing Twelve Data and News API for data retrieval. Implemented asynchronous programming for efficient message handling and HTTP requests for data fetching.",
        "date": "2024",
        "technologies": "requests, python-telegram-bot",
        "image":"/static/stock.png",
        "alt":"a telegram bot"
    },
    {
        "title": "Password Manager",
        "description": "Developed a secure password manager using Python with the tkinter GUI library. Utilized object-oriented design and encryption techniques to ensure user data protection. The application generates strong passwords and securely stores login credentials for multiple websites or applications.",
        "date": "2024",
        "technologies": "Python, tkinter",
        "image": "/static/pass.png",
        "alt":"a windows pass manager"
    
    },
    {
        "title": "Quiz Application",
        "description": "Utilized object-oriented programming principles to develop a quiz application using Python and tkinter for the GUI. Integrated the Open Trivia Database API to dynamically fetch questions and answers.",
        "date": "2024",
        "technologies": "Python, tkinter, Open Trivia Database API",
        "image": "/static/quiz.png",
        "alt":"a quiz app"
    },
    {
        "title": "Snake Game with Python Turtle Graphics",
        "description": "Classic Snake game implemented using Python's turtle graphics library with object-oriented programming. Features Snake Class for movement, growth, and collision detection, Scoreboard Class for displaying the player's score, Food Class for generating and placing food items, and Court Class for representing the game background.",
        "date": "2024",
        "technologies": "Python, turtle graphics",
        "image": "/static/snake.png",
        "alt":"snake game app"
    },
    {
        "title": "Pomodoro Timer",
        "description":
            "Developed a Pomodoro Timer application using Python with the tkinter GUI library. Integrated sound notifications and countdown mechanism for work intervals and breaks.",
        "date": "2024",
        "technologies": "Python, tkinter",
        "image": "/static/pomo.png",
        "alt":"Pomodoro Timer app"
    }

]

let index = 0

// Function to update project details on the webpage
function updateProject() {
    document.getElementById("prheaders").innerHTML = projects[index].title;
    document.getElementById("prtech").innerHTML = projects[index].technologies;
    document.getElementById("prdate").innerHTML = projects[index].date;
    document.getElementById("prdescrip").innerHTML = projects[index].description;
    document.getElementById("primg").innerHTML =`<img id = "imgpr" class="card-img-top rounded" src="${projects[index].image}" alt="${projects[index].alt}">`

}

// Function to increment index and update project details
function incrIndex() {
    if (index < projects.length - 1) {
        index++;
        updateProject();
    }
    else{
        index=0;
    }
}

// Function to decrement index and update project details
function decrIndex() {
    if (index > 0) {
        index--;
        updateProject();
    }
    else{
        index=projects.length-1
    }
}

// Event listener to update project details when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", updateProject);
document.getElementById("next").addEventListener("click", incrIndex);

// Event listener to update project details when the DOM is fully loaded
document.getElementById("pri").addEventListener("click", decrIndex);

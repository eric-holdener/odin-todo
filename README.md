# odin-todo

This project was to create a functioning todo appusing local storage and JS. 
Full project details can be found here: https://www.theodinproject.com/lessons/javascript-todo-list

I started with planning local storage utilization, and implementing it. Seeing as how the entire app hinged around reading and writing JSON files to local storage, I needed to figure out my data nesting and retrieval first.

One unconventional approach I took was to use dictionaries to store lists and todos instead of arrays. I did this because I wanted to have a numerical ID assigned to each comment and list, which would allow me to target that specific object in the local storage JSON file. Using an array would have required rewriting ID's with every change, making a dictionary a logical choice for my application.

I also structured my DOM and functions to be as agnostic as possible, meaning alot of functionality works for both lists and todos.

I left a lot open ended for future expansion, namely adding comments on todos, todo checklists, and styling the page. I'm mostly hyperfocused on learning and prigressing, so I wanted to continue the course as fast as possible. I will revisit this, add functionality, and refactor my code more in the future.
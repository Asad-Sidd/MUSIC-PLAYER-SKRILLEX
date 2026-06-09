Custom Web Music Player 🎵

A sleek, custom-styled web music player built from scratch using HTML, CSS, and Vanilla JavaScript. 
This project replaces the browser's default, clunky audio controls with a customized, modern user interface.

✨ Features
* **Custom UI:** A polished, modern card design with a gradient background and customized shadow effects.
* **Dynamic Controls:** A play/pause button that dynamically updates its icon based on the audio's current state.
* **Live Progress Tracking:** A slider that automatically tracks and displays the song's current progress.
* **Interactive Timeline:** Users can click or drag the progress bar to instantly skip to different parts of the song.

🛠️ Technologies Used
* **HTML5:** For structuring the player and integrating the hidden `<audio>` element.
* **CSS3:** For styling, including flexbox centering, gradients, custom slider thumbs (`::-webkit-slider-thumb`), and responsive layouts.
* **Vanilla JavaScript:** For DOM manipulation and syncing the visual UI with the audio data.
* **Font Awesome:** For the scalable vector icons used in the navigation and playback controls.

🧠 How It Works
Think of the built-in HTML `<audio>` tag as the engine of a car. Normally, the browser 
gives you a standard set of keys and pedals (the default controls) to run it. In this 
project, we hide that default setup and build a completely custom dashboard. 

The JavaScript acts as the mechanical linkage between our new dashboard and the engine. 
When you hit the custom Play button, the JavaScript turns the ignition (`song.play()`). 
As the engine runs, a `setInterval` loop acts like a speedometer cable, constantly checking 
the engine's status (`song.currentTime`) and updating our custom progress bar dial on the 
dashboard so they stay perfectly in sync.

🚀 Getting Started
To run this project locally, simply clone the repository and open the `index.html` file in any modern web browser. No local server or build process is required!

1. Clone the repo: `git clone https://github.com/your-username/your-repo-name.git`
2. Open `index.html` in your browser.
3. Hit play and enjoy the music!

👤 Author
Asad-Sidd
* GitHub: https://github.com/Asad-Sidd
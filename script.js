const pacman = document.getElementById("pacman");
const ghost1 = document.getElementById("ghost1");
const ghost2 = document.getElementById("ghost2");

// Move Pac-Man
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        movePacman(40, 0);
    } else if (e.key === "ArrowLeft") {
        movePacman(-40, 0);
    } else if (e.key === "ArrowUp") {
        movePacman(0, -40);
    } else if (e.key === "ArrowDown") {
        movePacman(0, 40);
    }
});

function movePacman(dx, dy) {
    const pacmanRect = pacman.getBoundingClientRect();
    const newX = pacmanRect.left + dx;
    const newY = pacmanRect.top + dy;

    // Check if Pac-Man hits the game container boundaries
    if (newX >= 0 && newX + pacmanRect.width <= 600 && newY >= 0 && newY + pacmanRect.height <= 400) {
        pacman.style.left = newX + "px";
        pacman.style.top = newY + "px";
    }
}

// Ghosts' movement (Random movement, not chasing Pac-Man)
setInterval(moveGhost, 1000);

function moveGhost() {
    const ghostRect1 = ghost1.getBoundingClientRect();
    const ghostRect2 = ghost2.getBoundingClientRect();
    moveRandomly(ghost1, ghostRect1);
    moveRandomly(ghost2, ghostRect2);
}

function moveRandomly(ghost, rect) {
    const dx = Math.random() * 40 - 20;
    const dy = Math.random() * 40 - 20;
    const newX = rect.left + dx;
    const newY = rect.top + dy;

    // Check if ghost hits the game container boundaries
    if (newX >= 0 && newX + rect.width <= 600 && newY >= 0 && newY + rect.height <= 400) {
        ghost.style.left = newX + "px";
        ghost.style.top = newY + "px";
    }
}

// #### 1 - Go from nothing to everything visible ####
// title
TweenLite.from("#title", {x: -100, duration: 1, alpha: 0});

// divider
TweenLite.from("#divider", {duration: 1, alpha: 0});

// rectangles
TweenLite.from(".rectangle", {duration: 1, alpha: 0});


// #### 2,3 - Selecting the rectangles, adding the event listeners
let rectangles = document.getElementsByClassName("rectangle");
for(rect of rectangles){
    // adding the mouseover effect
    rect.addEventListener("mouseover", (event) => {
        resetAnimation(event.target);
        event.target.classList.remove("deselected");
        event.target.classList.add("selected");
    })

    // mouse leave
    rect.addEventListener("mouseleave", (event) => {
        resetAnimation(event.target);
        event.target.classList.remove("selected");
        event.target.classList.add("deselected");
    })

    // mouse click
    rect.addEventListener("click", (event) => {
        resetAnimation(event.target);
        TweenLite.to(event.target, {rotation: 90, alpha:0, duration: 0.1});

    })
}

// resetting the animation
function resetAnimation(el) {
    el.classList.remove("selected");
    el.classList.remove("deselected");
    el.style.animiaton = 'none';
    el.offsetHeight;
    el.style.animiaton = null;
}
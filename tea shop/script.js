const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 80)
});  //აძლევს ჰედერს კლასს სთიქის, მაშინ როდესაც გვერდს ვსქროლავთ. ამგვარად შეგვეძლება ჩამოსქროლვისას ჰედერს მივანიჭოთ სხვა სტილი

let menu = document.querySelector("#menu-icon");
let navList = document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navList.classList.toggle("open");
};

window.onscroll = () => {
    menu.classList.remove("bx-x");
    navList.classList.remove("open");
};

const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    reset: true
})

sr.reveal (".home-text",{delay:300});
sr.reveal (".home-img",{delay:200});

sr.reveal (".about-img",{});
sr.reveal (".about-text",{delay:300});

sr.reveal (".middle-text",{});
sr.reveal (".row-btn,",{delay:300});

sr.reveal (".shop-content, .contact",{delay:500});

sr.reveal (".box:nth-child(1)",{delay:500});
sr.reveal (".box:nth-child(2)",{delay:600});
sr.reveal (".box:nth-child(3)",{delay:700});

sr.reveal (".container-box:nth-child(1)",{delay:400});
sr.reveal (".container-box:nth-child(2)",{delay:500});
sr.reveal (".container-box:nth-child(3)",{delay:600});

sr.reveal (".row:nth-child(1)",{delay:400});
sr.reveal (".row:nth-child(2)",{delay:500});
sr.reveal (".row:nth-child(3)",{delay:600});
sr.reveal (".row:nth-child(4)",{delay:700});
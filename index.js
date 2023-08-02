//scroll to top
let goTop = document.getElementById('goTop');
let stats = document.getElementById('stats');
let num = document.querySelectorAll('.box .number');
let started = false;
let skills = document.getElementById('our-skills');
let progSpan = document.querySelectorAll('.the-progress span');

window.onscroll = function () {
    //scroll to top
    if (window.scrollY >= 6664) {
        goTop.style.display = 'block';
    } else {
        goTop.style.display = 'none';
    }

    //counter
    if (window.scrollY >= stats.offsetTop - 200) {
        if (!started) {
            num.forEach((number) => startCount(number));
        }
        started = true;
    }

    //progress width (our skills)
    if (window.scrollY >= skills.offsetTop) {
        progSpan.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
};

goTop.onclick = () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
};

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}
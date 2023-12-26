function scrollToElement(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector);
    if (elements.length > instance) {
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}
const btn = document.getElementById("btn1");
const btn1 = document.getElementById("btn2");
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

btn.addEventListener('click', () => {
    alert("эскертуу! сайт толугу менен буто элек ")
});

btn1.addEventListener('click', () => {
    alert("кайра эскертуу! сайт толугу менен буто элек ")
});



link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});

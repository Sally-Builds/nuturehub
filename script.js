const primaryNav = document.querySelector('.primary-nav');
console.log(primaryNav)
const navToggle = document.querySelector('.mobile__nav--toggle');
console.log(navToggle)

navToggle.addEventListener('click', (e) => {
    e.preventDefault();

    const visibility = primaryNav.getAttribute('data-visible');
    console.log(visibility);

    if(visibility === 'false') {
        primaryNav.setAttribute('data-visible', 'true');
        navToggle.setAttribute('aria-expanded', 'true');
    } else {
        primaryNav.setAttribute('data-visible', 'false');
        navToggle.setAttribute('aria-expanded', 'false');
    }
})

document.addEventListener("DOMContentLoaded", function(event) { 
    let links = document.querySelectorAll('.link-container');

    Array.from(links).forEach(link => {
        link.addEventListener('click', function(event) {
            let href = link.querySelector('a').getAttribute("href");
            console.log(href);
            window.open(href, '_blank');
        });
    });
});
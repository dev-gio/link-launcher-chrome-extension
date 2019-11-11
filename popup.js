function linkEvent() {
    let links = document.querySelectorAll('.link-container');

    Array.from(links).forEach(link => {
        link.addEventListener('click', function(event) {
            let href = link.querySelector('span').getAttribute("data-url");
            console.log(href);
            window.open(href, '_blank');
        });
    });
}

function loadLinks() {
    fetch('sites.json')
        .then((res) => res.json())
        .then((data) => {
            let output = '';
            data.forEach(function (link) {
                output += `
                    <div class="link-container">
                        <span data-url="${link.url}">${link.title}</span>
                    </div>
                `;
            });

            document.querySelector('.popup-body').innerHTML = output;
            linkEvent();
        });
}

document.addEventListener("DOMContentLoaded", function(event) { 
    loadLinks();
});

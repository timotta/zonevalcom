/* Basic mobile navigation toggle */
const navToggle = document.querySelector('.mobile-nav-toggle');
const nav = document.querySelector('.nav');

if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
        // Simple toggle: Add/remove a class to the nav to show/hide it.
        // CSS would need to handle the actual display logic based on this class.
        nav.classList.toggle('nav-visible');
        // You might want to change the toggle icon (e.g., hamburger to X)
        if (nav.classList.contains('nav-visible')) {
            navToggle.setAttribute('aria-expanded', 'true');
            navToggle.innerHTML = '✕'; // Change to 'X' icon
        } else {
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.innerHTML = '☰'; // Change back to hamburger
        }
    });
}

var TEMPLATE = "curl https://pmicep.timotta.com/zipcodes/$ZIPCODE/stats\n" +
    "    --header 'x-api-key: rsp-key-...'\n" +
    "    --header 'x-api-secret: rsp-secret-...'\n";

function executeExample() {
    var cep = document.querySelector("#cep_input").value;

    document.querySelector("#request_text").innerHTML = TEMPLATE.replace("$ZIPCODE", cep);
    document.querySelector("#response_text").innerHTML = "Carregando..."

    fetch('https://pmicep.timotta.com/zipcodes/' + cep + '/stats', {
        method: 'GET',
        headers: {
            'x-api-key': 'rsp-key-f104e7f027a911f085d92b946cc40296',
            'x-api-secret': 'rsp-secret-f8b6889627a911f08acb9f00a62cb4b4'
        }
    }).then(response => response.json())
        .then(data => {
            document.querySelector("#response_text").innerHTML = JSON.stringify(data, null, 4);
        })
        .catch(error => {
            document.querySelector("#response_text").innerHTML = error;
        });

    return false;
}

// Add styles in style.css for .nav-visible if implementing the toggle fully

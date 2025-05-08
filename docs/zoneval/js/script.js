/* Basic mobile navigation toggle */
const navToggle = document.querySelector('.mobile-nav-toggle');
const nav = document.querySelector('.nav');

const navLinks = document.querySelectorAll('.nav a');

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

    if (navLinks) {
        navLinks.forEach((link) => {
            link.addEventListener('click', () => {
                nav.classList.remove('nav-visible');
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.innerHTML = '☰';
            });
        });
    }
}

function scrollToElementWithOffset(selector, offset = 88) {
    const element = document.querySelector(selector);
    if (element) {
        const topPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: topPosition - offset,
            behavior: 'smooth'
        });
    } else {
        console.warn('Elemento não encontrado:', selector);
    }
}


var TEMPLATE = "curl https://api.zoneval.timotta.com/zipcodes/$ZIPCODE/stats \\ \n" +
    "    --header 'x-api-key: rsp-key-...' \\ \n" +
    "    --header 'x-api-secret: rsp-secret-...'\n";

function executeExample() {
    var cep = document.querySelector("#cep_input").value;

    scrollToElementWithOffset('.block-response');

    document.querySelector("#request_text").innerHTML = TEMPLATE.replace("$ZIPCODE", cep);
    document.querySelector("#response_text").innerHTML = "Carregando..."

    fetch('https://api.zoneval.timotta.com/zipcodes/' + cep + '/stats', {
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

function newExample() {
    scrollToElementWithOffset('#example-form');
    return false;
}


function contactSubmit() {
    var callback = function () {
        console.log("CALLBACK");
        document.querySelector("#contactform").submit();
    };
    try {
        gtag('event', 'conversion', {
            'send_to': 'AW-1023585344/6nGwCJGvuMQaEMDYiugD',
            'value': 0.5,
            'currency': 'BRL',
            'event_callback': callback
        });
    } catch (e) {
        console.log("ERROR", e);
        callback()
    }
    return false;
}

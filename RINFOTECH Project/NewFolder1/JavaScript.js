document.addEventListener("DOMContentLoaded", function () {
    const imageElement = document.getElementById("sliderImage");
    const imageSources = [
        "stock.jpg","graphic design.jpg","human resources.jpg","QNB.jpg","cib.png","hsbc.jpg"
        // Add more image paths as needed
    ];
    const slideInterval = 3000; // Change image every 3 seconds
    let currentIndex = 0;

    function changeImage() {
        // Increment the current index, looping back to 0 if necessary
        currentIndex = (currentIndex + 1) % imageSources.length;

        // Fade out current image
        imageElement.style.transition = 'opacity 0.5s ease-in-out';
        imageElement.style.opacity = 0;

        // Wait for fade-out transition, then change image
        setTimeout(() => {
            // Update image source
            imageElement.src = imageSources[currentIndex];

            // Fade in the new image
            imageElement.style.opacity = 1;
        }, 3000); // Wait for the fade-out transition to complete
    }

    // Set an interval to automatically change slides
    setInterval(changeImage, slideInterval);
});

document.getElementById('active').addEventListener('mousedown', underline);

function underline() {
    const activeElement = document.getElementById('active');
    activeElement.style.textDecoration = "underline";
}


function login() {
    document.getElementById('login').innerHTML = "";
}

function translate() {
    document.getElementById('trans').innerHTML = ""; 
}

function signup() {
    document.getElementById('sign').innerHTML = "";
}

function suggest() {
    const suggestionForm = document.getElementById('demo');
    suggestionForm.innerHTML = "";
    suggestionForm.innerHTML = "<input id='suggest' type='text' placeholder='what do you want to achieve from your website?'/> </br><label>Your name:</label><input id='name' type='text' /><input type='button' value='submit' onclick='submit()' />";
}

function Search() {
    const searchForm = document.getElementById('demo');
    searchForm.innerHTML = "";
    searchForm.innerHTML = "<input type='text' id='searchBox' placeholder='Search Websites or Banks'><input type='button' value='search' onclick='SEARCH()' />";

}

function vect(){
    document.getElementById('vect').innerHTML = "";

}

function pixel() {
    document.getElementById('pixel').innerHTML = "";

}

function graphawy() {
    document.getElementById('graphawy').innerHTML = "";

}

function master() {
    document.getElementById('master').innerHTML = "";

}

function fighter() {
    document.getElementById('fighter').innerHTML = "";

}

function website() {
    document.getElementById('sites').innerHTML = "";
}

function banks() {
    document.getElementById('bank').innerHTML = "";
}
function home() {
    document.getElementById('home').innerHTML = ""
}

function about() {
    document.getElementById('about').innerHTML = ""; 
}

function submit() {
    const suggestion = document.getElementById('suggest').value;
    const name = document.getElementById('name').value;
    console.log("Suggestion:", suggestion);
    console.log("Name:", name);
    alert('Your suggestion has been submitted!');
}

function SEARCH() {
    const searching = document.getElementById('searchBox').value;
    console.log("Search for:", searching);
}

function send() {
    var x = document.getElementById('full').value
    console.log(x)
    var y = document.getElementById('email').value
    console.log(y)
    var a = document.getElementById('num').value
    console.log(a)
    var b = document.getElementById('message').value
    console.log(b)
    alert('Thanks for contacting us! We will respond to your message as soon as possible.')
}

function signed() {
    const firstName = document.getElementById('first').value;
    const lastName = document.getElementById('last').value;
    const phone = document.getElementById('num').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;
    console.log("First Name: ", firstName);
    console.log("Last Name:", lastName);
    console.log("Phone:", phone);
    console.log("Email:", email);
    console.log("Password:", password);
    alert('Your account has been created successfully!');
    window.location.href = "Login.html";
    
}

function logged() {
    const enteredEmail = document.getElementById('email').value;
    const enteredPassword = document.getElementById('pass').value;
    console.log("Entered Email:", enteredEmail);
    console.log("Entered Password:", enteredPassword);
    window.location.href = "Home.html";

}

    function contact() {
        document.getElementById('contactus').innerHTML = "";
}

const searchBox = document.getElementById('searchBox');
const stock = ['Stock Marketing', 'Stock', 'stock', 'stock ', 'stock market', 'Stock Market'];
const efg = ['EFG Hermes', 'EFG', 'efg', 'efg her', 'efg hermes'];

function searchFunction() {
    const searchTerm = searchBox.value.toLowerCase();
    const links = document.querySelectorAll(newFunction());

    links.forEach(link => {
        const linkText = link.textContent.toLowerCase();
        if (websites.includes(linkText) && linkText.includes(searchTerm)) {
            link.innerHTML = linkText.replace(searchTerm, `<span class="highlight">${searchTerm}</span>`);
        } else if (banks.includes(linkText) && linkText.includes(searchTerm)) {
            link.innerHTML = linkText.replace(searchTerm, `<span class="highlight">${searchTerm}</span>`);
        } else {
            link.innerHTML = linkText;
        }
    });

    function newFunction() {
        return 'a';
    }
}

searchBox.addEventListener('keyup', searchFunction);

    

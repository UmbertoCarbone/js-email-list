
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

// lista email
const emailListEl = document.getElementById('emailList');

// button
const generateButtonEl = document.getElementById('generateBtn');


function generateEmails() {
    emailListEl.innerHTML = '';

    const emails = [];

    for (let i = 0; i < 10; i++) {
        fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                /*  corr*/
                const liEl = document.createElement("li")
                emailListEl.append(data.response)
                ulEl.appendChild(emailListEl)
                /*  */
            }).catch(error => {
                console.error(error);
            });
    }
}

// collego l'evento al bottone
generateButtonEl.addEventListener("click", generateEmails);
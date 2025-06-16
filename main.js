const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';



//lista email
const emailListEl = document.getElementById('emailList');

//button
const generateButtonEl = document.getElementById('generate-button');

//ciclo for per generare 10 email in console
for (let i = 0; i < 10; i++) {

    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        }).catch(error => {
            console.error(error)
        })

}





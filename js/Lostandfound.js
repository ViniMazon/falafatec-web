const formulari = document.querySelector("form");
const image = document.getElementById("picture");

function post(){

  const data = new URLSearchParams();
for (const pair of new FormData(formulari)) {
    data.append(pair[0], pair[1]);
}
fetch("https://lostandfound-images.herokuapp.com/images/db/upload", {
    method: 'post',
    body: data,
})
.catch(function(err) {
  console.info(err);
});
/*
function post(){

  fetch("https://lostandfound-images.herokuapp.com/images/db/upload",{

        headers: {
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        method: "POST", redirect: 'manual',
        body: JSON.stringify({})
    })
    .then(response => {if(response.ok){location.replace("home.html");} else{alert("Cadastro Inválido!")}})
    .catch(function(err) {
        console.info(err);
    });
};
*/
};

formulari.addEventListener('submit', function(event){
  event.preventDefault();

  post();
});



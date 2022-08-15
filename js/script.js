let dataPadrao;
let data;

if(!data) {
    fetch('./data.json').then(response=>{
        return response.json()
    }).then(body=>{
        dataPadrao = body.data
        data = { ...dataPadrao };
        const listaLivros = data.books;
        const listaGenero = data.books.map((books) => books.genre);
        const aistaAutor = data.books.map((books) => books.author);
        const listaSinopse = data.books.map((books) => books.synopsis);
        const listaDataDeEntrada = data.books.map((books) => books.systemEntryDate);

        localStorage.setItem('json', JSON.stringify(data))
        console.log('ok')
    })
}

function logon() {
    let user = document.getElementById('login-email').value
    let pwd = document.getElementById('login-senha').value
    
    const usuarioLogado = localStorage.setItem("usuarioAtual", user);
    localStorage.getItem("user").value = usuarioLogado;
  
    for (var i = 0; i < 3; i++) {
        if (user == data.login[i].user && pwd == data.login[i].pwd) {
            entrarHome();
            alert(localStorage.getItem("usuarioAtual"));
        }
        else if (user != data.login[i].user || pwd != data.login[i].pwd) {
            alert("Dados errados!");
        }
    }
}  

function entrarHome(){
    window.location.href = "home.html"
}

function openWindow(url) {   
    window.location.assign(url)
    window.location.href(url)
}



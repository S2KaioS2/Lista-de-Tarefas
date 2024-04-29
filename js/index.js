let contador = 0
let input = document.getElementById('tarefa');
let btnadd = document.getElementById('btn-add');
let main = document.getElementById('arealista')

function addTarefa(){
    let valorInput = input.value;
    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)){
        ++contador;
        let novoItem = `<div id="${contador}" class="item">
        <div class="item-icon">
            <i id="icone_${contador}" onclick="marcarTarefa(${contador})" class="bi bi-circle"></i>
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}
        </div>
        <div class="item-btn">
            <button onclick="deletar(${contador})" id="delete"><i class="bi bi-trash"></i>Deletar</button>
        </div>
    </div>`;

    main.innerHTML += novoItem

    input.value = "";
    input.focus();
    }
}

function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    if(classe == "item"){
        item.classList.add('clicado')

        var icone = document.getElementById('icone_' + id)
        icone.classList.remove('bi-circle');
        icone.classList.add('bi-check-circle');

        item.parentNode.appendChild(item);
    }


    else{
        item.classList.remove('clicado')

        var icone = document.getElementById('icone_' + id)
        icone.classList.add('bi-circle');
        icone.classList.remove('bi-check-circle');
    }
}


input.addEventListener("keyup", function(event){
        if(event.keyCode === 13){
            event.preventDefault();
            btnadd.click();
        }
})
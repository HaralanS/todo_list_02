const tarefas = [];


function adicionarTarefa(id, desc) {


  let possui = tarefas.filter((el) => {
    return el.id === id;
  });

  if (possui.length === 0) {
    tarefas.push({ id, desc });
  }
  else {
    prompt("Esse ID ja existe")
  }
}


function verificarTarefa(id) {

  const found = tarefas.find((element) => element.id === id);
  return found;

}

function apagarTarefa(id) {
  tarefas.map((el, i) => {
    if (el.id === id) {
      tarefas.splice(i, 1)
    }
  })
}


function imprimirLista() {
  let listagem = "";

  for (const cont of tarefas) {
    listagem += ` ID: ${cont.id}  Descricao: ${cont.desc} <br>`;

  }
  document.querySelector(".paragrafo-lista").innerHTML = listagem;
}



function botaoAdicionar() {
  const seuId = parseInt(prompt("Adicione o ID da tarefa: "))
  const descricao = prompt("Descricao da tarefa: ")

  if (isNaN(seuId)) {
    alert("O ID precisa ser um numero")
    return
  }

  adicionarTarefa(seuId, descricao)
}

function botaoEditar() {
  const seuId = parseInt(prompt("Informe o ID da tarefa que deseja editar: "));
  const novaDesc = prompt("Altere a descricao da tarefa: ")
  let tarefaSelecionada = verificarTarefa(seuId);
  return tarefaSelecionada.desc = novaDesc;
}

function botaoApagar() {
  const seuId = parseInt(prompt("Informe o ID da tarefa que deseja apagar: "));
  apagarTarefa(seuId);
}

function botaoPesquisar() {
  const seuId = parseInt(prompt("Informe o ID da tarefa que deseja editar: "));
  let tarefaSelecionada = verificarTarefa(seuId);
  alert(`ID: ${tarefaSelecionada.id} e Decricao: ${tarefaSelecionada.desc}`)
}



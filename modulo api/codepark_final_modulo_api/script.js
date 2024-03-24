const nomeProduto = document.getElementById('nome-produto');
const precoProduto = document.getElementById('preco-produto');
const descricaoProduto = document.getElementById('descricao-produto');
const btnCadastrarProduto = document.getElementById('btn-cadastrar-produto');
const helperCadastro = document.querySelector('.helper-cadastro');
const produtosCadastrados = document.querySelector('.produtos-cadastrados')


function cadastrarProduto(){

  helperCadastro.innerText = 'Carregando...';

  if(nomeProduto.value === ''){
    helperCadastro.innerText = 'Informe o nome do produto';
    return;

  } else if (precoProduto.value === '') {
    helperCadastro.innerText = 'Informe o preço do produto';
    return;
  } else if (descricaoProduto.value === '') {
    helperCadastro.innerText = 'Informe a descrição do produto';
    return;
  }

  const produtoJson = JSON.stringify({
    nomeProduto: nomeProduto.value,
    precoProduto: precoProduto.value,
    descricaoProduto: descricaoProduto.value
  });

  fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: produtoJson
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      
      const cardProduto = document.createElement('article');
      cardProduto.classList.add('card-produto');
      cardProduto.innerHTML = `
        <div>
          <h1>${nomeProduto.value}</h1>
          <p>R$${precoProduto.value}</p>
        </div>
        <aside>
          <p>${descricaoProduto.value}</p>
        </aside>
      `;
      produtosCadastrados.prepend(cardProduto);
      nomeProduto.value = '',
      precoProduto.value = '',
      descricaoProduto.value = ''
      document.querySelector('.produtos-cadastrados')
        .style = "display: flex; padding: 5px";
      
      helperCadastro.innerText = '';
      alert('Produto cadastrado com sucesso!')
    })
    .catch(err => {
      helperCadastro.innerText = 'Não foi possível efetuar o cadastro';
      console.log(err);
    });

}

btnCadastrarProduto.addEventListener('click', (event) => {
  event.preventDefault();
  cadastrarProduto();
})
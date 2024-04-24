const userForm = document.getElementById('planta-form')
const userList = document.getElementById('planta-list')

document.addEventListener('DOMContentLoaded', function () {
   
    const plantas = document.querySelectorAll('.planta');

    
    plantas.forEach(planta => {
        //pega elementos dentro de cada planta
        const imagemPlanta = planta.querySelector('.imagem-planta');
        const btnEditar = planta.querySelector('.btn-editar');
        const btnDeletar = planta.querySelector('.btn-deletar');

        //exibir informações da planta (get)
        imagemPlanta.addEventListener('click', function () {
            exibirInformacoesPlanta(planta);
        });

        //editar informações da planta (set)
        btnEditar.addEventListener('click', function () {
            //ter informações para edição (get)
            const especie = planta.querySelector('h2').textContent;
            const familia = planta.querySelector('p:nth-of-type(2)').textContent;
            const descricao = planta.querySelector('p:nth-of-type(3)').textContent;
            
            // Solicitar novas informações (set)
            const novaEspecie = prompt('Nova Espécie:', especie);
            const novaFamilia = prompt('Nova Família:', familia);
            const novaDescricao = prompt('Nova Descrição:', descricao);
            
            // Definir novas informações (set)
            planta.querySelector('h2').textContent = novaEspecie;
            planta.querySelector('p:nth-of-type(2)').textContent = novaFamilia;
            planta.querySelector('p:nth-of-type(3)').textContent = novaDescricao;
        });

        //deletar uma planta (pool)
        btnDeletar.addEventListener('click', function () {
            planta.remove();
        });
    });

    // exibir informações da planta (get)
    function exibirInformacoesPlanta(planta) {
        const especie = planta.querySelector('h2').textContent;
        const familia = planta.querySelector('p:nth-of-type(2)').textContent;
        const descricao = planta.querySelector('p:nth-of-type(3)').textContent;

        alert(`Espécie: ${especie}\nFamília: ${familia}\nDescrição: ${descricao}`);
    }
});

//adicionar uma nova planta
document.addEventListener('DOMContentLoaded', function () {
    const formAdicionar = document.getElementById('form-adicionar');
    const plantasContainer = document.querySelector('.plantas');

    
    formAdicionar.addEventListener('submit', function (event) {
        event.preventDefault(); 
        //ter entradas do formulário (get)
        const nome = document.getElementById('nome-planta').value;
        const especie = document.getElementById('especie-planta').value;
        const familia = document.getElementById('familia-planta').value;
        const urlImagem = document.getElementById('url-imagem').value;
        const descricao = document.getElementById('descricao-planta').value;

        adicionarPlanta(nome, especie, familia, urlImagem, descricao);
        formAdicionar.reset();
    });

    //adicionar uma planta (set)
    function adicionarPlanta(nome, especie, familia, urlImagem, descricao) {
        const novaPlanta = document.createElement('div');
        novaPlanta.classList.add('planta');
        novaPlanta.innerHTML = `
            <!-- Definir novas informações (set) -->
            <p>Espécie: ${especie}</p>
            <p>Família: ${familia}</p>
            <p>Descrição: ${descricao}</p>
            <h2>${nome}</h2>
            <img class="imagem-planta" src="${urlImagem}" alt="${nome}"> <!-- Usando a URL da imagem -->
            <div class="botoes">
                <button class="btn-editar">Editar</button>
                <button class="btn-deletar">Deletar</button>
            </div>
        `;
        plantasContainer.appendChild(novaPlanta);

        //ter botao na nova planta (get)
        const btnEditar = novaPlanta.querySelector('.btn-editar');
        const btnDeletar = novaPlanta.querySelector('.btn-deletar');

        //editar uma planta (set)
        btnEditar.addEventListener('click', function () {
            editarPlanta(novaPlanta);
        });

        //deletar uma planta (pool)
        btnDeletar.addEventListener('click', function () {
            novaPlanta.remove();
        });

        // exibir informações da planta (get)
        novaPlanta.addEventListener('click', function () {
            exibirInformacoesPlanta(novaPlanta);
        });
    }

    // Função para editar uma planta (set)
    function editarPlanta(planta) {
        const especie = planta.querySelector('h2').textContent;
        const familia = planta.querySelector('p:nth-of-type(2)').textContent;
        const descricao = planta.querySelector('p:nth-of-type(3)').textContent;
        const novaEspecie = prompt('Nova Espécie:', especie);
        const novaFamilia = prompt('Nova Família:', familia);
        const novaDescricao = prompt('Nova Descrição:', descricao);
        
        // Definir novas informações (set)
        planta.querySelector('h2').textContent = novaEspecie;
        planta.querySelector('p:nth-of-type(2)').textContent = novaFamilia;
        planta.querySelector('p:nth-of-type(3)').textContent = novaDescricao;
    }

    // exibir informações da planta (get)
    function exibirInformacoesPlanta(planta) {
        const especie = planta.querySelector('h2').textContent;
        const familia = planta.querySelector('p:nth-of-type(2)').textContent;
        const descricao = planta.querySelector('p:nth-of-type(3)').textContent;

        alert(`Espécie: ${especie}\nFamília: ${familia}\nDescrição: ${descricao}`);
    }
});

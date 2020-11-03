function validacao() {
  const input = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  const typeText = document.querySelector('[type=text]');
  const typeTel = document.querySelector('[type=tel]');
  const typeEmail = document.querySelector('[type=email]');
  const erroNome = document.querySelector('#erroNome');
  const erroTel = document.querySelector('#erroTel');
  const erroEmail = document.querySelector('#erroEmail');
  const erroMensagem = document.querySelector('#erroMensagem');
  
  function infoCurta() {

    input.forEach((item) => {  
      const elementoPai = item.parentNode;
      const mensagemErro = elementoPai.querySelector('span')

      if (item.value.length < 3) {
        item.classList.add('erro');
        mensagemErro.innerHTML = '❌ O campo possui poucos caracteres!'
      } else {
        item.classList.remove('erro');
        mensagemErro.innerHTML = '✔️ Campo preenchido com sucesso!';
      }
    })

    if (textArea.value == "") {
      textArea.classList.add('erro');
      erroMensagem.innerHTML = '❌ O campo mensagem possui poucos caracteres!';
    } else {
      textArea.classList.remove('erro');
      erroMensagem.innerHTML = '✔️ Campo preenchido com sucesso!';
    }
  }

  function validaNome() {
    if (typeText.value && !isNaN(typeText.value)) {
      typeText.classList.add('erro');
      erroNome.innerHTML = '❌ Campo nome não aceita números!';
    } else if (typeText.value.length > 3) {
      typeText.classList.remove('erro');
      erroMensagem.innerHTML = '✔️ Campo preenchido com sucesso!';
    }
  }

  function validaTel() {
    if (typeTel.value && (isNaN(typeTel.value) || typeTel.value.length < 8)) {
      typeTel.classList.add('erro');
      erroTel.innerHTML = '❌ Digite um telefone válido!';
    } else if (typeTel.value.length > 3) {
      typeTel.classList.remove('erro');
      erroMensagem.innerHTML = '✔️ Campo preenchido com sucesso!';
    }
  }

  function validaEmail() {
    if (!typeEmail.value.includes("@") || !typeEmail.value.includes('.com')) {
      typeEmail.classList.add('erro');
      erroEmail.innerHTML = '❌ Digite um e-mail válido!';
    } else if (typeEmail.value.length > 3) {
      typeEmail.classList.remove('erro');
      erroEmail.innerHTML = '✔️ Campo preenchido com sucesso!';
    }
  }

  function sucesso() {
    let contador = 0
    document.querySelectorAll('span').forEach(item => {
      if (item.innerHTML == '✔️ Campo preenchido com sucesso!') {
       contador ++
      }
    })
    if (contador == 4) {
      document.querySelector('.sucesso').classList.toggle('ativo')
    }
  }

  infoCurta();
  validaNome();
  validaTel();
  validaEmail();
  sucesso();
}
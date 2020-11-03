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
        item.style.border = '5px solid red';
        item.style.backgroundColor = '#FFC0B5';
        mensagemErro.innerHTML = 'O campo possui poucos caracteres!'
      } else {
        item.style.border = 'none';
        item.style.backgroundColor = '#FFFFFF';
        mensagemErro.innerHTML = null;
      }
    })

    if (textArea.value == "") {
      textArea.style.border = '5px solid red';
      textArea.style.backgroundColor = '#FFC0B5';
      erroMensagem.innerHTML = 'O campo mensagem possui poucos caracteres!';
    } else {
      textArea.style.border = 'none';
      textArea.style.backgroundColor = '#FFFFFF';
      erroMensagem.innerHTML = null;
    }
  }

  function validaNome() {
    if (typeText.value && !isNaN(typeText.value)) {
      typeText.style.border = '5px solid red';
      typeText.style.backgroundColor = '#FFC0B5';
      erroNome.innerHTML = 'Campo nome não aceita números!';
    } else if (typeText.value.length > 3) {
      typeText.style.border = 'none';
      typeText.style.backgroundColor = '#FFFFFF';
      erroNome.innerHTML = null;
    }
  }

  function validaTel() {
    if (typeTel.value && (isNaN(typeTel.value) || typeTel.value.length < 8)) {
      typeTel.style.border = '5px solid red';
      typeTel.style.backgroundColor = '#FFC0B5';
      erroTel.innerHTML = 'Digite um telefone válido!';
    } else if (typeTel.value.length > 3) {
      typeTel.style.border = 'none';
      typeTel.style.backgroundColor = '#FFFFFF';
      erroTel.innerHTML = null;
    }
  }

  function validaEmail() {
    if (!typeEmail.value.includes("@") || !typeEmail.value.endsWith('.com')) {
      typeEmail.style.border = '5px solid red';
      typeEmail.style.backgroundColor = '#FFC0B5';
      erroEmail.innerHTML = 'Digite um e-mail válido!';
    } else if (typeEmail.value.length > 3) {
      typeEmail.style.border = 'none';
      typeEmail.style.backgroundColor = '#FFFFFF';
      erroEmail.innerHTML = null;
    }
  }

  infoCurta();
  validaNome();
  validaTel();
  validaEmail();
}
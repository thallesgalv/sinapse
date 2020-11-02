function validacao() {
  
  function infoCurta() {
    document.querySelectorAll('input').forEach((item) => {
      if (item.value.length < 3) {
        alert("Campo têm poucos caracteres!")
        item.style.border = '5px solid red';
        item.style.backgroundColor = '#FFC0B5';
      }
    })

    if (document.querySelector('textarea').value == "") {
      alert("Campo de mensagem têm poucos caracteres!")
      item.style.border = '5px solid red';
      item.style.backgroundColor = '#FFC0B5';
    }
  }

  function validaNome() {
    if (!isNaN(document.querySelector('[type=text]').value)) {
      alert("Campo nome não aceita números")
      document.querySelector('[type=text]').style.border = '5px solid red';
      document.querySelector('[type=text]').style.backgroundColor = '#FFC0B5';
    }
  }

  function validaTel() {
    if (isNaN(document.querySelector('[type=tel]').value) || document.querySelector('[type=tel]').value.length < 8) {
      alert("Digite um telefone válido")
      document.querySelector('[type=tel]').style.border = '5px solid red';
      document.querySelector('[type=tel]').style.backgroundColor = '#FFC0B5';
    }
  }

  function validaEmail() {
    if (!document.querySelector('[type=email]').value.includes("@") || !document.querySelector('[type=email]').value.endsWith('.com')) {
      alert("Digite um e-mail válido")
      document.querySelector('[type=email]').style.border = '5px solid red';
      document.querySelector('[type=email]').style.backgroundColor = '#FFC0B5';
    }
  }
  
  infoCurta();
  validaNome();
  validaTel();
  validaEmail();
}
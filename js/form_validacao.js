function validacao() {
  
  function campoBranco() {
    document.querySelectorAll('input').forEach((item) => {
      if (item.value == "") {
        alert(item.name + " está vazio!")
      }
    })

    if (document.querySelector('textarea').value == "") {
      alert("Campo de mensagem vazio!")
    }
  }

  function validaNome() {
    if (document.querySelector('[type=text]').value.length < 3) {
      alert('Nome muito curto!')
    }
  }

  function validaTel() {
    if (isNaN(document.querySelector('[type=tel]').value)) {
      alert("Campo telefone só aceita números")
    }
  }

  function validaEmail() {
    if (!document.querySelector('[type=email]').value.includes("@")) {
      alert("Digite um e-mail válido")
    }
  }

  
  validaNome();
  campoBranco();
  validaTel();
  validaEmail();
}

document.querySelector('[type=submit]').addEventListener('click', validacao)
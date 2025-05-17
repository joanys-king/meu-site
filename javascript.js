// Espera o HTML carregar totalmente
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  if (!form) return;

  const passwordFields = form.querySelectorAll('input[type="password"]');

  // Ativar "mostrar senha" em todos os campos com checkbox ao lado
  form.querySelectorAll('input[type="checkbox"]').forEach(function (checkbox) {
    checkbox.addEventListener('click', function () {
      const targetInputId = checkbox.getAttribute('data-target');
      const senhaInput = document.getElementById(targetInputId);
      if (senhaInput) {
        senhaInput.type = senhaInput.type === 'password' ? 'text' : 'password';
      }
    });
  });

  // Verifica qual formulário está carregado
  if (form.id === 'formCadastro') {
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // impede envio até validar

      const nome = form.username.value.trim();
      const telefone = form.telefone.value.trim();
      const senha = form.password.value.trim();
      const email = form.email.value.trim();

      let erros = [];

      if (nome === '') {
        erros.push('Nome é obrigatório.');
      }

      if (telefone === '' || telefone.length < 6) {
        erros.push('Número do WhatsApp inválido.');
      }

      if (senha.length < 6) {
        erros.push('A palavra-passe deve ter pelo menos 6 caracteres.');
      }

      if (!email.includes('@') || !email.includes('.')) {
        erros.push('Email inválido.');
      }

      if (erros.length > 0) {
        alert(erros.join('\n'));
      } else {
        // Aqui você pode adicionar um salvamento no localStorage, se quiser
        // Exemplo: localStorage.setItem('usuario', JSON.stringify({nome, telefone, email}));
        alert("Cadastro concluído com sucesso!");
        form.submit();
      }
    });
  }

  else if (form.id === 'formLogin') {
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // impede envio até validar

      const usuario = form.username.value.trim();
      const senha = form.password.value.trim();

      if (usuario === '' || senha === '') {
        alert("Preencha todos os campos.");
      } else {
        // Aqui poderia haver uma verificação com dados do localStorage, se quiser
        // Exemplo: comparar com localStorage.getItem('usuario')
        form.submit(); // Login válido
      }
    });
  }
  
  
  
  
  
window.onscroll = function() {
  document.getElementById("topBtn").style.display = 
    (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? "block" : "none";
};
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

});



<form id="formCadastro">
  <input type="text" id="username" name="username" placeholder="Seu nome completo" required><br>
  <input type="text" id="telefone" name="telefone" placeholder="Número do WhatsApp" required><br>
  <input type="email" id="email" name="email" placeholder="Email" required><br>
  <input type="password" id="password" name="password" placeholder="Palavra-passe" required><br>
  <input type="checkbox" data-target="password"> Mostrar palavra-passe<br><br>
  <button type="submit">Cadastrar</button>
</form>

<form id="formLogin" action="dashboard.html" method="GET">
  <input type="text" id="username" name="username" placeholder="Nome de usuário" required><br>
  <input type="password" id="password" name="password" placeholder="Palavra-passe" required><br>
  <input type="checkbox" data-target="password"> Mostrar palavra-passe<br><br>
  <button type="submit">Entrar</button>
</form>
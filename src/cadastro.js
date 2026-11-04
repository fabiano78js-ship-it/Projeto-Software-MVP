$codigo = @'
const TAMANHO_MAXIMO_NOME = 60;
const PADRAO_NOME = /^[A-Za-zÀ-ÿ\s'-]+$/;

function validarNome(nomeUsuario) {
  if (typeof nomeUsuario !== "string") {
    return "O nome deve ser um texto.";
  }
  const nome = nomeUsuario.trim();
  if (nome.length === 0) {
    return "O nome é obrigatório.";
  }
  if (nome.length > TAMANHO_MAXIMO_NOME) {
    return "O nome excede o tamanho máximo permitido.";
  }
  if (!PADRAO_NOME.test(nome)) {
    return "O nome contém caracteres inválidos.";
  }
  return null;
}

function cadastrarUsuario(listaUsuarios, nomeUsuario) {
  const erro = validarNome(nomeUsuario);
  if (erro) {
    return { sucesso: false, erro };
  }
  listaUsuarios.push(nomeUsuario.trim());
  return { sucesso: true, total: listaUsuarios.length };
}

module.exports = { validarNome, cadastrarUsuario };
'@
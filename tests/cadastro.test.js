const { validarNome, cadastrarUsuario } = require("../src/cadastro");

describe("validarNome (testes unitários)", () => {
  test("aceita nome válido", () => {
    expect(validarNome("Fabiano Santos")).toBeNull();
  });

  test("rejeita valor que não é texto", () => {
    expect(validarNome(123)).toBe("O nome deve ser um texto.");
  });

  test("rejeita nome vazio ou só com espaços", () => {
    expect(validarNome("   ")).toBe("O nome é obrigatório.");
  });

  test("rejeita nome acima do tamanho máximo", () => {
    expect(validarNome("a".repeat(61))).toBe("O nome excede o tamanho máximo permitido.");
  });

  test("rejeita caracteres especiais", () => {
    expect(validarNome("<script>")).toBe("O nome contém caracteres inválidos.");
  });
});

describe("cadastrarUsuario (testes de integração)", () => {
  test("valida e registra um nome válido na lista", () => {
    const lista = [];
    const resultado = cadastrarUsuario(lista, "  Maria Silva ");
    expect(resultado).toEqual({ sucesso: true, total: 1 });
    expect(lista).toEqual(["Maria Silva"]);
  });

  test("bloqueia nome inválido e não altera a lista", () => {
    const lista = ["Maria Silva"];
    const resultado = cadastrarUsuario(lista, "<b>x</b>");
    expect(resultado.sucesso).toBe(false);
    expect(lista).toHaveLength(1);
  });
});
export const contatoData = {
  hero: {
    title: "Entre em Contato",
    subtitle: "Estamos aqui para ajudar! Entre em contato conosco para discutir seu projeto.",
  },

  infoItems: [
    {
      icon: "📍",
      title: "Endereço",
      content:
        "Av. Paulista, 1000<br />Bela Vista - São Paulo, SP<br />CEP: 01310-100",
    },
    {
      icon: "📞",
      title: "Telefone",
      content: "(11) 9999-8888<br />(11) 8888-7777",
    },
    {
      icon: "✉️",
      title: "Email",
      content: "contato@novacodigo.com.br<br />projetos@novacodigo.com.br",
    },
    {
      icon: "🕒",
      title: "Horário de Funcionamento",
      content: "Segunda a Sexta: 9h às 18h<br />Sábado: 9h às 13h",
    },
  ],

  formFields: [
    {
      type: "text",
      name: "nome",
      label: "Nome Completo *",
      required: true,
      placeholder: "Digite seu nome completo",
    },
    {
      type: "row",
      children: [
        {
          type: "email",
          name: "email",
          label: "Email *",
          required: true,
          placeholder: "seu@email.com",
        },
        {
          type: "tel",
          name: "telefone",
          label: "Telefone",
          required: false,
          placeholder: "(11) 99999-9999",
        },
      ],
    },
    {
      type: "select",
      name: "assunto",
      label: "Assunto *",
      required: true,
      options: [
        { value: "", label: "Selecione um assunto" },
        { value: "orcamento", label: "Orçamento" },
        { value: "duvida", label: "Dúvida" },
        { value: "sugestao", label: "Sugestão" },
        { value: "reclamacao", label: "Reclamação" },
        { value: "outro", label: "Outro" },
      ],
    },
    {
      type: "textarea",
      name: "mensagem",
      label: "Mensagem *",
      required: true,
      placeholder: "Digite sua mensagem aqui...",
    },
  ],

  mapData: {
    title: "📍 São Paulo, SP",
    description: "Nossa sede está localizada no coração de São Paulo, próximo ao metrô e com fácil acesso.",
    additionalInfo: "Estacionamento disponível para clientes.",
  },
};

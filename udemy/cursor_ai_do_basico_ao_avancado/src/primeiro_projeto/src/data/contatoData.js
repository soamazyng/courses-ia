export const contatoData = {
  hero: {
    title: "Entre em Contato",
    subtitle: "Estamos aqui para ajudar! Entre em contato conosco.",
  },

  infoItems: [
    {
      icon: "📍",
      title: "Endereço",
      content:
        "Rua das Flores, 123<br />Centro - São Paulo, SP<br />CEP: 01234-567",
    },
    {
      icon: "📞",
      title: "Telefone",
      content: "(11) 9999-9999<br />(11) 8888-8888",
    },
    {
      icon: "✉️",
      title: "Email",
      content: "contato@empresa.com<br />suporte@empresa.com",
    },
    {
      icon: "🕒",
      title: "Horário de Funcionamento",
      content: "Segunda a Sexta: 8h às 18h<br />Sábado: 9h às 14h",
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
    description: "Estamos localizados no centro da cidade, próximo ao metrô.",
    additionalInfo: "Fácil acesso por transporte público.",
  },
};

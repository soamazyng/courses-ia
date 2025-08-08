// @ts-nocheck
function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
export const contatoData = stryMutAct_9fa48("97") ? {} : (stryCov_9fa48("97"), {
  hero: stryMutAct_9fa48("98") ? {} : (stryCov_9fa48("98"), {
    title: stryMutAct_9fa48("99") ? "" : (stryCov_9fa48("99"), "Entre em Contato"),
    subtitle: stryMutAct_9fa48("100") ? "" : (stryCov_9fa48("100"), "Estamos aqui para ajudar! Entre em contato conosco para discutir seu projeto.")
  }),
  infoItems: stryMutAct_9fa48("101") ? [] : (stryCov_9fa48("101"), [stryMutAct_9fa48("102") ? {} : (stryCov_9fa48("102"), {
    icon: stryMutAct_9fa48("103") ? "" : (stryCov_9fa48("103"), "📍"),
    title: stryMutAct_9fa48("104") ? "" : (stryCov_9fa48("104"), "Endereço"),
    content: stryMutAct_9fa48("105") ? "" : (stryCov_9fa48("105"), "Av. Paulista, 1000<br />Bela Vista - São Paulo, SP<br />CEP: 01310-100")
  }), stryMutAct_9fa48("106") ? {} : (stryCov_9fa48("106"), {
    icon: stryMutAct_9fa48("107") ? "" : (stryCov_9fa48("107"), "📞"),
    title: stryMutAct_9fa48("108") ? "" : (stryCov_9fa48("108"), "Telefone"),
    content: stryMutAct_9fa48("109") ? "" : (stryCov_9fa48("109"), "(11) 9999-8888<br />(11) 8888-7777")
  }), stryMutAct_9fa48("110") ? {} : (stryCov_9fa48("110"), {
    icon: stryMutAct_9fa48("111") ? "" : (stryCov_9fa48("111"), "✉️"),
    title: stryMutAct_9fa48("112") ? "" : (stryCov_9fa48("112"), "Email"),
    content: stryMutAct_9fa48("113") ? "" : (stryCov_9fa48("113"), "contato@novacodigo.com.br<br />projetos@novacodigo.com.br")
  }), stryMutAct_9fa48("114") ? {} : (stryCov_9fa48("114"), {
    icon: stryMutAct_9fa48("115") ? "" : (stryCov_9fa48("115"), "🕒"),
    title: stryMutAct_9fa48("116") ? "" : (stryCov_9fa48("116"), "Horário de Funcionamento"),
    content: stryMutAct_9fa48("117") ? "" : (stryCov_9fa48("117"), "Segunda a Sexta: 9h às 18h<br />Sábado: 9h às 13h")
  })]),
  formFields: stryMutAct_9fa48("118") ? [] : (stryCov_9fa48("118"), [stryMutAct_9fa48("119") ? {} : (stryCov_9fa48("119"), {
    type: stryMutAct_9fa48("120") ? "" : (stryCov_9fa48("120"), "text"),
    name: stryMutAct_9fa48("121") ? "" : (stryCov_9fa48("121"), "nome"),
    label: stryMutAct_9fa48("122") ? "" : (stryCov_9fa48("122"), "Nome Completo *"),
    required: stryMutAct_9fa48("123") ? false : (stryCov_9fa48("123"), true),
    placeholder: stryMutAct_9fa48("124") ? "" : (stryCov_9fa48("124"), "Digite seu nome completo")
  }), stryMutAct_9fa48("125") ? {} : (stryCov_9fa48("125"), {
    type: stryMutAct_9fa48("126") ? "" : (stryCov_9fa48("126"), "row"),
    children: stryMutAct_9fa48("127") ? [] : (stryCov_9fa48("127"), [stryMutAct_9fa48("128") ? {} : (stryCov_9fa48("128"), {
      type: stryMutAct_9fa48("129") ? "" : (stryCov_9fa48("129"), "email"),
      name: stryMutAct_9fa48("130") ? "" : (stryCov_9fa48("130"), "email"),
      label: stryMutAct_9fa48("131") ? "" : (stryCov_9fa48("131"), "Email *"),
      required: stryMutAct_9fa48("132") ? false : (stryCov_9fa48("132"), true),
      placeholder: stryMutAct_9fa48("133") ? "" : (stryCov_9fa48("133"), "seu@email.com")
    }), stryMutAct_9fa48("134") ? {} : (stryCov_9fa48("134"), {
      type: stryMutAct_9fa48("135") ? "" : (stryCov_9fa48("135"), "tel"),
      name: stryMutAct_9fa48("136") ? "" : (stryCov_9fa48("136"), "telefone"),
      label: stryMutAct_9fa48("137") ? "" : (stryCov_9fa48("137"), "Telefone"),
      required: stryMutAct_9fa48("138") ? true : (stryCov_9fa48("138"), false),
      placeholder: stryMutAct_9fa48("139") ? "" : (stryCov_9fa48("139"), "(11) 99999-9999")
    })])
  }), stryMutAct_9fa48("140") ? {} : (stryCov_9fa48("140"), {
    type: stryMutAct_9fa48("141") ? "" : (stryCov_9fa48("141"), "select"),
    name: stryMutAct_9fa48("142") ? "" : (stryCov_9fa48("142"), "assunto"),
    label: stryMutAct_9fa48("143") ? "" : (stryCov_9fa48("143"), "Assunto *"),
    required: stryMutAct_9fa48("144") ? false : (stryCov_9fa48("144"), true),
    options: stryMutAct_9fa48("145") ? [] : (stryCov_9fa48("145"), [stryMutAct_9fa48("146") ? {} : (stryCov_9fa48("146"), {
      value: stryMutAct_9fa48("147") ? "Stryker was here!" : (stryCov_9fa48("147"), ""),
      label: stryMutAct_9fa48("148") ? "" : (stryCov_9fa48("148"), "Selecione um assunto")
    }), stryMutAct_9fa48("149") ? {} : (stryCov_9fa48("149"), {
      value: stryMutAct_9fa48("150") ? "" : (stryCov_9fa48("150"), "orcamento"),
      label: stryMutAct_9fa48("151") ? "" : (stryCov_9fa48("151"), "Orçamento")
    }), stryMutAct_9fa48("152") ? {} : (stryCov_9fa48("152"), {
      value: stryMutAct_9fa48("153") ? "" : (stryCov_9fa48("153"), "duvida"),
      label: stryMutAct_9fa48("154") ? "" : (stryCov_9fa48("154"), "Dúvida")
    }), stryMutAct_9fa48("155") ? {} : (stryCov_9fa48("155"), {
      value: stryMutAct_9fa48("156") ? "" : (stryCov_9fa48("156"), "sugestao"),
      label: stryMutAct_9fa48("157") ? "" : (stryCov_9fa48("157"), "Sugestão")
    }), stryMutAct_9fa48("158") ? {} : (stryCov_9fa48("158"), {
      value: stryMutAct_9fa48("159") ? "" : (stryCov_9fa48("159"), "reclamacao"),
      label: stryMutAct_9fa48("160") ? "" : (stryCov_9fa48("160"), "Reclamação")
    }), stryMutAct_9fa48("161") ? {} : (stryCov_9fa48("161"), {
      value: stryMutAct_9fa48("162") ? "" : (stryCov_9fa48("162"), "outro"),
      label: stryMutAct_9fa48("163") ? "" : (stryCov_9fa48("163"), "Outro")
    })])
  }), stryMutAct_9fa48("164") ? {} : (stryCov_9fa48("164"), {
    type: stryMutAct_9fa48("165") ? "" : (stryCov_9fa48("165"), "textarea"),
    name: stryMutAct_9fa48("166") ? "" : (stryCov_9fa48("166"), "mensagem"),
    label: stryMutAct_9fa48("167") ? "" : (stryCov_9fa48("167"), "Mensagem *"),
    required: stryMutAct_9fa48("168") ? false : (stryCov_9fa48("168"), true),
    placeholder: stryMutAct_9fa48("169") ? "" : (stryCov_9fa48("169"), "Digite sua mensagem aqui...")
  })]),
  mapData: stryMutAct_9fa48("170") ? {} : (stryCov_9fa48("170"), {
    title: stryMutAct_9fa48("171") ? "" : (stryCov_9fa48("171"), "📍 São Paulo, SP"),
    description: stryMutAct_9fa48("172") ? "" : (stryCov_9fa48("172"), "Nossa sede está localizada no coração de São Paulo, próximo ao metrô e com fácil acesso."),
    additionalInfo: stryMutAct_9fa48("173") ? "" : (stryCov_9fa48("173"), "Estacionamento disponível para clientes.")
  })
});
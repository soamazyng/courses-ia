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
export const sobreData = stryMutAct_9fa48("204") ? {} : (stryCov_9fa48("204"), {
  hero: stryMutAct_9fa48("205") ? {} : (stryCov_9fa48("205"), {
    title: stryMutAct_9fa48("206") ? "" : (stryCov_9fa48("206"), "Sobre a Nova Código"),
    subtitle: stryMutAct_9fa48("207") ? "" : (stryCov_9fa48("207"), "Empresa especializada em desenvolvimento de software e soluções digitais inovadoras")
  }),
  missao: stryMutAct_9fa48("208") ? {} : (stryCov_9fa48("208"), {
    title: stryMutAct_9fa48("209") ? "" : (stryCov_9fa48("209"), "Nossa Missão"),
    description: stryMutAct_9fa48("210") ? "" : (stryCov_9fa48("210"), "Desenvolver soluções tecnológicas que transformam negócios, criando experiências digitais excepcionais e impulsionando a inovação em nossos clientes através de código limpo e tecnologias modernas.")
  }),
  visao: stryMutAct_9fa48("211") ? {} : (stryCov_9fa48("211"), {
    title: stryMutAct_9fa48("212") ? "" : (stryCov_9fa48("212"), "Nossa Visão"),
    description: stryMutAct_9fa48("213") ? "" : (stryCov_9fa48("213"), "Ser referência em desenvolvimento de software no Brasil, reconhecida pela qualidade técnica, inovação e pela capacidade de entregar soluções que realmente fazem a diferença no mercado.")
  }),
  valores: stryMutAct_9fa48("214") ? [] : (stryCov_9fa48("214"), [stryMutAct_9fa48("215") ? {} : (stryCov_9fa48("215"), {
    icon: stryMutAct_9fa48("216") ? "" : (stryCov_9fa48("216"), "💻"),
    title: stryMutAct_9fa48("217") ? "" : (stryCov_9fa48("217"), "Excelência Técnica"),
    description: stryMutAct_9fa48("218") ? "" : (stryCov_9fa48("218"), "Código limpo, arquitetura robusta e melhores práticas em todos os projetos")
  }), stryMutAct_9fa48("219") ? {} : (stryCov_9fa48("219"), {
    icon: stryMutAct_9fa48("220") ? "" : (stryCov_9fa48("220"), "🚀"),
    title: stryMutAct_9fa48("221") ? "" : (stryCov_9fa48("221"), "Inovação"),
    description: stryMutAct_9fa48("222") ? "" : (stryCov_9fa48("222"), "Sempre explorando novas tecnologias e metodologias de desenvolvimento")
  }), stryMutAct_9fa48("223") ? {} : (stryCov_9fa48("223"), {
    icon: stryMutAct_9fa48("224") ? "" : (stryCov_9fa48("224"), "🤝"),
    title: stryMutAct_9fa48("225") ? "" : (stryCov_9fa48("225"), "Colaboração"),
    description: stryMutAct_9fa48("226") ? "" : (stryCov_9fa48("226"), "Trabalho em equipe e parceria com nossos clientes para resultados excepcionais")
  }), stryMutAct_9fa48("227") ? {} : (stryCov_9fa48("227"), {
    icon: stryMutAct_9fa48("228") ? "" : (stryCov_9fa48("228"), "📈"),
    title: stryMutAct_9fa48("229") ? "" : (stryCov_9fa48("229"), "Resultados"),
    description: stryMutAct_9fa48("230") ? "" : (stryCov_9fa48("230"), "Foco em entregar valor real e impacto positivo nos negócios")
  }), stryMutAct_9fa48("231") ? {} : (stryCov_9fa48("231"), {
    icon: stryMutAct_9fa48("232") ? "" : (stryCov_9fa48("232"), "🎯"),
    title: stryMutAct_9fa48("233") ? "" : (stryCov_9fa48("233"), "Qualidade"),
    description: stryMutAct_9fa48("234") ? "" : (stryCov_9fa48("234"), "Compromisso com a qualidade em cada linha de código e funcionalidade")
  }), stryMutAct_9fa48("235") ? {} : (stryCov_9fa48("235"), {
    icon: stryMutAct_9fa48("236") ? "" : (stryCov_9fa48("236"), "🌱"),
    title: stryMutAct_9fa48("237") ? "" : (stryCov_9fa48("237"), "Crescimento"),
    description: stryMutAct_9fa48("238") ? "" : (stryCov_9fa48("238"), "Investimento contínuo no desenvolvimento da nossa equipe")
  })]),
  servicos: stryMutAct_9fa48("239") ? [] : (stryCov_9fa48("239"), [stryMutAct_9fa48("240") ? {} : (stryCov_9fa48("240"), {
    title: stryMutAct_9fa48("241") ? "" : (stryCov_9fa48("241"), "Desenvolvimento Web"),
    description: stryMutAct_9fa48("242") ? "" : (stryCov_9fa48("242"), "Sites responsivos, aplicações web modernas e sistemas complexos"),
    tecnologias: stryMutAct_9fa48("243") ? [] : (stryCov_9fa48("243"), [stryMutAct_9fa48("244") ? "" : (stryCov_9fa48("244"), "React"), stryMutAct_9fa48("245") ? "" : (stryCov_9fa48("245"), "Node.js"), stryMutAct_9fa48("246") ? "" : (stryCov_9fa48("246"), "Python"), stryMutAct_9fa48("247") ? "" : (stryCov_9fa48("247"), "PHP"), stryMutAct_9fa48("248") ? "" : (stryCov_9fa48("248"), "Laravel")])
  }), stryMutAct_9fa48("249") ? {} : (stryCov_9fa48("249"), {
    title: stryMutAct_9fa48("250") ? "" : (stryCov_9fa48("250"), "Aplicações Mobile"),
    description: stryMutAct_9fa48("251") ? "" : (stryCov_9fa48("251"), "Apps nativos e híbridos para iOS e Android"),
    tecnologias: stryMutAct_9fa48("252") ? [] : (stryCov_9fa48("252"), [stryMutAct_9fa48("253") ? "" : (stryCov_9fa48("253"), "React Native"), stryMutAct_9fa48("254") ? "" : (stryCov_9fa48("254"), "Flutter"), stryMutAct_9fa48("255") ? "" : (stryCov_9fa48("255"), "Swift"), stryMutAct_9fa48("256") ? "" : (stryCov_9fa48("256"), "Kotlin")])
  }), stryMutAct_9fa48("257") ? {} : (stryCov_9fa48("257"), {
    title: stryMutAct_9fa48("258") ? "" : (stryCov_9fa48("258"), "Sistemas Empresariais"),
    description: stryMutAct_9fa48("259") ? "" : (stryCov_9fa48("259"), "Soluções personalizadas para otimizar processos internos"),
    tecnologias: stryMutAct_9fa48("260") ? [] : (stryCov_9fa48("260"), [stryMutAct_9fa48("261") ? "" : (stryCov_9fa48("261"), "Java"), stryMutAct_9fa48("262") ? "" : (stryCov_9fa48("262"), "Spring"), stryMutAct_9fa48("263") ? "" : (stryCov_9fa48("263"), "C#"), stryMutAct_9fa48("264") ? "" : (stryCov_9fa48("264"), ".NET"), stryMutAct_9fa48("265") ? "" : (stryCov_9fa48("265"), "PostgreSQL")])
  }), stryMutAct_9fa48("266") ? {} : (stryCov_9fa48("266"), {
    title: stryMutAct_9fa48("267") ? "" : (stryCov_9fa48("267"), "Consultoria em TI"),
    description: stryMutAct_9fa48("268") ? "" : (stryCov_9fa48("268"), "Análise, arquitetura e planejamento de soluções tecnológicas"),
    tecnologias: stryMutAct_9fa48("269") ? [] : (stryCov_9fa48("269"), [stryMutAct_9fa48("270") ? "" : (stryCov_9fa48("270"), "Arquitetura"), stryMutAct_9fa48("271") ? "" : (stryCov_9fa48("271"), "DevOps"), stryMutAct_9fa48("272") ? "" : (stryCov_9fa48("272"), "Cloud"), stryMutAct_9fa48("273") ? "" : (stryCov_9fa48("273"), "AWS"), stryMutAct_9fa48("274") ? "" : (stryCov_9fa48("274"), "Azure")])
  })]),
  timeline: stryMutAct_9fa48("275") ? [] : (stryCov_9fa48("275"), [stryMutAct_9fa48("276") ? {} : (stryCov_9fa48("276"), {
    year: stryMutAct_9fa48("277") ? "" : (stryCov_9fa48("277"), "2018"),
    title: stryMutAct_9fa48("278") ? "" : (stryCov_9fa48("278"), "Fundação"),
    description: stryMutAct_9fa48("279") ? "" : (stryCov_9fa48("279"), "Nascimento da Nova Código com foco em desenvolvimento de software")
  }), stryMutAct_9fa48("280") ? {} : (stryCov_9fa48("280"), {
    year: stryMutAct_9fa48("281") ? "" : (stryCov_9fa48("281"), "2019"),
    title: stryMutAct_9fa48("282") ? "" : (stryCov_9fa48("282"), "Primeiros Projetos"),
    description: stryMutAct_9fa48("283") ? "" : (stryCov_9fa48("283"), "Desenvolvimento de sites e aplicações para pequenas empresas")
  }), stryMutAct_9fa48("284") ? {} : (stryCov_9fa48("284"), {
    year: stryMutAct_9fa48("285") ? "" : (stryCov_9fa48("285"), "2020"),
    title: stryMutAct_9fa48("286") ? "" : (stryCov_9fa48("286"), "Expansão"),
    description: stryMutAct_9fa48("287") ? "" : (stryCov_9fa48("287"), "Crescimento da equipe e início de projetos corporativos")
  }), stryMutAct_9fa48("288") ? {} : (stryCov_9fa48("288"), {
    year: stryMutAct_9fa48("289") ? "" : (stryCov_9fa48("289"), "2021"),
    title: stryMutAct_9fa48("290") ? "" : (stryCov_9fa48("290"), "Especialização"),
    description: stryMutAct_9fa48("291") ? "" : (stryCov_9fa48("291"), "Foco em tecnologias modernas e metodologias ágeis")
  }), stryMutAct_9fa48("292") ? {} : (stryCov_9fa48("292"), {
    year: stryMutAct_9fa48("293") ? "" : (stryCov_9fa48("293"), "2022"),
    title: stryMutAct_9fa48("294") ? "" : (stryCov_9fa48("294"), "Referência"),
    description: stryMutAct_9fa48("295") ? "" : (stryCov_9fa48("295"), "Reconhecimento no mercado como empresa de qualidade técnica")
  }), stryMutAct_9fa48("296") ? {} : (stryCov_9fa48("296"), {
    year: stryMutAct_9fa48("297") ? "" : (stryCov_9fa48("297"), "2024"),
    title: stryMutAct_9fa48("298") ? "" : (stryCov_9fa48("298"), "Inovação"),
    description: stryMutAct_9fa48("299") ? "" : (stryCov_9fa48("299"), "Liderança em projetos inovadores e tecnologias emergentes")
  })]),
  equipe: stryMutAct_9fa48("300") ? {} : (stryCov_9fa48("300"), {
    description: stryMutAct_9fa48("301") ? "" : (stryCov_9fa48("301"), "Nossa equipe é composta por desenvolvedores experientes, designers criativos e especialistas em tecnologia. Trabalhamos com metodologias ágeis e estamos sempre atualizados com as últimas tendências do mercado."),
    stats: stryMutAct_9fa48("302") ? [] : (stryCov_9fa48("302"), [stryMutAct_9fa48("303") ? {} : (stryCov_9fa48("303"), {
      value: stryMutAct_9fa48("304") ? "" : (stryCov_9fa48("304"), "25+"),
      label: stryMutAct_9fa48("305") ? "" : (stryCov_9fa48("305"), "Desenvolvedores")
    }), stryMutAct_9fa48("306") ? {} : (stryCov_9fa48("306"), {
      value: stryMutAct_9fa48("307") ? "" : (stryCov_9fa48("307"), "8+"),
      label: stryMutAct_9fa48("308") ? "" : (stryCov_9fa48("308"), "Especialidades")
    }), stryMutAct_9fa48("309") ? {} : (stryCov_9fa48("309"), {
      value: stryMutAct_9fa48("310") ? "" : (stryCov_9fa48("310"), "6+"),
      label: stryMutAct_9fa48("311") ? "" : (stryCov_9fa48("311"), "Anos de Experiência")
    }), stryMutAct_9fa48("312") ? {} : (stryCov_9fa48("312"), {
      value: stryMutAct_9fa48("313") ? "" : (stryCov_9fa48("313"), "100+"),
      label: stryMutAct_9fa48("314") ? "" : (stryCov_9fa48("314"), "Projetos Entregues")
    })])
  }),
  tecnologias: stryMutAct_9fa48("315") ? [] : (stryCov_9fa48("315"), [stryMutAct_9fa48("316") ? "" : (stryCov_9fa48("316"), "React"), stryMutAct_9fa48("317") ? "" : (stryCov_9fa48("317"), "Node.js"), stryMutAct_9fa48("318") ? "" : (stryCov_9fa48("318"), "Python"), stryMutAct_9fa48("319") ? "" : (stryCov_9fa48("319"), "Java"), stryMutAct_9fa48("320") ? "" : (stryCov_9fa48("320"), "C#"), stryMutAct_9fa48("321") ? "" : (stryCov_9fa48("321"), "PHP"), stryMutAct_9fa48("322") ? "" : (stryCov_9fa48("322"), "Laravel"), stryMutAct_9fa48("323") ? "" : (stryCov_9fa48("323"), "Vue.js"), stryMutAct_9fa48("324") ? "" : (stryCov_9fa48("324"), "Angular"), stryMutAct_9fa48("325") ? "" : (stryCov_9fa48("325"), "TypeScript"), stryMutAct_9fa48("326") ? "" : (stryCov_9fa48("326"), "PostgreSQL"), stryMutAct_9fa48("327") ? "" : (stryCov_9fa48("327"), "MySQL"), stryMutAct_9fa48("328") ? "" : (stryCov_9fa48("328"), "MongoDB"), stryMutAct_9fa48("329") ? "" : (stryCov_9fa48("329"), "Redis"), stryMutAct_9fa48("330") ? "" : (stryCov_9fa48("330"), "Docker"), stryMutAct_9fa48("331") ? "" : (stryCov_9fa48("331"), "AWS"), stryMutAct_9fa48("332") ? "" : (stryCov_9fa48("332"), "Azure"), stryMutAct_9fa48("333") ? "" : (stryCov_9fa48("333"), "Git"), stryMutAct_9fa48("334") ? "" : (stryCov_9fa48("334"), "Jenkins")]),
  metodologias: stryMutAct_9fa48("335") ? [] : (stryCov_9fa48("335"), [stryMutAct_9fa48("336") ? "" : (stryCov_9fa48("336"), "Scrum"), stryMutAct_9fa48("337") ? "" : (stryCov_9fa48("337"), "Kanban"), stryMutAct_9fa48("338") ? "" : (stryCov_9fa48("338"), "TDD"), stryMutAct_9fa48("339") ? "" : (stryCov_9fa48("339"), "BDD"), stryMutAct_9fa48("340") ? "" : (stryCov_9fa48("340"), "CI/CD"), stryMutAct_9fa48("341") ? "" : (stryCov_9fa48("341"), "DevOps"), stryMutAct_9fa48("342") ? "" : (stryCov_9fa48("342"), "Design Thinking")])
});
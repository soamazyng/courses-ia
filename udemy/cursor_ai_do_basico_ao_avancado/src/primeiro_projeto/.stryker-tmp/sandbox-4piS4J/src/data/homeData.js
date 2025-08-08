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
export const homeData = stryMutAct_9fa48("174") ? {} : (stryCov_9fa48("174"), {
  hero: stryMutAct_9fa48("175") ? {} : (stryCov_9fa48("175"), {
    title: stryMutAct_9fa48("176") ? "" : (stryCov_9fa48("176"), "Bem-vindo à Nova Código"),
    subtitle: stryMutAct_9fa48("177") ? "" : (stryCov_9fa48("177"), "Transformando ideias em realidade através do desenvolvimento de software inovador e soluções digitais de alta qualidade")
  }),
  features: stryMutAct_9fa48("178") ? [] : (stryCov_9fa48("178"), [stryMutAct_9fa48("179") ? {} : (stryCov_9fa48("179"), {
    icon: stryMutAct_9fa48("180") ? "" : (stryCov_9fa48("180"), "💻"),
    title: stryMutAct_9fa48("181") ? "" : (stryCov_9fa48("181"), "Desenvolvimento Web"),
    description: stryMutAct_9fa48("182") ? "" : (stryCov_9fa48("182"), "Sites responsivos, aplicações web modernas e sistemas complexos com as melhores tecnologias")
  }), stryMutAct_9fa48("183") ? {} : (stryCov_9fa48("183"), {
    icon: stryMutAct_9fa48("184") ? "" : (stryCov_9fa48("184"), "📱"),
    title: stryMutAct_9fa48("185") ? "" : (stryCov_9fa48("185"), "Apps Mobile"),
    description: stryMutAct_9fa48("186") ? "" : (stryCov_9fa48("186"), "Aplicações nativas e híbridas para iOS e Android com experiência de usuário excepcional")
  }), stryMutAct_9fa48("187") ? {} : (stryCov_9fa48("187"), {
    icon: stryMutAct_9fa48("188") ? "" : (stryCov_9fa48("188"), "⚡"),
    title: stryMutAct_9fa48("189") ? "" : (stryCov_9fa48("189"), "Sistemas Empresariais"),
    description: stryMutAct_9fa48("190") ? "" : (stryCov_9fa48("190"), "Soluções personalizadas para otimizar processos e aumentar a eficiência do seu negócio")
  })]),
  stats: stryMutAct_9fa48("191") ? [] : (stryCov_9fa48("191"), [stryMutAct_9fa48("192") ? {} : (stryCov_9fa48("192"), {
    value: stryMutAct_9fa48("193") ? "" : (stryCov_9fa48("193"), "100+"),
    label: stryMutAct_9fa48("194") ? "" : (stryCov_9fa48("194"), "Projetos Entregues")
  }), stryMutAct_9fa48("195") ? {} : (stryCov_9fa48("195"), {
    value: stryMutAct_9fa48("196") ? "" : (stryCov_9fa48("196"), "25+"),
    label: stryMutAct_9fa48("197") ? "" : (stryCov_9fa48("197"), "Desenvolvedores")
  }), stryMutAct_9fa48("198") ? {} : (stryCov_9fa48("198"), {
    value: stryMutAct_9fa48("199") ? "" : (stryCov_9fa48("199"), "6+"),
    label: stryMutAct_9fa48("200") ? "" : (stryCov_9fa48("200"), "Anos de Experiência")
  }), stryMutAct_9fa48("201") ? {} : (stryCov_9fa48("201"), {
    value: stryMutAct_9fa48("202") ? "" : (stryCov_9fa48("202"), "50+"),
    label: stryMutAct_9fa48("203") ? "" : (stryCov_9fa48("203"), "Clientes Satisfeitos")
  })])
});
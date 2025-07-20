// Componentes HTML simples e reutilizáveis

export const HeroSection = ({ title, subtitle, buttonText = "Saiba Mais" }) => `
  <div class="hero-section">
    <h1>${title}</h1>
    <p class="hero-subtitle">${subtitle}</p>
    <button class="cta-button">${buttonText}</button>
  </div>
`;

export const FeatureCard = ({ icon, title, description }) => `
  <div class="feature-card">
    <div class="feature-icon">${icon}</div>
    <h3>${title}</h3>
    <p>${description}</p>
  </div>
`;

export const FeaturesSection = (features) => `
  <div class="features-section">
    ${features.map((feature) => FeatureCard(feature)).join("")}
  </div>
`;

export const StatCard = ({ value, label }) => `
  <div class="stat-item">
    <h2>${value}</h2>
    <p>${label}</p>
  </div>
`;

export const StatsSection = (stats) => `
  <div class="stats-section">
    ${stats.map((stat) => StatCard(stat)).join("")}
  </div>
`;

export const InfoCard = ({ icon, title, content }) => `
  <div class="info-item">
    <div class="info-icon">${icon}</div>
    <div class="info-content">
      <h3>${title}</h3>
      <p>${content}</p>
    </div>
  </div>
`;

export const FormField = ({
  type,
  name,
  label,
  required = false,
  placeholder = "",
  options = [],
}) => {
  if (type === "textarea") {
    return `
      <div class="form-group">
        <label for="${name}">${label}</label>
        <textarea
          id="${name}"
          name="${name}"
          required="${required}"
          placeholder="${placeholder}"
          rows="5"
        ></textarea>
      </div>
    `;
  }

  if (type === "select") {
    return `
      <div class="form-group">
        <label for="${name}">${label}</label>
        <select id="${name}" name="${name}" required="${required}">
          ${options
            .map(
              (option) => `
            <option value="${option.value}">${option.label}</option>
          `
            )
            .join("")}
        </select>
      </div>
    `;
  }

  return `
    <div class="form-group">
      <label for="${name}">${label}</label>
      <input
        type="${type}"
        id="${name}"
        name="${name}"
        required="${required}"
        placeholder="${placeholder}"
      />
    </div>
  `;
};

export const FormRow = (fields) => `
  <div class="form-row">
    ${fields.map((field) => FormField(field)).join("")}
  </div>
`;

export const ContactForm = (fields) => `
  <div class="contato-form">
    <h2>Envie uma Mensagem</h2>
    <form>
      ${fields
        .map((field) => {
          if (field.type === "row") {
            return FormRow(field.children);
          }
          return FormField(field);
        })
        .join("")}
      <button type="submit" class="submit-btn">Enviar Mensagem</button>
    </form>
  </div>
`;

export const TimelineItem = ({ year, title, description }) => `
  <div class="timeline-item">
    <div class="timeline-year">${year}</div>
    <div class="timeline-content">
      <h3>${title}</h3>
      <p>${description}</p>
    </div>
  </div>
`;

export const TimelineSection = (items) => `
  <div class="timeline">
    ${items.map((item) => TimelineItem(item)).join("")}
  </div>
`;

export const ValorCard = ({ icon, title, description }) => `
  <div class="valor-item">
    <div class="valor-icon">${icon}</div>
    <h3>${title}</h3>
    <p>${description}</p>
  </div>
`;

export const ValoresSection = (valores) => `
  <div class="valores-grid">
    ${valores.map((valor) => ValorCard(valor)).join("")}
  </div>
`;

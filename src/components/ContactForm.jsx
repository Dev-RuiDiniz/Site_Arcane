import { useState } from 'react';
import { buildWhatsAppUrl, validateContactForm } from '../app/contact.js';
import { ArrowIcon } from './Icons.jsx';

const initialValues = { name: '', email: '', company: '', message: '' };

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validateContactForm(values);
    setErrors(nextErrors);
    if (!Object.keys(nextErrors).length) {
      const companyLine = values.company.trim() ? ` Minha empresa é ${values.company.trim()}.` : '';
      window.location.assign(buildWhatsAppUrl(`Olá! Meu nome é ${values.name.trim()}.${companyLine} ${values.message.trim()}`));
    }
  }

  if (submitted) {
    return (
      <div className="form-success" role="status">
        <span className="success-mark">✓</span>
        <h3>Mensagem recebida.</h3>
        <p>A equipe Arcane vai retornar pelo e-mail informado para entendermos o próximo movimento.</p>
        <button type="button" className="text-link" onClick={() => { setSubmitted(false); setValues(initialValues); }}>Enviar outra mensagem</button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor="name">Nome</label>
        <input id="name" name="name" value={values.name} onChange={handleChange} placeholder="Como podemos chamar você?" aria-invalid={Boolean(errors.name)} />
        {errors.name && <span className="field-error">{errors.name}</span>}
      </div>
      <div className="form-field">
        <label htmlFor="email">E-mail</label>
        <input id="email" name="email" type="email" value={values.email} onChange={handleChange} placeholder="voce@empresa.com" aria-invalid={Boolean(errors.email)} />
        {errors.email && <span className="field-error">{errors.email}</span>}
      </div>
      <div className="form-field">
        <label htmlFor="company">Empresa</label>
        <input id="company" name="company" value={values.company} onChange={handleChange} placeholder="Nome da sua empresa" />
      </div>
      <div className="form-field form-field-large">
        <label htmlFor="message">Conte um pouco sobre o desafio</label>
        <textarea id="message" name="message" value={values.message} onChange={handleChange} placeholder="Em que momento sua operação está?" rows="4" aria-invalid={Boolean(errors.message)} />
        {errors.message && <span className="field-error">{errors.message}</span>}
      </div>
      <button className="button button-blue" type="submit">Enviar mensagem <ArrowIcon /></button>
    </form>
  );
}

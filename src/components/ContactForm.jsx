import { useState } from 'react';
import { buildContactMessage, buildWhatsAppUrl, validateContactForm } from '../app/contact.js';
import { trackLead, trackWhatsAppClick } from '../app/analytics.js';
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
      const whatsappWindow = window.open(
        buildWhatsAppUrl(buildContactMessage(values)),
        '_blank',
        'noopener,noreferrer',
      );

      if (!whatsappWindow) {
        setErrors({ form: 'Não foi possível abrir o WhatsApp. Verifique o bloqueador de pop-ups e tente novamente.' });
        return;
      }

      const context = {
        source: 'contact_form',
        page_path: window.location.pathname,
      };
      trackWhatsAppClick(context);
      trackLead(context);
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="form-success" role="status">
        <span className="success-mark">✓</span>
        <h3>Mensagem recebida.</h3>
        <p>Sua mensagem foi preparada no WhatsApp. Confira a nova aba e toque em enviar para concluir o contato.</p>
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
      {errors.form && <p className="field-error form-error" role="alert">{errors.form}</p>}
      <button className="button button-blue" type="submit">Enviar mensagem <ArrowIcon /></button>
    </form>
  );
}

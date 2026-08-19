const whatsappNumber = '5512991332258';

export function buildWhatsAppUrl(message = '') {
  const text = message.trim();
  return `https://wa.me/${whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
}

export function validateContactForm({ name = '', email = '', message = '' } = {}) {
  const errors = {};
  if (!name.trim()) errors.name = 'Informe seu nome.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errors.email = 'Informe um e-mail válido.';
  if (!message.trim()) errors.message = 'Conte um pouco sobre o desafio.';
  return errors;
}

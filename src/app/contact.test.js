import { describe, expect, it } from 'vitest';
import { buildWhatsAppUrl, validateContactForm } from './contact.js';

describe('contact form validation', () => {
  it('requires name, a valid email and a message', () => {
    expect(validateContactForm({ name: '', email: 'wrong', message: '' })).toEqual({
      name: 'Informe seu nome.',
      email: 'Informe um e-mail válido.',
      message: 'Conte um pouco sobre o desafio.',
    });
  });

  it('returns no errors for a complete contact request', () => {
    expect(validateContactForm({
      name: 'Rui',
      email: 'rui@example.com',
      message: 'Quero estruturar uma operação crítica.',
    })).toEqual({});
  });

  it('builds the commercial WhatsApp destination with an encoded message', () => {
    expect(buildWhatsAppUrl('Quero desenvolver um produto')).toBe('https://wa.me/5512991332258?text=Quero%20desenvolver%20um%20produto');
  });
});

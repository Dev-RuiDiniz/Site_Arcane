import { siteContent } from '../app/content.js';
import { PageFrame } from '../components/PageFrame.jsx';
import { ContactForm } from '../components/ContactForm.jsx';

export function ContactPage() {
  return <PageFrame eyebrow="CONTATO / AGENDAMENTO" title={siteContent.contactPage.title} intro={siteContent.contactPage.text}><section className="contact-section band-paper"><div className="contact-grid"><div className="contact-details"><span className="eyebrow eyebrow-blue">FALE COM A ARCANE</span><a className="contact-email" href={`mailto:${siteContent.contact.email}`}>{siteContent.contact.email}</a><a href={siteContent.contact.phoneHref}>{siteContent.contact.phone}</a><span>{siteContent.contact.location}</span></div><ContactForm /></div></section></PageFrame>;
}

import { buildWhatsAppUrl } from '../app/contact.js';
import { siteContent } from '../app/content.js';

export function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={buildWhatsAppUrl(siteContent.whatsapp.defaultMessage)}
      target="_blank"
      rel="noreferrer"
      aria-label="Fale com a Arcane pelo WhatsApp"
    >
      <img className="whatsapp-logo" src={siteContent.brandAssets.whatsappLogo} alt="" />
      <span>Fale no WhatsApp</span>
    </a>
  );
}

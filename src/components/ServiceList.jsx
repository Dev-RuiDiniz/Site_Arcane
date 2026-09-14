import { ArrowIcon } from './Icons.jsx';

export function ServiceList({ services, onNavigate }) {
  return (
    <div className={`service-list${services.some((service) => service.video) ? ' service-list-has-video' : ''}`}>
      {services.map((service) => (
        <article className={`service-row${service.video ? ' service-row-video' : ''}`} key={service.slug}>
          {service.video ? (
            <video className="service-background" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
              <source src={service.video} type="video/mp4" />
            </video>
          ) : null}
          <div className="service-index">
            <span className="service-number">{service.number}</span>
            <span className="service-concept">{service.concept}</span>
          </div>
          <div className="service-content">
            <h3><a className="service-title-link" href={service.detailHref} onClick={(event) => onNavigate(event, service.detailHref)}>{service.title}</a></h3>
            <span className="service-subtitle">{service.subtitle}</span>
            <p>{service.text}</p>
            <div className="service-tags" aria-label={`Serviços de ${service.title}`}>
              {service.microservices.map((item) => <span className="service-tag" key={item}>{item}</span>)}
            </div>
            <a className="service-cta text-link" href={service.href} onClick={(event) => onNavigate(event, service.href)}>{service.cta} <ArrowIcon /></a>
          </div>
          <a className="row-link" href={service.detailHref} onClick={(event) => onNavigate(event, service.detailHref)} aria-label={`Conhecer ${service.title}`}>
            <ArrowIcon />
          </a>
        </article>
      ))}
    </div>
  );
}

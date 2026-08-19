import { ArrowIcon } from './Icons.jsx';

export function ServiceList({ services, onNavigate }) {
  return (
    <div className="service-list">
      {services.map((service) => (
        <article className="service-row" key={service.number}>
          <span className="service-number">{service.number}</span>
          <div className="service-content">
            <h3><a className="service-title-link" href={service.detailHref} onClick={(event) => onNavigate(event, service.detailHref)}>{service.title}</a></h3>
            <span className="service-subtitle">{service.subtitle}</span>
            <p>{service.text}</p>
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

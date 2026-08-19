import { ArrowIcon } from './Icons.jsx';

export function ServiceList({ services, onNavigate }) {
  return (
    <div className="service-list">
      {services.map((service) => (
        <article className="service-row" key={service.number}>
          <span className="service-number">{service.number}</span>
          <div className="service-content">
            <h3>{service.title}</h3>
            <span className="service-subtitle">{service.subtitle}</span>
            <p>{service.text}</p>
            <a className="service-cta text-link" href={service.href} onClick={(event) => onNavigate(event, service.href)}>{service.cta} <ArrowIcon /></a>
          </div>
          <a className="row-link" href={service.href} onClick={(event) => onNavigate(event, service.href)} aria-label={`${service.cta}: ${service.title}`}>
            <ArrowIcon />
          </a>
        </article>
      ))}
    </div>
  );
}

import { ArrowIcon } from './Icons.jsx';

export function ProjectGrid({ projects, onNavigate }) {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <article className={`project-card project-${project.tone}`} key={project.code}>
          <div className="project-card-top"><span>{project.code}</span><span className="project-status">{project.division ? `${project.division} / CASE` : 'CASE'}</span></div>
          <div className="project-signal" aria-hidden="true"><span /><span /><span /><span /></div>
          <div className="project-card-copy">
            <h3>{project.title}</h3>
            <p>{project.text}</p>
            <span className="project-result">{project.result}</span>
          </div>
          <a className="project-arrow" href="/contact" onClick={(event) => onNavigate?.(event, '/contact')} aria-label={`Conhecer o case ${project.title}`}><ArrowIcon /></a>
        </article>
      ))}
    </div>
  );
}

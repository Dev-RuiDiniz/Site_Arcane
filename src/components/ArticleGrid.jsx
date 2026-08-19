export function ArticleGrid({ articles, onNavigate }) {
  return (
    <div className="article-grid">
      {articles.map((article) => (
        <article className="article-card" key={article.number}>
          <div className="article-meta"><span>{article.number}</span><span>{article.category}</span></div>
          <h3>{article.title}</h3>
          <p>{article.text}</p>
          <a href={article.href} onClick={(event) => onNavigate?.(event, article.href)}>Ler artigo <span aria-hidden="true">↗</span></a>
        </article>
      ))}
    </div>
  );
}

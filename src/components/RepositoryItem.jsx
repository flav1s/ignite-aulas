const RepositoryItem = (props) => {
  return (
    <div>
      <li>
        <strong>{props.repository.name ?? "Default"}</strong>
        <p>{props.repository.description}</p>

        <a href={props.repository.link}>Acessar Repositório</a>
      </li>
    </div>
  );
};

export default RepositoryItem;

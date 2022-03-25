function Project(params) {
  const { id, title, description, image } = params;
  return (
    <div>
      <a href="#" target="_blank">
        <img src={image} alt={title}></img>
        <h2>{title}</h2>
        <p>{description}</p>
      </a>
    </div>
  );
}

export default Project;

import Project from "./Project";
function ProjectsList(params) {
  const { projects } = params;
  return (
    <div>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Project
              id={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectsList;

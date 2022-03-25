import { MongoClient } from "mongodb";
import ProjectsList from "../../components/projects/ProjectsList";

// const projects = [
//   { id: "0", title: "Project_0", description: "Project_desc_0", image: "#" },
//   { id: "1", title: "Project_1", description: "Project_desc_1", image: "#" },
//   { id: "2", title: "Project_2", description: "Project_desc_2", image: "#" },
//   { id: "3", title: "Project_3", description: "Project_desc_3", image: "#" },
//   { id: "4", title: "Project_4", description: "Project_desc_4", image: "#" },
//   { id: "5", title: "Project_5", description: "Project_desc_5", image: "#" },
// ];

function work(params) {
  return <ProjectsList projects={params.projects} />;
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://Chitrang:password.@portfoliocluster.seqbq.mongodb.net/PorfolioData?retryWrites=true&w=majority"
  );

  const db = client.db();

  const projectCollection = db.collection("Projects");

  const projects = await projectCollection.find().toArray();

  client.close();

  return {
    props: {
      projects: projects.map((project) => ({
        title: project.title,
        description: project.description,
        image: project.image,
        id: project._id.toString(),
      })),
    },
    revalidate: 10,
  };
}
export default work;

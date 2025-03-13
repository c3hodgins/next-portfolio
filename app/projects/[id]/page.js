export default async function ProjectPage({params}){
    const {id} = await params;
    const projects = await fetch("http://localhost:3000/projects.json").then((res) => res.json());
    const project = projects.find((p) =>p.id.toString() == id);
    console.log(project)
    return (
        <div>
            <h1>{project.Title}</h1>
            <h2>{project.Languages}</h2>
            <p>{project.Blurb}</p>
        </div>
    );
};
import { createClient } from "@supabase/supabase-js";
export default async function ProjectPage({ params }) {
  const { id } = await params;
  const supabaseKey = process.env.SUPABASE_KEY;
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabase = createClient(supabaseUrl, supabaseKey);

  let {
    data: [project],
  } = await supabase.from("Projects").select("*").eq("id", `${id}`);

  console.log(project);
  return (
    <div>
      {project != null && (
        <>
          <h1>{project.project_title}</h1>
          <h2>{project.project_dates[0]}</h2>

          {project.project_longblurb && project.project_longblurb.map((paragraph,idx) => (
            <>
                <p key = {idx}>{paragraph}</p>
                <br/>
            </>
          ))}
        </>
      )}
    </div>
  );
}

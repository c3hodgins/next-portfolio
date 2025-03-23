import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import { supabase } from "@/utils/supabase";
export default async function ProjectPage({ params }) {
  const { id } = await params;

  let {
    data: [project],
  } = await supabase.from("Projects").select("*").eq("id", `${id}`);

  return (
    <div style = {{display: 'flex', flexDirection:'row'}}>
      <Link style = {{padding: '2rem 2rem 0rem 0rem',fontSize:'2rem'}}href="/projects">{"<"}</Link>
      <div>
        {project != null && (
          <>
            <h1 style={{ fontSize: "3rem" }}>{project.project_title}</h1>
            <br />
            <h2>
              {project.project_dates.length > 1
                ? project.project_dates[0] + " - " + project.project_dates[1]
                : project.project_dates[0]}
            </h2>
            <br />

            {project.project_longblurb &&
              project.project_longblurb.map((paragraph, idx) => (
                <>
                  <p style={{ fontSize: "1.5rem" }} key={`paragraph${idx}`}>
                    {paragraph}
                  </p>
                  <br />
                  <br />
                </>
              ))}
          </>
        )}
      </div>
    </div>
  );
}

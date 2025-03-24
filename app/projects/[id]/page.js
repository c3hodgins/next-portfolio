import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import { supabase } from "@/utils/supabase";

export default async function ProjectPage({ params }) {
  const { id } = await params;

  let {
    data: [project],
  } = await supabase.from("Projects").select("*").eq("id", `${id}`);

  const images = supabase.storage.from('images');

  return (
    <div style = {{display: 'flex', flexDirection:'row'}}>
      <Link style = {{padding: '2rem 2rem 0rem 0rem',fontSize:'2rem'}}href="/projects">{"<"}</Link>
      <div style = {{padding: '2rem',display:'flex', flexDirection: 'column',gap: '1rem'}}>
        {project != null && (
          <>
            {project.image_path && <img style={{width:'100%', height:'25rem', objectFit:'cover'}} src = {images.getPublicUrl(project.image_path).data.publicUrl}></img>}
            <h1 style={{ fontSize: "3rem" }}>{project.title}</h1>
            <h2>
              {project.dates.length > 1
                ? project.dates[0] + " - " + project.dates[1]
                : project.dates[0]}
            </h2>
            <br />

            {project.long_blurb &&
              project.long_blurb.map((paragraph, idx) => (
                <div key={`paragraph${idx}`}>
                  <p style={{ fontSize: "1.5rem" }} >
                    {paragraph}
                  </p>
                </div>
              ))}
          </>
        )}
      </div>
    </div>
  );
}

import { redirect } from "next/navigation";
;import styles from "./admin.module.css";
import { supabase } from "@/utils/supabase";
import Link from "next/link";

export default async function Admin() {

  const {data: {session}} = await supabase.auth.getSession();

  console.log(session)

  // if (session.user.email == process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
  //   return (
  //     <>
  //       {projects &&
  //         projects
  //           .sort((a, b) => new Date(b.date) - new Date(a.date))
  //           .map((project, index) => (
  //             <div key={index} className={styles.project}>
  //               {project.image_path && (
  //                 <img
  //                   className={styles.projectImage}
  //                   src={images.getPublicUrl(project.image_path).data.publicUrl}
  //                 ></img>
  //               )}
  //               <Link
  //                 className={styles.projectLink}
  //                 href={`/projects/${project.id}`}
  //               >
  //                 <h1 key={index}>{project.title}</h1>
  //               </Link>
  //               <br />
  //               <p>
  //                 {project.dates.length > 1
  //                   ? project.dates[0] + " - " + project.dates[1]
  //                   : project.dates[0]}
  //               </p>
  //               <p style={{ fontSize: "1.5rem" }}>{project.short_blurb}</p>
  //               <br />
  //             </div>
  //           ))}
  //     </>
  //   );
  // }
  // return <p></p>;
}

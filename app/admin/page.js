"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase";
import { useRouter } from "next/navigation";
export default function Admin() {
  const router = useRouter();
  const [session, setSession] = useState(null);
  const [user, setUser] = useState("");
  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      if (data.session) {
        setUser(data.session.user.email);
      } else {
        router.push("/login");
      }
    };

    checkSession()
  }, []);

  console.log(user);

  if (user == process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
    return (
      <>
        <p>poop</p>
      </>
    );
  }
  return <p></p>;
}

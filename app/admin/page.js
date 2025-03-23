"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase";
import { useRouter } from "next/navigation";
export default function poop() {
  const router = useRouter();
  const [session, setSession] = useState(null);
  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
    const email = data.session.user.email      //   setLoading(false);

      if (email !== "c3hodgins@gmail.com") {
        router.replace("/login"); // Redirect to login if not authenticated
      }
    };

    checkSession();
  }, []);
  return (
    <>
      <p>poop</p>
    </>
  );
}

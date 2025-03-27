"use client";
import styles from "./login.module.css";
import { useState } from "react";
import { supabase } from "@/utils/supabase";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);

    // Supabase authentication call
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      router.push("/admin"); // Redirect to the admin page
    }
    setLoading(false);
  }

  return (
    <>
      <form className={styles.loginForm} onSubmit={handleLogin}>
        <h1>Log In</h1>

        <h3>
          Email:{" "}
          <input
            className={styles.loginInput}
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </h3>

        <h3>
          Password:{" "}
          <input
            className={styles.loginInput}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </h3>

        <button type="submit">{loading ? "Siging In..." : "Sign In"}</button>
      </form>
    </>
  );
}

"use client";
import { useState } from "react";
import { supabase } from "@/utils/supabase";
import styles from "./feedback.module.css";

function Feedback() {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, feedback);
    const { data: insertData, error: insertError } =
      (feedback !== "") &
      (await supabase
        .from("feedback")
        .insert({ name: name, comment: feedback }));
    setName("");
    setFeedback("");
    setSubmitted(true);
    console.log({ name: name, comment: feedback });
  };
  return (
    <div className={styles.container}>
      <h1>
        Feel free to provide some feedback on what you did or didn't like about
        my site, or something you'd like to see implemented differently ;)
      </h1>
      {!submitted ? <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.nameInput}
          type="text"
          placeholder="Name (Optional)"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <textarea
          className={styles.commentInput}
          type="text"
          placeholder="Feedback"
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>
        <button className={styles.submitButton} type="submit">
          Submit
        </button>
      </form> : <h2>Thanks for the feedback!</h2>}
    </div>
  );
}

export default Feedback;

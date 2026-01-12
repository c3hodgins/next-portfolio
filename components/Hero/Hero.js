import styles from "@/components/Hero/Hero.module.css"
import Image from "next/image";

export default function Hero({ section }){
    const text = (
      <p className="">
        I&apos;m <span style = {{fontWeight: "bold" }}>Charles Hodgins,</span> an aspiring
        <span style = {{color: "blue", fontWeight: "bold"}} > Software Engineer </span>
        studying Computer Engineering at{" "}
        <span style = {{color: "green",fontWeight: "bold"}}> Binghamton University, </span>
        with a passion for engineering solutions with application development, deep learning and embedded
        systems!
      </p>
    );
  
    return (
          <div className={styles.heroWrapper}>
            <img
              className={styles.heroImg}
              src="IMG_0304.jpeg"
            />
            <div className={styles.heroText}>
              <h1>Welcome!</h1>
              {text}
            </div>
          </div>
    );
  };
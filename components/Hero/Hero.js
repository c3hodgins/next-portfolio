import styles from "@/components/Hero/Hero.module.css"

export default function Hero({ section }){
    const text = (
      <p className="">
        I&apos;m <span style = {{fontWeight: "bold" }}>Charles Hodgins,</span> an aspiring
        <span style = {{color: "blue", fontWeight: "bold"}} > Software Engineer </span>
        studying Computer Engineering at{" "}
        <span style = {{color: "green",fontWeight: "bold"}}> Binghamton University, </span>
        with a passion for software development, machine learning and embedded
        systems!
      </p>
    );
  
    return (
          <div className={styles.heroWrapper}>
            <img
              className={styles.heroImg}
              src="https://media.licdn.com/dms/image/v2/D4E03AQFBDheys8Vb2g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1697303529156?e=2147483647&v=beta&t=kaURF2pKegkGpdeA6kLw_ZIPXIaZPb4_ZByNNsTbR7k"
            />
            <div className={styles.heroText}>
              <h1>Hi!</h1>
              {text}
            </div>
          </div>
    );
  };
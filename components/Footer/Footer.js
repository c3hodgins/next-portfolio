
import styles from "@/components/Footer/Footer.module.css"
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const contactInfo = [
    {
        Text: "LinkedIn.com/in/charleshodgins",
        Link: "https://www.linkedin.com/in/charleshodgins",
        Icon: <FaLinkedin/>
    },
    {
        Text: "Github.com/c3hodgins",
        Link: "https://github.com/c3hodgins",
        Icon: <FaGithub/>
    },
    {
        Text: "c3hodgins@gmail.com",
        Link: "c3hodgins@gmail.com",
        Icon: <SiGmail/>
    }
]

export default function Footer() {
  return (
    <div className={styles.contact}>
        {contactInfo.map((contact, index) => (
            <div className = 'contact-info' key = {index}>
                {contact.Icon}
                <a className='hover:text-blue-500' href = {contact.Link}>{contact.Text}</a>
            </div>  
        ))}
        <p>New York, NY</p>
    </div>
  )
};


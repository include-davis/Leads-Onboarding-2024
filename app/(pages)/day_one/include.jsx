import { ProjectCard } from "./projectcard";
import styles from './include.module.scss';

const images = {
    pen: '/images/pen.png',
    figma: '/images/header1.png'
}

const card_content = {
    ielc: {
        cohort: "WINTER/SPRING 2023",
        img: "/images/IELC Tutoring.png",
        img_alt: "IELC Tutoring",
        title: "IELC Tutoring",
        desc: "Website and brand identity project for the Interactive Elementary Learning Center to boost credibility and increase participation in their free 7-week summer program.",
        href: "https://www.ielctutoring.com/"
    },
    bandv: {
        cohort: "FALL/WINTER 2023",
        img: "/images/Bloom and Vine.png",
        img_alt: "Bloom and Vine",
        title: "Bloom and Vine",
        desc: "Website project for Bloom and Vine a boutique floral design studio located in Northern California. Bloom and Vine strives to make every event unforgettable.",
        href: "https://www.bloomandvine.net"
    },
    nvsi: {
        cohort: "WINTER/SPRING 2022",
        img: "/images/New Vietnam Studies Initiative.png",
        img_alt: "New Vietnam Studies Initiative",
        title: "New Vietnam Studies Initiative",
        desc: "We developed the website for NVSI, promoting research and collaboration in fields related to contemporary Vietnam's economic, political, and cultural development.",
        href: "https://newvietnam.ucdavis.edu/"
    },
    oneloop: {
        cohort: "FALL/WINTER 2021",
        img: "/images/ONELOOP.png",
        img_alt: "ONELOOP",
        title: "ONELOOP",
        desc: "Oneloop is a team of graduate and undergraduate students at UCD. They design and build a Hyperloop pod to compete in SpaceX's annual Hyperloop competition.",
        href: "https://davishyperloop.com/"
    }
}

export function Include() {
    const positions = Object.values(card_content);
    return(
        <div className={styles.page}>
            <div className={styles.header1}>
                <h1>Our mission is to design creative digital solutions that have a positive social impact</h1>
                <br/>
                <img src={images.figma}/>
            </div>

            <div className={styles.header2}>
                <img src={images.pen}/>
                <h1>Recent Work</h1>
                <h3>Transforming ideas into incredible realities is what we do best.</h3>
            </div>
            <div className={styles.card}>
                {positions.map((obj, index) => (
                    <ProjectCard
                        cohort={obj.cohort}
                        image={obj.img}
                        image_alt={obj.img_alt}
                        title={obj.title}
                        description={obj.desc}
                        url={obj.href}
                        key={index}
                    />
                ))}
            </div>
            

            <p>AND MORE…</p>
        </div>
    );
}
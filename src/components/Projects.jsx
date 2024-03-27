import { list } from "../data/projectsList.js"
import '../css/projects.css'
import { Code, GitHub } from "@mui/icons-material"
import { Link } from "@mui/icons-material"
import { useTranslation } from "react-i18next"

const Projects = () => {

    const { t } = useTranslation()

    return (
        <section id="projects" className="container-projects">
            <div className="section-title projects-title">
                <Code />
                <h1>{t("projects.section-project-title")}</h1>
            </div>
            <div className="projects">
                {
                    list.map(project => (
                        <div key={project.id} className="border-container">
                                <span className="first-border"></span>
                                <span className="second-border"></span>
                                <span className="third-border"></span>
                                <span className="fourth-border"></span>
                            <div className="project">
                
                                <img src={project.url} alt={project.title} loading="lazy" />
                                <div className="project-text">
                                    <h3>{project.title}</h3>
                                    <p>{t(`projects.project-descriptions.${project.title.toLowerCase()}`)}</p>
                                </div>
                                <div className="project-technologies">
                                    {
                                        project.technologies.map((tech, index) => (
                                            <button key={index} className="project-technology-btn" style={{ backgroundColor: tech.btnColor}}>
                                                <img src={tech.icon} />
                                                <span>{tech.technology}</span>
                                            </button>
                                            ))
                                    }
                                </div>
                                <div className="project-links">
                                    <a href={project.codeLink} target="_blank"><GitHub /> {t("projects.github-code")}</a>
                                    <a href={project.projectLink}><Link /> Demo</a>
                                </div>
                            </div>

                        </div>
                        ))
                }
            </div>
        </section>
    )
}

export default Projects

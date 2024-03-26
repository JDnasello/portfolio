import { FitnessCenter, RecordVoiceOver, SportsMartialArts, Person, } from '@mui/icons-material'
import '../css/about.css'
import { useTranslation } from 'react-i18next'

const AboutMe = () => {

    const { t } = useTranslation()

    return (
        <section id="about" className="container-about">
            <div className="about-content">
                <h1 className='section-title'><Person /> {t("about.about-title")}</h1>
                <p className='about-text' dangerouslySetInnerHTML={{ __html: t("about.about-text-first-p")}}></p>
                <p className='about-text' dangerouslySetInnerHTML={{ __html: t("about.about-text-second-p")}}></p>
                <p className='about-text' dangerouslySetInnerHTML={{ __html: t("about.about-text-third-p")}}></p>
                <div className='activities'>
                    <h2>{t("about.extracurricular-activities")}</h2>
                    <ul>
                        <li><FitnessCenter className='activity-icon' /> {t("about.gym")}</li>
                        <li><SportsMartialArts className='activity-icon' /> {t("about.martial-arts")}</li>
                        <li><RecordVoiceOver className='activity-icon' /> {t("about.english")}</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default AboutMe

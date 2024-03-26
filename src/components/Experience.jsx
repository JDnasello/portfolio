import { WorkOutline } from '@mui/icons-material'
import '../css/experience.css'
import { useTranslation } from 'react-i18next'

const Experience = () => {

    const { t } = useTranslation()

    return (
        <section id="experience" className='container-experience'>
            <div className='experience-content'>
                <div className='section-title'>
                    <WorkOutline />
                    <h1>{t('experience.experience-title')}</h1>
                </div>
                <ul className='job-ul'>
                    <li>
                        <div className='li-point'></div>
                        <div className='job-info'>
                            <h3 className='role'>{t('experience.job-role')}</h3>
                            <h3 className='company'>E-Academy</h3>
                            <span>{t('experience.working-time')}</span>
                        </div>
                        <div className='job-description'>
                            <p>{t('experience.job-description')}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Experience

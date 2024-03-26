import '../css/welcome.css'
import avatar from '../img/avatar.jpeg'
import { DarkMode, LightMode, Email, LinkedIn, Tune } from "@mui/icons-material"
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '../context/LanguageContext'

const Welcome = ({ mode, changeMode }) => {

    const { t } = useTranslation()
    const { i18n, changeLanguage } = useLanguage()
    const [preferencesVisible, setPreferencesVisible] = useState(false)

    const showPreferences = () => {
        setPreferencesVisible(!preferencesVisible)
    }

    const handleChangeLanguage = (lang) => {
        changeLanguage(lang)
    }

    return (
        <section id='welcome' className='container-welcome'>
            <div className="welcome-content">
                <div className='welcome-info'>
                    <div className='mypicture-and-mode'>
                        <img src={avatar} alt="Juan Diego" className='avatar' />
                        <div>
                            {
                                preferencesVisible && (
                                    <>
                                        <div className='container-preferences'>
                                            <div>
                                                <span>{t("welcome.theme")}:</span>
                                                {
                                                    !mode ?
                                                        <DarkMode style={{ fill: '#fff8ce' }} onClick={changeMode} />
                                                        :
                                                        <LightMode style={{ fill: '#ffc400'}} onClick={changeMode} />
                                                }
                                            </div>
                                            <div>
                                                <span>{t("welcome.language")}:</span>
                                                    <img
                                                        src={i18n.language === 'es' ? "https://flagcdn.com/es.svg" : "https://flagcdn.com/gb.svg"}
                                                        alt={i18n.language === 'es' ? "Español" : "Inglés"}
                                                        className='language-flag'
                                                        onClick={() => handleChangeLanguage(i18n.language === 'es' ? 'en' : 'es')}
                                                    />
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                            <Tune fontSize='large' className='preferences-icon' onClick={showPreferences} />
                        </div>
                    </div>
                    <div className='welcome-text'>
                        <h1 className='section-title'>{t("welcome.welcome-title")}</h1>
                        <p><b style={{ color: 'var(--sky-blue)'}}>{t("welcome.fullstack-dev")}</b>{t("welcome.welcome-subtitle")}</p>
                    </div>
                </div>
                <div className='container-contact'>
                    <h2>{t("welcome.contactme")}</h2>
                    <div className='contact-links'>
                        <a href="mailto:jnasellopron@gmail.com"><Email fontSize='small' /> Gmail</a>
                        <a href="https://www.linkedin.com/in/juan-diego-nasello/" target='_blank'><LinkedIn fontSize='small' /> LinkedIn</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Welcome

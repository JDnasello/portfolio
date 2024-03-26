import { useState } from 'react'
import '../css/navbar.css'
import { LiaDownloadSolid } from "react-icons/lia"
import { useTranslation } from 'react-i18next'

const NavBar = () => {

    const { t } = useTranslation() 
    const [burguerClass, setBurguerClass] = useState('burguer-bar unclicked')
    const [menuClass, setMenuClass] = useState('menu hidden')
    const [menuClicked, setMenuClicked] = useState(false)

    const updateMenu = () => {
        if (!menuClicked) {
            setBurguerClass('burguer-bar clicked')
            setMenuClass('menu visible')
        } else {
            setBurguerClass('burguer-bar unclicked')
            setMenuClass('menu hidden')
        }
        setMenuClicked(!menuClicked)

    }

    return (
        <header className='container-navbar'>
            <div>
                <span style={ {color: 'var(--sky-blue)', fontWeight: 700, fontSize: '1.2em'} }>&lt;<span className='navbar-name'>JDNasello</span> &#47;&gt;</span>
                <div className='burguer-menu-icon' onClick={updateMenu}>
                    <div className={burguerClass}></div>
                    <div className={burguerClass}></div>
                    <div className={burguerClass}></div>
                </div>
            <nav className={menuClass}>
                    <a href='#experience' className='menu-a'>{t('header.experience-link')}</a>
                <a href='#projects' className='menu-a'>{t('header.projects-link')}</a>
                <a href='#about' className='menu-a'>{t('header.about-link')}</a>
                <a href='' className='download-cv'><LiaDownloadSolid /> CV</a>
            </nav>
            </div>
        </header>
    )
}

export default NavBar

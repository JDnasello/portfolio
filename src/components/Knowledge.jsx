import { ArrowBackIosNew, ArrowForwardIos, Widgets } from '@mui/icons-material'
import '../css/about.css'
import { useEffect, useState } from 'react'
import mongodbIcon from '../img/mongodb.svg'
import nodejsIcon from '../img/nodejs.svg'
import expressIcon from '../img/express.svg'
import reactIcon from '../img/react.svg'
import reduxIcon from '../img/redux.svg'
import jsIcon from '../img/javascript.svg'
import htmlIcon from '../img/html.svg'
import cssIcon from '../img/css.svg'
import pgSqlIcon from '../img/postgresql.svg'
import gitIcon from '../img/git.svg'
import npmIcon from '../img/npm.svg'
import jwtIcon from '../img/jwt.svg'
import { useTranslation } from 'react-i18next'

const Knowledge = ({ mode }) => {

    const { t } = useTranslation()
    const abilitiesImages = [reactIcon,
        reduxIcon,
        nodejsIcon,
        expressIcon,
        mongodbIcon,
        jsIcon,
        htmlIcon,
        cssIcon,
        pgSqlIcon,
        gitIcon,
        npmIcon,
        jwtIcon
    ]

    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedImage, setSelectedImage] = useState(abilitiesImages[0])
    const [loaded, setLoaded] = useState(false)
    
    const selectNewImage = (index, next = true) => {
        setLoaded(false)
        let nextIndex;
        if (next) {
            nextIndex = index < abilitiesImages.length - 1 ? index + 1 : 0
        } else {
            nextIndex = index > 0 ? index - 1 : abilitiesImages.length - 1
        }

        if (window.innerWidth < 768) {
            setTimeout(() => {
                setSelectedImage(abilitiesImages[nextIndex])
                setSelectedIndex(nextIndex)
            }, 300)
        } else {
            setTimeout(() => {
                setSelectedImage(abilitiesImages[nextIndex])
                setSelectedIndex(nextIndex)
            }, 100)
        }

    }
    
    const previousImage = () => {
        selectNewImage(selectedIndex, false)
    }

    const nextImage = () => {
        selectNewImage(selectedIndex)
    }

    useEffect(() => {
        const interval = setInterval(nextImage, 2100)
        return () => clearInterval(interval)
    })

    const renderCarouselImages = () => {
        if (window.innerWidth >= 768) {
            const prevIndex = selectedIndex === 0 ? abilitiesImages.length - 1 : selectedIndex - 1
            const nextIndex = selectedIndex === abilitiesImages.length - 1 ? 0 : selectedIndex + 1

            return (
                <>
                    
                        <img src={abilitiesImages[prevIndex]}
                            alt={abilitiesImages[prevIndex]}
                            className={`${mode && abilitiesImages[prevIndex] === expressIcon ? 'express-icon-light-mode' : ''} ${loaded ? 'ability-img-loaded' : ''}`}
                            loading='lazy'
                            onLoad={() => setLoaded(true)}
                        />
                        <img src={selectedImage}
                            alt={abilitiesImages[selectedIndex]}
                            className={`${mode && selectedImage === expressIcon ? 'express-icon-light-mode' : ''} ${loaded ? 'ability-img-loaded' : ''} selected`}
                            loading='lazy'
                            onLoad={() => setLoaded(true)}
                    />
                    
                        <img src={abilitiesImages[nextIndex]}
                            alt={abilitiesImages[nextIndex]}
                            className={`${mode && abilitiesImages[nextIndex] === expressIcon ? 'express-icon-light-mode' : ''} ${loaded ? 'ability-img-loaded' : ''}`}
                            loading='lazy'
                            onLoad={() => setLoaded(true)}
                        /> 
                </>
                )
        }
    }

    return (
        <div className="knowledge">
            <h1>{t("knowledge.knowledge-title")}</h1>
            <div className="technologies-carousel">
                <div><ArrowBackIosNew onClick={previousImage} className='carousel-arrow' /></div>
                    {
                        window.innerWidth < 768 ? (
                        <>
                            <img src={selectedImage}
                                alt={abilitiesImages[selectedIndex]}
                                loading='lazy'
                                className={`${mode && selectedImage === expressIcon ? 'express-icon-light-mode' : ''} ${loaded ? 'ability-img-loaded' : ''}`}
                                onLoad={() => setLoaded(true)}/>
                        </>
                            )
                            : (
                                <>
                                <div className='abilities-img-desktop'>
                                        {renderCarouselImages()}
                                    </div>
                                </>
                            )
                        }
                <div><ArrowForwardIos onClick={nextImage} className='carousel-arrow' /></div>
            </div>
        </div>
    )
}

export default Knowledge

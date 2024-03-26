import { createContext, useContext } from "react"
import { useTranslation } from "react-i18next"

const LanguageContext = createContext()
export const useLanguage = () => useContext(LanguageContext)

const LanguageProvider = ({ children }) => {

    const { i18n } = useTranslation()

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }

    return (
        <LanguageContext.Provider value={{ i18n, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageProvider

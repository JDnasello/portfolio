import '../css/footer.css'
import { GitHub, LinkedIn, MailOutline } from "@mui/icons-material"

const Footer = () => {
    return (
        <footer className="container-footer">
            <div className="copyright">
                <span>&copy; Juan Diego Nasello | 2024</span>
            </div>
            <div className="footer-links">
                <a href='mailto:jnasellopron@gmail.com'><MailOutline /></a>
                <a href='https://github.com/JDnasello' target='_blank'><GitHub /></a>
                <a href='https://www.linkedin.com/in/juan-diego-nasello/' target='_blank'><LinkedIn /></a>
            </div>
        </footer>
    )
}

export default Footer

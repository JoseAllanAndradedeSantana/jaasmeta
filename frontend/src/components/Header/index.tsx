import logo from '../../assets/img/logo.svg'
import './style.css'

function Header() {
    return (

        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>JAAS-Meta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://"> JAAS Consultoria de Software</a>
                </p>
            </div>
        </header>
    )
}

export default Header

export {Header}
import './styles.css'

const Header = (props) => {
    return(
        <header id={`header-container-${props.theme}`}>
            <div id='header-title-container'>
                <h1>TODO</h1>
            </div>
            <button id="header-btn-container" onClick={() => props.setTheme(props.theme === "light" ? "dark" : "light")}>
                <img src={`/images/icon-${props.theme}.svg`} alt="" />
            </button>
        </header>
    )
}
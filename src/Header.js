import logoWhite from './images/logo_white.png';
import logoBlack from './images/logo_black.png';
import iconSun from './images/icon-sun.svg';
import iconMoon from './images/icon-moon.svg';

export function Header({ isDark, setIsDark }) {

    const isDarkHandler = () => {
        setIsDark(!isDark)
    }

    return (
        <div className="header">
            {isDark ? <img className='logo' src={logoWhite} /> : <img className='logo' src={logoBlack} />}
            <div className={isDark ? 'mode' : 'mode--light'} onClick={isDarkHandler}>
                {isDark ? <h2 className='mode__text'>Light</h2> : <h2 className='mode__text mode__text--light'>Dark</h2>}
                {isDark ? <img className='mode__icon' src={iconSun} /> : <img className='mode__icon mode__icon--light' src={iconMoon} />}
            </div>
        </div>
    )
}
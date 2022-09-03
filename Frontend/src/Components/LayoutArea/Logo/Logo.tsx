import "./Logo.css";
import logoSource from '../../../Assets/Images/logo.png'

function Logo(): JSX.Element {
    return (
        <div className="Logo">
            <img src={logoSource} />
        </div>
    );
}

export default Logo;

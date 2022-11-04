import { Button } from '../../../components/Button';
import './styles.scss';


export const HeaderNav = () => {
    return (
        <div>
            <div className="header-nav">
                <div className="next-invest">NEXT INVEST</div>

                <ul className='nav-list'>
                    <li className="nav-item">
                        Investment Opportunities
                        </li>
                    <li className="nav-item">
                        How it works</li>
                    <li className="nav-item">About us</li>
                </ul>

                <Button uniqueClassName ="login-button">Login</Button>
                <Button uniqueClassName ="register-button"
                    outline
                    color="red"
                >
                    Register
                </Button>

                {/* <Button color="red">Fot Test </Button> */}
            </div>
        </div>
    )
}
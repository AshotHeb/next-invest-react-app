import { HeaderContent } from './HeaderContent'
import { HeaderNav } from './HeaderNav'
import './styles.scss'

export const Header = ()=>{
    return  (
        <header className="header">
            <HeaderNav />
            <HeaderContent />
        </header>
    )
}
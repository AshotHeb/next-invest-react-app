import './styles.scss'

export const Button = ({ children, color, outline }) => {

    const classnames =['reusable-button']

    if(color) {
        classnames.push(color)
    }

    if(outline) {
        classnames.push('outline')
    }

    return (
        <button className={classnames.join(' ')}>
            {children}
        </button>
    )
}
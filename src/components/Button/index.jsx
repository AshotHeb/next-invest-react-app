import './styles.scss'

export const Button = ({ children, color, outline,uniqueClassName }) => {

    const classnames =['reusable-button']

    if(color) {
        classnames.push(color)
    }

    if(outline) {
        classnames.push('outline')
    }
    if(uniqueClassName) {
        classnames.push(uniqueClassName)
    }


    return (
        <button className={classnames.join(' ')}>
            {children}
        </button>
    )
}
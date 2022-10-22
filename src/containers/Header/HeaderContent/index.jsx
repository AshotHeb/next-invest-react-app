import './styles.scss'

export const HeaderContent = () => {
    return (
        <div className="header-content">
            <div className='header-content-info-background'>
                <div className='header-content-info'>
                    <h2 className='header-content-info-heading'>
                        Meaningful investments in
                        Main Street businesses
                    </h2>

                    <p className='header-content-info-text'>
                        Browse vetted investment offerings in communities all over the US.
                    </p>

                    <button>
                        GET STARTED
                    </button>
                </div>
            </div>
        </div>
    )
}
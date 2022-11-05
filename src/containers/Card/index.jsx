import "./styles.scss"

export const Card = (props) => {
    const { img, name, location, description, range, maxRange } = props;

    const widthPercent = (range / maxRange) * 100

    return (

        <div className="card-div">
            <img src={img} alt={'imag'} className="main-img" />
            <div className="card-div-body">
                <p className="card-name">{name}</p>
                <p className="card-location">{location}</p>
                <p className="card-description">{description}</p>

                <div className="range-line-block">
                    <div className="range-line" style={{
                        width:`${widthPercent}%`
                    }}></div>
                </div>

                <p className="card-range-wrapper">
                    <span className="card-range">${range} </span>
                    raised of ${maxRange}
                </p>
            </div>
        </div>



    )
}
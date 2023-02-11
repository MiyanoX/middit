export const CardContent = ({cardId, channel, title, image}) => {
    return (
        <div className="CardContent">
            <p className="Channel">{channel}</p>
            <p className="Title">{title}</p>
            <div className="ImageContainer">
                <img src={image} id="image"/>
            </div>
        </div>
    )
}
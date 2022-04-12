function CardTopic(props) {
    return (
        <div className="card-topic">
            <h2>{props.title}</h2>
            <p className="card-topic__content">{props.content}</p>
        </div>
    )
}

export default CardTopic
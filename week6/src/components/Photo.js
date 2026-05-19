function Photo(props) {
    return (
        <div key={props.id}>
        <p>{props.title}</p>
        <img src={props.image} alt={props.title} />
        </div>
    )
}

export default Photo
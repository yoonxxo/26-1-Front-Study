function Photo({id, title, image}) {
  return (
    <div key={id}>
        <p>{title}</p>
        <img src={image} alt={title} />
    </div>
  )
}

export default Photo
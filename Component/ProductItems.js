
const ProductItems = (props) => {
  //console.log(itsMychoice)
const { image , title , price ,  rating } = props.itsMychoice
  return (
    <div className="Product" >
      <img  className="image" src={image}></img>
        <h1>Title {title}</h1>
        <p>Rating {rating.rate}</p>
        <p>Price {price}</p>
    </div>
  )
}
export default ProductItems
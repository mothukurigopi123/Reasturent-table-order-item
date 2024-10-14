import './Product.css'
function Product(props)
{
    console.log(props);
    return (
        <div className="a">
            <p>{props.title}</p>
            <p>{props.price}</p>
            <p>{props.price>5000?"Discount of 25%" : "no discount"}</p>
            </div>
    )
}
export default Product
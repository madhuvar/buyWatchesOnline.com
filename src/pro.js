import p3 from './now1.jpg'
import p4 from './now2.jpg'
import p5 from './now3.jpg'
import p6 from './now4.jpg'
import p7 from './now5.jpg'
function Product(){
    return(
        <>
            <h3>Our Product</h3>
            <img src={p3} width="100" alt='Rolex: 3,261 Wristwatches' />
            <p>Rolex: 3,261 Wristwatches</p>
            <p>Actual price: ₹5,821.00 </p>
            <p>Discount price:₹4,710.00</p>
            <p>Save: ₹1,111.00 (19%) Inclusive of all taxes</p>
            <input type="button" value="shop" />
            <br/>
            <br/>
            <br/>
        <img src={p4} width="100" alt=''/>
        <p>Datejust</p>
        <p>Actual price:₹5,000</p> 
        <p>Discount price:₹4,500</p>
        <p>Save: ₹500.00 (10%) Inclusive of all taxes</p>
        <input type="button" value="shop"/>
        <br/>
            <br/>
            <br/>
        <img src={p5} width="100" alt=''/>
        <p>GMT MASTER-II</p>
        <p>Actual price:₹7,000</p> 
        <p>Discount price:₹5,500</p>
        <p>Save: ₹1,500.00 (20%) Inclusive of all taxes</p>
        <input type="button" value="shop"/>
        <br/>
            <br/>
            <br/>
        <img src={p6} width="100" alt=''/>
        <p>Day-Date</p>
        <p>Actual price:₹6,000</p> 
        <p>Discount price:₹5,500</p>
        <p>Save: ₹500.00 (10%) Inclusive of all taxes</p>
        <input type="button" value="shop"/>
        <br/>
            <br/>
            <br/>
        <img src={p7} width="100" alt=''/>
        <p>Submari</p>
        <p>Actual price:₹7,000</p> 
        <p>Discount price:₹3,500</p>
        <p>Save: ₹400.00 (21%) Inclusive of all taxes</p>
        <input type="button" value="shop"/>
        <br/>
            <br/>
            <br/>
        <img src={p5} width="100" alt=''/>
        <p>Oyster prepetual</p>
        <p>Actual price:₹8,000</p> 
        <p>Discount price:₹5,500</p>
        <p>Save: ₹2,500.00 (40%) Inclusive of all taxes</p>
        <input type="button" value="shop"/>





        </>
    )
} 
export default Product
function Contact(){
    return(
        <>
         <h3>contact us</h3>
        <form>
            <input type="text" placeholder="Enter your name"/>
            <br/>
            <br/>
            <input type="email" placeholder="Enter your email"/>
            <br/>  
            <br/>
            <input type="phone-number" placeholder="Enter the number"/>
            <br/>
            <br/>   
            <textarea cols="80" rows="5" placeholder="Enter the query"></textarea>
            <br/>
            <br/>
            <input type="submit"/>
        </form>
        </>
    )
}
export default Contact
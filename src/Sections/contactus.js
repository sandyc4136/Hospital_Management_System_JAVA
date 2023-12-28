

function contactus(){
    return (
        <>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-30">
                <div className="col-lg-6">
                Thank you for your interest in our Hospital Management System. We value your feedback, inquiries, and suggestions. Please feel free to reach out to us using the contact information provided below.
                </div>
                <div className="col-lg-6">
                    <p><b>Email:</b> info@hospitalmanagementsystem.com</p>
                    <p><b>Phone:</b> +1 (555) 123-4567</p>

                </div>
                <div><b>Address:</b>
                        Hospital Management System Headquarters
                        123 Health Tech Avenue
                        Cityville, State 54321
                        Country
                </div>
            </div>
            <div className="col-lg-6 mb-30">
                <form action="#" className="gap-1">
                <label>Full Name :</label>
                <input type="text"/><br/><br/>
                <label>Email :</label>
                <input type="email"/><br/><br/>
                <label>Contact No. :</label>
                <input type="text"/><br/><br/>
                <label>Message :</label>
                <input type="text"/><br/><br/>
                <input type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    </div>
    </>
    )
}
export default contactus;
import { FormEvent } from "react";
import "./Contact.css"


function Contact() {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        const form = e.currentTarget;

        const formData = new FormData(form);

        const firstname = formData.get("firstname");
        const lastname = formData.get("lastname");
        const email = formData.get("email");
        const queryType = formData.get("queryType")
        const message = formData.get("message");
        const consent = formData.get("consent") === "on";

        form.reset();

        alert(`
            First Name: ${firstname} 
            Last Name: ${lastname} 
            Email: ${email}
            QueryType: ${queryType}
            Message: ${message} 
            Consent: ${consent ? "Yes" : "No"}
        `)

    };


    return (
        <section className="contactForm">
            <form 
            className="form" 
            onSubmit={handleSubmit}>

                <section className="title">
                    <h1>Contact Us</h1>
                </section>

                <section className="person">
                    <div className="firstName">
                        <label htmlFor="firstname">
                            First Name *
                        </label>
                        <input 
                        className="inputFirstName"
                        name="firstname" 
                        type="text" 
                        id="firstname" 
                        required
                        />
                    </div>

                    <div className="lastName">
                        <label htmlFor="lastname">
                            Last Name *
                        </label>
                        <input 
                        className="inputLastName"
                        name="lastname" 
                        type="text" 
                        id="lastname" 
                        required
                        />
                    </div>

                </section>

                <section className="email">
                    <label htmlFor="email">
                        Email Address *
                    </label>
                    <input 
                    className="inputEmail"
                    name="email" 
                    type="email" 
                    id="email" 
                    required
                    />
                </section>

                <section className="typeOfQuery">
                    <label className="titleTypeOfQuery">
                        Query Type *
                    </label>
                    <section className="queryButtons">
                        <div className="generalEnquiry">
                            <input 
                            
                            name="queryType" 
                            type="radio" 
                            id="generalEnquiry" 
                            value="generalEnquiry" 
                            required
                            />
                            <label htmlFor="generalEnquiry">
                                General Enquiry
                            </label>
                        </div>
                        <div className="supportRequest">
                            <input 
                            name="queryType" 
                            type="radio" 
                            id="supportRequest" 
                            value="supportRequest"
                            />
                            <label htmlFor="supportRequest">
                                Support Request
                            </label>
                        </div>
                    </section>

                </section>

                <section className="message">
                    <label htmlFor="message">
                        Message *
                    </label>
                    <textarea 
                    className="writeMessage"
                    name="message" 
                    id="message" 
                    required
                    />
                </section>

                <section className="consent">
                    <input 
                    name="consent" 
                    type="checkbox" 
                    id="consent" 
                    required
                    />
                    <label htmlFor="consent">
                        I consent to being contacted by the team *
                    </label>
                </section>

                <section className="submitForm">
                    <button type="submit">Submit</button>
                </section> 
            </form>
        </section>
    );
}

export default Contact;
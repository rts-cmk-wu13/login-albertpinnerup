import { Form, useActionData } from "react-router";
import type { ContactErrors } from "../types/contactTypes";
import "../styles/contact.scss"


export default function Contact() {
    const errors = useActionData<ContactErrors>();
     
       

    return (
        <>
            <h1>Contact</h1>
            <Form method="post">
                <div className="formgroup">
                    <label className="formgroup__label" htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                    />
                    <p className="error">{errors && errors?.name?.errors[0]}</p>
                </div>
                <div className="formgroup">
                    <label className="formgroup__label" htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                    />
                    <p className="error">{errors && errors?.email?.errors[0]}</p>
                </div>
                <div className="formgroup">
                    <label className="formgroup__label" htmlFor="message">Message:</label>
                    <textarea
                        name="message"
                        id="message"
                        placeholder="message"
                    ></textarea>
                    <p className="error">{errors && errors?.message?.errors[0]}</p>
                </div>

                <button type="submit">Submit</button>
            </Form>
        </>
    );
}

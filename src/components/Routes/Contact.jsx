import React from 'react'
import Header from '../Header';
import NavBar from '../NavBar';

function Contact() {

    function handleSubmit(event) {
        event.preventDefault()
    }
    return(
        <div className="header">
            <header>
            <img className="bakedgif" src="/images/bake.gif" />
            <div className="classcard" >
                <div className="Front" >
                    <h3>Cake Decorating</h3>
                    <h4>Mondays Wednesdays + Fridays from 7-9PM</h4>
                    <img src='/images/availablenow.gif'/>
                </div>
                <h2>Want to be a master-baker? Sign up for classes below:
                </h2>
                {/* <div className="Back">
                    <h4>Serves: {recipe.serves}</h4>
                    <h4>Ingredients: {recipe.ingredients}</h4>
                </div> */}
            </div>
                <div className="contactform">
                    <form onSubmit={handleSubmit} >
                        <input type="text" id="name" placeholder="Name" />
                        <input type="text" id="email" placeholder="Email" />
                        <input type="text" id="phone" placeholder="Contact #" />
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <img className="envelope" src="/images/envelope.jpg" />
                <h3>Want to get in touch?</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" id="contact" placeholder="Write us here!" />
                    <button type="submit">Submit</button>
                </form>
            </header>
        </div>
    )
}

export default Contact;
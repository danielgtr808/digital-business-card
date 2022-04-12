function ContactInfo() {
    return (
        <div className="contact-info">
            <div className="contact-info__person-data">
                <h1>Laura Smith</h1>
                <h3>Front-end developer</h3>
                <h4>laurasmith.website</h4>
            </div>
            <div className="contact-info__contact-buttons">
                <button className="btn white-button"><div className="email-icon"></div> Email</button>
                <button className="btn blue-button"><div className="linkedin-icon"></div> Linkedin</button>
            </div>
        </div>
    )
}

export default ContactInfo
import profilePicture from "../assets/laura-smith-picture.png"

function CardWrapper() {
    return (
        <div className="card-wrapper">
            <img className="card-wrapper__profile-picture" src={profilePicture} />
            <div className="card-wrapper__person-info">
                <div className="card-wrapper__contact-info">
                    <h1>Laura Smith</h1>
                    <h3>Front-end developer</h3>
                    <h4>laurasmith.website</h4>
                    <div className="card-wrapper__professional-buttons">
                        <button className="btn white-button">Email</button>
                        <button className="btn blue-button">Linkedin</button>
                    </div>
                </div>
                <div className="card-wrapper__about">
                    <h2>About</h2>
                    <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                </div>
                <div className="card-wrapper__interests">
                    <h2>Interests</h2>
                    <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </div>
            </div>
            <div className="card-wrapper__social-buttons"></div>
        </div>
    )
}

export default CardWrapper
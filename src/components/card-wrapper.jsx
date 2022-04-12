import profilePicture from "../assets/image/laura-smith-picture.png";
import CardTopic from "./card-topic";
import ContactInfo from "./contact-info"

function CardWrapper() {
    return (
        <div className="card-wrapper">
            <img className="card-wrapper__profile-picture" src={profilePicture} />
            <div className="card-wrapper__person-info">
                <ContactInfo/>
                <div className="card-wrapper__topics">
                    <CardTopic
                        content="I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn."
                        title="About"
                    />
                    <CardTopic
                        content="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic"
                        title="Interests"
                    />
                </div>
            </div>
            <div className="card-wrapper__social-buttons">
                <div className="twitter-icon"></div>
                <div className="facebook-icon"></div>
                <div className="instagram-icon"></div>
                <div className="github-icon"></div>
            </div>
        </div>
    )
}

export default CardWrapper
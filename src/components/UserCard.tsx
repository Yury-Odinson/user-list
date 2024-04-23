import iconMail from "../assets/img/user-card-mail.png";
import iconWebsite from "../assets/img/user-card-website.png";
import iconPhone from "../assets/img/user-card-phone.png";


export const UserCard = () => {
    return (
        <div className="user-card">
            <div className="user-card-header">
                <p className="user-card-header__initials">LA</p>
                <div>
                    <p className="user-card-header__name">name</p>
                    <p className="user-card-header__username">username</p>
                </div>
            </div>

            <div className="user-card-info">
                <ul>
                    <li className="user-card-info__item">
                        <img src={iconMail} width={25} height={25} alt="mail"/>
                        <p>email: email</p>
                    </li>
                    <li className="user-card-info__item">
                        <img src={iconWebsite} width={25} height={25} alt="mail"/>
                        <p>website: website</p>
                    </li>
                    <li className="user-card-info__item">
                        <img src={iconPhone} width={25} height={25} alt="mail"/>
                        <p>phone: phone</p>
                    </li>
                </ul>
            </div>


        </div>
    );
};

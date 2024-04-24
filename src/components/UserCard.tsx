import iconMail from "../assets/img/user-card-mail.png";
import iconWebsite from "../assets/img/user-card-website.png";
import iconPhone from "../assets/img/user-card-phone.png";
import {CardProps} from "../tools/utils";


export const UserCard = ({name, username, email, website, phone}: CardProps) => {

    const getInitials = (): string => {
        const words: string[] = name.split(" ");
        const firstLetter: string = words[0].charAt(0);
        const secondLetter: string = words[1].charAt(0);
        return firstLetter + secondLetter;
    };

    return (
        <div className="user-card">
            <div className="user-card-header">
                <div className="user-card-header__initials">
                    <p>{getInitials()}</p>
                </div>
                <div>
                    <p className="user-card-header__name">{name}</p>
                    <p className="user-card-header__username">{username}</p>
                </div>
            </div>

            <div className="user-card-info">
                <ul>
                    <li className="user-card-info__item">
                        <img src={iconMail} width={25} height={25} alt="mail"/>
                        <p>email: <a type="email" href={`mailto:${email}`}>{email}</a></p>
                    </li>
                    <li className="user-card-info__item">
                        <img src={iconWebsite} width={25} height={25} alt="mail"/>
                        <p>website: <a href={website} target="_blank">{website}</a></p>
                    </li>
                    <li className="user-card-info__item">
                        <img src={iconPhone} width={25} height={25} alt="mail"/>
                        <p>phone: <a type="phone" href={`tel:${phone}`}>{phone}</a></p>
                    </li>
                </ul>
            </div>

        </div>
    );
};

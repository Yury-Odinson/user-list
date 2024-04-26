import iconMail from "../assets/img/user-card-mail.png";
import iconWebsite from "../assets/img/user-card-website.png";
import iconStreet from "../assets/img/user-card-street.png";
import iconPhone from "../assets/img/user-card-phone.png";
import iconSuite from "../assets/img/user-card-suite.png";
import iconCity from "../assets/img/user-card-city.png";
import iconZipcode from "../assets/img/user-card-zipcode.png";
import iconNameCompany from "../assets/img/user-card-nameCompany.png";
import iconCatchPhrase from "../assets/img/user-card-catchPhrase.png";
import iconBs from "../assets/img/user-card-bs.png";
import {CardProps} from "../tools/types";
import {useState} from "react";


export const UserCard = ({name, username, email, website, phone, address, company}: CardProps) => {

    const [inDetail, setInDetail] = useState<boolean>(false);

    const getInitials = (): string => {
        const words: string[] = name.split(" ");
        const firstLetter: string = words[0].charAt(0);
        const secondLetter: string = words[1].charAt(0);
        return firstLetter + secondLetter;
    };

    return (
        <div className={inDetail ? "user-card user-card-inDetail" : "user-card"}
             onClick={() => setInDetail(!inDetail)}
        >
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


                    <li className="user-card-info__item">
                        <img src={iconStreet} width={25} height={25} alt="mail"/>
                        <p>street: {address.street}</p>
                    </li>
                    <li className="user-card-info__item">
                        <img src={iconSuite} width={25} height={25} alt="mail"/>
                        <p>suite: {address.suite}</p>
                    </li>
                    <li className="user-card-info__item">
                        <img src={iconCity} width={25} height={25} alt="mail"/>
                        <p>city: {address.city}</p>
                    </li>
                    <li className="user-card-info__item">
                        <img src={iconZipcode} width={25} height={25} alt="mail"/>
                        <p>zipcode: {address.zipcode}</p>
                    </li>
                    <li className="user-card-info__item">
                        <img src={iconNameCompany} width={25} height={25} alt="mail"/>
                        <p>name company: {company.name}</p>
                    </li>
                    <li className="user-card-info__item">
                        <img src={iconCatchPhrase} width={25} height={25} alt="mail"/>
                        <p>catchPhrase: {company.catchPhrase}</p>
                    </li>
                    <li className="user-card-info__item">
                        <img src={iconBs} width={25} height={25} alt="mail"/>
                        <p>bs: {company.bs}</p>
                    </li>

                </ul>
            </div>

        </div>
    );
};

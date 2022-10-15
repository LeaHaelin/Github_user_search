import profilePhoto from "./images/main_profile.svg";
import iconLocation from "./images/icon-location.svg";
import iconWeb from "./images/icon-website.svg";
import iconTwitter from "./images/icon-twitter.svg";
import iconCompany from "./images/icon-company.svg";

export function User({ isDark, setIsDark, inputData }) {
    return (
        <div className={isDark ? "user" : "user user--light"}>
            <section className="user__profile">
                <img className="profile__photo" src={inputData ? inputData.avatar_url : profilePhoto} alt="" />
                <div className="profile__text">
                    <h1 className={isDark ? "profile__text--name" : "profile__text--name name--light"}>{inputData ? inputData.name : "Octopus"}</h1>
                    <p className="profile__text--acount" >@{inputData ? inputData.login : "octocat"}</p>
                    <p className={isDark ? "profile__text--date" : "profile__text--date date--light"}>Joined {inputData ? inputData.created_at : "-"}</p>
                </div>
            </section>

            <p className={isDark ? "user__text" : "user__text user__text--light"}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>

            <section className={isDark ? "user__datas" : "user__datas user__datas--light"}>
                <div className={isDark ? "datas__data repos" : "datas__data repos datas__data--light"} >
                    <p className={isDark ? "datas__data--title" : "datas__data--title title--light"}>Repos</p>
                    <p className={isDark ? "datas__data--num" : "datas__data--num num--light"} >{inputData ? inputData.public_repos : "0"}</p>
                </div>
                <div className={isDark ? "datas__data followers" : "datas__data followers datas__data--light"}>
                    <p className={isDark ? "datas__data--title" : "datas__data--title title--light"}>Followers</p>
                    <p className={isDark ? "datas__data--num" : "datas__data--num num--light"}>{inputData ? inputData.followers : "0"}</p>
                </div>
                <div className={isDark ? "datas__data following" : "datas__data following datas__data--light"}>
                    <p className={isDark ? "datas__data--title" : "datas__data--title title--light"}>Following</p>
                    <p className={isDark ? "datas__data--num" : "datas__data--num num--light"}>{inputData ? inputData.following : "0"}</p>
                </div >
            </section >
            <section className="user__links">
                <div className="link location">
                    <img className={isDark ? "link__icon icon-location" : "link__icon icon-location link__icon--light"} src={iconLocation} alt="" />
                    <a className={isDark ? "link__text" : "link__text link__text--light"} href="#">{inputData ? inputData.location : "-"}</a>
                </div>
                <div className="link website">
                    <img className={isDark ? "link__icon" : "link__icon link__icon--light"} src={iconWeb} alt="" />
                    <a className={isDark ? "link__text" : "link__text link__text--light"}>{inputData ? inputData.url : "-"}</a>
                </div>
                <div className="link twitter">
                    <img className={isDark ? "link__icon" : "link__icon link__icon--light"} src={iconTwitter} alt="" />
                    <a className={isDark ? "link__text" : "link__text link__text--light"}>{inputData ? inputData.twitter_username : "Not Available"}</a>
                </div>
                <div className="link company">
                    <img className={isDark ? "link__icon" : "link__icon link__icon--light"} src={iconCompany} alt="" />
                    <a className={isDark ? "link__text" : "link__text link__text--light"}>@{inputData ? inputData.company : "-"}</a>
                </div>
            </section>

        </div >
    )
}

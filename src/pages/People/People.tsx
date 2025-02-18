// import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// import styles from "./People.module.scss";
// import classNames from "classnames/bind";
// const cn = classNames.bind(styles);

// import { tg } from "../../constants/app";
// import { Routes } from "../../routes/routes";

// import GreenBg from "../../components/GreenBg/GreenBg";
// import Coins from "./modules/Coins";
// import PopupListTabs from "../../components/PopupList/modules/PopupListTabs";
// import PopupList from "../../components/PopupList/PopupList";
// import PersonBlock from "../../components/PersonBlock/PersonBlock";
// import PopupListWrap from "../../components/PopupList/modules/PopupListWrap";

// const People = () => {
//    const location = useLocation();
//    const navigate = useNavigate();

//    const [activeTab, setActiveTab] = useState(
//       location.state?.label ?? "FARM FRENDS"
//    );

//    useEffect(() => {
//       tg.BackButton.show();
//       tg.BackButton.onClick(() => navigate(-1));
//       return () => tg.BackButton.hide();
//    }, [navigate]);

//    return (
//       <div className={cn("wrap")}>
//          <div className={cn("people")}>
//             <h2 className={`${cn("people__title")}` + " textShadow"}>
//                4 frends
//             </h2>
//             <Coins quantity={"1 180 000"} />
//             <div
//                className={cn("people__invite-btn")}
//                onClick={() => navigate(Routes.INVITE)}>
//                <span className={cn("people__invite-btn-text")}>
//                   {" "}
//                   Invite freiend
//                </span>
//                <img src="img/pages/invite/btn.svg" alt="Invite friends" />
//             </div>

//             {/* Списко пользователей */}
//             <PopupListWrap className={cn("people__list")} isOpen={true}>
//                <PopupListTabs
//                   labels={["FARM FRENDS", "LEADERBOARD"]}
//                   activeTab={activeTab}
//                   onTabChange={(label) => setActiveTab(label)}
//                   labelClassName={cn("people__list-tab-label")}
//                />
//                {activeTab === "FARM FRENDS" && (
//                   <PopupList
//                      nodes={[
//                         <PersonBlock
//                            name="Nickname User"
//                            imgSrc="img/pages/people/person.png"
//                            earning="1 260 000"
//                            coinAmount="983 124"
//                         />,
//                         <PersonBlock
//                            name="Nickname User"
//                            imgSrc="img/pages/people/person.png"
//                            earning="1 260 000"
//                            coinAmount="983 124"
//                         />,
//                         <PersonBlock
//                            name="Nickname User"
//                            imgSrc="img/pages/people/person.png"
//                            earning="1 260 000"
//                            coinAmount="983 124"
//                         />,
//                         <PersonBlock
//                            name="Nickname User"
//                            imgSrc="img/pages/people/person.png"
//                            earning="1 260 000"
//                            coinAmount="983 124"
//                         />,
//                         <PersonBlock
//                            name="Nickname User"
//                            imgSrc="img/pages/people/person.png"
//                            earning="1 260 000"
//                            coinAmount="983 124"
//                         />,
//                      ]}
//                      type="second"
//                   />
//                )}

//                {activeTab === "LEADERBOARD" && (
//                   <PopupList
//                      nodes={[
//                         <PersonBlock
//                            name="Nickname User"
//                            imgSrc="img/pages/people/person.png"
//                            earning="1 260 000"
//                            coinAmount="983 124"
//                            inviteMode
//                            rating={1}
//                         />,
//                         <PersonBlock
//                            name="Nickname User"
//                            imgSrc="img/pages/people/person.png"
//                            earning="1 260 000"
//                            coinAmount="983 124"
//                            inviteMode
//                            rating={2}
//                         />,
//                         <PersonBlock
//                            name="Nickname User"
//                            imgSrc="img/pages/people/person.png"
//                            earning="1 260 000"
//                            coinAmount="983 124"
//                            inviteMode
//                            rating={3}
//                         />,
//                         <PersonBlock
//                            name="Nickname User"
//                            imgSrc="img/pages/people/person.png"
//                            earning="1 260 000"
//                            coinAmount="983 124"
//                            inviteMode
//                            rating={4}
//                         />,
//                         <PersonBlock
//                            name="Nickname User"
//                            imgSrc="img/pages/people/person.png"
//                            earning="1 260 000"
//                            coinAmount="983 124"
//                            inviteMode
//                            rating={5}
//                         />,
//                      ]}
//                      type="second"
//                   />
//                )}
//             </PopupListWrap>

//             {/* Звезды на заднем фоне */}
//             <div className={cn("bg-elements")}>
//                <img src="img/pages/people/star.svg" alt="star" />
//                <img src="img/pages/people/star.svg" alt="star" />
//                <img src="img/pages/people/star.svg" alt="star" />
//                <img src="img/pages/people/star.svg" alt="star" />
//                <img src="img/pages/people/star.svg" alt="star" />
//                <img src="img/pages/people/star.svg" alt="star" />
//                <img src="img/pages/people/star.svg" alt="star" />
//                <img src="img/pages/people/star.svg" alt="star" />
//                <img src="img/pages/people/star.svg" alt="star" />
//                <img src="img/pages/people/star.svg" alt="star" />
//                <img src="img/pages/people/star.svg" alt="star" />
//             </div>
//             <GreenBg />
//          </div>

//          {/* Кнопка закрытия страницы */}
//          <img
//             src="img/global/closeIcon.svg"
//             onClick={() => navigate(Routes.HOME)}
//             className={cn("close")}
//             alt="Close"
//          />
//       </div>
//    );
// };

// export default People;









import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./People.module.scss";
import classNames from "classnames/bind";
import { tg } from "../../constants/app";
import { Routes } from "../../routes/routes";
import GreenBg from "../../components/GreenBg/GreenBg";
import Coins from "./modules/Coins";
import PopupListTabs from "../../components/PopupList/modules/PopupListTabs";
import PopupList from "../../components/PopupList/PopupList";
import PersonBlock from "../../components/PersonBlock/PersonBlock";
import PopupListWrap from "../../components/PopupList/modules/PopupListWrap";
import { RootState } from "../../store";
import { useAppSelector } from "../../store";
const cn = classNames.bind(styles);

interface User {
  id: number;
  username: string;
  coins: number;
  totalEarnings: number;
  incomeMultiplier: number;
  coinsPerHour: number;
  xp: number;
  level: number;
}

const People = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(location.state?.label ?? "FARM FRENDS");
  const [users, setUsers] = useState<User[]>([]);
  const [friends, setFriends] = useState<User[]>([]);
  const [referralCount, setReferralCount] = useState(0);
  const user = useAppSelector((state: RootState) => state.user.user);


  useEffect(() => {
    tg.BackButton.show();
    tg.BackButton.onClick(() => navigate(-1));
    return () => tg.BackButton.hide();
  }, [navigate]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://coinfarm.club/user/'); // Замените на реальный URL API
        const data: User[] = await response.json();
        const sortedUsers = data.sort((a, b) => b.coinsPerHour - a.coinsPerHour); // Сортировка по убыванию прибыли в час
        setUsers(sortedUsers);
      } catch (error) {
        console.error('Failed to fetch users', error);
      }
    };

    fetchUsers();
  }, []);
  useEffect(() => {
    const fetchReferrals = async () => {
      try {
        const response = await fetch(`https://coinfarm.club/user/${user.id}/referrals`);
        if (!response.ok) {
          throw new Error('Failed to fetch referrals');
        }
        const data: User[] = await response.json();
        const sortedUsers = data.sort((a, b) => b.coinsPerHour - a.coinsPerHour); // Сортировка по убыванию прибыли в час
        setFriends(sortedUsers);
        setReferralCount(data.length);
      } catch (error) {
        console.error('Error fetching referrals:', error);
      }
    };
  
    fetchReferrals();
  }, [user.id]);
  

  return (
    <div className={cn("wrap")}>
      <div className={cn("people")}>
      <h2 className={`${cn("people__title")}` + " textShadow"}>{referralCount} friends</h2>
      <Coins quantity={user.totalEarnings} />
        <div className={cn("people__invite-btn")} onClick={() => navigate(Routes.INVITE)}>
          <span className={cn("people__invite-btn-text")}> Invite freiend</span>
          <img src="img/pages/invite/btn.svg" alt="Invite friends" />
        </div>

        <PopupListWrap className={cn("people__list")} isOpen={true}>
          <PopupListTabs
            labels={["FARM FRENDS", "LEADERBOARD"]}
            activeTab={activeTab}
            onTabChange={(label) => setActiveTab(label)}
            labelClassName={cn("people__list-tab-label")}
          />
          {activeTab === "FARM FRENDS" && (
            <PopupList
              nodes={friends.map((user) => (
                <PersonBlock
                  key={user.id}
                  name={user.username}
                  imgSrc={"img/pages/people/person.png"}
                  earning={user.coinsPerHour.toString()}
                  coinAmount={user.coins.toString()}
                />
              ))}
              type="second"
            />
          )}

          {activeTab === "LEADERBOARD" && (
            <PopupList
              nodes={users.map((user, index) => (
                <PersonBlock
                  key={user.id}
                  name={user.username}
                  imgSrc={"img/pages/people/person.png"}
                  earning={user.coinsPerHour.toString()}
                  coinAmount={user.coins.toString()}
                  inviteMode
                  rating={index + 1}
                />
              ))}
              type="second"
            />
          )}
        </PopupListWrap>

        <div className={cn("bg-elements")}>
          {/* Звезды на заднем фоне */}
          <img src="img/pages/people/star.svg" alt="star" />
          <img src="img/pages/people/star.svg" alt="star" />
          <img src="img/pages/people/star.svg" alt="star" />
          <img src="img/pages/people/star.svg" alt="star" />
          <img src="img/pages/people/star.svg" alt="star" />
          <img src="img/pages/people/star.svg" alt="star" />
          <img src="img/pages/people/star.svg" alt="star" />
          <img src="img/pages/people/star.svg" alt="star" />
          <img src="img/pages/people/star.svg" alt="star" />
          <img src="img/pages/people/star.svg" alt="star" />
          <img src="img/pages/people/star.svg" alt="star" />
        </div>
        <GreenBg />
      </div>

      <img
        src="img/global/closeIcon.svg"
        onClick={() => navigate(Routes.HOME)}
        className={cn("close")}
        alt="Close"
      />
    </div>
  );
};

export default People;





// import classNames from "classnames/bind";
// import styles from "./FriendOrSpecialBlock.module.scss";
// import Button from "../Button/Button";
// import CoinWhiteBg from "../CoinWhiteBg/CoinWhiteBg";
// const cn = classNames.bind(styles);

// interface IFreindOrSpecialBlockProps {
//    imgSrc: string;
//    earning: string;
//    link: string;
//    title: string;
// }

// const FreindOrSpecialBlock = ({
//    imgSrc,
//    earning,
//    link,
//    title,
// }: IFreindOrSpecialBlockProps) => {
//    return (
//       <div className={cn("block")}>
//          <div className={cn("block__inner")}>
//             <div className={cn("block__left")}>
//                <img
//                   src={imgSrc}
//                   className={cn("block__icon")}
//                   alt="Telegramm"
//                />
//                <div className={cn("block__info")}>
//                   <strong
//                      className={`${cn("block__title")}` + " textShadow_center"}>
//                      {title}
//                   </strong>
//                   <div className={cn("block__earning")}>
//                      <span className="textShadow_center">+{earning}</span>
//                      <CoinWhiteBg size="small" />
//                      {/* <img src="img/coins/BTC.svg" /> */}
//                   </div>
//                </div>
//             </div>
//             <div className={cn("block__link")}>
//                <Button
//                   className="textShadow_center"
//                   onClick={() => window.open(link)}>
//                   GO TO
//                </Button>
//             </div>
//          </div>
//       </div>
//    );
// };

// export default FreindOrSpecialBlock;




// import classNames from "classnames/bind";
// import styles from "./FriendOrSpecialBlock.module.scss";
// import Button from "../Button/Button";
// import CoinWhiteBg from "../CoinWhiteBg/CoinWhiteBg";
// import axios from "axios";
// const cn = classNames.bind(styles);

// interface IFreindOrSpecialBlockProps {
//    imgSrc: string;
//    earning: string;
//    link: string;
//    title: string;
// }

// const FreindOrSpecialBlock = ({
//    imgSrc,
//    earning,
//    link,
//    title,
// }: IFreindOrSpecialBlockProps) => {
//    const handleButtonClick = async () => {
//       const userId = 114; // замените на актуальный ID пользователя
//       let url = "https://coinfarm.club/reward/";

//       switch (title) {
//          case "JOIN GROUP":
//             url = `https://coinfarm.club/reward/group/${userId}`;
//             break;
//          case "JOIN CHAT":
//             url = `https://coinfarm.club/reward/chat/${userId}`;
//             break;
//          case "JOIN X":
//             url = `https://coinfarm.club/reward/x/${userId}`;
//             break;
//          default:
//             console.error("Unknown title:", title);
//             return;
//       }

//       try {
//          const response = await axios.post(url);
//          console.log("Response:", response.data);
//          window.open(link);
//       } catch (error) {
//          console.error("Error:", error);
//       }
//    };

//    return (
//       <div className={cn("block")}>
//          <div className={cn("block__inner")}>
//             <div className={cn("block__left")}>
//                <img
//                   src={imgSrc}
//                   className={cn("block__icon")}
//                   alt={title}
//                />
//                <div className={cn("block__info")}>
//                   <strong
//                      className={`${cn("block__title")}` + " textShadow_center"}>
//                      {title}
//                   </strong>
//                   <div className={cn("block__earning")}>
//                      <span className="textShadow_center">+{earning}</span>
//                      <CoinWhiteBg size="small" />
//                   </div>
//                </div>
//             </div>
//             <div className={cn("block__link")}>
//                <Button
//                   className="textShadow_center"
//                   onClick={handleButtonClick}>
//                   GO TO
//                </Button>
//             </div>
//          </div>
//       </div>
//    );
// };

// export default FreindOrSpecialBlock;



// import classNames from 'classnames/bind';
// import styles from './FriendOrSpecialBlock.module.scss';
// import Button from '../Button/Button';
// import CoinWhiteBg from '../CoinWhiteBg/CoinWhiteBg';
// import axios from 'axios';
// import { useAppSelector } from '../../store'; // Adjust the path as necessary
// import { RootState } from '../../store'; // Adjust the path as necessary

// const cn = classNames.bind(styles);

// interface IFreindOrSpecialBlockProps {
//   imgSrc: string;
//   earning: string;
//   link: string;
//   title: string;
// }

// const FreindOrSpecialBlock = ({
//   imgSrc,
//   earning,
//   link,
//   title,
// }: IFreindOrSpecialBlockProps) => {
//   const userId = useAppSelector((state: RootState) => state.user.user?.id);

//   const handleButtonClick = async () => {
//     if (!userId) {
//       console.error("User ID is not available");
//       return;
//     }

//     let url = "https://coinfarm.club/reward/";

//     switch (title) {
//       case "JOIN GROUP":
//         url = `https://coinfarm.club/reward/group/${userId}`;
//         break;
//       case "JOIN CHAT":
//         url = `https://coinfarm.club/reward/chat/${userId}`;
//         break;
//       case "JOIN X":
//         url = `https://coinfarm.club/reward/x/${userId}`;
//         break;
//       default:
//         console.error("Unknown title:", title);
//         return;
//     }

//     try {
//       const response = await axios.post(url);
//       console.log("Response:", response.data);
//       window.Telegram.WebApp.openLink(link);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div className={cn("block")}>
//       <div className={cn("block__inner")}>
//         <div className={cn("block__left")}>
//           <img
//             src={imgSrc}
//             className={cn("block__icon")}
//             alt={title}
//           />
//           <div className={cn("block__info")}>
//             <strong
//               className={`${cn("block__title")}` + " textShadow_center"}>
//               {title}
//             </strong>
//             <div className={cn("block__earning")}>
//               <span className="textShadow_center">+{earning}</span>
//               <CoinWhiteBg size="small" />
//             </div>
//           </div>
//         </div>
//         <div className={cn("block__link")}>
//           <Button
//             className="textShadow_center"
//             onClick={handleButtonClick}>
//             GO TO
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FreindOrSpecialBlock;





// import classNames from 'classnames/bind';
// import styles from './FriendOrSpecialBlock.module.scss';
// import Button from '../Button/Button';
// import CoinWhiteBg from '../CoinWhiteBg/CoinWhiteBg';
// import axios from 'axios';
// import { useAppSelector } from '../../store'; // Adjust the path as necessary
// import { RootState } from '../../store'; // Adjust the path as necessary
// import { useState, useEffect } from 'react';

// const cn = classNames.bind(styles);

// interface IFreindOrSpecialBlockProps {
//   imgSrc: string;
//   earning: string;
//   link: string;
//   title: string;
//   defaultButtonText: string;
//   refs?: string;
// }

// const FreindOrSpecialBlock = ({
//   imgSrc,
//   earning,
//   link,
//   title,
//   defaultButtonText,
//   refs
// }: IFreindOrSpecialBlockProps) => {
//   const userId = useAppSelector((state: RootState) => state.user.user?.id);
//   const [isCompleted, setIsCompleted] = useState(false);
//   const [buttonText, setButtonText] = useState(defaultButtonText);

//   useEffect(() => {
//     const fetchCompletedTasks = async () => {
//       if (!userId) return;
//       console.log(refs)
//       try {
//         const response = await axios.get(`https://coinfarm.club/reward/${userId}`);
//         const completedTasks = response.data;

//         const taskCompleted = completedTasks.some((task: any) => task.description === title); // Замените 'specific-type' на реальный тип задания
//         setIsCompleted(taskCompleted);
//         if (taskCompleted) {
//           setButtonText("DONE");
//         }
//       } catch (error) {
//         console.error('Error fetching completed tasks:', error);
//       }
//     };

//     fetchCompletedTasks();

//   }, [userId, title]);

//   const handleButtonClick = async () => {
//     if (!userId || isCompleted) {
//       console.error("User ID is not available or task is already completed");
//       return;
//     }
//     setButtonText("CHECK");

//     let url = "https://coinfarm.club/reward/";

//     switch (title) {
//       case "JOIN GROUP":
//         url = `https://coinfarm.club/reward/group/${userId}`;
//         break;
//       case "JOIN CHAT":
//         url = `https://coinfarm.club/reward/chat/${userId}`;
//         break;
//       case "JOIN X":
//         url = `https://coinfarm.club/reward/x/${userId}`;
//         break;
//       default:
//         console.error("Unknown title:", title);
//         return;
//     }

//     try {
//       const response = await axios.post(url);
//       console.log("Response:", response.data);
//       setIsCompleted(true)
//       window.Telegram.WebApp.openLink(link);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div className={cn("block")}>
//       <div className={cn("block__inner")}>
//         <div className={cn("block__left")}>
//           <img
//             src={imgSrc}
//             className={cn("block__icon")}
//             alt={title}
//           />
//           <div className={cn("block__info")}>
//             <strong
//               className={`${cn("block__title")}` + " textShadow_center"}>
//               {title}
//             </strong>
//             <div className={cn("block__earning")}>
//               <span className="textShadow_center">+{earning}</span>
//               <CoinWhiteBg size="small" />
//             </div>
//           </div>
//         </div>
//         <div className={cn("block__link")}>
//           <Button
//             className="textShadow_center"
//             onClick={handleButtonClick}
//             disabled={isCompleted}>
//             {buttonText}
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FreindOrSpecialBlock;









import classNames from 'classnames/bind';
import styles from './FriendOrSpecialBlock.module.scss';
import Button from '../Button/Button';
import CoinWhiteBg from '../CoinWhiteBg/CoinWhiteBg';
import axios from 'axios';
import { useAppSelector } from '../../store'; // Adjust the path as necessary
import { RootState } from '../../store'; // Adjust the path as necessary
import { useState, useEffect } from 'react';

const cn = classNames.bind(styles);

interface IFreindOrSpecialBlockProps {
  imgSrc: string;
  earning: string;
  link: string;
  title: string;
  defaultButtonText: string;
  refs?: string;
}

const FreindOrSpecialBlock = ({
  imgSrc,
  earning,
  link,
  title,
  defaultButtonText,
  refs
}: IFreindOrSpecialBlockProps) => {
  const userId = useAppSelector((state: RootState) => state.user.user?.id);
  const [isCompleted, setIsCompleted] = useState(false);
  const [buttonText, setButtonText] = useState(defaultButtonText);
  const [referralCount, setReferralCount] = useState<number>(0);

  useEffect(() => {
    const fetchCompletedTasks = async () => {
      if (!userId) return;

      try {
        const response = await axios.get(`https://coinfarm.club/reward/${userId}`);
        const completedTasks = response.data;

        const taskCompleted = completedTasks.some((task: any) => task.description === title);
        setIsCompleted(taskCompleted);

        if (taskCompleted) {
          setButtonText("DONE");
        }
      } catch (error) {
        console.error('Error fetching completed tasks:', error);
      }
    };

    const fetchReferralCount = async () => {
      if (!userId) return;

      try {
        const response = await axios.get(`https://coinfarm.club/user/${userId}/referrals/`);
        setReferralCount(response.data.length);
      } catch (error) {
        console.error('Error fetching referral count:', error);
      }
    };

    if (refs) {
      fetchReferralCount();
    } else {
      fetchCompletedTasks();
    }
  }, [userId, title, refs]);

  const handleButtonClick = async () => {
    if (!userId || isCompleted) {
      console.error("User ID is not available or task is already completed");
      return;
    }

    setButtonText("CHECK");

    let url = "https://coinfarm.club/reward/";

    switch (title) {
      case "JOIN GROUP":
        url = `https://coinfarm.club/reward/group/${userId}`;
        break;
      case "JOIN CHAT":
        url = `https://coinfarm.club/reward/chat/${userId}`;
        break;
      case "JOIN X":
        url = `https://coinfarm.club/reward/x/${userId}`;
        break;
      default:
        console.error("Unknown title:", title);
        return;
    }

    try {
      const response = await axios.post(url);
      console.log("Response:", response.data);
      setIsCompleted(true);
      setButtonText("DONE"); // Обновляем текст кнопки только для текущего элемента
      window.Telegram.WebApp.openLink(link);
    } catch (error) {
      console.error("Error:", error);
      setButtonText(defaultButtonText); // Возвращаем текст кнопки в случае ошибки
    }
  };

  const requiredRefs = refs ? parseInt(refs, 10) : 0;
  const isButtonDisabled = isCompleted || (refs ? requiredRefs > referralCount : false);

  return (
    <div className={cn("block")}>
      <div className={cn("block__inner")}>
        <div className={cn("block__left")}>
          <img
            src={imgSrc}
            className={cn("block__icon")}
            alt={title}
          />
          <div className={cn("block__info")}>
            <strong
              className={`${cn("block__title")}` + " textShadow_center"}>
              {title}
            </strong>
            <div className={cn("block__earning")}>
              <span className="textShadow_center">+{earning}</span>
              <CoinWhiteBg size="small" />
            </div>
          </div>
        </div>
        <div className={cn("block__link")}>
          <Button
            className="textShadow_center"
            onClick={handleButtonClick}
            disabled={isButtonDisabled}>
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FreindOrSpecialBlock;

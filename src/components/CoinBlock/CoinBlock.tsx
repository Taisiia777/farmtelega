// import Button from "../Button/Button";
// import CoinWhiteBg from "../CoinWhiteBg/CoinWhiteBg";

// import { TCoin } from "../../types/globalTypes";

// import classNames from "classnames/bind";
// import styles from "./CoinBlock.module.scss";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { setCoinIfno } from "../../store/reducers/coin";
// const cn = classNames.bind(styles);

// interface ICoinBlockProps {
//    coinName: TCoin;
//    earning: string;
//    price: string;
//    isBought?: boolean;
//    isBlocked?: boolean;
//    isActive?: boolean;
// }

// const CoinBlock = ({
//    coinName,
//    earning,
//    isBought = false,
//    isBlocked = false,
//    price,
//    isActive = false,
// }: ICoinBlockProps) => {
//    const dispatch = useDispatch();
//    const navigate = useNavigate();

//    function openCoinBuyPopup() {
//       dispatch(
//          setCoinIfno({
//             earning,
//             price,
//             name: coinName,
//          })
//       );
//    }

//    let content;

//    // Определяем тип контента монеты
//    // в зависимости от того купленна ли она уже
//    // или может заблокирована
//    if (isBought) {
//       content = (
//          <div className={cn("coinBlock")}>
//             <div className={cn("coinBlock__left")}>
//                <img
//                   className={cn("coinBlock__coin")}
//                   src={`video/${coinName}.gif`}
//                   alt=""
//                />
//                <div className={cn("coinBlock__info")}>
//                   <h3 className="textShadow">{coinName}</h3>
//                   <div className={cn("coinBlock__earning")}>
//                      <span>+{earning}</span>
//                      <img src="img/pages/home/energy/energy.svg" alt="Energy" />
//                   </div>
//                </div>
//             </div>
//             <div
//                className={cn("coinBlock__right")}
//                style={{
//                   height: "45px",
//                   paddingRight: "23.5px",
//                }}>
//                {isActive ? (
//                   <img
//                      src="img/global/checkbox/green.svg"
//                      className={cn("boost__checkbox")}
//                      alt="Bought"
//                   />
//                ) : (
//                   <img
//                      src="img/global/checkbox/grey.svg"
//                      className={cn("boost__checkbox")}
//                      alt="Bought"
//                   />
//                )}
//             </div>
//          </div>
//       );
//    } else if (isBlocked) {
//       content = (
//          <div className={cn("coinBlock")}>
//             <div className={cn("coinBlock__left")}>
//                <img
//                   className={cn("coinBlock__coin")}
//                   src={`video/${coinName}.gif`}
//                   alt=""
//                />
//                <div className={cn("coinBlock__info")}>
//                   <h3 className="textShadow">{coinName}</h3>
//                   <div className={cn("coinBlock__earning")}>
//                      <span>+{earning}</span>
//                      <img src="img/pages/home/energy/energy.svg" alt="Energy" />
//                   </div>
//                </div>
//             </div>
//             <div className={cn("coinBlock__right")}>
//                <div
//                   className={cn("coinBlock__invate")}
//                   style={{
//                      paddingRight: "10px",
//                   }}>
//                   <span>x10</span>
//                   <img
//                      onClick={() => navigate("/invite")}
//                      src="img/global/person-btn.svg"
//                      alt="Invite"
//                   />
//                </div>
//             </div>
//          </div>
//       );
//    } else {
//       content = (
//          <div className={cn("coinBlock")}>
//             <div className={cn("coinBlock__left")}>
//                <img
//                   className={cn("coinBlock__coin")}
//                   src={`video/${coinName}.gif`}
//                   alt=""
//                />
//                <div className={cn("coinBlock__info")}>
//                   <h3 className="textShadow">{coinName}</h3>
//                   <div className={cn("coinBlock__earning")}>
//                      <span>+{earning}</span>
//                      <img src="img/pages/home/energy/energy.svg" alt="Energy" />
//                   </div>
//                </div>
//             </div>
//             <div className={cn("coinBlock__right")} id="buyCoin">
//                <Button
//                   className={cn("coinBlock__price")}
//                   onClick={openCoinBuyPopup}>
//                   <CoinWhiteBg size="small" iconName={"BTC"} />
//                   <span>{price}</span>
//                </Button>
//             </div>
//          </div>
//       );
//    }

//    return content;
// };

// export default CoinBlock;
import Button from "../Button/Button";
import CoinWhiteBg from "../CoinWhiteBg/CoinWhiteBg";
import { TCoin } from "../../types/globalTypes";
import classNames from "classnames/bind";
import styles from "./CoinBlock.module.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCoinIfno } from "../../store/reducers/coin";
import axios from 'axios';

const cn = classNames.bind(styles);

interface ICoinBlockProps {
  coinName: TCoin;
  earning: string;
  price: string;
  isBought?: boolean;
  isBlocked?: boolean;
  isActive?: boolean;
  userId: number;
  coinId: number;
}

const CoinBlock = ({
  coinName,
  earning,
  isBought = false,
  isBlocked = false,
  price,
  isActive = false,
  userId,
  coinId,
}: ICoinBlockProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function giveCoin() {
    try {
      const response = await axios.post(`https://coinfarm.club/coin/give/${userId}/${coinId}`);
      console.log('Coin given:', response.data);
    } catch (error) {
      console.error('Error giving coin:', error);
    }
  }

  function openCoinBuyPopup() {
    dispatch(
      setCoinIfno({
        earning,
        price,
        name: coinName,
      })
    );
    giveCoin();
  }

  let content;

  if (isBought) {
    content = (
      <div className={cn("coinBlock")}>
        <div className={cn("coinBlock__left")}>
          <img
            className={cn("coinBlock__coin")}
            src={`video/${coinName}.gif`}
            alt=""
          />
          <div className={cn("coinBlock__info")}>
            <h3 className="textShadow">{coinName}</h3>
            <div className={cn("coinBlock__earning")}>
              <span>+{earning}</span>
              <img src="img/pages/home/energy/energy.svg" alt="Energy" />
            </div>
          </div>
        </div>
        <div
          className={cn("coinBlock__right")}
          style={{
            height: "45px",
            paddingRight: "23.5px",
          }}
        >
          {isActive ? (
            <img
              src="img/global/checkbox/green.svg"
              className={cn("boost__checkbox")}
              alt="Bought"
            />
          ) : (
            <img
              src="img/global/checkbox/grey.svg"
              className={cn("boost__checkbox")}
              alt="Bought"
            />
          )}
        </div>
      </div>
    );
  } else if (isBlocked) {
    content = (
      <div className={cn("coinBlock")}>
        <div className={cn("coinBlock__left")}>
          <img
            className={cn("coinBlock__coin")}
            src={`video/${coinName}.gif`}
            alt=""
          />
          <div className={cn("coinBlock__info")}>
            <h3 className="textShadow">{coinName}</h3>
            <div className={cn("coinBlock__earning")}>
              <span>+{earning}</span>
              <img src="img/pages/home/energy/energy.svg" alt="Energy" />
            </div>
          </div>
        </div>
        <div className={cn("coinBlock__right")}>
          <div
            className={cn("coinBlock__invate")}
            style={{
              paddingRight: "10px",
            }}
          >
            <span>x10</span>
            <img
              onClick={() => navigate("/invite")}
              src="img/global/person-btn.svg"
              alt="Invite"
            />
          </div>
        </div>
      </div>
    );
  } else {
    content = (
      <div className={cn("coinBlock")}>
        <div className={cn("coinBlock__left")}>
          <img
            className={cn("coinBlock__coin")}
            src={`video/${coinName}.gif`}
            alt=""
          />
          <div className={cn("coinBlock__info")}>
            <h3 className="textShadow">{coinName}</h3>
            <div className={cn("coinBlock__earning")}>
              <span>+{earning}</span>
              <img src="img/pages/home/energy/energy.svg" alt="Energy" />
            </div>
          </div>
        </div>
        <div className={cn("coinBlock__right")} id="buyCoin">
          <Button
            className={cn("coinBlock__price")}
            onClick={openCoinBuyPopup}
          >
            <CoinWhiteBg size="small" iconName={"BTC"} />
            <span>{price}</span>
          </Button>
        </div>
      </div>
    );
  }

  return content;
};

export default CoinBlock;

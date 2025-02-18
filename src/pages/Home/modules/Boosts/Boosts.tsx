// import classNames from "classnames/bind";
// import styles from "../../Home.module.scss";
// const cn = classNames.bind(styles);

// const Boosts = () => {
//    return <div className={cn("boosts")}>
//       <img src="img/boosts/mill-shadow.svg" className={cn('boosts__mill')} alt="boost" />
//       <img src="img/boosts/drone.svg" className={cn('boosts__drone')} alt="boost" />
//       <img src="img/boosts/mini-car-shadow.svg" className={cn('boosts__mini-car')} alt="boost" />
//       <img src="img/boosts/car-2-shadow.svg" className={cn('boosts__car-2')} alt="boost" />
//       <img src="img/boosts/car-3-shadow.svg" className={cn('boosts__car-3')} alt="boost" />
//    </div>;
// };

// export default Boosts;
import classNames from "classnames/bind";
import styles from "../../Home.module.scss";
const cn = classNames.bind(styles);

interface BoostsProps {
  activeBoosterIds: number[];
}

const Boosts: React.FC<BoostsProps> = ({ activeBoosterIds }) => {
  const boosters = [
    { id: 1, src: "img/boosts/mill-shadow.svg", className: "boosts__mill" },
    { id: 2, src: "img/boosts/drone.svg", className: "boosts__drone" },
    { id: 3, src: "img/boosts/mini-car-shadow.svg", className: "boosts__mini-car" },
    { id: 4, src: "img/boosts/car-2-shadow.svg", className: "boosts__car-2" },
    { id: 5, src: "img/boosts/car-3-shadow.svg", className: "boosts__car-3" }
  ];

  return (
    <div className={cn("boosts")}>
      {boosters
        .filter(booster => activeBoosterIds.includes(booster.id))
        .map(booster => (
          <img
            key={booster.id}
            src={booster.src}
            className={cn(booster.className)}
            alt="boost"
          />
        ))}
    </div>
  );
};

export default Boosts;

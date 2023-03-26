import styles from './index.module.css';
import { TrendingCardInterface } from '../../Interfaces/interfaces';
import { useEffect, useState } from 'react';
import { hexToRGB } from '../../utils/utils';

const TrendingCard: React.FC<TrendingCardInterface> = (props) => {
    const [gradient, setGradient] = useState<any>();
    var grad = require("gradient-from-image");
    useEffect(() => {
        grad.gr(props.icon).then((gradient: any) => {
            setGradient(gradient);
        });
    }, [])
    return (
        <div className={styles.cardContainer}>
            {gradient && <div className={styles.mainContainer}>
                <div className={styles.cardStyle}>
                    <div className={styles.iconContainer}>
                        <div className={styles.innerIconDiv} style={{ backgroundImage: `linear-gradient(0deg, ${hexToRGB(gradient?.vibrant?.[1], 0.1)}, ${hexToRGB(gradient?.relevant?.[0], 0.01)}` }}>
                            <img src={props.icon}></img>
                        </div>
                    </div>
                </div>
                <div className={styles.cardContent}>
                    <p>{props.title}</p>
                    <div className={styles.roundedContainer}>
                        <span>{props.price}</span>
                        <span className={styles.priceDelta} style={{ color: props.positiveDelta ? '#00FFA3' : '#FF4D4D' }}>{props.positiveDelta ? '+' : '-'}{props.deltaPercent}</span>
                    </div>
                    <p>Price</p>
                    <div className={styles.roundedContainer}>
                        <span>{props.tvl}</span>
                    </div>
                    <p>TVL</p>
                    <div className={styles.roundedContainer} style={{ width: 'auto', borderRadius: '2rem' }}>
                        {props.popularPairs?.map(el => <img src={el} />)}
                    </div>
                    <p>Popular Pairs</p>
                </div>
            </div>}
        </div >
    );
}

export default TrendingCard;

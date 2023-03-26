import styles from './index.module.css';
import cardConfig from '../../cardsConfig.json';
import TrendingCard from '../TrendingCard';

const Main: React.FC = () => {
    return (
        <div className={styles.container}>
            <p className={styles.trendingAssets}><img src={'/images/activity.png'} />Trending Assets</p>
            <div>
                {cardConfig?.length && cardConfig?.map(el => <TrendingCard {...el} />)}
            </div>
        </div>
    );
}

export default Main;

import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './home.module.css';

const Home: FC = () => {
	const navigate = useNavigate();

	return (
		<div className={styles.wrapper}>
			<button
				className={styles.button}
				onClick={() => navigate('auction')}
			>
				Войти в комнату
			</button>
		</div>
	);
};

export default Home;

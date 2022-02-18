import styles from './style.module.scss';

const data = {
  showLogo: true,
  logoUrl: 'https://images-1305624698.cos.ap-guangzhou.myqcloud.com/logo.jpg',
  title: 'Flower-F',
  description:
    '一个前端爱好者，学习前端时间刚刚半年多。懂得不多，希望大家多多指教。',
  backgroundUrl:
    'https://images-1305624698.cos.ap-guangzhou.myqcloud.com/bg.jpeg',
  backgroundHeight: '380',
};

interface IIntroStyle {
  backgroundImage?: string;
  height?: number;
}

const Intro = () => {
  const {
    showLogo,
    logoUrl,
    title,
    description,
    backgroundUrl,
    backgroundHeight,
  } = data;
  const introStyle: IIntroStyle = backgroundUrl
    ? { backgroundImage: `url('${backgroundUrl}')` }
    : {};

  backgroundHeight && (introStyle.height = parseInt(backgroundHeight) + 20);

  return (
    <div className="wrapper">
      <div className={styles.intro} style={introStyle}>
        <div className={styles.person}>
          {showLogo && logoUrl ? (
            <img className={styles.avatar} src={logoUrl} alt="用户头像" />
          ) : null}
          <div className={styles.content}>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

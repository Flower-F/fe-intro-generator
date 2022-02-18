import styles from './style.module.scss';

const data = {
  nickName: 'Flower-F',
  title: 'FE Intro Generator',
  description: '一款前端程序员的个人介绍页面生成器',
};

const Hero = () => {
  const { title, description, nickName } = data;

  return (
    <section className={styles.hero}>
      <video
        src="https://images-1305624698.cos.ap-guangzhou.myqcloud.com/hero.mp4"
        autoPlay
        muted
        loop
        className={styles.video}
      ></video>
      <div className={styles.nickName}>{nickName}</div>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <div className={styles.buttonWrapper}>
          <button
            className={styles.backend}
            onClick={() => (window.location.pathname = '/admin.html')}
          >
            参观后台
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

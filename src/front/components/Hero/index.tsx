import React from 'react';
import { IHeroSchema } from '../../../common/types/schema';
import styles from './style.module.scss';

interface IHeroProps {
  schema: IHeroSchema;
}

const Hero: React.FC<IHeroProps> = ({ schema }) => {
  // const { title, description, nickName } = data;
  const { attributes = { nickName: '', title: '', description: '' } } = schema;
  const { nickName, title, description } = attributes;

  return (
    <section className={styles.hero}>
      <video
        src="https://fe-intro-generator-1305624698.file.myqcloud.com/hero.mp4"
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

import React from 'react';

import styles from './Card.module.css';

const Card = ({ title, description, imageUrl, href }) => {
  return (
    <a href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className={styles.card}>
        <img className={styles.cardImage} src={imageUrl} alt={title} />
        <div className={styles.cardContent}>
          <h2 className={styles.cardTitle}>{title}</h2>
          <p className={styles.cardDescription}>{description}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;

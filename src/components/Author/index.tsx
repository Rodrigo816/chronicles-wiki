import React from 'react';
import styles from './styles.module.css';

export default function Author({
authorName,
personalLink,
}: {
  authorName: string;
  personalLink?: string;
}) {
  return (
    <p className={styles.authorLabel}>
      <strong>Written by: </strong>
      {personalLink ? <a href="personalLink" target='_blank'>{authorName}</a>: authorName}
     </p>
  );
}

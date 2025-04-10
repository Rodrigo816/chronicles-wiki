import React from 'react';
import { AccordionItem as Item } from '@szhsin/react-accordion';
import ChevronIcon from '@site/static/img/arrow-down.svg';
import styles from './styles.module.css';

export default function AccordionItem({
  header,
  children,
  ...props
}: {
  header: string;
  children: React.ReactNode;
}) {
  return (
    <Item
      header={
        <>
          {header}
          <ChevronIcon className={styles.chevron} />
        </>
      }
      className={styles.item}
      buttonProps={{
        className: ({ isEnter }) =>
          `${styles.itemBtn} ${isEnter ? styles.itemBtnExpanded : ''}`,
      }}
      contentProps={{ className: styles.itemContent }}
      panelProps={{ className: styles.itemPanel }}
      {...props}
    >
      {children}
    </Item>
  );
}

import React from 'react';
import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import styles from './styles.module.css';


export default function AccordionCustom({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.accordion}>
      <Accordion transition transitionTimeout={250}>
        {children}
      </Accordion>
    </div>
  );
}
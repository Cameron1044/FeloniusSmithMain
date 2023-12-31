import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import styles from '../Styles/Presskit.module.scss';

const VenueItem = ({ venue, location }) => (
  <div className={styles.venueContainer}>
    <div className={styles.venueRow}>
      <b>{venue}</b>
    </div>
    <div className={styles.venueRow}>
      <IoLocationOutline size={20} className={styles.venueIcon} />
      <p>{location}</p>
    </div>
  </div>
);

export default VenueItem;

import React from 'react'
import styles from '../Styles/Pages.module.scss'

const CalendarComponent = ({ fields, events = [], }) => {
  const { title, description } = fields

  const Events = (events) => {
    return (
      events.map((event, index) => {
        return (
          <div className={styles.eventContainer} key={index}>
            <h1>{event.date}</h1>
            <h2>{event.title}</h2>
            <div className={styles.locationContainer}>
              <h2>{event.location}</h2>
              <h3>({event.phonenumber})</h3>
            </div>
            <h2>{event.address}</h2>
            <a href="url">{event.website}</a>
          </div>
        );
      })
    )
  }

  return (
    <div className={styles.calendar}>
      <div className={styles.calendarHeader}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className={styles.calendarContainer}>
        {Events(events)}
      </div>
    </div>
  )
}

export default CalendarComponent
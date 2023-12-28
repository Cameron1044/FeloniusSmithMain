import React from 'react'
import styles from '../Styles/Pages.module.scss'
import ReactMarkdown from 'react-markdown';

const MusicComponent = ({ fields }) => {
  const { music } = fields
  const MusicList = (musicList) => {
    return (
      musicList.map((music, index) => {
        return (
          <div className={styles.music} key={index}>
            <h1 className={styles.title}>{music.title}</h1>
            <iframe className={styles.media} allow="autoplay *; encrypted-media *;" frameborder="0" height="450" title="music" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src={music.embed}></iframe>
            <div className={styles.text}>
              <ReactMarkdown>
                {music.description}
              </ReactMarkdown>
            </div>
            <div className={styles.reviews}>
              {music.reviews && music.reviews.map((review, idx) => (
                <div key={idx}>
                  <blockquote className={styles.reviewText}>
                    <ReactMarkdown>{review.text}</ReactMarkdown>
                  </blockquote>
                  <cite className={styles.reviewAuthor}>— {review.author}</cite>
                </div>
              ))}
            </div>
          </div>
        );
      })
    )
  }

  return (
    <>
      {MusicList(music)}
    </>
  )
}

export default MusicComponent
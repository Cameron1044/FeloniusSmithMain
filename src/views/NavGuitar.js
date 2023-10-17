import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from '../Styles/Nav.module.scss'

const NavGuitar = () => {
  return (
    <>
      <NavLink to='/videos' className={styles.dotButton} style={{top: '93px', left: '2.806122448979592%'}} activeClassName='active'></NavLink>
      <NavLink to='/calendar' className={styles.dotButton} style={{top: '76px', left: '13.316326530612244%'}} activeClassName='active'></NavLink>
      <NavLink to='/music' className={styles.dotButton} style={{top: '158px', left: '9.33673469387755%'}} activeClassName='active'></NavLink>
      <NavLink to='/presskit' className={styles.dotButton} style={{top: '229px', left: '4.948979591836735%'}} activeClassName='active'></NavLink>
      <NavLink to='/contact' className={styles.dotButton} style={{top: '211px', left: '15.96938775510204%'}} activeClassName='active'></NavLink>
      <NavLink to='/' className={styles.dotButton} style={{top: '720px', left: '19.5%'}} activeClassName='active'></NavLink>
    </>
  )
}
export default NavGuitar
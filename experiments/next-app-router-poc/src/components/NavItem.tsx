import styles from './../app/page.module.css'
import { INavItem } from './NavItem.interface'

const NavItem = (dataItem:INavItem) => (
  <a
    href={dataItem.link}
    className={styles.card}
    target='_self'
    rel="noopener noreferrer"
  >
    <h2>
      {dataItem.title} <span>-&gt;</span>
    </h2>
    <p>
      {dataItem.description}
    </p>
  </a>
)

export default NavItem;
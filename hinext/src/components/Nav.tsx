import styles from './../app/page.module.css'
import NavItem from './NavItem';

const Nav = () => (
  <div className={styles.grid}>
    <NavItem 
      title='Inicio'
      description='Solo el inicio'
      link='/'
    />
    <NavItem 
      title='External'
      description='Uso de Query Params'
      link='external?title=valor%20recibido'
    />
    <NavItem 
      title='Episodios'
      description='Traer data desde fetch'
      link='episodes'
    />
        <NavItem 
      title='Episodio'
      description='Navegación Dinámica'
      link='episodes/157154'
    />
  </div>
);

export default Nav;
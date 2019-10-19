import Link from 'next/link';

const linkStyle={marginRight: 15};

const Header =()=>(
    <div>
        <Link href="/">
            <a style={linkStyle}>Inicio</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>Acerca de</a>
        </Link>
        <Link href="/robot">
            <a style={linkStyle}>Episodios de Mr Robot</a>
        </Link>
    </div>
)

export default Header;
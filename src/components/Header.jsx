import "./Header.css"

function Header(props) {
    return (
        <nav>
            <h1>{props.title}</h1>

            <div>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </div>
        </nav>
    )
}

export default Header
import './Navbar.scss'


export default function Navbar(){
    return(
        <>
            <div className="navbar-wrapper">
                    <a href="#" className = "ps">Projects</a>
                    <a className = "ps selected-item"href="#">Me</a>
                    <a href="#" className = "ps">Extras</a>
            </div>
        </>
    )
}
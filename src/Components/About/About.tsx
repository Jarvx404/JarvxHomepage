import "./About.scss"
import bebop from "../../res/pics/bebop.png";

export default function About(){
    return(
        <>
          <div className="about-me-wrapper">
            <div className="first-section">
                <div className="profile-column">
                    <h1 className="ps">Jarvx</h1>
                    <img src={bebop}></img>
                    <p className="jb">Insanely cool</p>
                </div>
                <p className="jb"> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt laborum cumque veritatis harum ea quas beatae fuga repellat sequi, sunt autem, iste deserunt, aut dolorem eius excepturi impedit officiis. Consectetur?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, similique distinctio. Molestiae sapiente id illum quis pariatur quas adipisci doloremque earum numquam assumenda, sed autem velit recusandae iusto libero culpa.
                </p>
            </div>
          </div>
        </>
    );
}
import "./style.css";
import stylesheet from './stylesheet.module.css';
import batman from './batman.jpg';
import loxy from './loxy.jpeg';

export default function StyleAsset() {

    const myStyle = { backgroundColor: "#333", color: "#0f0" };

    return (
        <>
            <h1 className={stylesheet.h1}>Styles et Assets</h1>

            <h2 className={stylesheet.h2}>Les Styles</h2>

            <p style={{color: "purple", fontWeight: "bold"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                culpa qui officia deserunt mollit anim id est laborum.</p>

            <p style={myStyle} className="custom-border">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                culpa qui officia deserunt mollit anim id est laborum.</p>

            <h2 className={stylesheet.h2}>Les Assets</h2>

            <div className="row">
                <div className="col">
                    <img src={batman} alt="" className="img-fluid" />
                </div>
                <div className="col">
                    <img src={loxy} alt="" className="img-fluid" />   
                </div>
            </div>
        </>
    );
}
import Clock from "../components/Clock";
import ListImage from "../components/ListImage";

export default function LifeCycle() {
    
    return (
        <>
            <h1>Cycle de vie (useEffet)</h1>
            
            <div className="display-6 text-center">
                <Clock />
            </div>

            <ListImage />
        </>
    );
}
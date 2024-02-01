import { useEffect, useState } from "react";

export default function Clock() {
    var dateFormatter = new Intl.DateTimeFormat("fr", {
        timeStyle: 'medium'
    });
    
    let [date, setDate] = useState(new Date());

    useEffect(() => {
        // didMount / didUpdate
        const id = setInterval(() => {
            setDate(new Date());
        }, 1000)

        return () => {
            clearInterval(id);
        }
    }, []);
    // un [] en second paramètre execute useEffect 1 fois (didMount)

    return (
        <time>{dateFormatter.format(date)}</time>
    );
}
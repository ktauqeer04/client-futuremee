import axios from "axios";
import { useEffect, useState } from "react"

export default function Inputs(){

    const [emailInput, setEmailInput] = useState("");
    const [confirmEmailInput, setConfirmEmailInput] = useState("");
    const [scheduleDate, setScheduleDate] = useState("");

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const toLocalYYYYMMDD = (d: Date) => {
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, "0");
        const day = String(d.getDate()).padStart(2, "0");
        return `${y}-${m}-${day}`;
    };

    const minDate = toLocalYYYYMMDD(tomorrow);

    useEffect(() => {

        if(!scheduleDate){
            return;
        }

        const ISODate = new Date(scheduleDate).toISOString();
        console.log("ISO Date:", ISODate);
        console.log("Email Input:", emailInput);

    }, [scheduleDate, emailInput])

    const apiSubmit = async () => {

        const payload = {
            email: emailInput,
            content: "Sample content",
            sendDate: new Date(scheduleDate).toISOString()
        }

        try{

            const response = await axios.post('http://localhost:3000/vi-module', payload);
            console.log("Response from API:", response.data);

        }catch(err: any){
            console.error("Error submitting data:", err);   
        }

    }



    return <div>
        <div>
            <input 
                type="email" 
                placeholder="email" 
                value ={emailInput} 
                onChange={e => setEmailInput(e.target.value)}
            />
        </div>

        <div>
            <input type="email" placeholder="confirm email"/>
        </div>

        <div>
            <input
                type="date"
                min={minDate}
                value={scheduleDate}
                onChange={e => setScheduleDate(e.target.value)}
                aria-label="Pick a scheduled date (from tomorrow onwards)"
            />
        </div>

        <div>
            <button type="submit" onClick={apiSubmit}>
                Submit
            </button>
        </div>
    
    </div>

}
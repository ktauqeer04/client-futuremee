import axios from "axios";
import { useEffect } from "react"
import type { InputProps } from "../interfaces";
import { DEV_URL } from "../config";



export default function Inputs({ emailInput, setEmailInput, confirmEmailInput, setConfirmEmailInput, scheduledDate, setScheduledDate}: InputProps){

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

        if(!scheduledDate){
            return;
        }

        const ISODate = new Date(scheduledDate).toISOString();
        console.log("ISO Date:", ISODate);
        console.log("Email Input:", emailInput);

    }, [scheduledDate, emailInput]);



    const apiSubmit = async () => {

        const payload = {
            email: emailInput,
            content: `
                hello future mee......

                

                this is alignment 3


                this is alignment 2

                this is alignment 1

                                ...... by tauqeer
            `,
            sendDate: new Date(scheduledDate).toISOString()
        }

        try{

            const response = await axios.post(`${DEV_URL}/vi-module`, payload);
            console.log("Response from API:", response.data);

        }catch(err: any){
            console.log("Error submitting data:", err);   
            throw err;
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
                value={scheduledDate}
                onChange={e => setScheduledDate(e.target.value)}
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
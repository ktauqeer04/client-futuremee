import { useForm, FormProvider, type SubmitHandler } from "react-hook-form";
import ContentInput from "./ContentInput";
import Inputs from "./Inputs";
import axios from "axios";
import { DEV_URL } from "../config";
import type { FormData } from "../interfaces/inputI";



export default function ParentInput() {

  
  const methods = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const payload = {
      email: data.email,
      content: data.content,
      sendDate: new Date(data.scheduledDate).toISOString()
    };

    try {
      const response = await axios.post(`${DEV_URL}/vi-module`, payload);
      console.log("Response from API:", response.data);
      alert("Successfully submitted!");
    } catch (err: any) {
      console.log("Error submitting data:", err);
      alert("Error submitting form");
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="flex w-full">
        <div className="w-1/2">
          <ContentInput />
        </div>

        <div className="w-1/2">
          <Inputs />
        </div>
      </form>
    </FormProvider>
  );
}
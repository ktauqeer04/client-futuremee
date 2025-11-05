import { useFormContext } from "react-hook-form";
import type { FormData } from "../interfaces/inputI";

export default function Inputs() {
  const { register, watch, formState: { errors } } = useFormContext<FormData>();
  
  const emailValue = watch("email");

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const toLocalYYYYMMDD = (d: Date) => {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  };

  const minDate = toLocalYYYYMMDD(tomorrow);

  return (
    <div className="space-y-4 p-6">
      <div>
        <input 
          {...register("email", {
            required: "Hey you cannot leave this empty",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Not an Email b*tch"
            }
          })}
          type="email" 
          placeholder="email"
          className="w-full p-2 border rounded"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </div>

      <div>
        <input
          {...register("confirmEmail", {
            required: "Fill this up too",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "It should be a damn email!!!!"
            },
            validate: value => value === emailValue || "I am pretty sure the emails don't match"
          })} 
          type="email" 
          placeholder="confirm email"
          className="w-full p-2 border rounded"
        />
        {errors.confirmEmail && (
          <span className="text-red-500 text-sm">{errors.confirmEmail.message}</span>
        )}
      </div>

      <div>
        <input
          {...register("scheduledDate", {
            required: "So you're sending a letter to yourself in the future without picking a date? Think again!"
          })}
          type="date"
          min={minDate}
          aria-label="Pick a scheduled date (from tomorrow onwards)"
          className="w-full p-2 border rounded"
        />
        {errors.scheduledDate && (
          <span className="text-red-500 text-sm">{errors.scheduledDate.message}</span>
        )}
      </div>

      <button 
        type="submit"
        className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700"
      >
        Submit
      </button>
    </div>
  );
}
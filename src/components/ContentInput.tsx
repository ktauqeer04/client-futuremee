import { useRef, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import type { FormData } from "../interfaces/inputI";

export default function ContentInput() {
  const taRef = useRef<HTMLTextAreaElement | null>(null);
  const { register, watch, formState: { errors } } = useFormContext<FormData>();
  
  const contentValue = watch("content");

  useEffect(() => {
    const ta = taRef.current;
    if (!ta) return;
    ta.style.height = "0px";
    const height = ta.scrollHeight;
    ta.style.height = height + "px";
  }, [contentValue]);

  return (
    <div className="p-6 bg-gray-50 flex items-start justify-center">
      <div className="w-full max-w-4xl">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Write content for future</p>
          </div>
        </div>

        <div className="bg-gray-400 rounded-2xl p-3 shadow-sm">
          <textarea
            {...register("content", {
              required: "So you're sending your future self an empty email?",
            })}
            ref={(e) => {
              register("content").ref(e);
              taRef.current = e;
            }}
            placeholder="Hi..."
            className="w-full resize-none min-h-[28rem] max-h-[70vh] overflow-auto outline-none text-sm leading-relaxed p-4 rounded-lg border border-gray-100 focus:ring-2 focus:ring-indigo-200"
          />
          {errors.content && (
            <span className="text-red-500 text-sm mt-1 block">
              {errors.content.message}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
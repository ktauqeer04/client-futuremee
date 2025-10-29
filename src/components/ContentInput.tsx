import React, { useRef, useEffect } from "react"
import type { ContentInputProps } from "../interfaces";

export default function ContentInput({ contentInput, setContentInput }: ContentInputProps) {

  const taRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const ta = taRef.current
    if (!ta) return
    ta.style.height = "0px"
    const height = ta.scrollHeight
    ta.style.height = height + "px"
  }, [contentInput])

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContentInput(e.target.value)
  }


  return (
    <div className="p-6 bg-gray-50 flex items-start justify-center">
      <div className="w-full max-w-4xl">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Write content for future</p>
          </div>
        </div>

        <div className="bg-gray-400 rounded-2xl p-3 shadow-sm ">
            <textarea
                ref={taRef}
                value={contentInput}
                onChange={handleChange}
                placeholder="Hi..."
                className="w-full resize-none min-h-[28rem] max-h-[70vh] overflow-auto outline-none text-sm leading-relaxed p-4 rounded-lg border border-gray-100 focus:ring-2 focus:ring-indigo-200"
            />
        </div>

      </div>
    </div>
  )
}

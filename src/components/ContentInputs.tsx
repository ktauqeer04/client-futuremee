import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";



export default function TextInput() {
  const [text, setText] = useState("")
  const [preview, setPreview] = useState(false)
  const taRef = useRef<HTMLTextAreaElement | null>(null)

  useEffect(() => {
    const ta = taRef.current
    if (!ta) return
    ta.style.height = "0px"
    const height = ta.scrollHeight
    ta.style.height = height + "px"
  }, [text])

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  const clear = () => setText("")

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
    } catch (e) {}
  }

  const downloadTxt = () => {
    const blob = new Blob([text], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "text.txt"
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length
  const charCount = text.length

  return (
    <div className="min-h-screen p-6 bg-gray-50 flex items-start justify-center">
      <div className="w-full max-w-4xl">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Large Text Editor</h1>
            <p className="text-sm text-gray-500">Write long texts comfortably — autosizing textarea, preview, copy, and download.</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="text-sm text-gray-600">Words: <span className="font-medium">{wordCount}</span> • Chars: <span className="font-medium">{charCount}</span></div>
            <motion.button whileTap={{ scale: 0.95 }} onClick={() => setPreview(p => !p)} className="px-3 py-1 rounded-md border border-gray-200 bg-white text-sm">{preview ? 'Edit' : 'Preview'}</motion.button>
            <motion.button whileTap={{ scale: 0.95 }} onClick={clear} className="px-3 py-1 rounded-md bg-red-50 text-red-600 text-sm border border-red-100">Clear</motion.button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <textarea
              ref={taRef}
              value={text}
              onChange={handleChange}
              placeholder="Start typing or paste long text here..."
              className="w-full resize-none min-h-[28rem] max-h-[70vh] overflow-auto outline-none text-sm leading-relaxed p-4 rounded-lg border border-gray-100 focus:ring-2 focus:ring-indigo-200"
            />

            <div className="mt-3 flex gap-2">
              <motion.button whileTap={{ scale: 0.95 }} onClick={copy} className="px-3 py-2 rounded-md bg-indigo-600 text-white text-sm">Copy</motion.button>
              <motion.button whileTap={{ scale: 0.95 }} onClick={downloadTxt} className="px-3 py-2 rounded-md bg-green-600 text-white text-sm">Download</motion.button>
              <motion.button whileTap={{ scale: 0.95 }} onClick={() => { const sel = taRef.current; if (sel) { sel.select(); document.execCommand('copy'); } }} className="px-3 py-2 rounded-md bg-gray-100 text-sm">Select</motion.button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm min-h-[28rem]">
            {preview ? (
              <div className="prose max-w-none overflow-auto">
                <div dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, "<br/>") }} />
              </div>
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-gray-400">Preview disabled — toggle to preview rendered text.</div>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

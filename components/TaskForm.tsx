"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function TaskForm() {
    const [title,settitle]=useState("")
    const router=useRouter()
    async function handlesubmit(e:any) {
        e.preventDefault()
        await fetch("/api/tasks",{
            method:"POST",
            headers:{"content-Type":"application/json"},
            body:JSON.stringify({title})
        })
        settitle("")
        router.push('/')
    }
  return (
    <form
  onSubmit={handlesubmit}
  className="p-20  bg-white shadow-md rounded- space-y-4 border border-black max-w-3xl mx-auto mt-6"
>

  <div className="flex items-center gap-3">
    <input
      type="text"
      value={title}
      onChange={(e) => settitle(e.target.value)}
      placeholder="Enter your task..."
      className="flex-1 border border-black rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-purple-500 focus:outline-none"
    />

    <button
      type="submit"
      className="bg-purple-400 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-500 transition"
    >
      Add
    </button>
  </div>
</form>

  )
}
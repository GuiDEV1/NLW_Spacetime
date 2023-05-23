'use client'
import { ChangeEvent, useState } from "react"

export function MediaPicker() {
    const [preview, setpreview] = useState<string | null>(null)

    function onFileSelect(event: ChangeEvent<HTMLInputElement>) {
       const { files } = event.target

       if(!files) {
        return
       }

       const previewURL = URL.createObjectURL(files[0])

       setpreview(previewURL)
    }
    
    return(
     <>
        <input onChange={onFileSelect} 
        name="coverUrl"
        type="file" 
        id="media" 
        accept="image/*"
        className="invisible w-0 h-0"
        />

        {preview && <img src={preview} alt="" className="w-full aspect-video rounded-lg object-cover"/>}
           
        {/*  
        implementar preview video
        {preview && <video src={preview} controls={false} className="w-full aspect-video rounded-lg object-cover"/>} 
        */}
     </> 
    )
}
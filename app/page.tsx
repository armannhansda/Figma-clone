"use client"

import fabric  from 'fabric'
import LeftSideBar from "@/Components/LeftSideBar";
import { Live } from "@/Components/Live";
import { Navbar } from "@/Components/Navbar";
import RightSideBar from "@/Components/RightSideBar";
import { useEffect, useRef } from "react";
import { handleCanvasMouseDown, handleResize, initializeFabric } from '@/lib/canvas';




export default function Page() {

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const fabricRef = useRef<fabric.Canvas | null>(null)

  const isDrawing = useRef(false)

  const shapeRef = useRef<fabric.Object | null>(null)
  const selectedShapeRef = useRef<string | null>(null)

  useEffect(() => {
    const canvas = initializeFabric({canvasRef, fabricRef})
    canvas.on("mouse:down", (options)=>
      handleCanvasMouseDown({
      options,
      canvas,
      isDrawing,
      shapeRef,
      selectedShapeRef
    }))

    window.addEventListener("resize", () => {
      handleResize({fabricRef})
    })
  },[])

  return (
    <main
      className="h-screen overflow-hidden"
    >
      <Navbar />

      <section
        className="flex h-full flex-row"
      >
        <LeftSideBar />
        <Live canvasRef ={canvasRef} />
        <RightSideBar />
      </section>
    </main>
    
  );
}
"use client"

import { Canvas, FabricObject } from '@/lib/fabric-adapter'
import LeftSideBar from "@/Components/LeftSideBar";
import { Live } from "@/Components/Live";
import { Navbar } from "@/Components/Navbar";
import RightSideBar from "@/Components/RightSideBar";
import { useEffect, useRef, useState } from "react";
import { handleCanvasMouseDown, handleResize, initializeFabric } from '@/lib/canvas';
import { ActiveElement, Attributes } from '@/types/type';
import { defaultNavElement } from '@/constants';




export default function Page() {

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const fabricRef = useRef<any | null>(null)

  const isDrawing = useRef(false)

  const shapeRef = useRef<any | null>(null) // Using any for now
  const selectedShapeRef = useRef<string | null>("select")
  const activeObjectRef = useRef<any | null>(null) // Using any for now
  const isEditingRef = useRef(false)
  const imageInputRef = useRef<HTMLInputElement | null>(null)

  const [allShapes, setAllShapes] = useState<any[]>([]) // Using any for fabric objects
  const [activeElement, setActiveElement] = useState<ActiveElement>(defaultNavElement)
  const [elementAttributes, setElementAttributes] = useState<Attributes>({
    width: '',
    height: '',
    fontSize: '',
    fontFamily: '',
    fontWeight: '',
    fill: '#aabbcc',
    stroke: '#aabbcc',
  })

  const syncShapeInStorage = (shape: any) => {
    // This will be implemented for real-time sync
    console.log('Syncing shape:', shape)
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Image upload:', e.target.files?.[0])
    // Image upload logic will be implemented here
  }

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
      handleResize({canvas: fabricRef.current})
    })

    return () => {
      canvas.dispose()
    }
  },[])

  return (
    <main
      className="h-screen overflow-hidden"
    >
      <Navbar 
        activeElement={activeElement}
        imageInputRef={imageInputRef}
        handleImageUpload={handleImageUpload}
        handleActiveElement={setActiveElement}
      />

      <section
        className="flex h-full flex-row"
      >
        <LeftSideBar 
          allShapes={allShapes}
          selectedShapeRef={selectedShapeRef}
        />
        <Live canvasRef={canvasRef} />
        <RightSideBar 
          elementAttributes={elementAttributes}
          setElementAttributes={setElementAttributes}
          fabricRef={fabricRef}
          activeObjectRef={activeObjectRef}
          isEditingRef={isEditingRef}
          syncShapeInStorage={syncShapeInStorage}
        />
      </section>
    </main>
    
  );
}
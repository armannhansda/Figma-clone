import React from 'react'
import { shapeElements } from '@/constants'
import Image from 'next/image'

interface LeftSideBarProps {
  allShapes: any[];
  selectedShapeRef: React.MutableRefObject<string | null>;
}

const LeftSideBar = ({ allShapes, selectedShapeRef }: LeftSideBarProps) => {
  const handleShapeClick = (shapeValue: string) => {
    selectedShapeRef.current = shapeValue;
  };

  return (
    <section
      className='flex flex-col border-t border-primary-grey-200 bg-primary-black text-white min-w-[227px] sticky left-0 h-full max-sm:hidden select-none overflow-y-auto pb-20'
    >
      <h3 className='px-5 pt-4 text-xs uppercase'>Elements</h3>
      
      <div className='flex flex-col'>
        {shapeElements.map((element) => (
          <button
            key={element.value}
            onClick={() => handleShapeClick(element.value)}
            className={`flex items-center gap-3 px-5 py-3 text-left hover:bg-primary-grey-200 transition-colors ${
              selectedShapeRef.current === element.value ? 'bg-primary-grey-200' : ''
            }`}
          >
            <Image
              src={element.icon}
              alt={element.name}
              width={20}
              height={20}
              className='text-white'
            />
            <span className='text-sm'>{element.name}</span>
          </button>
        ))}
      </div>

      <div className='mt-8'>
        <h3 className='px-5 pt-4 text-xs uppercase'>Layers</h3>
        <div className='flex flex-col px-5 py-2'>
          {allShapes?.map((shape: any, index: number) => (
            <div
              key={shape.objectId || index}
              className='flex items-center gap-2 py-1 text-sm'
            >
              <div className='w-4 h-4 bg-blue-500 rounded-sm'></div>
              <span>{shape.type || 'Shape'} {index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LeftSideBar
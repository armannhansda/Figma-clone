import React from 'react'
import { RightSidebarProps } from '@/types/type'

const RightSideBar = ({
  elementAttributes,
  setElementAttributes,
  fabricRef,
  activeObjectRef,
  isEditingRef,
  syncShapeInStorage
}: RightSidebarProps) => {
  return (
    <section
      className='flex flex-col border-t border-primary-grey-200 bg-primary-black text-white min-w-[227px] sticky right-0 h-full max-sm:hidden select-none overflow-y-auto pb-20'
    >
      <h3 className='px-5 pt-4 text-xs uppercase'>Design</h3>
      
      <div className='flex flex-col px-5 py-3'>
        <div className='mb-4'>
          <label className='text-xs text-gray-400 mb-2 block'>Fill Color</label>
          <input
            type="color"
            value={elementAttributes.fill}
            onChange={(e) => setElementAttributes(prev => ({ ...prev, fill: e.target.value }))}
            className='w-full h-8 rounded border-none cursor-pointer'
          />
        </div>

        <div className='mb-4'>
          <label className='text-xs text-gray-400 mb-2 block'>Stroke Color</label>
          <input
            type="color"
            value={elementAttributes.stroke}
            onChange={(e) => setElementAttributes(prev => ({ ...prev, stroke: e.target.value }))}
            className='w-full h-8 rounded border-none cursor-pointer'
          />
        </div>

        <div className='mb-4'>
          <label className='text-xs text-gray-400 mb-2 block'>Width</label>
          <input
            type="number"
            value={elementAttributes.width}
            onChange={(e) => setElementAttributes(prev => ({ ...prev, width: e.target.value }))}
            className='w-full px-2 py-1 bg-gray-800 text-white rounded text-sm'
            placeholder="Auto"
          />
        </div>

        <div className='mb-4'>
          <label className='text-xs text-gray-400 mb-2 block'>Height</label>
          <input
            type="number"
            value={elementAttributes.height}
            onChange={(e) => setElementAttributes(prev => ({ ...prev, height: e.target.value }))}
            className='w-full px-2 py-1 bg-gray-800 text-white rounded text-sm'
            placeholder="Auto"
          />
        </div>

        <div className='mb-4'>
          <label className='text-xs text-gray-400 mb-2 block'>Font Size</label>
          <input
            type="number"
            value={elementAttributes.fontSize}
            onChange={(e) => setElementAttributes(prev => ({ ...prev, fontSize: e.target.value }))}
            className='w-full px-2 py-1 bg-gray-800 text-white rounded text-sm'
            placeholder="16"
          />
        </div>

        <div className='mb-4'>
          <label className='text-xs text-gray-400 mb-2 block'>Font Family</label>
          <select
            value={elementAttributes.fontFamily}
            onChange={(e) => setElementAttributes(prev => ({ ...prev, fontFamily: e.target.value }))}
            className='w-full px-2 py-1 bg-gray-800 text-white rounded text-sm'
          >
            <option value="Helvetica">Helvetica</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Comic Sans MS">Comic Sans MS</option>
            <option value="Arial">Arial</option>
          </select>
        </div>

        <div className='mb-4'>
          <label className='text-xs text-gray-400 mb-2 block'>Font Weight</label>
          <select
            value={elementAttributes.fontWeight}
            onChange={(e) => setElementAttributes(prev => ({ ...prev, fontWeight: e.target.value }))}
            className='w-full px-2 py-1 bg-gray-800 text-white rounded text-sm'
          >
            <option value="400">Normal</option>
            <option value="500">Medium</option>
            <option value="600">Semi Bold</option>
            <option value="700">Bold</option>
          </select>
        </div>
      </div>
    </section>
  )
}

export default RightSideBar
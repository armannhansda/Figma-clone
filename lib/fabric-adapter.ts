/**
 * This is a fabric adapter that exposes the fabric API in a way that works with Next.js
 * fabric has issues with the export default pattern in Next.js
 */
import * as fabric from 'fabric';

// Re-export everything from fabric
export default fabric;
export const { 
  Canvas,
  Rect,
  Triangle, 
  Circle, 
  Line, 
  IText, 
  Image,
  Object: FabricObject,
  util,
  Pattern,
  Gradient
} = fabric;

// Types
export type TEvent = fabric.TEvent;
export type TPointerEvent = fabric.TPointerEvent;
export type FabricCanvas = fabric.Canvas;
export type FabricPattern = fabric.Pattern;
export type FabricGradient = any; // Simplified type for Gradient
export type FabricIEvent = fabric.TEvent;
export type FabricObject2 = fabric.Object;
export type FabricPath = fabric.Path;

// Common interfaces
export interface CustomFabricObject<T = fabric.Object> extends fabric.Object {
  objectId?: string;
}

export interface IImage extends fabric.Image {
  objectId?: string;
}

// Common interfaces to help with type checking
export interface CustomFabricObject<T> extends fabric.Object {
  objectId?: string;
}

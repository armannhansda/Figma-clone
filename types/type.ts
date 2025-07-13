import { BaseUserMeta, User } from "@liveblocks/client";
import { 
  Canvas, 
  FabricObject, 
  FabricObject2,
  TEvent, 
  Pattern, 
  Gradient, 
  FabricPattern, 
  FabricGradient,
  FabricCanvas,
  FabricIEvent,
  FabricPath
} from "@/lib/fabric-adapter";

export enum CursorMode {
  Hidden,
  Chat,
  ReactionSelector,
  Reaction,
}

export type CursorState =
  | {
      mode: CursorMode.Hidden;
    }
  | {
      mode: CursorMode.Chat;
      message: string;
      previousMessage: string | null;
    }
  | {
      mode: CursorMode.ReactionSelector;
    }
  | {
      mode: CursorMode.Reaction;
      reaction: string;
      isPressed: boolean;
    };

export type Reaction = {
  value: string;
  timestamp: number;
  point: { x: number; y: number };
};

export type ReactionEvent = {
  x: number;
  y: number;
  value: string;
};

export type ShapeData = {
  type: string;
  width: number;
  height: number;
  fill: string | FabricPattern | FabricGradient;
  left: number;
  top: number;
  objectId: string | undefined;
};

export type Attributes = {
  width: string;
  height: string;
  fontSize: string;
  fontFamily: string;
  fontWeight: string;
  fill: string;
  stroke: string;
};

export type ActiveElement = {
  name: string;
  value: string;
  icon: string;
} | null;

// Using CustomFabricObject from fabric-adapter.ts

export type ModifyShape = {
  canvas: FabricCanvas;
  property: string;
  value: any;
  activeObjectRef: React.MutableRefObject<FabricObject2 | null>;
  syncShapeInStorage: (shape: FabricObject2) => void;
};

export type ElementDirection = {
  canvas: FabricCanvas;
  direction: string;
  syncShapeInStorage: (shape: FabricObject2) => void;
};

export type ImageUpload = {
  file: File;
  canvas: React.MutableRefObject<FabricCanvas>;
  shapeRef: React.MutableRefObject<FabricObject2 | null>;
  syncShapeInStorage: (shape: FabricObject2) => void;
};

export type RightSidebarProps = {
  elementAttributes: Attributes;
  setElementAttributes: React.Dispatch<React.SetStateAction<Attributes>>;
  fabricRef: React.RefObject<FabricCanvas | null>;
  activeObjectRef: React.RefObject<FabricObject2 | null>;
  isEditingRef: React.MutableRefObject<boolean>;
  syncShapeInStorage: (obj: any) => void;
};

export type NavbarProps = {
  activeElement: ActiveElement;
  imageInputRef: React.MutableRefObject<HTMLInputElement | null>;
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleActiveElement: (element: ActiveElement) => void;
};

export type ShapesMenuProps = {
  item: {
    name: string;
    icon: string;
    value: Array<ActiveElement>;
  };
  activeElement: any;
  handleActiveElement: any;
  handleImageUpload: any;
  imageInputRef: any;
};

export type Presence = any;

export type LiveCursorProps = {
  others: readonly User<Presence, BaseUserMeta>[];
};

export type CanvasMouseDown = {
  options: FabricIEvent;
  canvas: FabricCanvas;
  selectedShapeRef: any;
  isDrawing: React.MutableRefObject<boolean>;
  shapeRef: React.MutableRefObject<FabricObject2 | null>;
};

export type CanvasMouseMove = {
  options: FabricIEvent;
  canvas: FabricCanvas;
  isDrawing: React.MutableRefObject<boolean>;
  selectedShapeRef: any;
  shapeRef: any;
  syncShapeInStorage: (shape: FabricObject2) => void;
};

export type CanvasMouseUp = {
  canvas: FabricCanvas;
  isDrawing: React.MutableRefObject<boolean>;
  shapeRef: any;
  activeObjectRef: React.MutableRefObject<FabricObject2 | null>;
  selectedShapeRef: any;
  syncShapeInStorage: (shape: FabricObject2) => void;
  setActiveElement: any;
};

export type CanvasObjectModified = {
  options: FabricIEvent;
  syncShapeInStorage: (shape: FabricObject2) => void;
};

export type CanvasPathCreated = {
  options: (FabricIEvent & { path: any }) | any;
  syncShapeInStorage: (shape: FabricObject2) => void;
};

export type CanvasSelectionCreated = {
  options: FabricIEvent;
  isEditingRef: React.MutableRefObject<boolean>;
  setElementAttributes: React.Dispatch<React.SetStateAction<Attributes>>;
};

export type CanvasObjectScaling = {
  options: FabricIEvent;
  setElementAttributes: React.Dispatch<React.SetStateAction<Attributes>>;
};

export type RenderCanvas = {
  fabricRef: React.MutableRefObject<FabricCanvas | null>;
  canvasObjects: any;
  activeObjectRef: any;
};

export type CursorChatProps = {
  cursor: { x: number; y: number };
  cursorState: CursorState;
  setCursorState: (cursorState: CursorState) => void;
  updateMyPresence: (
    presence: Partial<{
      cursor: { x: number; y: number };
      cursorColor: string;
      message: string;
    }>
  ) => void;
};

declare module "parallax-js" {
  export default class Parallax {
    constructor(
      element: HTMLElement,
      options?: {
        relativeInput?: boolean;
        clipRelativeInput?: boolean;
        hoverOnly?: boolean;
        inputElement?: HTMLElement | null;
        calibrateX?: boolean;
        calibrateY?: boolean;
        invertX?: boolean;
        invertY?: boolean;
        limitX?: number | boolean;
        limitY?: number | boolean;
        scalarX?: number;
        scalarY?: number;
        frictionX?: number;
        frictionY?: number;
        originX?: number;
        originY?: number;
        precision?: number;
        pointerEvents?: boolean;
        onReady?: () => void;
      }
    );
    enable(): void;
    disable(): void;
    destroy(): void;
    version: string;
  }
}

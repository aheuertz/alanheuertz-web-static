import React, {ReactNode} from "react";

export enum ViewportSize {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
}

export enum Display {
  NONE = 'none',
  INLINE = 'inline',
  INLINE_BLOCK = 'inline-block',
  BLOCK = 'block',
  TABLE = 'table',
  TABLE_CELL = 'table-cell',
  TABLE_ROW = 'table-row',
  FLEX = 'flex',
  INLINE_FLEX = 'inline-flex',
}

interface SizeBoundResponsiveContainerProps {
  minimumViewportSize: ViewportSize;
  children: ReactNode;
  alternateChildren?: ReactNode;
  display?: Display;
}

export const SizeBoundResponsiveContainer = (props: SizeBoundResponsiveContainerProps) => {
  if (props.minimumViewportSize === ViewportSize.XS) return <>{props.children}</>;

  return (
    <>
      <div className={`d-none d-${props.minimumViewportSize}-${props.display || Display.BLOCK}`}>
        {props.children}
      </div>
      {props.alternateChildren &&
        <div className={`d-${props.minimumViewportSize}-none`}>
          {props.alternateChildren}
        </div>
      }
    </>
  );
}

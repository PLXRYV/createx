declare module '*.svg' {
  import type * as React from 'react';

  const content: React.FC<React.SVGProps<SVGSVGElement>>;

  export = content;
}

declare module '*?react' {
  import React from 'react';
  const SVG: React.FC<React.SVGProps<SVGSVGElement> & { title?: string }>;
  export default SVG;
}

declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

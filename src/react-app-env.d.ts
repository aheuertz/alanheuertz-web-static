/// <reference types="react-scripts" />

declare module '*.csv' {
  const content: string;
  export default content;
}

// Needed to suppress TypeScript compile error
declare module xml2js {}

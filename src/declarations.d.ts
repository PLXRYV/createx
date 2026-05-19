declare module '*.module.scss' {
    const classes: any;
    export default classes;
}

// Говорим TypeScript, что импортировать обычные scss файлы без переменной — это нормально
declare module '*.scss' {
    const content: void;
    export default content;
}

// Добавляем поддержку картинок и SVG для TypeScript
declare module '*.svg' {
    const content: string;
    export default content;
}

declare module '*.jpg' {
    const content: string;
    export default content;
}

declare module '*.png' {
    const content: string;
    export default content;
}

declare module '*.webp' {
    const content: string;
    export default content;
}
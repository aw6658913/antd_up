/*
 * @Description:
 * @Version: 2.0
 * @Autor: xff
 * @Date: 2020-10-30 14:33:46
 * @LastEditors: xff
 * @LastEditTime: 2020-11-30 14:08:37
 */
/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />
/// <reference types="antd-virtual-select" />
/// <reference types="lrz" />
/// <reference types="websocket-heartbeat-js" />

declare namespace NodeJS {
    interface ProcessEnv {
        readonly NODE_ENV: 'development' | 'production' | 'test';
        readonly PUBLIC_URL: string;
    }
}

declare module '*.bmp' {
    const src: string;
    export default src;
}

declare module '*.gif' {
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

declare module '*.png' {
    const src: string;
    export default src;
}

declare module '*.webp' {
    const src: string;
    export default src;
}

declare module '*.svg' {
    import * as React from 'react';

    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

    const src: string;
    export default src;
}

declare module '*.module.css' {
    const classes: { readonly [key: string]: string };
    export default classes;
}

declare module '*.module.scss' {
    const classes: { readonly [key: string]: string };
    export default classes;
}

declare module '*.module.sass' {
    const classes: { readonly [key: string]: string };
    export default classes;
}

declare module '*.wav' {
    const src: string;
    export default src;
}

declare module '*.mp3' {
    const src: string;
    export default src;
}

declare module 'antd-virtual-select';
declare module 'lrz';
declare module 'websocket-heartbeat-js';
declare module 'react-csv';
declare module 'notification-koro1';
declare module 'load-script2';
declare module 'react-virtualized';
declare module 'react-virtualized/dist/commonjs/WindowScroller';
declare module 'react-virtualized/dist/commonjs/AutoSizer';
declare module 'react-virtualized/dist/commonjs/List';
declare module 'react-virtualized/dist/commonjs/InfiniteLoader';
declare const window: any;
declare module 'canvas-size';
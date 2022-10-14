///<reference types="typescript" />

export declare class DLogger {
    path: string;
    time_zone: string;
    constructor(path: string);
    private line_finder;
    warn(message: string): void;
    show(message: string): void;
    error(message: string): void;
}
export default DLogger;

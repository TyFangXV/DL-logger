export declare class DLogger {
    path: string;
    time_zone: string;
    constructor(path: string);
    private line_finder;
    warn(error: Error | string): void;
    show(error: Error | string): void;
    error(error: Error | string): void;
}
export default DLogger;

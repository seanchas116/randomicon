declare class RandomIcon {
    protected opts: {
        size?: number;
        saturation?: number;
        alpha?: number;
    };
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    size: number;
    saturation: number;
    alpha: number;
    constructor(opts?: {
        size?: number;
        saturation?: number;
        alpha?: number;
    });
    generate(seed: string): void;
    toDataURL(): string;
}
export = RandomIcon;

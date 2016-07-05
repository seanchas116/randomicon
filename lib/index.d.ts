declare class IconGenerator {
    protected opts: {
        size?: number;
    };
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    size: number;
    constructor(opts?: {
        size?: number;
    });
    generate(seed: string): void;
}
export = IconGenerator;

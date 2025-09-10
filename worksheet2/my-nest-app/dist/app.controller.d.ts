export declare class AppController {
    findAll(): {
        id: number;
        title: string;
        content: string;
    }[];
    findOne(id: string): {
        id: number;
        title: string;
        content: string;
    } | undefined;
}

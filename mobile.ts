export class Mobile {
    public name: string;
    public model: number;
    public trademark: string;
    public sdSize: number;
    public color: string;
    public is5G: boolean;
    public cameraNumber: number;
    public price: number;
    constructor(
        name: string,
        model: number,
        trademark: string,
        sdSize: number,
        color: string,
        is5G: boolean,
        cameraNumber: number,
        price: number
    ) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.cameraNumber = cameraNumber;
        this.is5G = is5G;
        this.price = price;
    }
}

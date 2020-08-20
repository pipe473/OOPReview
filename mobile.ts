export class Mobile {
    private name: string;
    private model: number;
    private trademark: string;
    private sdSize: number;
    private color: string;
    private is5G: boolean;
    private cameraNumber: number;
    private price: number;
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
    public setName(name: string) {
        this.name = name;
      }
      public setModel(model: number) {
        this.model = model;
      }
      public setTrademark(trademark: string) {
        this.trademark = trademark;
      }
      public setSdSize(sdSize: number) {
        this.sdSize = sdSize;
      }
      public setColor(color: string) {
        this.color = color;
      }
      public setIs5G(is5G: boolean) {
        this.is5G = is5G;
      }
      public setCameraNumber(cameraNumber: number) {
        this.cameraNumber = cameraNumber;
      }
      public setPrice(price: number) {
        this.price = price;
      }
      
    
      public getName(): string {
        return this.name;
      }
      public getModel(): number {
        return this.model;
      }
      public getTrademark(): string {
        return this.trademark;
      }
      public getSdSize(): number {
        return this.sdSize;
      }
      public getColor(): string {
        return this.color;
      }
      public getIs5G(): boolean {
        return this.is5G;
      }
      public getCameraNumber(): number {
        return this.cameraNumber;
      }
      public getPrice(): number {
        return this.price;
      }

      public charactsMobiles() {
       console.log(`\nThe characteristics of mobile ${this.name} are: \n  ◘ Name: ${this.name} \n  ◘ Model: ${this.model} \n  ◘ Trademark: ${this.trademark} \n  ◘ SD Size(GB): ${this.sdSize} \n  ◘ Color: ${this.color} \n  ◘ Is5G: ${this.is5G} \n  ◘ Number of cameras: ${this.cameraNumber}\n`);
        }

      
      }
      
      

      
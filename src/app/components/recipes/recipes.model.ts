export class Recipe {
    public name: string;
    public description: string;
    public imgPath: string;
    public imgAlt: string;

    constructor(name: string, desc: string, imgpath: string, imgalt: string) {
        this.name = name;
        this.description = desc;
        this.imgPath = imgpath;
        this.imgAlt = imgalt;
    }
}

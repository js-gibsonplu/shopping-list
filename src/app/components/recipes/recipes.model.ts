export class Recipe {
    public name: string;
    public description: string;
    public imgPath: string;
    public imgAlt: string;
    public title: string;

    constructor(name: string, desc: string, imgpath: string, imgalt: string, title: string) {
        this.name = name;
        this.description = desc;
        this.imgPath = imgpath;
        this.imgAlt = imgalt;
        this.title = title;
    }
}

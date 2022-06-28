class color{
    constructor(r,g,b)
    {
        this.r=r;
        this.g=g;
        this.b=b;
    }

    rgb()
    {
             const{r,g,b} = this;
             return `rgb(${r},${g},${b})`;
    }
}

const color1 = new color(233,100,50);
const color2 = new color(250,50,100);
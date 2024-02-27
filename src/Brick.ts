import Sprite from './Sprite';

class Brick extends Sprite {
    status: number;
    constructor(x, y, width, height, color = 'purple', status = 1) {
        super(x, y, width, height, color);
        this.status = status;
    }

    render(ctx) {
        
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.fillStyle = "#1a7011";  // Set your desired brick color
            ctx.fill();
            ctx.closePath();
        
    }
}
export default Brick;
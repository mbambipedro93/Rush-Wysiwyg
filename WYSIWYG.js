class MyWysiwyg {
    constructor(document, options) {
      this.options = {
        option1: "default_value1",
        option2: "default_value2",
        
      };
  
      Object.assign(this.options, options);
    }
  }
  
  export { MyWysiwyg };
  
  // export const name = 'square';

  // export function draw(ctx, length, x, y, color) {
  //   ctx.fillStyle = color;
  //   ctx.fillRect(x, y, length, length);
  
  //   return {
  //     length: length,
  //     x: x,
  //     y: y,
  //     color: color
  //   };
  // }
  // export { name, draw, reportArea, reportPerimeter };
  // import { name, draw, reportArea, reportPerimeter } from './modules/square.js';

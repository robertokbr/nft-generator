import { loadImage, createCanvas, Canvas, NodeCanvasRenderingContext2D } from 'canvas';
import paths from '../configs/paths';
import fs from 'fs';

interface IRequest {
  recipes: string[];
  content: Array<{
    layer: string;
    content: string[];
    length: number;
  }>
}

export default class CreateArtsService {
  private canvas: Canvas;
  private context: NodeCanvasRenderingContext2D;

  constructor() {
    const canvas = createCanvas(1024, 1024); 
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
  }

  /**
   * @summary
   * Generate to each recipe an art, using canvas to join 
   * all provided content
   */
  public execute({ content, recipes }: IRequest) {
    recipes.forEach(async (recipe, index) => {
      const recipe_index = recipe.split('-');
    
      const images = await Promise.all(content.map(({ content, layer }, i) => {
        const image_path = `${paths.layer_path}/${layer}/${content[Number(recipe_index[i])]}`
    
        return loadImage(image_path)
      }));
    
      this.context.clearRect(0, 0, 1024, 1024);
    
      images.forEach(image => {
        this.context.drawImage(image , 0, 0, 1024, 1024);
      })
      
      fs.writeFileSync(
        `${paths.build_path}/${index}.png`,
        this.canvas.toBuffer("image/png")
      );
    
      console.info(`🧪 Generating image ${index} with the recipe ${recipe}...`)
    })
  }
}
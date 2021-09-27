import path from 'path';
import fs from 'fs';
import paths from '../configs/paths';

export default class GetLayersContentService {
  /**
   * @param layers
   * An array with the names of the 
   * directories that you have added into the layers dir and will
   * compound the art.
   * Notice that the order of each array string is the order 
   * that the layer is going to take inside the art
   * @returns
   * Return to each layers subdir, the dir name, the content,
   * and the length of the dir content
   */
  public execute(layers: Array<string>) {
    const content = layers.map((layer) => {
      const complete_path = path.resolve(paths.layer_path, layer);

      const layer_content =  fs.readdirSync(complete_path).map(file => file)

      return {
        layer,
        content: layer_content,
        length: layer_content.length,
      }
    });

    return content;
  }
}
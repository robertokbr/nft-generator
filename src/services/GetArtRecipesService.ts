interface IRequest {
  content: Array<{ length: number }>
  amount: number
}

export default class GetArtRecipesService {
  /**
   * 
   * @param amount The number of arts to be generated
   * @param content Object Array with each layer content length
   * @returns A string Array, generated by:
   * taking content random indexes from each layer, 
   * and joining those into unique sequences.
   */
  public execute({ amount, content }: IRequest) {
    const recipes: string[] = [];

    let i = 0;
    
    while (i < amount) {
      const recipe_number = content.map(({ length }) => {
        return Math.floor(Math.random() * length);
      }).join('-');
    
      if (!recipes.includes(recipe_number)) {
        recipes.push(recipe_number);
    
        i++;
      }
    }

    return recipes;
  }
}
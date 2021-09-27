import CreateArtsService from './services/CreateArtsService';
import GetArtRecipesService from './services/GetArtRecipesService';
import GetLayersContentService from './services/GetLayersContentService';

// fill in the amount of art
const amount = 50;

// describe your layers by montage order 
const layers = [
  'background',
  'body',
  'foot',
  'head',
]

const getLayersContent = new GetLayersContentService();

const content = getLayersContent.execute(layers);

const getArtRecipes = new GetArtRecipesService();
 
const recipes = getArtRecipes.execute({ amount, content });

const createArts = new CreateArtsService();

createArts.execute({
  content,
  recipes,
})
interface Recipe {
  recipeId: number;
  name: string;
  price: number;
  time: number;
  image: string;
  recipeIngredients: RecipeIngredient[];
  recipeInstructions: RecipeInstruction[];
}

interface RecipeInstruction {
  recipeInstructionId: number;
  instructionText: string;
}

interface RecipeIngredient {
  recipeIngredientId?: number;
  ingredient?: Ingredient;
  amount?: number;
  amountType?: string;
}

interface Ingredient {
  ingredientId: number;
  name: string;
  Type: string;
}
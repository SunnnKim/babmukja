package kr.co.babmukja.recipe.service;

import java.util.List;
import java.util.Map;

import kr.co.babmukja.repository.domain.Keyword;
import kr.co.babmukja.repository.domain.Page;
import kr.co.babmukja.repository.domain.Recipe;
import kr.co.babmukja.repository.domain.RecipeReview;

public interface RecipeService {	
	public void insertRecipe(Recipe recipe,int[] keyList);
	public Recipe selectRecipeByNo(int no);
	public Recipe updateForm(int no);
	public void updateRecipe(Recipe recipe);
	public void deleteRecipe(int no);
	public List<Recipe> selectRecipe();
	public void addViewCnt(int no);
	public Map<String, Object> selectReviewByNo(Page page);
	public int selectReviewCount(Page page);
	public void insertRecipeReview(RecipeReview review);
	public List<Keyword> selectKeywordMost();
	public List<Keyword> selectKeyword();
	public List<Keyword> selectKeywordByNo(int no);
	public void updateRecipeReview(RecipeReview review);
	public List<Recipe> selectRecipeByKeyword(int no);
}

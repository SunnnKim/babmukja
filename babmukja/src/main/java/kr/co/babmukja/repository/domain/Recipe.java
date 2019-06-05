package kr.co.babmukja.repository.domain;

import java.util.Date;

public class Recipe {
	
	private int memNo;
	private String memName;
	private String memNickname;
	
	private int recipeNo;
	private String title;
	private String content;
	private Date regDate;
	private int rating;
	private int viewCnt;
	
	private int likeCnt;
	private int scrapCnt;
	
	private String imgPath;	
	private int keywordNo;
	private int country;
	

	public int getCountry() {
		return country;
	}
	public void setCountry(int country) {
		this.country = country;
	}
	public int getKeywordNo() {
		return keywordNo;
	}
	public void setKeywordNo(int keywordNo) {
		this.keywordNo = keywordNo;
	}
	public int getLikeCnt() {
		return likeCnt;
	}
	public void setLikeCnt(int likeCnt) {
		this.likeCnt = likeCnt;
	}
	public int getScrapCnt() {
		return scrapCnt;
	}
	public void setScrapCnt(int scrapCnt) {
		this.scrapCnt = scrapCnt;
	}
	public String getImgPath() {
		return imgPath;
	}
	public void setImgPath(String imgPath) {
		this.imgPath = imgPath;
	}
	public int getViewCnt() {
		return viewCnt;
	}
	public void setViewCnt(int viewCnt) {
		this.viewCnt = viewCnt;
	}
	public int getMemNo() {
		return memNo;
	}
	public void setMemNo(int memNo) {
		this.memNo = memNo;
	}
	public String getMemName() {
		return memName;
	}
	public void setMemName(String memName) {
		this.memName = memName;
	}
	public String getMemNickname() {
		return memNickname;
	}
	public void setMemNickname(String memNickname) {
		this.memNickname = memNickname;
	}
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	public Date getRegDate() {
		return regDate;
	}
	public void setRegDate(Date regDate) {
		this.regDate = regDate;
	}
	public int getRecipeNo() {
		return recipeNo;
	}
	public void setRecipeNo(int recipeNo) {
		this.recipeNo = recipeNo;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	
	
}

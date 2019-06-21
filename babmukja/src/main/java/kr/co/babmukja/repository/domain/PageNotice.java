package kr.co.babmukja.repository.domain;

public class PageNotice {
	private int pageNo = 1;
	public int getPageNo() {
		return pageNo;
	}
	public void setPageNo(int pageNo) {
		this.pageNo = pageNo;
	}
	public int getBegin() {
		return (this.pageNo -1) * 10;
	}
	public int getEnd() {
		return 10;
	}
}
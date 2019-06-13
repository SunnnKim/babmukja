package kr.co.babmukja.repository.mapper;

import java.util.List;
import java.util.Map;

import kr.co.babmukja.repository.domain.FileVO;
import kr.co.babmukja.repository.domain.Pagepb;
import kr.co.babmukja.repository.domain.ReviewFileVO;
import kr.co.babmukja.repository.domain.StorePB;
import kr.co.babmukja.repository.domain.StorePBCart;
import kr.co.babmukja.repository.domain.StorePBInquire;
import kr.co.babmukja.repository.domain.StorePBPayment;
import kr.co.babmukja.repository.domain.StorePBReview;

public interface StorePBMapper {
	/*
	 *   editor 이전
	public List<StorePB> selectPBList();
	public void insertpb(StorePB storepb);
	public void insertPBImage(FileVO fileVO);
	public int selectMaxNum();
	public List<StorePB> selectPBMainList();
	
	// 상세조회
	public StorePB selectPBdetail(int pbNo);
	public List<FileVO> selectPBDetailImage(int groupNo);
	
	// 삭제
	public void deletePBByNo(int pbNo);
	*/
	
	public List<StorePB> selectPBStore();
	public List<StorePB> selectPBStoreList(Pagepb page);
	public StorePB selectPBStoreByNo(int pbNo);
	//public List<StorePB> selectAdminPBList(Pagepb page);
	//public int selectAdminPBListCount();
	//public void insertPBStore(StorePB storepb);
	public void updatePBStore(StorePB storepb);
	//public void deletePBStore(int no);
	public List<StorePBReview> selectPBReviewSelect(StorePBReview storePBReview);
	// public List<ReviewFileVO> selectPBReviewSelectImage(int pbReviewNo);
	public int selectPBStoreCount(Pagepb page);
	
	// PB 상품 후기
	public void insertPBReview(StorePBReview reviewpb);
	public void insertPBReviewImage(FileVO fileVO);
	public int selectMaxNum();
	public List<StorePBReview> selectReview(int pbNo);
	public List<ReviewFileVO> selectReviewFile(int pbReviewNo);
	
	// pb 상품 후기 수정관련
	public StorePBReview selectReviewByNo(int pbReviewNo);
	public StorePBReview updatePBReview(StorePBReview storePBReview);
	// pb 상품 후기 삭제
	public void deleteReviewByNo(int pbReviewNo);
	
	
	// PB 상품 문의
	public void insertInquiry(StorePBInquire storePBInquire);
	public List<StorePBInquire> selectPBInquire(int pbNo);
	public StorePBInquire selectInquiryByNo(int inquiryNo);
	public void updateInquiry(StorePBInquire storePBInquire);
	public void deleteInquiry(int inquiryNo);
	
	// PB 상품 결제
	public void insertPBPayment(StorePBPayment storePBPayment);
	public StorePBPayment selectPBPaymentByNo(int paymentNo);
	
	// PB 상품 장바구니
	public void insertPBCart(StorePBCart storePBCart);
	public List<StorePBCart> selectPBCartByMember(int memNo);
	// pb 상품 장바구니 삭제
	public void deletePBCart(int cartNo);
}

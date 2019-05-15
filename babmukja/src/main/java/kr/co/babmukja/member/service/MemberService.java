package kr.co.babmukja.member.service;

import kr.co.babmukja.repository.domain.Member;

public interface MemberService {
	Member selectLogin (Member member); // 로그인
	
	void insertMember (Member member); // 회원가입
	
	int selectCheckNickName(String memNickname); // 닉네임 중복체크
	
	int selectCheckEmail(String memEmail); // 이메일 중복체크
	
}

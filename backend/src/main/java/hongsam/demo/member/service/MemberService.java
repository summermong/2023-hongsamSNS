package hongsam.demo.member.service;

import hongsam.demo.member.domain.LoginResponseDto;
import hongsam.demo.member.domain.MemberDto;
import hongsam.demo.member.domain.LogInDto;
import hongsam.demo.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class MemberService {

    private final MemberRepository memberRepository;


    public boolean signUp(MemberDto memberDTO) {
        MemberDto signUpMemberDto = memberRepository.save(memberDTO);
        if (signUpMemberDto != null) {
            log.info("회원 가입 성공");
            return true;
        }
        else {
            log.info("회원 가입 실패");
            return false;
        }
    }

    public LoginResponseDto logIn(LogInDto logInDto) {

        Optional<MemberDto> findMember = memberRepository.findByEmail(logInDto.getEmail());
        if(findMember.isEmpty()) {
            log.info("존재하지 않는 회원입니다.");
            return new LoginResponseDto(1, null); // 존재하지 않는 회원
        } else {
            MemberDto member = findMember.get();
            if (!member.getPassword().equals(logInDto.getPassword())) {
                log.info("비밀번호가 틀렸습니다.");
                return new LoginResponseDto(2, null); // 비밀번호 틀림
            }
            log.info("로그인에 성공했습니다.");
            return new LoginResponseDto(3, member); // 로그인 성공
        }

    }

    public boolean isDuplicatedEmail(String email) {
        Optional<MemberDto> findMember = memberRepository.findByEmail(email);
        if(findMember.isEmpty()) {
            log.info("사용 가능한 이메일 주소");
            return true;
        }
        else {
            log.info("이미 가입되어 있는 이메일 주소입니다.");
            return false;
        }
    }

}

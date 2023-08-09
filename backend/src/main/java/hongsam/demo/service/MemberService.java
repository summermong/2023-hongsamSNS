package hongsam.demo.service;

import hongsam.demo.domain.LoginResponseDto;
import hongsam.demo.domain.MemberDto;
import hongsam.demo.domain.LogInDto;
import hongsam.demo.repository.MemberRepository;
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
            return true;
        }
        else return false;
    }

    public LoginResponseDto logIn(LogInDto logInDto) {

        Optional<MemberDto> findMember = memberRepository.findByEmail(logInDto.getEmail());
        if(findMember.isEmpty()) {
            return new LoginResponseDto(1, null); // 존재하지 않는 회원
        } else {
            MemberDto member = findMember.get();
            if (!member.getPassword().equals(logInDto.getPassword())) {
                return new LoginResponseDto(2, null); // 비밀번호 틀림
            }
            log.info("member={}", member);
            return new LoginResponseDto(3, member); // 로그인 성공
        }

    }

    public boolean isDuplicatedEmail(String email) {
        Optional<MemberDto> findMember = memberRepository.findByEmail(email);
        if(findMember.isEmpty()) {
            return true;
        }
        else return false;
    }

}

package hongsam.demo.member.controller;

import hongsam.demo.member.domain.EmailDto;
import hongsam.demo.member.domain.LogInDto;
import hongsam.demo.member.domain.LoginResponseDto;
import hongsam.demo.member.domain.MemberDto;
import hongsam.demo.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@RestController
@RequiredArgsConstructor
@RequestMapping("/member")
@Slf4j
public class MemberController {

    private final MemberService memberService;

    @PostMapping("/signup")
    public boolean signUp(@Validated @RequestBody MemberDto memberDTO) {
//        log.info("member={}", member);
        return memberService.signUp(memberDTO);
    }

    @PostMapping("/emailcheck")
    public boolean emailCheck(@Validated @RequestBody EmailDto emailDTO) {
        return memberService.isDuplicatedEmail(emailDTO.getEmail());
    }

    @PostMapping("/login")
    public LoginResponseDto logIn(@RequestBody LogInDto logInDto, HttpServletRequest request) {
        LoginResponseDto result = memberService.logIn(logInDto);
        if (result.getLoginResult() == 3) {
            MemberDto member = result.getMember();
            HttpSession session = request.getSession();
            session.setAttribute("loginMember", member);
        }
        return result;
    }

}

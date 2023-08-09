package hongsam.demo.controller;

import hongsam.demo.domain.EmailDto;
import hongsam.demo.domain.LogInDto;
import hongsam.demo.domain.LoginResponseDto;
import hongsam.demo.domain.MemberDto;
import hongsam.demo.service.MemberService;
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
    public int logIn(@RequestBody LogInDto logInDto, HttpServletRequest request) {
        LoginResponseDto result = memberService.logIn(logInDto);
        if (result.getLoginResult() == 3) {
            MemberDto member = result.getMember();
            HttpSession session = request.getSession();
            session.setAttribute("loginMember", member);
        }
        return result.getLoginResult();
    }


}

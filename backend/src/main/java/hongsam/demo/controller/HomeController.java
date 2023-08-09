package hongsam.demo.controller;

import hongsam.demo.domain.MemberDto;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@RestController
public class HomeController {

    @GetMapping("/")
    public String home(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if (session == null) {
            return "no session";
        }
        MemberDto findMember = (MemberDto) session.getAttribute("loginMember");
        if (findMember == null) {
            return "no session";
        }
        return findMember.getDisplayName() + "님 환영합니다.";
    }
}

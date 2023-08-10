package hongsam.demo.member.controller;

import hongsam.demo.member.domain.MemberDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Slf4j
@RestController
public class HomeController {

    @GetMapping("/home")
    public boolean home(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        MemberDto findMember = (MemberDto) session.getAttribute("loginMember");
        return true;
    }

}

package hongsam.demo.member.controller;

import hongsam.demo.member.domain.HomeDto;
import hongsam.demo.member.domain.MemberDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@Slf4j
@RestController
public class HomeController {

    @GetMapping("/api/home")
    public HomeDto home(HttpServletRequest request, @SessionAttribute(value = "loginMember", required = false) MemberDto member)  {
       String requestURI = request.getRequestURI();
        log.info("인증 체크 실행 {}", requestURI);
        HttpSession session = request.getSession(false);
        HomeDto result = new HomeDto();
        if (session == null || session.getAttribute("loginMember") == null) {
            log.info("미인증 사용자 접근");
//            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED); // 401 Unauthorized 상태 코드 설정
            result.setLoginCheck(false);
            result.setMemberId(null);
            result.setDisplayName(null);
            return result;
        }
        log.info("인증 성공");
        result.setLoginCheck(true);
        result.setMemberId(member.getId());
        result.setDisplayName(member.getDisplayName());
        return result;
    }

}

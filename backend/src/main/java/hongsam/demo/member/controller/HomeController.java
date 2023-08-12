package hongsam.demo.member.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@Slf4j
@RestController
public class HomeController {

    @GetMapping("/api/home")
    public boolean home(HttpServletRequest request, HttpServletResponse response)  {
       String requestURI = request.getRequestURI();
        log.info("인증 체크 실행 {}", requestURI);
        HttpSession session = request.getSession(false);

        if (session == null || session.getAttribute("loginMember") == null) {
            log.info("미인증 사용자 접근");
//            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED); // 401 Unauthorized 상태 코드 설정
            return false;
        }
        log.info("인증 성공");
        return true;
    }

}

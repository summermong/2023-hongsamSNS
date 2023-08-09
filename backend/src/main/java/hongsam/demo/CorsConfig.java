package hongsam.demo;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class CorsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // 모든 요청에 대해 CORS 설정 적용
            .allowedOrigins("http://localhost:3000") // 허용할 도메인 지정
            .allowedMethods("GET", "POST", "PUT", "DELETE") // 허용할 HTTP 메서드 지정
            .allowedHeaders("Content-Type", "Authorization") // 허용할 헤더 지정
            .allowCredentials(true); // 인증 정보 허용
    }
}

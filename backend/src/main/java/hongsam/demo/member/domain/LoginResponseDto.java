package hongsam.demo.member.domain;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class LoginResponseDto {
    private int loginResult;
    private MemberDto member;

    public LoginResponseDto(int loginResult, MemberDto member) {
        this.loginResult = loginResult;
        this.member = member;
    }
}

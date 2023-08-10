package hongsam.demo.member.domain;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

@Getter
@Setter
@ToString
public class MemberDto {

    private Long id;

    @NotEmpty
    private String displayName;

    @NotEmpty
    @Email
    private String email;

    @NotEmpty
    private String password;

    public MemberDto() {
    }

    public MemberDto(String displayName, String email, String password) {
        this.displayName = displayName;
        this.email = email;
        this.password = password;
    }

}

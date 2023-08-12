package hongsam.demo.member.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class HomeDto {

    private boolean loginCheck;
    private Long memberId;
    private String displayName;

}
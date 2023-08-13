package hongsam.demo.board.domain;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BoardMemberIdDto {

    private Long memberId;

    public BoardMemberIdDto() {
    }

    public BoardMemberIdDto(Long memberId) {
        this.memberId = memberId;
    }
}

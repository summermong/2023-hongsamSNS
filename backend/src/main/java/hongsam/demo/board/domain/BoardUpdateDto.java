package hongsam.demo.board.domain;

import lombok.Data;

@Data
public class BoardUpdateDto {

    private Long memberId;

    private String title;
    private String content;

    public BoardUpdateDto() {
    }

    public BoardUpdateDto(Long memberId, String title, String content) {
        this.memberId = memberId;
        this.title = title;
        this.content = content;
    }
}

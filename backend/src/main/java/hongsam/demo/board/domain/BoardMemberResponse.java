package hongsam.demo.board.domain;


import lombok.Data;

@Data
public class BoardMemberResponse {
    private Long boardId;
    private String title;
    private String content;
    private Long memberId;
    private String displayName;
}

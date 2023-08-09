package hongsam.demo.board.domain;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class Board {

    private Long boardId;

    private String title;
    private String content;
//    private String date;

    public Board() {
    }

    public Board(String title, String content, Long memberId) {
        this.title = title;
        this.content = content;
    }
}

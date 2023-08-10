package hongsam.demo.board.domain;

import lombok.Getter;

@Getter
public class BoardResponse {
    private int status;
    private Object data;

    public BoardResponse(int status, Object data) {
        this.status = status;
        this.data = data;
    }

}

package hongsam.demo.board.repository;

public interface BoardRepository {

    void updateBoard(Long boardId, BoardUpdateDto updateParam);

    void deleteBoard(Long boardId);

}

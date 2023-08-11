package hongsam.demo.board.repository;

import hongsam.demo.board.domain.Board;
import hongsam.demo.board.domain.BoardMemberResponse;
import hongsam.demo.board.domain.BoardUpdateDto;

import java.util.List;
import java.util.Optional;

public interface BoardRepository {

    Board createBoard(Long memberId, Board boardCreateDto);

    List<BoardMemberResponse> getBoards();

    Optional<Board> getBoardById(Long boardId);

    void updateBoard(Long boardId, BoardUpdateDto updateParam);

    void deleteBoard(Long boardId);

}

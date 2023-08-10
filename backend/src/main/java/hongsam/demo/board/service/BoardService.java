package hongsam.demo.board.service;

import hongsam.demo.board.domain.Board;
import hongsam.demo.board.domain.BoardMemberResponse;
import hongsam.demo.board.domain.BoardResponse;
import hongsam.demo.board.repository.BoardRepository;
import hongsam.demo.board.repository.BoardUpdateDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BoardService {

    private final BoardRepository boardRepository;

    public List<BoardMemberResponse> getBoards(){
        return boardRepository.getBoards();
    }

    public BoardResponse getBoardById(Long boardId){
        Optional<Board> result = boardRepository.getBoardById(boardId);

        if(!result.isPresent()){
            return new BoardResponse(4, "존재하지 않는 게시물입니다.");
        }

        return new BoardResponse(200, result.get());
    }


    public Board createBoard(Long memberId, Board board) {
        //TODO userId가 없으면 예외처리 필요 -> memberRepository
        return boardRepository.createBoard(memberId, board);
    }


    public void updateBoard(Long boardId, BoardUpdateDto boardUpdateDto) {
        boardRepository.updateBoard(boardId,boardUpdateDto);
    }

    public void deleteBoard(Long boardId) {
        boardRepository.deleteBoard(boardId);
    }

}

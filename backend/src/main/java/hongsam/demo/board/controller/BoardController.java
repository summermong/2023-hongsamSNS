package hongsam.demo.board.controller;

import hongsam.demo.board.domain.Board;
import hongsam.demo.board.domain.BoardMemberResponse;
import hongsam.demo.board.domain.BoardResponse;
import hongsam.demo.board.repository.BoardUpdateDto;
import hongsam.demo.board.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/board")
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService;

    @GetMapping("")
    public List<BoardMemberResponse> getBoards(){
        return boardService.getBoards();
    }

    @GetMapping("/{boardId}")
    public BoardResponse getBoardById(@PathVariable Long boardId){
        return boardService.getBoardById(boardId);
    }

    @PostMapping("/{memberId}")
    public Board createBoard(@PathVariable Long memberId, @RequestBody Board board){
        return boardService.createBoard(memberId, board);
    }

    @PatchMapping("/{boardId}")
    public void updateBoard(@PathVariable Long boardId, @RequestBody BoardUpdateDto boardUpdateDto) {
        boardService.updateBoard(boardId, boardUpdateDto);
    }

    @DeleteMapping("/{boardId}")
    public void deleteBoard(@PathVariable Long boardId) {
        boardService.deleteBoard(boardId);
    }

}

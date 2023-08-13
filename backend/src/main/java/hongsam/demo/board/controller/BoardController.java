package hongsam.demo.board.controller;

import hongsam.demo.board.domain.*;
import hongsam.demo.board.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    public BoardResponse updateBoard(@PathVariable Long boardId, @RequestBody BoardUpdateDto boardUpdateDto) {
        return boardService.updateBoard(boardId, boardUpdateDto);
    }

    @DeleteMapping("/{boardId}")
    public BoardResponse deleteBoard(@PathVariable Long boardId, @RequestBody BoardMemberIdDto boardMemberIdDto) {

        return boardService.deleteBoard(boardId, boardMemberIdDto.getMemberId());
    }

}

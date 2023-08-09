package hongsam.demo.board.controller;

import hongsam.demo.board.repository.BoardUpdateDto;
import hongsam.demo.board.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/board")
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService;

    @PatchMapping("/{boardId}")
    public void updateBoard(@PathVariable Long boardId, @RequestBody BoardUpdateDto boardUpdateDto) {
        boardService.updateBoard(boardId, boardUpdateDto);
    }

    @DeleteMapping("/{boardId}")
    public void deleteBoard(@PathVariable Long boardId) {
        boardService.deleteBoard(boardId);
    }

}

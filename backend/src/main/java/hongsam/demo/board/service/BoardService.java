package hongsam.demo.board.service;

import hongsam.demo.board.repository.BoardRepository;
import hongsam.demo.board.repository.BoardUpdateDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BoardService {

    private final BoardRepository boardRepository;

    public void updateBoard(Long boardId, BoardUpdateDto boardUpdateDto) {
        boardRepository.updateBoard(boardId,boardUpdateDto);
    }

    public void deleteBoard(Long boardId) {
        boardRepository.deleteBoard(boardId);
    }

}

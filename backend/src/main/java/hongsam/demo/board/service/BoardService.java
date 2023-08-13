package hongsam.demo.board.service;

import hongsam.demo.board.domain.Board;
import hongsam.demo.board.domain.BoardMemberResponse;
import hongsam.demo.board.domain.BoardResponse;
import hongsam.demo.board.repository.BoardRepository;
import hongsam.demo.board.domain.BoardUpdateDto;
import hongsam.demo.member.domain.MemberDto;
import hongsam.demo.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BoardService {

    private final BoardRepository boardRepository;
    private final MemberRepository memberRepository;


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
        Optional<MemberDto> findMember = memberRepository.findById(memberId);
        if (!findMember.isPresent()) {
            return null;
        }
        return boardRepository.createBoard(memberId, board);
    }


    public BoardResponse updateBoard(Long boardId, BoardUpdateDto boardUpdateDto) {

        // 회원 존재 확인
        Optional<MemberDto> findMember = memberRepository.findById(boardUpdateDto.getMemberId());
        if (!findMember.isPresent()) {
            return new BoardResponse(400, "존재하지 않는 회원입니다.");
        }
        Optional<Board> board = boardRepository.getBoardById(boardId);
        // 보드 존재 확인
        if (!board.isPresent()) {
            return new BoardResponse(400, "존재하지 않는 게시물입니다.");
        }
        // 넘어온 memberId != 보드의 memberId
        if (boardUpdateDto.getMemberId() != board.get().getMemberId()) {
            return new BoardResponse(400, "게시물의 소유자가 아닙니다.");
        }

        boardRepository.updateBoard(boardId,boardUpdateDto);

        return new BoardResponse(200, "게시물이 성공적으로 수정되었습니다.");
    }

    public BoardResponse deleteBoard(Long boardId, Long memberId) {

        // 회원 존재 확인
        Optional<MemberDto> findMember = memberRepository.findById(memberId);
        if (!findMember.isPresent()) {
            return new BoardResponse(400, "존재하지 않는 회원입니다.");
        }

        Optional<Board> board = boardRepository.getBoardById(boardId);
        // 보드 존재 확인
        if (!board.isPresent()) {
            return new BoardResponse(400, "존재하지 않는 게시물입니다.");
        }
        // 넘어온 memberId != 보드의 memberId
        if (memberId != board.get().getMemberId()) {
            return new BoardResponse(400, "게시물의 소유자가 아닙니다.");
        }

        boardRepository.deleteBoard(boardId);

        return new BoardResponse(200, "게시물이 성공적으로 삭제되었습니다.");
    }

}

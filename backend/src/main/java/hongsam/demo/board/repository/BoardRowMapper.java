package hongsam.demo.board.repository;

import hongsam.demo.board.domain.Board;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class BoardRowMapper implements RowMapper<Board> {

    @Override
    public Board mapRow(ResultSet rs, int rowNum) throws SQLException {
        Board board = new Board();
        board.setBoardId(rs.getLong("boardId"));
        board.setTitle(rs.getString("title"));
        board.setContent(rs.getString("content"));
        board.setMemberId(rs.getLong("memberId"));
        // Add other fields as necessary
        return board;
    }
}

package hongsam.demo.board.repository;

import hongsam.demo.board.domain.BoardMemberResponse;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class BoardMemberRowMapper implements RowMapper<BoardMemberResponse> {
    @Override
    public BoardMemberResponse mapRow(ResultSet rs, int rowNum) throws SQLException {
        BoardMemberResponse dto = new BoardMemberResponse();

        dto.setBoardId(rs.getLong("boardId"));
        dto.setTitle(rs.getString("title"));
        dto.setContent(rs.getString("content"));
        dto.setMemberId(rs.getLong("memberId"));
        dto.setDisplayName(rs.getString("displayName"));

        return dto;
    }
}

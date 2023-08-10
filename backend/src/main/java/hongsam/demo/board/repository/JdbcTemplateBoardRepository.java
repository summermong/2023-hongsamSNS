package hongsam.demo.board.repository;

import hongsam.demo.board.domain.Board;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;
import java.util.Optional;

@Repository
public class JdbcTemplateBoardRepository implements BoardRepository{

    private final JdbcTemplate template;
    private final SimpleJdbcInsert jdbcInsert;

    public JdbcTemplateBoardRepository(DataSource dataSource) {
        this.template = new JdbcTemplate(dataSource);
        this.jdbcInsert = new SimpleJdbcInsert(dataSource)
                .withTableName("board")
                .usingGeneratedKeyColumns("id");
    }


    @Override
    public Board createBoard(Long memberId, Board board) {
        board.setMemberId(memberId);
        SqlParameterSource param = new BeanPropertySqlParameterSource(board);
        Number key = jdbcInsert.executeAndReturnKey(param);
        board.setBoardId(key.longValue());
        return board;
    }

    @Override
    public List<Board> getBoards() {
        String sql = "SELECT * FROM board";
        return template.query(sql, new BoardRowMapper());
    }

    @Override
    public Optional<Board> getBoardById(Long boardId) {
        String sql = "SELECT boardId, title, content, memberId FROM board WHERE boardId = ?";
        try {
            Board board = template.queryForObject(sql, new BoardRowMapper(), boardId);
            return Optional.ofNullable(board);
        } catch (EmptyResultDataAccessException e) {
            return Optional.empty();
        }
    }

    @Override
    public void updateBoard(Long boardId, BoardUpdateDto updateParam) {

        String sql = "update board set title = ?, content = ? where id = ?";

        template.update(sql,
                updateParam.getTitle(),
                updateParam.getContent(),
                boardId);
    }

    @Override
    public void deleteBoard(Long boardId) {

        String sql = "delete from board where id = ?";

        template.update(sql, boardId);
    }

}

package hongsam.demo.board.repository;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;

@Repository
public class JdbcTemplateBoardRepository implements BoardRepository{

    private final JdbcTemplate template;

    public JdbcTemplateBoardRepository(DataSource dataSource) {
        this.template = new JdbcTemplate(dataSource);
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

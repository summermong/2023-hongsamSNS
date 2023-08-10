package hongsam.demo.member.repository;

import hongsam.demo.member.domain.MemberDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.Map;
import java.util.Optional;

@Repository
@Slf4j
public class JdbcTxMemberRepository implements MemberRepository {

    private final NamedParameterJdbcTemplate template;

    @Autowired
    public JdbcTxMemberRepository(DataSource dataSource) {
        this.template = new NamedParameterJdbcTemplate(dataSource);
    }

    // 회원가입
    @Override
    public MemberDto save(MemberDto memberDTO) {
        String sql = "insert into member(name, email, password) values(:displayName, :email, :password)";
        KeyHolder keyHolder = new GeneratedKeyHolder();

        SqlParameterSource param = new BeanPropertySqlParameterSource(memberDTO);
        template.update(sql, param, keyHolder);

        Long id = keyHolder.getKey().longValue();
        memberDTO.setId(id);
        return memberDTO;
    }

    @Override
    public Optional<MemberDto> findByEmail(String email) {
        String sql = "select * from member where email = :email";
        Map<String, Object> param = Map.of("email", email);
        try {
            MemberDto findedMemberDto = template.queryForObject(sql, param, memberRowMapper());
            return Optional.of(findedMemberDto);
        } catch (EmptyResultDataAccessException e) {
            return Optional.empty();
        }
    }

    @Override
    public Optional<MemberDto> findById(Long id) {
        String sql = "select * from member where id = :id";
        Map<String, Object> param = Map.of("id", id);
        try {
            MemberDto findedMemberDto = template.queryForObject(sql, param, memberRowMapper());
            return Optional.of(findedMemberDto);
        } catch (EmptyResultDataAccessException e) {
            return Optional.empty();
        }
    }

    private RowMapper<MemberDto> memberRowMapper() {
        return BeanPropertyRowMapper.newInstance(MemberDto.class);
    }

}

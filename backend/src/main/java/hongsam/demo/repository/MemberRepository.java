package hongsam.demo.repository;

import hongsam.demo.domain.MemberDto;

import java.util.Optional;

public interface MemberRepository {

    MemberDto save(MemberDto memberDTO);

    Optional<MemberDto> findByEmail(String email);

    Optional<MemberDto> findById(Long id);
}

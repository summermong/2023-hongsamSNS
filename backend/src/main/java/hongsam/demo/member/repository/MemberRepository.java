package hongsam.demo.member.repository;

import hongsam.demo.member.domain.MemberDto;

import java.util.Optional;

public interface MemberRepository {

    MemberDto save(MemberDto memberDTO);

    Optional<MemberDto> findByEmail(String email);

    Optional<MemberDto> findById(Long id);
}

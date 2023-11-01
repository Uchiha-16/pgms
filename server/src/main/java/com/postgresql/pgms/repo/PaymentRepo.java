package com.postgresql.pgms.repo;

import com.postgresql.pgms.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PaymentRepo extends JpaRepository<Payment, Integer> {
    @Query(value = """
    select * from payment
    """,nativeQuery = true)
    List<Object[]> findUsrPay();
}

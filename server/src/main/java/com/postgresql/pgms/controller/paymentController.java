package com.postgresql.pgms.controller;

import com.postgresql.pgms.repo.PaymentRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/payment")
@RequiredArgsConstructor
public class paymentController {

    private final PaymentRepo paymentRepo;

    @GetMapping("userPayments")
    public ResponseEntity<List<CustomPayment>> getUserPayments(){

        List<Object[]> objlist = paymentRepo.findUsrPay();

        List<CustomPayment> cparr = new ArrayList<>();

        for(int i=0; i<4;i++){
            CustomPayment response = new CustomPayment();
            response.setNo(1);
            response.setDate((String)"2020/02/2");
            response.setAmount(15000);
            response.setRateRs(5000);
            response.setHours(3);
            response.setSubject("MIS3456");

//            ==========6 month logic needed ===================================
            response.setAddtoVoucher(0);
            response.setAttendanceStatus("Approved");
            cparr.add(response);
        }
        return ResponseEntity.ok(cparr);
    }
}

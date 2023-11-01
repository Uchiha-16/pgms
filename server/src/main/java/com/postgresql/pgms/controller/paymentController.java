package com.postgresql.pgms.controller;

import com.postgresql.pgms.DTO.CustomPayment;
import com.postgresql.pgms.DTO.ForwardRequestDTO;
import com.postgresql.pgms.repo.PaymentRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("changeFwd")
    public ResponseEntity<List<CustomPayment>> forwardchange(
            @RequestBody ForwardRequestDTO forwardRequestDTO
    ){
        Integer no = forwardRequestDTO.getNo();
        Integer atv = forwardRequestDTO.getAddtoVoucher();

        var payment = paymentRepo.findById(no).orElse(null);

        if (payment != null && atv == 1) {
            payment.setForward(0);
            paymentRepo.save(payment);
        } else if (payment != null && atv == 0) {
            payment.setForward(1);
            paymentRepo.save(payment);
        }
        List<CustomPayment> cparr = new ArrayList<>();

        for(int i=0; i<4;i++){
            CustomPayment response = new CustomPayment();
            response.setNo(2);
            response.setDate((String)"2020/02/2");
            response.setAmount(15000);
            response.setRateRs(5000);
            response.setHours(3);
            response.setSubject("MIS3456");

//            ==========6 month logic needed ===================================
            response.setAddtoVoucher(1);
            response.setAttendanceStatus("Approved");
            cparr.add(response);
        }

        return ResponseEntity.ok(cparr);


    }
}

package com.postgresql.pgms.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/paymentlist")
@RequiredArgsConstructor
public class paymentlistController {

    @GetMapping("staff")
    public ResponseEntity<String> staffdata(){

        return ResponseEntity.ok("staff");

    }
    @GetMapping("pcmcs")
    public ResponseEntity<String> pcmcsdata(){

        return ResponseEntity.ok("cs");

    }
    @GetMapping("pcmis")
    public ResponseEntity<String> pcmisdata(){

        return ResponseEntity.ok("is");

    }
    @GetMapping("pcmba")
    public ResponseEntity<String> pcmbadata(){

        return ResponseEntity.ok("ba");

    }
    @GetMapping("pcmit")
    public ResponseEntity<String> pcmitdata(){

        return ResponseEntity.ok("it");

    }
    @GetMapping("dr")
    public ResponseEntity<String> drdata(){

        return ResponseEntity.ok("dr");

    }
    @GetMapping("head")
    public ResponseEntity<String> headdata(){

        return ResponseEntity.ok("head");

    }
}

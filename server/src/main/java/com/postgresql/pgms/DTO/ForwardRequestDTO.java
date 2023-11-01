package com.postgresql.pgms.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ForwardRequestDTO {
    private Integer no;
    private Integer addtoVoucher;
}

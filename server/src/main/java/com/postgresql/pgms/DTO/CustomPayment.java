package com.postgresql.pgms.DTO;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonPropertyOrder({"No","Date", "Subject","Hours","RateRs","Amount","AttendanceStatus","AddtoVoucher"})
public class CustomPayment {
    @JsonProperty("No")
    private Integer No;
    @JsonProperty("Date")
    private String Date;
    @JsonProperty("Subject")
    private String Subject;
    @JsonProperty("Hours")
    private Integer Hours;
    @JsonProperty("RateRs")
    private Integer RateRs;
    @JsonProperty("Amount")
    private Integer Amount;
    @JsonProperty("AttendanceStatus")
    private String AttendanceStatus;
    @JsonProperty("AddtoVoucher")
    private Integer AddtoVoucher;
}

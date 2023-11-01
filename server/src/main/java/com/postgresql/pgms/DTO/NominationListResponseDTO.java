package com.postgresql.pgms.DTO;

import com.postgresql.pgms.enumeration.Role;
import com.postgresql.pgms.model.Nominations;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

//set firstname, lastname and role as a list
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class NominationListResponseDTO {
    private List<Nominations> nominationsList;
}
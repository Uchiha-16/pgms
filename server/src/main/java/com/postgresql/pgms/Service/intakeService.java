package com.postgresql.pgms.Service;


import com.postgresql.pgms.DTO.IntakeSaveDTO;
import com.postgresql.pgms.model.Intake;
import com.postgresql.pgms.model.Users;
import com.postgresql.pgms.model.course;
import com.postgresql.pgms.repo.IntakeRepo;
import com.postgresql.pgms.repo.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class intakeService {
    public final IntakeRepo intakeRepo;
    public final UserRepository usersRepo;
    public void addIntake(IntakeSaveDTO intakeSaveDTO) {
        Intake intake = new Intake();
        intake.setYear(intakeSaveDTO.getYear());
        intake.setRate(intakeSaveDTO.getRate());
        intake.setBudget(intakeSaveDTO.getBudget());

        // Look up the MCS user by userId from the database
        Users MCS = usersRepo.findById(intakeSaveDTO.getMCS())
                .orElseThrow(() -> new IllegalArgumentException("Invalid MCS userId"));
        // Set the MCS user for the intake
        intake.setMCS(MCS);

        // Look up the MIT user by userId from the database
        Users MIT = usersRepo.findById(intakeSaveDTO.getMIT())
                .orElseThrow(() -> new IllegalArgumentException("Invalid MIT userId"));

        // Set the MIT user for the intake
        intake.setMIT(MIT);

        // Look up the MIS user by userId from the database
        Users MIS = usersRepo.findById(intakeSaveDTO.getMIS())
                .orElseThrow(() -> new IllegalArgumentException("Invalid MIS userId"));

        // Set the MIS user for the intake
        intake.setMIS(MIS);

        // Look up the MBA user by userId from the database
        Users MBA = usersRepo.findById(intakeSaveDTO.getMBA())
                .orElseThrow(() -> new IllegalArgumentException("Invalid MBA userId"));

        // Set the MBA user for the intake
        intake.setMBA(MBA);

        intakeRepo.save(intake);
    }

    //getPreviousIntake
    public List<Intake> getIntake() {
        List<Intake> IntakeList = intakeRepo.findIntakesBeforeYear2023();
        return (IntakeList);
    }

    //getCurrentIntake
    public List<Intake> getCurrentIntake() {
        List<Intake> IntakeList = intakeRepo.findIntake();
        return (IntakeList);
    }

}

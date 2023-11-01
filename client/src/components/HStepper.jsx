import * as React from "react";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import { Box } from "@mui/material";
import { grid } from "@mui/system";

const steps = ['Forward Payment', 'Staff Approval', 'Coordinator Approval','DR Approval','Head Approval'];

function HStepper() {

	const [activeStepCount, setActiveStepCount] = React.useState(0);
	const [skip, setSkip] = React.useState(new Set());

	const skipStep = (step) => {
		return skip.has(step);
	};

	const handleStepNext = () => {
		let newSkipped = skip;
		if (skipStep(activeStepCount)) {
			newSkipped = new Set(newSkipped.values());
			newSkipped.delete(activeStepCount);
		}

		setActiveStepCount((prevActiveStep) => prevActiveStep + 1);
		setSkip(newSkipped);
	};

	const handleStepBack = () => {
		setActiveStepCount((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStepSkip = () => {

		setActiveStepCount((prevActiveStep) => prevActiveStep + 1);
		setSkip((prevSkipped) => {
			const newSkipped = new Set(prevSkipped.values());
			newSkipped.add(activeStepCount);
			return newSkipped;
		});
	};

	const handleStepReset = () => {
		setActiveStepCount(0);
	};

	return (
		<center>
			
			<div style={{ width: "95%", marginTop: "70px"}}>
				<Stepper activeStep={activeStepCount} >
					{steps.map((label, index) => {
						const stepProps = {};
						const labelProps = {};
						
						if (skipStep(index)) {
							stepProps.completed = false;
						}
						return (
							<Step key={label} {...stepProps}>
								<StepLabel {...labelProps} sx={{
									display: 'grid',
									alignItems: 'center',
									justifyContent: 'center',
									'& .MuiStepLabel-iconContainer':{
										justifyContent: 'center',
    									marginBottom: '0.5rem'
									},
									'& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active':{
										color: '#4CAF50'
									},
									'& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed': {
                                        color: '#4CAF50'
									}
									}}>
								{label}
								</StepLabel>
							</Step>
						);
					})}
				</Stepper>
				
			</div>
		</center>
	);
}

export default HStepper;

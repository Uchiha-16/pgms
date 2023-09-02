import * as React from "react";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import { Box } from "@mui/material";

const steps = ['Forward Payment',
	'Staff Approval', 'Coordinator Approval','DR Approval','Head Approval'];

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
			
			<div style={{ width: "90%", marginTop: "80px"}}>
				<Stepper activeStep={activeStepCount} >
					{steps.map((label, index) => {
						const stepProps = {};
						const labelProps = {};
						
						if (skipStep(index)) {
							stepProps.completed = false;
						}
						return (
							<Step key={label} {...stepProps}>
								<StepLabel {...labelProps}>
									{label}
								</StepLabel>
							</Step>
						);
					})}
				</Stepper>
				{activeStepCount === steps.length ? (
					<div>
						<Box sx={{ display: 'flex',
							flexDirection: 'row', pt: 4 }}>
							<Box sx={{ flex: '1 1 auto' }} />
							<Button onClick={handleStepReset}>Reset</Button>
						</Box>
					</div>
				) : (
					<div>
						
						<Box sx={{ display: 'flex', flexDirection: 'row',
							pt: 2 }}>
							<Button
								color="primary"
								disabled={activeStepCount === 0}
								onClick={handleStepBack}
								sx={{ mr: 1 }}
							>
								Previous
							</Button>
							<Box sx={{ flex: '1 1 auto' }} />

							<Button onClick={handleStepNext}>
								{activeStepCount === steps.length - 1 ?
									'Done' : 'Next'}
							</Button>
						</Box>
					</div>
				)}
			</div>
		</center>
	);
}

export default HStepper;

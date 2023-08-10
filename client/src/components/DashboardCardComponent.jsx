
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function DashboardCard({ color, title, count, percentage, icon }) {
    return (
        <Card>
            <Box display="flex" justifyContent="space-between" pt={1} px={2}>
                <Box mt={-3}  sx={{
                    display:"flex",
                    width:"4rem",
                    height:"4rem",
                    '& .material-icons': {
                        width: "4rem",
                        height: "4rem",
                    }
                }}>
                    <Icon>
                        <img src={icon} alt="Icon" style={{width: '4rem', height: '4rem'}}/>
                    </Icon>
                </Box>
                <Box textAlign="right" lineHeight={1.25}>
                    <Typography variant="button" fontWeight="light" color="text">
                        {title}
                    </Typography>
                    <Typography variant="h4">{count}</Typography>
                </Box>
            </Box>
            <Divider />
            <Box pb={2} px={2}>
                <Typography component="p" variant="button" color="text" display="flex">
                    <Typography
                        component="span"
                        variant="button"
                        fontWeight="400"
                        color={'#898989'}
                    >
                        VIEW MORE
                    </Typography>
                </Typography>
            </Box>
        </Card>
    );
}

// Setting default values for the props of DashboardCard
DashboardCard.defaultProps = {
    color: "info",
    percentage: {
        color: "success",
        text: "",
        label: "",
    },
};

// Typechecking props for the DashboardCard
DashboardCard.propTypes = {
    color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "light",
        "dark",
    ]),
    title: PropTypes.string.isRequired,
    count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    percentage: PropTypes.shape({
        color: PropTypes.oneOf([
            "primary",
            "secondary",
            "info",
            "success",
            "warning",
            "error",
            "dark",
            "white",
        ]),
        amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        label: PropTypes.string,
    }),
    icon: PropTypes.node.isRequired,
};

export default DashboardCard;

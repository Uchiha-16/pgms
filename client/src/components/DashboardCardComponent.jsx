// @mui material components
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";



function DashboardCard({ title, count, icon }) {
    
    const navigate = useNavigate();

    return (
        <Box sx={{
            borderRadius: '7px',
            background: '#FFF',
            boxShadow: '0px 13px 20px -7px rgba(0, 0, 0, 0.15)',
            marginTop: 2
        }}>
            <Box display="flex" justifyContent="space-between" pt={0.5} px={2}>
                <Box mt={-3}  sx={{
                    display:"flex",
                    width:"4rem",
                    height:"4rem",
                    '& .material-icons': {
                        width: "5rem",
                        height: "5rem",
                    }
                }}>
                    <Icon>
                        <img src={icon} alt="Icon" style={{width: '5rem', height: '5rem'}}/>
                    </Icon>
                </Box>
                <Box textAlign="right" lineHeight={1.25} sx={{
                    paddingTop: 1.5
                }}>
                    <Typography variant="button" sx={{
                        color: '#898989',
                        fontFamily: 'Roboto',
                        fontWeight: 400,
                        fontSize: '12px',
                    }}>
                        {title}
                    </Typography>
                    <Typography variant="h4" sx={{
                        fontWeight: 600,
                        fontFamily: 'Inter'
                    }}>
                        {count}
                    </Typography>
                </Box>
            </Box>
            <Divider sx={{
                width: '11rem',
                margin: 'auto',
                marginTop: 2,
                marginBottom: 2
            }}/>
            <Box pb={2} px={2}>
                <Typography component="p" variant="button" display="flex">

                {title === "Users" ? (
                    <Typography
                        component="span"
                        variant="button"
                        fontWeight="400"
                        color={'#898989'}
                        sx={{
                            cursor: 'pointer',
                            fontSize: '13px',
                            fontFamily: 'Inter',
                            fontWeight: 500,
                            transition: '0.3s',
                            ":hover":{
                                color: '#42424A'
                            }
                        }}
                        onClick={() => navigate("/users")}

                    >   VIEW MORE
                        </Typography>

                ) :  title === "Programs" ? (
                        
                            <Typography
                                component="span"
                                variant="button"
                                fontWeight="400"
                                color={'#898989'}
                                sx={{
                                    cursor: 'pointer',
                                    fontSize: '13px',
                                    fontFamily: 'Inter',
                                    fontWeight: 500,
                                    transition: '0.3s',
                                    ":hover":{
                                        color: '#42424A'
                                    }
                                }}
                                onClick={() => navigate("/programs")}
                            >
                                
                               VIEW MORE
                            </Typography>
                ): title === "Staff" ? (
                    <Typography
                                component="span"
                                variant="button"
                                fontWeight="400"
                                color={'#898989'}
                                sx={{
                                    cursor: 'pointer',
                                    fontSize: '13px',
                                    fontFamily: 'Inter',
                                    fontWeight: 500,
                                    transition: '0.3s',
                                    ":hover":{
                                        color: '#42424A'
                                    }
                                }}
                                onClick={() => navigate("/staff")}
                            >
                               VIEW MORE
                            </Typography>

                    ): (
                        <Typography
                                component="span"
                                variant="button"
                                fontWeight="400"
                                color={'#898989'}
                                sx={{
                                    cursor: 'pointer',
                                    fontSize: '13px',
                                    fontFamily: 'Inter',
                                    fontWeight: 500,
                                    transition: '0.3s',
                                    ":hover":{
                                        color: '#42424A'
                                    }
                                }}
                                onClick={() => navigate("/staff")}
                            >
                               VIEW MORE
                            </Typography>
                    )}
                </Typography>
            </Box>
        </Box>
    );
};

export default DashboardCard;

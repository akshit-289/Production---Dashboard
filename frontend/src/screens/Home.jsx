import React from 'react'
import Box from '@mui/material/Box';
import Sidenav from '../components/Sidenav'
import Navbar from '../components/Navbar'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import DownloadIcon from '@mui/icons-material/Download';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import BarChart from "../Charts/BarChart";
import "../Dash.css"
function Home() {
    return (
        <div>
            <Navbar />
            <Box height={30}>
                <Box sx={{ display: "flex" }}>
                    <Sidenav />
                    <Box component="main" sx={{ flexGrow: 1, pl: 2, pt: 9, pr: 2, pb: 2,}}>
                        <h1 className='mt-10'>Home</h1>
                        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={3}>
                                    <Stack spacing={2} direction="column">
                                        <Stack spacing={2} direction="row">
                                            <Card sx={{ minWidth: 90 + "%", height: 125 }}>
                                                <CardMedia
                                                    image="/static/images/cards/contemplative-reptile.jpg"
                                                    title="green iguana"
                                                />
                                                <CardContent>
                                                    <div style={{ "paddingLeft": "10px", "fontSize": "15px" }}>
                                                        SALES
                                                    </div>
                                                    <div className='paddingall'>
                                                        <span style={{ "paddingRight": "90px", "fontSize": "19px" }}>34040</span>
                                                        <CalendarTodayIcon />
                                                        <div style={{ "paddingTop": "10px", "fontSize": "12px" }}>
                                                            <span>0.12%  [90 days]</span>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                            <Card sx={{ minWidth: 90 + "%", height: 125 }}>
                                                <CardMedia
                                                    image="/static/images/cards/contemplative-reptile.jpg"
                                                    title="green iguana"
                                                />
                                                <CardContent>
                                                    <div style={{ "paddingLeft": "10px", "fontSize": "15px" }}>
                                                        REVENUE
                                                    </div>
                                                    <div className='paddingall'>
                                                        <span style={{ "paddingRight": "90px", "fontSize": "19px" }}>47033</span>
                                                        <PermIdentityIcon fontSize="medium" />
                                                        <div style={{ "paddingTop": "10px", "fontSize": "12px" }}>
                                                            <span>0.47%  [90 days]</span>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                            <Card sx={{ minWidth: 90 + "%", height: 125 }}>
                                                <CardMedia
                                                    image="/static/images/cards/contemplative-reptile.jpg"
                                                    title="green iguana"
                                                />
                                                <CardContent>
                                                    <div style={{ "paddingLeft": "10px", "fontSize": "15px" }}>
                                                        DOWNLOADS
                                                    </div>
                                                    <div className='paddingall'>
                                                        <span style={{ "paddingRight": "90px", "fontSize": "19px" }}>40016</span>
                                                        <DownloadIcon fontSize="medium" />
                                                        <div style={{ "paddingTop": "10px", "fontSize": "12px" }}>
                                                            <span>64.00%  [90 days]</span>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                            <Card sx={{ minWidth: 90 + "%", height: 125 }}>
                                                <CardMedia
                                                    image="/static/images/cards/contemplative-reptile.jpg"
                                                    title="green iguana"
                                                />
                                                <CardContent>
                                                    <div style={{ "paddingLeft": "10px", "fontSize": "15px" }}>
                                                        RETURNS
                                                    </div>
                                                    <div className='paddingall'>
                                                        <span style={{ "paddingRight": "90px", "fontSize": "19px" }}>61344</span>
                                                        <FilterNoneIcon fontSize="medium" />
                                                        <div style={{ "paddingTop": "10px", "fontSize": "12px" }}>
                                                            <span>23.00%  [90 days]</span>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Stack>
                                        <Stack spacing={2} direction="row">
                                            <Card sx={{ minWidth: 187 + "%", height: 425 }}>
                                                <CardMedia
                                                    image="/static/images/cards/contemplative-reptile.jpg"
                                                    title="green iguana"
                                                />
                                                <CardContent>
                                                    <div style={{ "paddingLeft": "10px", "fontSize": "15px", "paddingBottom": "30px" }}>
                                                        SALES DETAILS
                                                    </div>
                                                    <span style={{ "fontSize": "12px" }}>Recieved two types of sales. Offline sales and online sales. Both kind of sales are shown and compared through bar graph.</span>
                                                    <div style={{"marginTop":"8px"}}>
                                                      <BarChart />
                                                    </div>
                                                </CardContent>
                                            </Card>
                                            <Card sx={{ minWidth: 187 + "%", height: 425 }}>
                                                <CardMedia
                                                    image="/static/images/cards/contemplative-reptile.jpg"
                                                    title="green iguana"
                                                />
                                                <CardContent>
                                                    <div style={{ "paddingLeft": "10px", "fontSize": "15px", "paddingBottom": "30px" }}>
                                                        PURCHASES
                                                    </div>
                                                    <span style={{ "fontSize": "12px" }}>The analytics is done through 4 metrics. These are Existing users, New users, Sales and Feedbacks.</span>
                                                    <div>
                                                        <Grid spacing={4}>
                                                            <Stack spacing={4} direction="row">
                                                                <div style={{ "paddingTop": "10px", "fontSize": "13px" }}>
                                                                    <span>Existing User</span>
                                                                    <h2 style={{ "marginTop": "0" }}>362</h2>
                                                                </div>
                                                                <div style={{ "paddingTop": "10px", "fontSize": "13px" }}>
                                                                    <span>New User</span>
                                                                    <h2 style={{ "marginTop": "0" }}>187</h2>
                                                                </div>
                                                                <div style={{ "paddingTop": "10px", "fontSize": "13px" }}>
                                                                <span>Sales</span>
                                                                <h2 style={{"marginTop":"0"}}>524</h2>
                                                            </div>
                                                            <div style={{ "paddingTop": "10px", "fontSize": "13px" }}>
                                                                <span>Feedbacks</span>
                                                                <h2 style={{"marginTop":"0"}}>509</h2>
                                                            </div>
                                                            </Stack>
                                                        </Grid>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Stack>
                                    </Stack>
                                </Grid>
                                <Grid container spacing={2}>
                                    <Grid item xs={3}>
                                        <Stack spacing={2} direction="row">

                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default Home

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CloudIcon from '@mui/icons-material/Cloud';
import Button from '@mui/material/Button';

export default function SimpleContainer() {
  return (
    <Container maxWidth="sm">
        {/* <OutlinedCard /> */}
        {/* Card Container */}
        <div style={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            {/* -- Card -- */}
            <div style={{backgroundColor: "#ffffff26", width: "100%", color: "white", padding: "20px 30px", borderRadius: "15px"}}>
                {/* Top */}
                <div style={{display: "flex", alignItems: "end", marginRight: "20px"}} dir='rtl'>
                    <Typography variant="h1"> الرياض </Typography>
                    <Typography variant="h6" style={{marginRight: "20px"}}> مايو 29 2023 </Typography>
                </div>
                <hr />
                {/* Top */}
                <div style={{display: "flex", justifyContent: "space-between", marginTop: "25px"}}>
                    {/* Left */}
                    <CloudIcon style={{fontSize: "200px"}}/>
                    {/* Left */}
                    {/* Right */}
                    <div>
                        <div style={{display: "flex" , flexDirection: "row-reverse", alignItems: "center", gap: "15px"}}>
                            <Typography variant="h1">38</Typography>
                            <div>
                                <CloudIcon style={{color: "black", fontSize: "35px", marginBottom: "8px"}}/>
                                <CloudIcon style={{marginLeft: "-35px", fontSize: "35px", marginLeft: "-44px"}}/>
                            </div>
                        </div>

                        <Typography variant="h6" style={{textAlign: "end", margin: "10px 0 18px"}}>broken clouds</Typography>

                        <div>
                            <Typography variant="h6" style={{fontSize:"15px", textAlign: "end"}}>الصغرى : 38  |  الكبري : 38 </Typography>
                        </div>
                    </div>
                    {/* Right */}
                </div>
            </div>
            {/* -- Card -- */}
            <div style={{width: "100%", textAlign: "start"}}>
                <button style={{cursor: "pointer",color: "white", border: "none", borderRadius: "5px", padding: "10px 20px", backgroundColor: "#250707", fontFamily: 'IBM', fontWeight: "700"}}>English</button>
            </div>
        </div>
        {/* Card Container */}
    </Container>
  );
}

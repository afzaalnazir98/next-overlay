import { Box, Typography } from "@mui/material";

export default function About() {
  return (
    <>
      <Box
        sx={{ marginTop: "100px",width:'100%',display:'flex',justifyContent:'center' }}
      >
        <Box sx={{display:'flex',flexDirection:'column',gap:'30px'}}>
        <h1 style={{textAlign:'center'}}>About</h1>
        <Typography>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        </Typography>
        </Box>
      </Box>
    </>
  );
}


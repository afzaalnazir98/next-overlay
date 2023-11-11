import React from "react";
import Head from "next/head";
import { Box, Button} from "@mui/material";

const Yapp = () => {
  return (
    <div>
      <Head>
        <title>Y-app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="hero">
        <h1 className="title">Welcome to Y-application </h1>

        <Box
          sx={{
            width: "100%",
            textAlign: "center",
            marginTop: "20rem",
          }}
        >
          <Button variant="contained" href="/about">
            About Us
          </Button>
        </Box>
      </div>
      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin-top: 100px;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};


export default Yapp;

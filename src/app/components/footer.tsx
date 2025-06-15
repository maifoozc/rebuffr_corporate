"use client";
import Image from "next/image";
import footer_background from "../assets/footer_background.svg";
import Grid from "@mui/material/Grid";
import { Box, Button, IconButton, Typography } from "@mui/material";
import email_logo from "../assets/email_logo.svg";
import telephone from "../assets/telephone.svg";
import building from "../assets/building.svg";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="w-auto flex flex-col justify-start items-center p-4 mt-10 "
      style={{
        backgroundImage: `url(${footer_background.src})`,
        backgroundSize: "cover",
        backgroundPosition: "start",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full flex flex-col justify-center items-center pt-20">
        <Grid
          container
          spacing={2}
          className="text-whit w-full flex flex-col md:flex-row"
        >
          <Grid
            size={{ xs: 12, sm: 12, md: 2 }}
            className="flex justify-start items-center"
          >
            <Image
              src="https://i.ibb.co/34gkbYp/sz.png"
              alt="logo"
              width={184}
              height={100}
              priority
              className="header_image cursor-pointer"
            />
          </Grid>

          <Grid
            size={{ xs: 12, sm: 12, md: 2 }}
            className="flex justify-start items-center"
          >
            <div className="flex flex-row  justify-start items-center gap-2 text-white">
              <IconButton
                sx={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  color: "#ffffff",
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                sx={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  color: "#ffffff",
                }}
              >
                <YouTubeIcon />
              </IconButton>
              <IconButton
                sx={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  color: "#ffffff",
                }}
                href="https://www.linkedin.com/company/rebuffr-systems-private-limited/posts/?feedView=all"
                target="_blank"
              >
                <LinkedInIcon />
              </IconButton>
            </div>
          </Grid>

          <Grid
            size={{ xs: 12, sm: 12, md: 2 }}
            className="flex justify-start items-center"
          >
            <div className="flex flex-row  justify-start items-center gap-2 text-white">
              <Image
                src={email_logo.src}
                alt="logo"
                width={50}
                height={50}
                priority
                className="header_image cursor-pointer"
              />
              <div>
                <Typography
                  sx={{
                    fontSize: "24px",
                    lineHeight: "30px",
                    fontWeight: "700",
                  }}
                >
                  Email
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                  }}
                >
                  info@rebuffr.com
                </Typography>
              </div>
            </div>
          </Grid>

          <Grid
            size={{ sm: 12, md: 3 }}
            className="flex justify-start items-center"
          >
            <div className="flex flex-row  justify-start items-center gap-2 text-white">
              <Image
                src={telephone.src}
                alt="telephone"
                width={50}
                height={50}
                priority
                className="header_image cursor-pointer"
              />
              <div>
                <Typography
                  sx={{
                    fontSize: "24px",
                    lineHeight: "30px",
                    fontWeight: "700",
                  }}
                >
                  Phone
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                  }}
                >
                  +91-76876564563
                </Typography>
              </div>
            </div>
          </Grid>

          <Grid
            size={{ xs: 12, sm: 12, md: 2 }}
            className="flex justify-start items-center"
          >
            <div className="flex flex-row  justify-start items-center gap-2 text-white">
              <Image
                src={building.src}
                alt="building"
                width={50}
                height={50}
                priority
                className="header_image cursor-pointer"
              />
              <div>
                <Typography
                  sx={{
                    fontSize: "24px",
                    lineHeight: "30px",
                    fontWeight: "700",
                  }}
                >
                  Head Office
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                  }}
                >
                  Pune, Maharashtra , India
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <hr
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "#ffffff",
          border: "none",
          opacity: 0.3,
          marginTop: "100px",
        }}
      />
      <Box className="w-full mt-10 p-5">
        <Typography
          sx={{
            fontSize: "16px",
            lineHeight: "26px",
            fontWeight: "400",
            color: "#ffffff",
            textAlign: "center",
          }}
        >
          © Copyrights 2025 rebuffr All rights reserved .
        </Typography>
        <div className="w-full flex justify-end items-center">
          <Button
            sx={{
              backgroundColor: "#33C481",
              color: "#fff",
              borderRadius: "50%",
              //   width: "32px",
              //   height: "32px",
              width: "40px",
              height: "40px",
            }}
            onClick={scrollToTop}
          >
            <ArrowUpwardIcon sx={{ fontSize: "40px" }} />
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default Footer;

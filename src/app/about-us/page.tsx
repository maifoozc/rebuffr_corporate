"use client";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import aboutus_landing from "../assets/aboutus_landing.svg";
import solar_farm from "../assets/solar_farm.svg";
import commercial_industrial from "../assets/commercial_industrial.svg";
import ev_charging from "../assets/ev_charging.svg";
import rural_remote from "../assets/rural_remote.svg";
import solar_wind from "../assets/solar_wind.svg";
import utility_scale from "../assets/utility_scale.svg";
import ev_logo from "../assets/ev_logo.svg";
import rural_logo from "../assets/rural_logo.svg";
import solar_logo from "../assets/solar_logo.svg";
import commercial_logo from "../assets/commercial_logo.svg";
import utility_logo from "../assets/utility_logo.svg";
import thermal from "../assets/thermal.svg";
import complaince from "../assets/complaince.svg";
import customems from "../assets/customems.svg";
import scalable from "../assets/scalable.svg";
import fullstack from "../assets/fullstack.svg";
import inhouse from "../assets/inhouse.svg";
import ourclient from "../assets/ourclient.svg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import XIcon from "@mui/icons-material/X";
import vision from "../assets/vision.svg";
// import http from "../assets/http.svg";
// import building from "../assets/building.svg";
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from "@mui/icons-material/Business";
import software_engineer from "../assets/software_engineer.png";

import Image from "next/image";
import { useState } from "react";

const AboutUs = () => {
  const whatWeDo = [
    { label: "utility_scale", image_src: utility_scale.src },
    { label: "commercial_industrial", image_src: commercial_industrial.src },
    { label: "ev_charging", image_src: ev_charging.src },
    { label: "rural_remote", image_src: rural_remote.src },
    { label: "solar_wind", image_src: solar_wind.src },
  ];

  const [selected, setSelected] = useState(whatWeDo[0]);

  const handleSelect = (label: string) => {
    const item = whatWeDo.find((w) => w.label === label);
    if (item) {
      setSelected(item);
    }
  };

  const ourcapability = [
    {
      label: "In-house R&D and prototyping lab",
      imagesrc: inhouse.src,
      size: { md: 4, sm: 6, xs: 12 },
    },
    {
      label: "Full-stack product engineering(hardware + software)",
      imagesrc: fullstack.src,
      size: { md: 4, sm: 6, xs: 12 },
    },
    {
      label: "Scalable BESS design (from kWh to MWh)",
      imagesrc: scalable.src,
      size: { md: 4, sm: 6, xs: 12 },
    },
    {
      label: "Custom EMS (Energy Management System) development",
      imagesrc: customems.src,
      size: { md: 6, sm: 6, xs: 12 },
    },
    {
      label: "Compliance with BIS, CEA, and MNRE guidelines",
      imagesrc: complaince.src,
      size: { md: 6, sm: 6, xs: 12 },
    },
    {
      label: "Advanced thermal management and climate-specific enclosures",
      imagesrc: thermal.src,
      size: { md: 6, sm: 6, xs: 12 },
    },
  ];

  const [selectCapability, setSelectCapability] = useState(ourcapability[0]);
  return (
    <div className="w-full flex flex-col justify-center items-center pl-10 pr-2">
      {/* Powering a Resilient Future  */}
      <div
        className="w-full flex flex-col justify-center items-center text-center mb-40"
        style={{
          backgroundImage: `url(${aboutus_landing.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "100px 20px",
        }}
      >
        <Typography
          sx={{
            fontSize: "58px",
            lineHeight: "138%",
            fontWeight: "400",
            color: "#33C481",
            textTransform: "uppercase",
          }}
        >
          Powering a Resilient Future
        </Typography>
        <Typography
          sx={{
            fontSize: "60px",
            lineHeight: "138%",
            fontWeight: "900",
            color: "#000000",
            textTransform: "uppercase",
          }}
        >
          with Innovative Energy Storage
        </Typography>
        <Typography
          sx={{
            fontSize: "22px",
            lineHeight: "34px",
            fontWeight: "500",
            color: "#444444",
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          Rebuffr Systems Pvt. Ltd. is a forward-thinking Indian energy storage
          company dedicated to building the future of energy through advanced
          battery energy storage systems (BESS). As a clean tech company with
          innovation at our core and sustainability in our vision, we design and
          manufacture cutting-edge energy storage solutions that are reliable,
          scalable, and engineered for the demands of a rapidly changing energy
          landscape.
        </Typography>
        <Typography
          sx={{
            fontSize: "22px",
            lineHeight: "34px",
            fontWeight: "500",
            color: "#444444",
            textAlign: "center",
          }}
        >
          Founded by industry veterans and driven by a team of passionate
          engineers, RebuffrSystems aims to accelerate India&apos;s transition
          to clean, distributed, and dependable energy infrastructure.
        </Typography>
      </div>

      {/* To enable energy */}
      <div
        className="w-full flex flex-col justify-start items-start mt-80 relative space-y-5 "
        style={{ maxWidth: "1000px" }}
      >
        <Box className="flex flex-col lg:hidden">
          <Image
            src={solar_farm.src}
            alt="solar_farm"
            width={100}
            height={100}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
        <Box
          sx={{
            backgroundColor: "#33C481",
            width: { xs: "100%", md: "720px" },
            height: { xs: "auto", md: "466px" },
            borderRadius: "20px",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: { xs: "center", lg: "flex-end" },
            padding: { xs: "20px", md: "0" },
          }}
        >
          <Typography
            sx={{
              fontSize: "22px",
              lineHeight: "34px",
              fontWeight: "400",
              color: "#444444",
              maxWidth: "486px",
              marginBottom: "100px",
              textAlign: "start",
            }}
          >
            To enable energy independence and sustainability through smart,
            localized battery energy storage solutions tailored for the Indian
            subcontinent and emerging markets.
          </Typography>
        </Box>
        <Box className="hidden lg:block absolute lg:top-[-60%] lg:right-[5%]">
          <Image
            src={solar_farm.src}
            alt="solar_farm"
            width={100}
            height={100}
            style={{
              width: "100%",
              //   height: "100%",
              //   width: "548px",
              //   maxWidth: "548px",
            }}
          />
        </Box>
      </div>

      {/* What we do */}
      <div className="w-full flex flex-col justify-center items-center mt-20 ">
        <Typography
          sx={{
            fontSize: "48px",
            lineHeight: "70px",
            fontWeight: "900",
            color: "#222222",
            textTransform: "uppercase",
          }}
        >
          <span style={{ color: "#33C481" }}>What</span> we do
        </Typography>
        <Typography
          sx={{
            fontSize: "22px",
            lineHeight: "34px",
            fontWeight: "500",
            color: "#444444",
            textAlign: "center",
          }}
        >
          We specialize in the design, manufacturing, integration, and servicing
          of custom battery energy storage systems and
          <br />
          renewable energy tech for a wide range of applications:
        </Typography>
        <Typography
          sx={{
            fontSize: "22px",
            lineHeight: "34px",
            fontWeight: "500",
            color: "#444444",
            textAlign: "center",
          }}
        >
          Whether it’s stabilizing the power grid, enabling off-grid
          communities, or helping industries reduce peak demand, our
          <br />
          modular and intelligent BESS platforms are built to deliver high
          performance in India&apos;s unique power environments.
        </Typography>

        <Box className="flex flex-row justify-between items-center mt-10 p-20">
          <Image
            src={selected.image_src}
            alt={selected.label}
            width={100}
            height={100}
            // style={{ width: "630px" }}
            className="w-[30%] sm:w-[50%] md:w-[30rem] h-auto"
          />
          <Box className="block md:relative flex-col justify-start items-center md:w-[600px] md:h-[600px]">
            <Card
              className="block md:absolute top-[-40px] left-[-80px]"
              sx={{
                backgroundColor:
                  selected.label === "utility_scale" ? "#33C481" : "#ffffff",
                color:
                  selected.label === "utility_scale" ? "#ffffff" : "#444444",
                width: {
                  xs: "90%",
                  sm: "80%",
                  md: "30rem",
                },
                maxWidth: "100%",
                marginLeft: "20px",
                borderRadius: "20px",
                margin: "10px",
                cursor: "pointer",
              }}
              onMouseEnter={() => handleSelect("utility_scale")}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Image
                  src={utility_logo.src}
                  alt="utility_logo"
                  width={70}
                  height={70}
                />
                <Typography
                  sx={{
                    fontSize: "20px",
                    lineHeight: "30px",
                    fontWeight: "500",
                    // color: "#ffffff",
                    wordBreak: "break-word",
                  }}
                >
                  Utility-scale energy storage
                </Typography>
              </CardContent>
            </Card>
            <Card
              className="block md:absolute top-[100px] left-[20px]"
              sx={{
                backgroundColor:
                  selected.label === "commercial_industrial"
                    ? "#33C481"
                    : "#ffffff",
                color:
                  selected.label === "commercial_industrial"
                    ? "#ffffff"
                    : "#444444",
                width: {
                  xs: "90%",
                  sm: "80%",
                  md: "30rem",
                },
                maxWidth: "100%",
                marginLeft: "20px",
                borderRadius: "20px",
                margin: "10px",
                cursor: "pointer",
              }}
              onMouseEnter={() => handleSelect("commercial_industrial")}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Image
                  src={commercial_logo.src}
                  alt="commercial_logo"
                  width={70}
                  height={70}
                />
                <Typography
                  sx={{
                    fontSize: "20px",
                    lineHeight: "30px",
                    fontWeight: "500",
                    // color: "#ffffff",
                  }}
                >
                  Commercial & industrial backup systems
                </Typography>
              </CardContent>
            </Card>
            <Card
              className="block md:absolute top-[240px] left-[100px]"
              sx={{
                backgroundColor:
                  selected.label === "solar_wind" ? "#33C481" : "#ffffff",
                color: selected.label === "solar_wind" ? "#ffffff" : "#444444",
                width: {
                  xs: "90%",
                  sm: "80%",
                  md: "30rem",
                },
                maxWidth: "100%",
                marginLeft: "20px",
                borderRadius: "20px",
                margin: "10px",
                cursor: "pointer",
              }}
              onMouseEnter={() => handleSelect("solar_wind")}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Image
                  src={solar_logo.src}
                  alt="solar_logo"
                  width={70}
                  height={70}
                />
                <Typography
                  sx={{
                    fontSize: "20px",
                    lineHeight: "30px",
                    fontWeight: "500",
                    // color: "#ffffff",
                  }}
                >
                  Solar and wind hybrid storage
                </Typography>
              </CardContent>
            </Card>
            <Card
              className="block md:absolute top-[380px] left-[20px]"
              sx={{
                backgroundColor:
                  selected.label === "rural_remote" ? "#33C481" : "#ffffff",
                color:
                  selected.label === "rural_remote" ? "#ffffff" : "#444444",
                width: {
                  xs: "90%",
                  sm: "80%",
                  md: "30rem",
                },
                maxWidth: "100%",
                marginLeft: "20px",
                borderRadius: "20px",
                margin: "10px",
                cursor: "pointer",
              }}
              onMouseEnter={() => handleSelect("rural_remote")}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Image
                  src={rural_logo.src}
                  alt="rural_logo"
                  width={70}
                  height={70}
                />
                <Typography
                  sx={{
                    fontSize: "20px",
                    lineHeight: "30px",
                    fontWeight: "500",
                    // color: "#ffffff",
                  }}
                >
                  Rural and remote microgrids
                </Typography>
              </CardContent>
            </Card>
            <Card
              className="block md:absolute top-[520px] left-[-80px]"
              sx={{
                backgroundColor:
                  selected.label === "ev_charging" ? "#33C481" : "#ffffff",
                color: selected.label === "ev_charging" ? "#ffffff" : "#444444",
                width: {
                  xs: "90%",
                  sm: "80%",
                  md: "30rem",
                },
                maxWidth: "100%",
                marginLeft: "20px",
                borderRadius: "20px",
                margin: "10px",
                cursor: "pointer",
              }}
              onMouseEnter={() => handleSelect("ev_charging")}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Image src={ev_logo.src} alt="ev_logo" width={70} height={70} />
                <Typography
                  sx={{
                    fontSize: "20px",
                    lineHeight: "30px",
                    fontWeight: "500",
                    // color: "#ffffff",
                  }}
                >
                  EV charging infrastructure support
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </div>

      {/* Our Capabilities */}
      <div className="w-full flex flex-col justify-center items-center mt-20">
        <Typography
          sx={{
            fontSize: "48px",
            lineHeight: "70px",
            fontWeight: "900",
            color: "#222222",
            textTransform: "uppercase",
          }}
        >
          Our <span style={{ color: "#33C481" }}>Capabilities</span>
        </Typography>

        <Box sx={{ position: "relative", marginTop: "20px" }}>
          <Image
            src={selectCapability.imagesrc}
            width={100}
            height={100}
            alt={selectCapability.label}
            style={{
              width: "1200px",
              height: "600px",
              objectFit: "cover",
              borderRadius: "30px",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              borderRadius: "0 0 30px 30px",
              px: 2,
              py: 3,
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {ourcapability.map((item, idx) => (
                <Grid size={item.size} key={idx}>
                  <Button
                    variant={
                      selected.label === item.label ? "contained" : "outlined"
                    }
                    onMouseEnter={() => setSelectCapability(item)}
                    sx={{
                      width: "100%",
                      // minHeight: "60px",
                      color:
                        selected.label === item.label ? "#ffffff" : "#444444",
                      borderColor:
                        selected.label === item.label ? "#33C481" : "#fff",
                      backgroundColor:
                        selected.label === item.label ? "#33C481" : "#ffffff",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "#33C481",
                        color: "#ffffff",
                      },
                      borderRadius: "20px",
                    }}
                  >
                    {item.label}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </div>

      {/* Our Clients & Partners */}
      <div className="w-full flex flex-col md:flex-row justify-center items-start mt-20">
        <Image
          src={ourclient.src}
          alt="ourclient"
          width={100}
          height={100}
          style={{ width: "640px" }}
        />
        <Box className="flex flex-col p-10">
          <Typography
            sx={{
              fontSize: "48px",
              lineHeight: "70px",
              fontWeight: "900",
              color: "#222222",
              textTransform: "uppercase",
            }}
          >
            Our Clients & <span style={{ color: "#33C481" }}>Partners</span>
          </Typography>
          <Typography
            sx={{
              fontSize: "22px",
              lineHeight: "34px",
              fontWeight: "400",
              color: "#444444",
            }}
          >
            We collaborate with Indian and global partners to bring the best of
            battery technology to every project.
          </Typography>
          <Typography
            sx={{
              fontSize: "22px",
              lineHeight: "34px",
              fontWeight: "600",
              color: "#444444",
            }}
          >
            We proudly serve a diverse client base including
          </Typography>

          <Typography
            sx={{
              fontSize: "18px",
              lineHeight: "100%",
              fontWeight: "500",
              color: "#444444",
            }}
          >
            <Checkbox
              disabled
              checked
              sx={{ "&.Mui-checked": { color: "#33C481" } }}
            />
            We proudly serve a diverse client base including
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              lineHeight: "100%",
              fontWeight: "500",
              color: "#444444",
            }}
          >
            <Checkbox
              disabled
              checked
              sx={{ "&.Mui-checked": { color: "#33C481" } }}
            />
            Solar EPCs and renewable project developers
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              lineHeight: "100%",
              fontWeight: "500",
              color: "#444444",
            }}
          >
            <Checkbox
              disabled
              checked
              sx={{ "&.Mui-checked": { color: "#33C481" } }}
            />
            Large manufacturing and IT campuses
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              lineHeight: "100%",
              fontWeight: "500",
              color: "#444444",
            }}
          >
            <Checkbox
              disabled
              checked
              sx={{ "&.Mui-checked": { color: "#33C481" } }}
            />
            Public infrastructure agencies
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              lineHeight: "100%",
              fontWeight: "500",
              color: "#444444",
            }}
          >
            <Checkbox
              disabled
              checked
              sx={{ "&.Mui-checked": { color: "#33C481" } }}
            />
            NGOs and rural electrification programs
          </Typography>
        </Box>
      </div>

      {/* DRIVING INDIA’S ENERGY FUTURE */}
      <div className="w-full flex flex-col justify-center items-center mt-20">
        <Typography
          sx={{
            fontSize: "48px",
            lineHeight: "70px",
            fontWeight: "900",
            color: "#222222",
          }}
        >
          DRIVING INDIA&apos;S{" "}
          <span style={{ color: "#33C481" }}>ENERGY FUTURE</span>
        </Typography>
        <Typography
          sx={{
            fontSize: "22px",
            lineHeight: "34px",
            fontWeight: "500",
            color: "#444444",
            textAlign: "center",
          }}
        >
          Our leadership team is at the heart of our mission to accelerate
          India’s clean energy transition. Their expertise
          <br />
          and vision guide us in delivering smart, reliable solutions that power
          the nation&apos;s energy ecosystem.
        </Typography>

        <Box className="w-full flex flex-col md:flex-row justify-center items-center">
          <Card>
            <CardContent>
              <Image
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgGCgkGBwoHBwYGBg8UFQYWIB0WIhURHxMYHSggGBolGx8fITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAwQFAgEH/8QANBABAQACAAMGAgYLAQAAAAAAAAIBAwQREiEiMTJSYhNyBTNTgqHBI0FCUWFxgZGSk7EU/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD6oAqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8qpic1WcYmfNVM/fxV3nOIzmY/GwXNvEa9XZVc6+znxVb4+s57kTj5u1UAWP/bu/fH+t1PHbMeM6s/d5KoC/HHRnzxc/L2rWM4zjGceFMZJp33pz3c85+zrwBrDjVsnbGKn70+h2AAAAAAAAAAAAAAABnPLGc58J7wM/j9ma2/D59kT5f4qr26zV5rPjVdTxQAAAAABZ4C8zu6OfZctFkaKzO/XnHrlroAAAAAAAAAAAAAACPfnlo2fJSRHvxz0bMeygZICgAAAAADqM9NzXpqabDFbWPBAAAAAAAAAAAAAAARb9k69ec3z5V3e6lVuPxz0Yz6bkGcAoAAAAAA9xy545+DW1XOyMXPVyr1Mhp8Hjlw8e7qr8UE4AAAAAAAAAAAAACHip6+HvHpnq/smeVOKnM58KnpoGMJeI0fAqcdXVivL3USgAAAAAA19U9GqJ9MqHDcN8bHVnPKZr/JpIAAAAAAAAAAAAAAAAKv0hHVqm8fsV/wBZ7ZqcXOZrwqemmTu151bMxnt6fLXqwDgBQAABJw+v4u3E58vmr+QL/CR0aJxnxr9JX9U4IAAAAAAAAAAAAAAAADP+kfrp+T8167iJ53Uzj3MzitmNu3qnyzPTIIgFAABa+jvrq+T81VNwuzGrdiq8tT00DUHMXFzzisVj2ukAAAAAAAAAAAAAEezdr1+e5xn0z25BI52XGueq6xjClt47OeeNU8vdStV1ddVVnOfVQGy6u81Wc573d6nIKAAAAAAOtd1F4qc5x3u90tbXcbJ6orGcMd1N1FdU1nGfVKDYFDVx2ccsbZ5+6VvXu17PJc5z6a7MgkAAAAAABDxO74Mc8dt13YkHW3dGrHO6+WZ8aVL4+s/VxOPds7VWqq6zVZznNeaqeAkviNt+a88vTPYjBQAAAAAAAAAAAAABJHEbY8t55emu1PHH1j6yJz7tfYqANbVujbjnFfNNeMpGNNVFYqc5xmfLUtPht3xo557Lnu3KCYABm8dWa35x+qJmQBXAUAAAAAAAAAAAAAAAAAAFjgazO/GP1XNSCDSAB//Z"
                alt=""
                width={200}
                height={200}
              />
              <Typography
                sx={{
                  fontSize: "22px",
                  lineHeight: "30px",
                  fontWeight: "700",
                  color: "#222222",
                  textAlign: "center",
                }}
              >
                Kshitij Marathe
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  lineHeight: "30px",
                  fontWeight: "500",
                  color: "#444444",
                  textAlign: "center",
                }}
              >
                Founder & CEO
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <IconButton>
                  <LinkedInIcon sx={{ color: "#000000" }} />
                </IconButton>
                {/* <IconButton>
                  <XIcon sx={{ color: "#000000" }} />
                </IconButton> */}
              </Box>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Image
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgGCgkGBwoHBwYGBg8UFQYWIB0WIhURHxMYHSggGBolGx8fITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAwQFAgEH/8QANBABAQACAAMGAgYLAQAAAAAAAAIBAwQREiEiMTJSYhNyBTNTgqHBI0FCUWFxgZGSk7EU/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD6oAqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8qpic1WcYmfNVM/fxV3nOIzmY/GwXNvEa9XZVc6+znxVb4+s57kTj5u1UAWP/bu/fH+t1PHbMeM6s/d5KoC/HHRnzxc/L2rWM4zjGceFMZJp33pz3c85+zrwBrDjVsnbGKn70+h2AAAAAAAAAAAAAAABnPLGc58J7wM/j9ma2/D59kT5f4qr26zV5rPjVdTxQAAAAABZ4C8zu6OfZctFkaKzO/XnHrlroAAAAAAAAAAAAAACPfnlo2fJSRHvxz0bMeygZICgAAAAADqM9NzXpqabDFbWPBAAAAAAAAAAAAAAARb9k69ec3z5V3e6lVuPxz0Yz6bkGcAoAAAAAA9xy545+DW1XOyMXPVyr1Mhp8Hjlw8e7qr8UE4AAAAAAAAAAAAACHip6+HvHpnq/smeVOKnM58KnpoGMJeI0fAqcdXVivL3USgAAAAAA19U9GqJ9MqHDcN8bHVnPKZr/JpIAAAAAAAAAAAAAAAAKv0hHVqm8fsV/wBZ7ZqcXOZrwqemmTu151bMxnt6fLXqwDgBQAABJw+v4u3E58vmr+QL/CR0aJxnxr9JX9U4IAAAAAAAAAAAAAAAADP+kfrp+T8167iJ53Uzj3MzitmNu3qnyzPTIIgFAABa+jvrq+T81VNwuzGrdiq8tT00DUHMXFzzisVj2ukAAAAAAAAAAAAAEezdr1+e5xn0z25BI52XGueq6xjClt47OeeNU8vdStV1ddVVnOfVQGy6u81Wc573d6nIKAAAAAAOtd1F4qc5x3u90tbXcbJ6orGcMd1N1FdU1nGfVKDYFDVx2ccsbZ5+6VvXu17PJc5z6a7MgkAAAAAABDxO74Mc8dt13YkHW3dGrHO6+WZ8aVL4+s/VxOPds7VWqq6zVZznNeaqeAkviNt+a88vTPYjBQAAAAAAAAAAAAABJHEbY8t55emu1PHH1j6yJz7tfYqANbVujbjnFfNNeMpGNNVFYqc5xmfLUtPht3xo557Lnu3KCYABm8dWa35x+qJmQBXAUAAAAAAAAAAAAAAAAAAFjgazO/GP1XNSCDSAB//Z"
                alt=""
                width={200}
                height={200}
              />
              <Typography
                sx={{
                  fontSize: "22px",
                  lineHeight: "30px",
                  fontWeight: "700",
                  color: "#222222",
                  textAlign: "center",
                }}
              >
                Pravin Chandel
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  lineHeight: "30px",
                  fontWeight: "500",
                  color: "#444444",
                  textAlign: "center",
                }}
              >
                Founder & CTO
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <IconButton>
                  <LinkedInIcon sx={{ color: "#000000" }} />
                </IconButton>
                {/* <IconButton>
                  <XIcon sx={{ color: "#000000" }} />
                </IconButton> */}
              </Box>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Image
                src={software_engineer.src}
                alt="maifooz sheikh"
                width={150}
                height={150}
              />
              <Typography
                sx={{
                  fontSize: "22px",
                  lineHeight: "30px",
                  fontWeight: "700",
                  color: "#222222",
                  textAlign: "center",
                }}
              >
                Maifooz Sheikh
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  lineHeight: "30px",
                  fontWeight: "500",
                  color: "#444444",
                  textAlign: "center",
                }}
              >
                Software Engineer
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <IconButton
                  href="https://www.linkedin.com/in/maifooz-sheikh-18658177/"
                  target="_blank"
                >
                  <LinkedInIcon sx={{ color: "#000000" }} />
                </IconButton>
                {/* <IconButton>
                  <XIcon sx={{ color: "#000000" }} />
                </IconButton> */}
              </Box>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Image
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgGCgkGBwoHBwYGBg8UFQYWIB0WIhURHxMYHSggGBolGx8fITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAwQFAgEH/8QANBABAQACAAMGAgYLAQAAAAAAAAIBAwQREiEiMTJSYhNyBTNTgqHBI0FCUWFxgZGSk7EU/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD6oAqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8qpic1WcYmfNVM/fxV3nOIzmY/GwXNvEa9XZVc6+znxVb4+s57kTj5u1UAWP/bu/fH+t1PHbMeM6s/d5KoC/HHRnzxc/L2rWM4zjGceFMZJp33pz3c85+zrwBrDjVsnbGKn70+h2AAAAAAAAAAAAAAABnPLGc58J7wM/j9ma2/D59kT5f4qr26zV5rPjVdTxQAAAAABZ4C8zu6OfZctFkaKzO/XnHrlroAAAAAAAAAAAAAACPfnlo2fJSRHvxz0bMeygZICgAAAAADqM9NzXpqabDFbWPBAAAAAAAAAAAAAAARb9k69ec3z5V3e6lVuPxz0Yz6bkGcAoAAAAAA9xy545+DW1XOyMXPVyr1Mhp8Hjlw8e7qr8UE4AAAAAAAAAAAAACHip6+HvHpnq/smeVOKnM58KnpoGMJeI0fAqcdXVivL3USgAAAAAA19U9GqJ9MqHDcN8bHVnPKZr/JpIAAAAAAAAAAAAAAAAKv0hHVqm8fsV/wBZ7ZqcXOZrwqemmTu151bMxnt6fLXqwDgBQAABJw+v4u3E58vmr+QL/CR0aJxnxr9JX9U4IAAAAAAAAAAAAAAAADP+kfrp+T8167iJ53Uzj3MzitmNu3qnyzPTIIgFAABa+jvrq+T81VNwuzGrdiq8tT00DUHMXFzzisVj2ukAAAAAAAAAAAAAEezdr1+e5xn0z25BI52XGueq6xjClt47OeeNU8vdStV1ddVVnOfVQGy6u81Wc573d6nIKAAAAAAOtd1F4qc5x3u90tbXcbJ6orGcMd1N1FdU1nGfVKDYFDVx2ccsbZ5+6VvXu17PJc5z6a7MgkAAAAAABDxO74Mc8dt13YkHW3dGrHO6+WZ8aVL4+s/VxOPds7VWqq6zVZznNeaqeAkviNt+a88vTPYjBQAAAAAAAAAAAAABJHEbY8t55emu1PHH1j6yJz7tfYqANbVujbjnFfNNeMpGNNVFYqc5xmfLUtPht3xo557Lnu3KCYABm8dWa35x+qJmQBXAUAAAAAAAAAAAAAAAAAAFjgazO/GP1XNSCDSAB//Z"
                alt=""
                width={200}
                height={200}
              />
              <Typography
                sx={{
                  fontSize: "22px",
                  lineHeight: "30px",
                  fontWeight: "700",
                  color: "#222222",
                  textAlign: "center",
                }}
              >
                Chetan Bhurangi
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  lineHeight: "30px",
                  fontWeight: "500",
                  color: "#444444",
                  textAlign: "center",
                }}
              >
                System Engineer
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <IconButton>
                  <LinkedInIcon sx={{ color: "#000000" }} />
                </IconButton>
                {/* <IconButton>
                  <XIcon sx={{ color: "#000000" }} />
                </IconButton> */}
              </Box>
            </CardContent>
          </Card>
        </Box>
      </div>

      {/* Vision for the Future */}
      <div
        className="w-full flex flex-col justify-start items-start mt-20"
        style={{
          backgroundImage: `url(${vision.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          minHeight: "98vh",
        }}
      >
        <Box sx={{ maxWidth: "690px", padding: "2rem", marginTop: "10rem" }}>
          <Typography
            sx={{ fontSize: "48px", lineHeight: "70px", fontWeight: "900" }}
          >
            Vision <span style={{ color: "#C48133" }}>for the Future</span>
          </Typography>
          <Typography
            sx={{
              fontSize: "22px",
              lineHeight: "34px",
              fontWeight: "400",
              color: "#444444",
            }}
          >
            As a clean tech company, we believe that energy storage is the
            cornerstone of a sustainable and resilient energy future. As India
            moves toward ambitious clean energy goals, our energy storage
            company is committed to staying at the forefront—developing
            indigenous, cost-effective, and adaptive storage technologies for
            generations to come.
          </Typography>
        </Box>
      </div>

      {/* Let’s Build the Future of Energy Together */}
      <div className="w-full flex flex-col justify-center items-center mt-40">
        <Typography
          sx={{
            fontSize: "48px",
            lineHeight: "70px",
            fontWeight: "900",
            textAlign: "center",
          }}
        >
          Let&apos;s Build the Future of{" "}
          <span style={{ color: "#33C481" }}>Energy Together</span>
        </Typography>
        <Typography
          sx={{
            fontSize: "22px",
            lineHeight: "34px",
            fontWeight: "500",
            color: "#444444",
            textAlign: "center",
          }}
        >
          Want to partner with us, invest in energy storage, or join our team?
        </Typography>
        <Box className="flex flex-col md:flex-row justify-center items-start md:items-center gap-10  mt-20 mb-20">
          <Box className="flex flex-row gap-x-5 ">
            {/* <Image src={http} alt="" width={60} height={60} /> */}
            <LanguageIcon sx={{ fontSize: "65px", color: "#000000" }} />
            <Box>
              <Typography
                sx={{
                  fontSize: "24px",
                  lineHeight: "30px",
                  fontWeight: "500",
                  color: "#333333",
                }}
              >
                Visit
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  lineHeight: "30px",
                  fontWeight: "400",
                  color: "#333333",
                }}
              >
                https://rebuffr.com/
              </Typography>
            </Box>
          </Box>

          <Box className="flex flex-row gap-x-5 ">
            {/* <Image src={building.src} alt="" width={60} height={60} /> */}
            <BusinessIcon sx={{ fontSize: "65px", color: "#000000" }} />
            <Box>
              <Typography
                sx={{
                  fontSize: "18px",
                  lineHeight: "30px",
                  fontWeight: "400",
                  color: "#333333",
                }}
              >
                Rebuffr Systems Pvt. Ltd.
                <br />
                301, Mont Vert Apex, Baner, Pune - 411045, Maharashtra, India
              </Typography>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default AboutUs;

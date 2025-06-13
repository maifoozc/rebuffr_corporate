"use client";
import { Box, Card, CardContent, Typography } from "@mui/material";
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
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {/* Powering a Resilient Future  */}
      <div
        className="w-full flex flex-col justify-center items-center text-center mt-30 mb-40"
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
            fontWeight: "400",
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
            color: "#444444",
          }}
        >
          What we do
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
          Our Capabilities
        </Typography>

        <Box></Box>
      </div>
    </div>
  );
};

export default AboutUs;

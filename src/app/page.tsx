"use client";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import flow from "./assets/flow.gif";
// import container from "./assets/container.png";
import check_mark from "./assets/check_mark.png";
// import wind_container from "./assets/wind_container.png";
import CI_logo from "./assets/CI_logo.png";
import EV_logo from "./assets/EV_logo.png";
import GU_logo from "./assets/GU_logo.png";
import MR_logo from "./assets/MR_logo.png";
import SI_logo from "./assets/SI_logo.png";
import battery_laptop from "./assets/battery_laptop.svg";
import availibility_logo from "./assets/availibility_logo.svg";
import type_logo from "./assets/type_logo.svg";
import smart_logo from "./assets/smart_logo.svg";
import Grid from "@mui/material/Grid";
import "./style/homepage.scss";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import ashoka from "./assets/ashoka.svg";
import auroville from "./assets/auroville.svg";
import borosil from "./assets/borosil.svg";
import ghatge from "./assets/ghatge.svg";
import orchid from "./assets/orchid.svg";
import parle from "./assets/parle.svg";
import pernord from "./assets/pernord.svg";
import prestige from "./assets/prestige.svg";
import shahu from "./assets/shahu.svg";
import ssk from "./assets/ssk.svg";
import sula from "./assets/sula.svg";
import york from "./assets/york.svg";
import double_inverted from "./assets/double_inverted.svg";

import ev from "./assets/ev.svg";
import it_park from "./assets/it_park.svg";
import manufacturing from "./assets/manufacturing.svg";
import smart_city from "./assets/smart_city.svg";
import solar_epc from "./assets/solar_epc.svg";
import utility from "./assets/utility.svg";

import whychooseus_bg from "./assets/whychooseus_bg.svg";
// import whychooseus_container from "./assets/whychooseus_container.svg";
import custom_bess from "./assets/custom_bess.svg";
import endtoend from "./assets/endtoend.svg";
import smartems from "./assets/smartems.svg";
import indiafocused from "./assets/indiafocused.svg";
import futureready from "./assets/futureready.svg";
import ScheduleConsultant from "./components/scheduleConsultant";

import rebuffr_bess_container from "./assets/rebuffr_bess_container.svg";
import nise from "./assets/nise.svg";
import oilindia from "./assets/oilindia.svg";
import Auroville_side_pose from "./assets/Auroville_side_pose.svg";
import mundle_pasaydan from "./assets/mundle_pasaydan.svg";

export default function Home() {
  const sections = [
    {
      label: "MANUFACTURING & INDUSTRIAL UNITS",
      imageSrc: manufacturing,
    },
    {
      label: "SOLAR EPCS AND DEVELOPERS",
      imageSrc: solar_epc,
    },
    {
      label: "IT PARKS, HOSPITALS, COMMERCIAL BUILDINGS",
      imageSrc: it_park,
    },
    {
      label: "UTILITIES & POWER DISTRIBUTORS",
      imageSrc: utility,
    },
    {
      label: "EV CHARGING OPERATORS",
      imageSrc: ev,
    },
    {
      label: "RAILWAYS, AIRPORTS, SMART CITIES",
      imageSrc: smart_city,
    },
  ];

  const [selected, setSelected] = useState(sections[0]);

  const whychooseus = [
    {
      logo: custom_bess.src,
      head: "Custom BESS Design",
      description: "Tailored to your application, scale & budget",
    },
    {
      logo: endtoend.src,
      head: "End-to-End Delivery",
      description: "Design,integration,commissioning, and after-sales support",
    },
    {
      logo: smartems.src,
      head: "Smart EMS",
      description: "Real-time analytics, predictive maintenance,remote access",
    },
    {
      logo: indiafocused.src,
      head: "India-Focused",
      description: "Built for Indian conditions, powered by local expertise",
    },
    {
      logo: futureready.src,
      head: "Future-Ready",
      description: "Scalable, tech-agnostic, and upgradable BESS platforms",
    },
    {
      logo: futureready.src,
      head: "Future-Ready",
      description: "Scalable, tech-agnostic, and upgradable BESS platforms",
    },
  ];
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center pl-10 pr-2">
      {/* Top Section */}
      <div className="w-full min-h-screen flex flex-col md:flex-row justify-center items-center md:items-center sm:items-start xs:items-start">
        <div className="w-full md:w-1/2 flex justify-center items-center order-1">
          <div className="flow_div flex flex-col items-center text-center md:items-start md:text-left">
            <h3
              style={{
                fontSize: "40px",
                fontWeight: "400",
                color: "#33C481",
                lineHeight: "141%",
                // lineHeight: "20px",
              }}
              className="top_section_heading"
            >
              SMART ENERGY STORAGE
            </h3>
            <h3
              style={{
                fontSize: "64px",
                fontWeight: "900",
                color: "#000000",
                // lineHeight: "138%",
                lineHeight: "60px",
              }}
              className="top_section_heading_2"
            >
              FOR A SUSTAINABLE
              <br />
              INDIA
            </h3>

            <Button
              sx={{
                fontSize: "18px",
                fontWeight: "700",
                color: "#ffffff",
                // lineHeight: "100%",
                lineHeight: "20px",
                backgroundColor: "#33C481",
                padding: "18px 36px",
                borderRadius: "30px",
                cursor: "pointer",
                marginTop: "40px",
                width: "fit-content",
              }}
            >
              LET&apos;S CONNECT
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/2  flex justify-center items-center order-2">
          <Image
            src={flow.src}
            alt="logo"
            width={100}
            height={100}
            priority
            className="flow_gif"
          />
        </div>
      </div>

      <div className="w-full flex justify-center items-center mt-10 bg-amber-700">
        <video
          width="100%"
          height="auto"
          autoPlay
          muted
          loop
          controls
          style={{ borderRadius: "10px", height: "500px" }}
        >
          <source src="/previewVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Powering Section */}
      <div className="w-full flex flex-col justify-center items-center mt-20">
        <Typography
          sx={{
            fontSize: "40px",
            lineHeight: "70px",
            fontWeight: "400",
            color: "#33C481",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          Powering the Future with
        </Typography>
        <Typography
          sx={{
            fontSize: "48px",
            lineHeight: "70px",
            fontWeight: "900",
            color: "#000000",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          Intelligent Battery Energy Storage <br />
          Systems (I-BESS)
        </Typography>
        <Typography
          sx={{
            fontSize: "22px",
            lineHeight: "34px",
            fontWeight: "500",
            color: "#444444",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          Rebuffr Systems Pvt. Ltd. is India&apos;s premier provider of
          custom-engineered Battery Energy Storage Systems (BESS). Our mission
          is to accelerate India&apos;s clean energy transition by delivering
          reliable, scalable, and smart energy storage solutions—built for
          Indian industries, infrastructure, and the grid.
        </Typography>
        <Typography
          sx={{
            fontSize: "22px",
            lineHeight: "34px",
            fontWeight: "500",
            color: "#444444",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          Whether you’re powering a smart city, optimizing an industrial plant,
          or enabling off-grid  solar access in rural areas, Rebuffr’s advanced
          energy storage solutions are engineered to deliver energy resilience,
          efficiency, and sustainability. 
        </Typography>

        <Button
          sx={{
            fontSize: "18px",
            fontWeight: "700",
            color: "#ffffff",
            lineHeight: "100%",
            backgroundColor: "#33C481",
            padding: "18px 36px",
            borderRadius: "30px",
            cursor: "pointer",
            marginTop: "40px",
          }}
        >
          READ MORE ABOUT US
        </Button>

        <Image
          // src={battery_laptop.src}
          src={rebuffr_bess_container.src}
          width={100}
          height={100}
          alt="battery"
          style={{
            width: "100%",
            maxHeight: "500px",
            objectFit: "fill",
          }}
        />
      </div>

      {/* Built in india */}
      <div className="w-full flex flex-col justify-center items-center mt-20">
        <Typography
          sx={{
            fontSize: "44px",
            lineHeight: "70px",
            fontWeight: "400",
            color: "#33C481",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          Built in India
        </Typography>
        <Typography
          sx={{
            fontSize: "48px",
            lineHeight: "70px",
            fontWeight: "900",
            color: "#000000",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          Engineered for the World
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
          India&apos;s energy challenges are unique—and so are our energy
          storage solutions. From power outages and diesel
          <br /> dependency to solar intermittency and industrial load peaks,
          Rebuffr&apos;s battery energy storage system (BESS) platforms
          <br /> are designed to handle extreme conditions, rural constraints,
          and regulatory requirements across Indian states.
        </Typography>
      </div>

      {/* Container Image */}
      <div className="w-full flex flex-col md:flex-row justify-center items-center mt-20 gap-x-20">
        <Image
          // src={container.src}
          src={Auroville_side_pose.src}
          alt="container"
          width={560}
          height={560}
          style={{ borderRadius: "10px" }}
        />

        <div className="flex flex-col items-start">
          <Typography
            sx={{
              fontSize: "36px",
              lineHeight: "100%",
              // fontWeight: "900",
              fontWeight: "400",
              color: "#222222",
              textAlign: "center",
            }}
          >
            OUR SYSTEMS ARE
          </Typography>
          <div className="flex flex-row justify-center items-start mt-15">
            <Image src={check_mark.src} alt="" width={20} height={20} />
            <Typography
              sx={{
                fontSize: "18px",
                lineHeight: "100%",
                fontWeight: "500",
                color: "#444444",
                marginLeft: "20px",
              }}
            >
              BIS, CEA, and MNRE Compliant
            </Typography>
          </div>

          <div className="flex flex-row justify-center items-start mt-5">
            <Image src={check_mark.src} alt="" width={20} height={20} />
            <Typography
              sx={{
                fontSize: "18px",
                lineHeight: "100%",
                fontWeight: "500",
                color: "#444444",
                marginLeft: "20px",
              }}
            >
              Climate-ready: Heat, humidity, and dust-proof
            </Typography>
          </div>
          <div className="flex flex-row justify-center items-start mt-5">
            <Image src={check_mark.src} alt="" width={20} height={20} />
            <Typography
              sx={{
                fontSize: "18px",
                lineHeight: "100%",
                fontWeight: "500",
                color: "#444444",
                marginLeft: "20px",
              }}
            >
              Finance-friendly with flexible leasing options
            </Typography>
          </div>
          <div className="flex flex-row justify-center items-start mt-5">
            <Image src={check_mark.src} alt="" width={20} height={20} />
            <Typography
              sx={{
                fontSize: "18px",
                lineHeight: "100%",
                fontWeight: "500",
                color: "#444444",
                marginLeft: "20px",
              }}
            >
              Manufactured and serviced in India
            </Typography>
          </div>
          <Button
            sx={{
              fontSize: "18px",
              fontWeight: "700",
              color: "#ffffff",
              lineHeight: "100%",
              backgroundColor: "#33C481",
              padding: "18px 36px",
              borderRadius: "30px",
              cursor: "pointer",
              marginTop: "40px",
              width: "fit-content",
            }}
          >
            LET&apos;S CONNECT
          </Button>
        </div>
      </div>

      {/* our solutions */}
      <div className="w-full flex flex-col justify-center items-center mt-20">
        <Typography
          sx={{
            fontSize: "48px",
            lineHeight: "100%",
            fontWeight: "900",
            textAlign: "center",
          }}
        >
          OUR <span style={{ color: "#33C481" }}>SOLUTIONS</span>
        </Typography>
        <Typography
          sx={{
            fontSize: "22px",
            lineHeight: "30px",
            fontWeight: "500",
            color: "#444444",
            textAlign: "center",
          }}
        >
          A modular and customizable battery energy storage system designed for:
        </Typography>

        <div className="flex flex-col md:flex-row justify-center items-center mt-10 gap-x-10">
          <Image
            // src={wind_container.src}
            src={mundle_pasaydan.src}
            alt="wind_container"
            width={694}
            height={601}
            style={{ borderRadius: "30px" }}
          />
          <div>
            <Grid container spacing={2} sx={{ maxWidth: "750px" }}>
              <Grid size={6}>
                <Card>
                  <CardContent
                    sx={{
                      maxWidth: "365px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "22px",
                        lineHeight: "30px",
                        fontWeight: "500",
                        color: "#333333",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "20px",
                          lineHeight: "30px",
                          fontWeight: "400",
                          color: "#7C7C7C",
                        }}
                      >
                        01
                      </span>
                      <br />
                      Commercial and Industrial Energy Backup
                    </Typography>
                    <Image
                      src={CI_logo.src}
                      alt="CI_logo"
                      width={65.07}
                      height={74.76}
                    />
                  </CardContent>
                </Card>
              </Grid>
              <Grid size={6}>
                <Card>
                  <CardContent
                    sx={{
                      maxWidth: "365px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "22px",
                        lineHeight: "30px",
                        fontWeight: "500",
                        color: "#333333",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "20px",
                          lineHeight: "30px",
                          fontWeight: "400",
                          color: "#7C7C7C",
                        }}
                      >
                        02
                      </span>
                      <br />
                      Solar + Storage Integration
                    </Typography>
                    <Image
                      src={SI_logo.src}
                      alt="SI_logo"
                      width={65.07}
                      height={74.76}
                    />
                  </CardContent>
                </Card>
              </Grid>
              <Grid size={6}>
                <Card>
                  <CardContent
                    sx={{
                      maxWidth: "365px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "22px",
                        lineHeight: "30px",
                        fontWeight: "500",
                        color: "#333333",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "20px",
                          lineHeight: "30px",
                          fontWeight: "400",
                          color: "#7C7C7C",
                        }}
                      >
                        03
                      </span>
                      <br />
                      Grid Stabilization for Utilities
                    </Typography>
                    <Image
                      src={GU_logo.src}
                      alt="GU_logo"
                      width={65.07}
                      height={74.76}
                    />
                  </CardContent>
                </Card>
              </Grid>
              <Grid size={6}>
                <Card>
                  <CardContent
                    sx={{
                      maxWidth: "365px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "22px",
                        lineHeight: "30px",
                        fontWeight: "500",
                        color: "#333333",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "20px",
                          lineHeight: "30px",
                          fontWeight: "400",
                          color: "#7C7C7C",
                        }}
                      >
                        04
                      </span>
                      <br />
                      EV Charging Infrastructure
                    </Typography>
                    <Image
                      src={EV_logo.src}
                      alt="EV_logo"
                      width={65.07}
                      height={74.76}
                    />
                  </CardContent>
                </Card>
              </Grid>
              <Grid size={6}>
                <Card>
                  <CardContent
                    sx={{
                      maxWidth: "365px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "22px",
                        lineHeight: "30px",
                        fontWeight: "500",
                        color: "#333333",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "20px",
                          lineHeight: "30px",
                          fontWeight: "400",
                          color: "#7C7C7C",
                        }}
                      >
                        05
                      </span>
                      <br />
                      Microgrids & Remote Electrification
                    </Typography>
                    <Image
                      src={MR_logo.src}
                      alt="MR_logo"
                      width={65.07}
                      height={74.76}
                    />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </div>
        </div>

        <div className="w-full md:w-3/4 mt-10 flex flex-col justify-center items-center">
          <Grid
            container
            spacing={2}
            sx={{ justifyContent: "center", alignItems: "center" }}
          >
            <Grid size={{ md: 4, sm: 12 }}>
              <Card elevation={3}>
                <CardContent
                  sx={{
                    width: "100%",
                    height: "300px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={availibility_logo.src}
                    alt="availibility_logo"
                    width={80}
                    height={80}
                  />
                  <Typography
                    sx={{
                      fontSize: "24px",
                      lineHeight: "30px",
                      fontWeight: "700",
                      color: "#333333",
                      textAlign: "center",
                    }}
                  >
                    Available from
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      lineHeight: "30px",
                      fontWeight: "400",
                      color: "#444444",
                      textAlign: "center",
                    }}
                  >
                    100 kWh to 100+ MWh
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ md: 4, sm: 12 }}>
              <Card elevation={3}>
                <CardContent
                  sx={{
                    width: "100%",
                    height: "300px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={type_logo.src}
                    alt="type_logo"
                    width={80}
                    height={80}
                  />
                  <Typography
                    sx={{
                      fontSize: "24px",
                      lineHeight: "30px",
                      fontWeight: "700",
                      color: "#333333",
                      textAlign: "center",
                    }}
                  >
                    Battery Types
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      lineHeight: "30px",
                      fontWeight: "400",
                      color: "#444444",
                      textAlign: "center",
                    }}
                  >
                    Lithium-Ion (LFP/NMC), Sodium-Ion
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ md: 4, sm: 12 }}>
              <Card elevation={3}>
                <CardContent
                  sx={{
                    width: "100%",
                    height: "300px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={smart_logo.src}
                    alt="smart_logo"
                    width={80}
                    height={80}
                  />
                  <Typography
                    sx={{
                      fontSize: "24px",
                      lineHeight: "30px",
                      fontWeight: "700",
                      color: "#333333",
                      textAlign: "center",
                    }}
                  >
                    Smart EMS Platform
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      lineHeight: "30px",
                      fontWeight: "400",
                      color: "#444444",
                      textAlign: "center",
                    }}
                  >
                    EMS with AI-based load optimization & remote monitoring
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Button
            sx={{
              fontSize: "18px",
              fontWeight: "700",
              color: "#ffffff",
              // lineHeight: "100%",
              lineHeight: "20px",
              backgroundColor: "#33C481",
              padding: "18px 36px",
              borderRadius: "30px",
              cursor: "pointer",
              marginTop: "40px",
              width: "fit-content",
            }}
          >
            Request a custom quote
          </Button>
        </div>
      </div>

      {/* Why choose rEbuffr */}
      <div
        className="w-full flex flex-col justify-center items-center mt-20"
        style={{
          backgroundImage: `url(${whychooseus_bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "start",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Typography
          sx={{
            fontSize: "44px",
            lineHeight: "70px",
            fontWeight: "900",
            color: "#000000",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          Why choose{" "}
          <span style={{ color: "rgba(51, 196, 129, 1)" }}>REBUFFR ?</span>
        </Typography>

        <Image
          // src={whychooseus_container.src}
          src={battery_laptop.src}
          alt="choose rebuffr"
          width={100}
          height={100}
          style={{
            width: "712px",
            // height: "500px",
            objectFit: "contain",
            marginTop: "20px",
          }}
        />

        <Grid container spacing={2}>
          {whychooseus.map((item, index) => (
            <Grid size={{ sm: 12, md: 4 }} key={index}>
              <Card>
                <CardContent
                  sx={{
                    width: "100%",
                    maxWidth: "400px",
                    height: "130px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "start",
                    justifyContent: "space-between",
                  }}
                >
                  <Image src={item.logo} alt="" width={70} height={70} />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "start",
                      alignItems: "start",
                      marginLeft: "20px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "24px",
                        lineHeight: "30px",
                        fontWeight: "700",
                        color: "#222222",
                      }}
                    >
                      {item.head}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        lineHeight: "30px",
                        fontWeight: "400",
                        color: "#333333",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>

      {/* Who We Work With */}
      <div className="w-full flex flex-col justify-center items-center mt-20 ">
        <Typography
          sx={{
            fontSize: "48px",
            lineHeight: "70px",
            fontWeight: "900",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          Who We <span style={{ color: "#33C481" }}>Work With</span>
        </Typography>
        <Typography
          sx={{ fontSize: "22px", lineHeight: "34px", fontWeight: "500" }}
        >
          We proudly serve
        </Typography>
        <Box sx={{ position: "relative", marginTop: "20px" }}>
          <Image
            src={selected.imageSrc}
            width={100}
            height={100}
            alt={selected.label}
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
            <Grid container spacing={2}>
              {sections.map((item, idx) => (
                <Grid size={{ md: 4, sm: 6, xs: 12 }} key={idx}>
                  <Button
                    fullWidth
                    variant={
                      selected.label === item.label ? "contained" : "outlined"
                    }
                    onClick={() => setSelected(item)}
                    sx={{
                      color: "#fff",
                      borderColor:
                        selected.label === item.label ? "#33C481" : "#fff",
                      backgroundColor:
                        selected.label === item.label ? "#33C481" : "",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "#fff",
                        color: "#33C481",
                      },
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

      {/* our clients */}
      <div className="w-full flex flex-col justify-center items-center mt-20">
        <Typography
          sx={{
            fontSize: "48px",
            lineHeight: "70px",
            fontWeight: "900",
            textAlign: "center",
          }}
        >
          OUR <span style={{ color: "#33C481" }}>CLIENTS</span>
        </Typography>

        <div className="space-y-4 mt-10">
          <Marquee
            pauseOnHover
            speed={40}
            gradient={true}
            style={{ maxWidth: "100%" }}
          >
            <Image
              src={parle.src}
              width={100}
              height={100}
              alt="parle"
              className="slider_logo"
            />
            <Image
              src={orchid.src}
              width={100}
              height={100}
              alt="orchid"
              className="slider_logo"
            />
            <Image
              src={prestige.src}
              width={100}
              height={100}
              alt="prestige"
              className="slider_logo"
            />
            <Image
              src={auroville.src}
              width={100}
              height={100}
              alt="auroville"
              className="slider_logo"
            />
            <Image
              src={ashoka.src}
              width={100}
              height={100}
              alt="ashoka"
              className="slider_logo"
            />
            <Image
              src={pernord.src}
              width={100}
              height={100}
              alt="pernord"
              className="slider_logo"
            />

            <Image
              src={nise.src}
              width={100}
              height={100}
              alt="nise"
              className="slider_logo"
            />

            <Image
              src={oilindia.src}
              width={100}
              height={100}
              alt="oilindia"
              className="slider_logo"
            />

            {/* second layer */}

            <Image
              src={borosil.src}
              width={100}
              height={100}
              alt="borosil"
              className="slider_logo"
            />
            <Image
              src={ghatge.src}
              width={100}
              height={100}
              alt="parle"
              className="slider_logo"
            />
            <Image
              src={ssk.src}
              width={100}
              height={100}
              alt="ssk"
              className="slider_logo"
            />
            <Image
              src={sula.src}
              width={100}
              height={100}
              alt="sula"
              className="slider_logo"
            />
            <Image
              src={shahu.src}
              width={100}
              height={100}
              alt="shahu"
              className="slider_logo"
            />
            <Image
              src={york.src}
              width={100}
              height={100}
              alt="york"
              className="slider_logo"
            />
          </Marquee>

          {/* <Marquee
            pauseOnHover
            speed={40}
            gradient={true}
            style={{ maxWidth: "100%" }}
          >
            <Image
              src={borosil.src}
              width={100}
              height={100}
              alt="borosil"
              className="slider_logo"
            />
            <Image
              src={ghatge.src}
              width={100}
              height={100}
              alt="parle"
              className="slider_logo"
            />
            <Image
              src={ssk.src}
              width={100}
              height={100}
              alt="ssk"
              className="slider_logo"
            />
            <Image
              src={sula.src}
              width={100}
              height={100}
              alt="sula"
              className="slider_logo"
            />
            <Image
              src={shahu.src}
              width={100}
              height={100}
              alt="shahu"
              className="slider_logo"
            />
            <Image
              src={york.src}
              width={100}
              height={100}
              alt="york"
              className="slider_logo"
            />
          </Marquee> */}
        </div>
      </div>

      {/* Client Testimonials */}
      <div className="w-full flex flex-col justify-center items-center mt-20 md:mr-30 md:ml-30">
        <Typography
          sx={{
            fontSize: "48px",
            lineHeight: "70px",
            fontWeight: "900",
            textAlign: "center",
          }}
        >
          CLIENT <span style={{ color: "#33C481" }}>TESTIMONIALS</span>
        </Typography>

        <div className="flex flex-col md:flex-row justify-center items-center mt-10 gap-x-10 gap-y-10">
          <Box
            sx={{
              width: "100%",
              minHeight: "400px",
              backgroundColor: "#33C481",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "180px",
              padding: "60px",
              marginTop: "40px",
              position: "relative",
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                lineHeight: "36px",
                fontWeight: "400",
                color: "#444444",
                textAlign: "center",
              }}
            >
              <span style={{ color: "#fff" }}>“Rebuffr’s</span> BESS gave us
              complete energy reliability during peak hours. Their EMS insights
              helped us save on diesel and optimize our solar generation.”
            </Typography>
            <Box
              sx={{
                width: "350px",
                height: "132px",
                backgroundColor: "#04836F",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "180px",
                padding: "60px",
                marginTop: "40px",
                position: "absolute",
                bottom: "-40px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  lineHeight: "36px",
                  fontWeight: "700",
                  color: "#ffffff",
                  textAlign: "center",
                }}
              >
                Operations Head
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  lineHeight: "36px",
                  fontWeight: "500",
                  color: "#ffffff",
                  textAlign: "center",
                }}
              >
                Auto Components Firm, Pune
              </Typography>
            </Box>

            <Image
              src={double_inverted.src}
              alt="double_inverted"
              width={100}
              height={100}
              style={{
                width: "96px",
                height: "74px",
                position: "absolute",
                top: "0px",
                left: "0px",
              }}
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "400px",
              backgroundColor: "#33C481",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "180px",
              padding: "60px",
              marginTop: "40px",
              position: "relative",
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                lineHeight: "36px",
                fontWeight: "400",
                color: "#444444",
                textAlign: "center",
                marginBottom: "40px",
              }}
            >
              “Their rural microgrid system lit up an entire village with zero
              power cuts. Remarkable execution.”
            </Typography>
            <Box
              sx={{
                width: "350px",
                height: "132px",
                backgroundColor: "#04836F",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "180px",
                padding: "60px",
                marginTop: "40px",
                position: "absolute",
                bottom: "-40px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  lineHeight: "36px",
                  fontWeight: "700",
                  color: "#ffffff",
                  textAlign: "center",
                }}
              >
                Project Lead
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  lineHeight: "36px",
                  fontWeight: "500",
                  color: "#ffffff",
                  textAlign: "center",
                }}
              >
                NGO in Odisha
              </Typography>
            </Box>

            <Image
              src={double_inverted.src}
              alt="double_inverted"
              width={100}
              height={100}
              style={{
                width: "96px",
                height: "74px",
                position: "absolute",
                top: "0px",
                left: "0px",
              }}
            />
          </Box>
        </div>
      </div>

      {/* Custom BESS Solution */}
      <div className="w-full flex flex-col md:flex-row justify-center items-start mt-40 md:mr-30 md:ml-30">
        <Box className="w-full md:w-1/2">
          <Typography
            sx={{
              fontSize: "44px",
              lineHeight: "70px",
              fontWeight: "400",
              color: "#33C481",
              textTransform: "uppercase",
            }}
          >
            Get Started with a
          </Typography>
          <Typography
            sx={{
              fontSize: "48px",
              lineHeight: "70px",
              fontWeight: "900",
              color: "#222222",
              textTransform: "uppercase",
            }}
          >
            Custom BESS Solution
          </Typography>
          <Typography
            sx={{
              fontSize: "22px",
              lineHeight: "34px",
              fontWeight: "500",
              color: "#444444",
            }}
          >
            Let&apos;s help you build a clean, resilient, and cost-effective
            energy future.
          </Typography>
        </Box>
        <Box className="w-full md:w-1/2">
          <ScheduleConsultant />
        </Box>
      </div>
    </div>
  );
}

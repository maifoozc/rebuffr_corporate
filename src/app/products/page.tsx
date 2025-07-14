"use client";
import {
  Box,
  Card,
  CardContent,
  Checkbox,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import product_bg from "../assets/product_bg.svg";
import container_mirror from "../assets/container_mirror.svg";
import mundle_container from "../assets/mundle_container.jpg";
import prestige_container from "../assets/prestige_container.jpg";
import auroville_container from "../assets/auroville_container.jpg";
import whychooseus_container from "../assets/whychooseus_container.svg";
import custombess from "../assets/custombess.svg";
import fastapi from "../assets/fastapi.svg";
import fastapi_bg from "../assets/fastapi_bg.svg";
import whychoose_product_text_bg from "../assets/whychoose_product_text_bg.svg";
import whychoose_product_bg from "../assets/whychoose_product_bg.svg";
import delhi from "../assets/delhi.svg";
import maharashtra from "../assets/maharashtra.svg";
import odisha from "../assets/odisha.svg";
import tamil_nadu from "../assets/tamil_nadu.svg";
import pondicherry from "../assets/pondicherry.svg";
import maldives from "../assets/maldives.svg";
import Image from "next/image";
import { useState } from "react";
import ScheduleConsultant from "../components/scheduleConsultant";

import big_container from "../assets/big_container.svg";
import CircleIcon from "@mui/icons-material/Circle";

const Product = () => {
  const [productType, setProductType] = useState<
    "commercial" | "industrial" | "residential"
  >("commercial");

  const productTypes: ("commercial" | "industrial" | "residential")[] = [
    "commercial",
    "industrial",
    "residential",
  ];

  const handleProductTypeChange = (
    event: React.MouseEvent<HTMLElement>,
    newType: "commercial" | "industrial" | "residential" | null
  ) => {
    if (newType !== null) setProductType(newType);
  };

  const productTypeDetail = {
    commercial: {
      label:
        "Commercial solutions for urban buildings, malls, and business parks.",
      imagesrc: mundle_container.src,
    },
    industrial: {
      label:
        "Heavy-duty BESS solutions for manufacturing, processing, and plants.",
      imagesrc: prestige_container.src,
    },
    residential: {
      label: "Compact BESS units tailored for homes and housing societies.",
      imagesrc: auroville_container.src,
    },
  } as const;

  const currentProduct = productTypeDetail[productType];

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      {/* Empowering India’s Energy Transition  */}
      <div
        className="w-full  flex flex-col md:flex-row justify-center items-start"
        style={{
          backgroundImage: `url(${product_bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "start",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "856px",
            padding: "20px",
            marginTop: "2%",
          }}
        >
          <Typography
            sx={{
              fontSize: "40px",
              lineHeight: "138%",
              fontWeight: "400",
              color: "#33C481",
            }}
          >
            Empowering India&apos;s Energy Transition
            <br />
            <span
              style={{
                fontSize: "60px",
                lineHeight: "138%",
                fontWeight: "900",
                color: "#ffffff",
              }}
            >
              with Tailored Energy Storage Solutions
            </span>
          </Typography>

          <Typography
            sx={{
              fontSize: "20px",
              lineHeight: "34px",
              fontWeight: "500",
              color: "#ffffff",
            }}
          >
            Rebuffr is a leading provider of custom Battery Energy Storage
            Systems (BESS) designed specifically for the diverse energy
            landscape of India. From solar energy storage for rural areas to
            grid-scale storage for power utilities, our tailor-made systems are
            built to handle India&apos;s unique climate, grid conditions, and
            energy demands.
          </Typography>
        </div>
        <div>
          <Image
            src={container_mirror.src}
            alt="container_mirror"
            width={100}
            height={100}
            style={{ width: "660px", height: "771px" }}
          />
        </div>
      </div>

      {/* product types */}
      <div className="w-full  flex flex-col justify-center items-center mt-20 pl-10 pr-2">
        <ToggleButtonGroup
          value={productType}
          exclusive
          onChange={handleProductTypeChange}
        >
          {productTypes.map((type) => (
            <ToggleButton
              key={type}
              value={type}
              sx={{
                borderRadius: "30px",
                border: "1px solid #444444",
                color: "#444444",
                backgroundColor: "#ffffff",
                "&.Mui-selected": {
                  backgroundColor: "#33C481",
                  color: "#ffffff",
                },
              }}
            >
              <Typography>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </Typography>
            </ToggleButton>
          ))}
        </ToggleButtonGroup>

        <div className="flex flex-col md:flex-row justify-between items-center mt-5">
          <Typography
            sx={{
              fontSize: "22px",
              lineHeight: "34px",
              fontWeight: "400",
              color: "#444444",
              width: "100%",
              height: "300px",
              borderRadius: "10px",
              marginRight: "5px",
              maxWidth: "600px",
              padding: "10px",
              backgroundColor: "#2DAF73",
            }}
          >
            {currentProduct.label}
          </Typography>
          <Image
            src={currentProduct.imagesrc}
            alt=""
            width={100}
            height={100}
            // style={{ width: "597px", maxHeight: "400px", borderRadius: "20px" }}
            style={{ width: "300px", height: "300px", borderRadius: "20px" }}
          />
        </div>
      </div>

      {/* Why Customized  */}
      <div className="w-full flex flex-col justify-center items-center mt-20 pl-10 pr-2">
        <Typography
          sx={{
            fontSize: "44px",
            lineHeight: "70px",
            fontWeight: "400",
            color: "#33C481",
            textAlign: "center",
          }}
        >
          Why Customized
          <br />
          <span
            style={{
              fontSize: "48px",
              lineHeight: "70px",
              fontWeight: "900",
              color: "#222222",
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            BESS Matters in India
          </span>
        </Typography>

        <Box className="flex flex-col md:flex-row justify-center items-start p-10">
          <Image
            // src={whychooseus_container.src}
            src={big_container.src}
            alt="container"
            // width={660}
            width={770}
            height={660}
          />
          <Box className="flex flex-col justify-start items-start mt-5">
            <Typography
              sx={{
                fontSize: "32px",
                lineHeight: "70px",
                fontWeight: "700",
                color: "#222222",
              }}
            >
              We customize for:
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
        </Box>
      </div>

      {/* Custom BESS for */}
      <div className="w-full flex flex-col justify-center items-center mt-20 pl-10 pr-2">
        <Box className="w-full flex flex-col md:flex-row justify-between items-center p-10">
          <div
            style={{
              // backgroundColor: "rgb(236, 179, 111)",
              padding: "1rem",
              borderRadius: "10px",
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontSize: "44px",
                lineHeight: "70px",
                fontWeight: "400",
                color: "#33C481",
                // textAlign: "start",
                // minWidth: "400px",
                // maxWidth: "680px",
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              Custom BESS for
              <br />
              <span
                style={{
                  fontSize: "44px",
                  lineHeight: "70px",
                  fontWeight: "700",
                  // color: "#222222",
                  color: "rgb(236, 179, 111)",
                }}
              >
                Solar & Wind Integration
                {/* <br /> */}
              </span>
            </Typography>
          </div>
          {/* <Typography
            sx={{
              fontSize: "22px",
              lineHeight: "34px",
              fontWeight: "400",
              color: "#444444",
              maxWidth: "680px",
              textAlign: "start",
            }}
          >
            India&apos;s ambitious renewable energy goals require smart storage
            to stabilize supply and maximize generation value. We help you
            combine solar PV and wind with energy storage to create resilient
            hybrid systems.
          </Typography> */}
        </Box>

        <Box className="w-full flex flex-col md:flex-row justify-between items-start p-10 gap-4">
          <Image
            src={custombess.src}
            alt="container"
            width={100}
            height={100}
            style={{ width: "50%", maxHeight: "350px" }}
          />
          <Box
            className="flex flex-col justify-start items-start p-10"
            style={{
              backgroundColor: "rgb(247, 217, 166)",
              borderRadius: "10px",
            }}
          >
            <Typography
              sx={{
                fontSize: "32px",
                // lineHeight: "50px",
                fontWeight: "700",

                color: "#33C481",
                textTransform: "uppercase",
              }}
            >
              Solar + Storage{" "}
              <span style={{ color: "#222222" }}>Benefits:</span>
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                // lineHeight: "50px",
                fontWeight: "500",
                color: "#444444",
                padding: "10px 30px",
              }}
            >
              <CircleIcon style={{ fontSize: "10px", marginRight: "5px" }} />
              Store excess solar power during the day
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                // lineHeight: "100%",
                fontWeight: "500",
                color: "#444444",
                padding: "10px 30px",
              }}
            >
              {" "}
              <CircleIcon style={{ fontSize: "10px", marginRight: "5px" }} />
              Reduce reliance on diesel generators
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                // lineHeight: "100%",
                fontWeight: "500",
                color: "#444444",
                padding: "10px 30px",
              }}
            >
              <CircleIcon style={{ fontSize: "10px", marginRight: "5px" }} />
              Enable 24/7 energy availability in off-grid villages
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                // lineHeight: "100%",
                fontWeight: "500",
                color: "#444444",
                padding: "10px 30px",
              }}
            >
              <CircleIcon style={{ fontSize: "10px", marginRight: "5px" }} />
              Maximize net metering value for solar rooftop system
            </Typography>
          </Box>
        </Box>
      </div>

      {/* Customized BESS Solutions  */}
      <div className="w-full flex flex-col justify-center items-center mt-20 pl-10 pr-2">
        <Typography
          sx={{
            fontSize: "48px",
            lineHeight: "70px",
            fontWeight: "900",
            color: "#222222",
            textAlign: "center",
          }}
        >
          Customized BESS Solutions
          <br />
          <span
            style={{
              fontSize: "44px",
              lineHeight: "70px",
              fontWeight: "400",
              color: "#33C481",
              textTransform: "uppercase",
            }}
          >
            for Indian Sectors
          </span>
        </Typography>
        <Paper elevation={6} sx={{ p: 2, marginTop: "2rem" }}>
          <Table sx={{ maxWidth: "820px" }}>
            <TableHead>
              <TableRow
                sx={{
                  backgroundColor: "rgb(245, 245, 245)",
                  borderRadius: "50px",
                }}
              >
                <TableCell
                  sx={{
                    fontSize: "20px",
                    lineHeight: "30px",
                    fontWeight: "600",
                    color: "#444444",
                  }}
                >
                  Sector
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "20px",
                    lineHeight: "30px",
                    fontWeight: "600",
                    color: "#444444",
                  }}
                >
                  Customization Approach
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{
                  "&:hover": {
                    backgroundColor: "#f7d9a6",
                    cursor: "pointer",
                  },
                }}
              >
                <TableCell
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                    color: "#444444",
                    // textTransform: "uppercase",
                  }}
                >
                  Commercial Buildings
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                    color: "#444444",
                    // textTransform: "uppercase",
                  }}
                >
                  Load shifting, diesel generator optimization
                </TableCell>
              </TableRow>
              <TableRow
                sx={{
                  "&:hover": {
                    backgroundColor: "#f7d9a6",
                    cursor: "pointer",
                  },
                }}
              >
                <TableCell
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                    color: "#444444",
                  }}
                >
                  Industrial Plants
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                    color: "#444444",
                  }}
                >
                  Peak shaving, power factor correction
                </TableCell>
              </TableRow>
              <TableRow
                sx={{
                  "&:hover": {
                    backgroundColor: "#f7d9a6",
                    cursor: "pointer",
                  },
                }}
              >
                <TableCell
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                    color: "#444444",
                  }}
                >
                  EV Charging Stations
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                    color: "#444444",
                  }}
                >
                  Fast charging support, energy cost optimization
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                    color: "#444444",
                  }}
                >
                  Rural Microgrids
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                    color: "#444444",
                  }}
                >
                  Off-grid BESS with remote EMS
                </TableCell>
              </TableRow>
              <TableRow
                sx={{
                  "&:hover": {
                    backgroundColor: "#f7d9a6",
                    cursor: "pointer",
                  },
                }}
              >
                <TableCell
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                    color: "#444444",
                  }}
                >
                  Smart Cities
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                    color: "#444444",
                  }}
                >
                  Grid-connected BESS for energy resilience
                </TableCell>
              </TableRow>
              <TableRow
                sx={{
                  "&:hover": {
                    backgroundColor: "#f7d9a6",
                    cursor: "pointer",
                  },
                }}
              >
                <TableCell
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                    color: "#444444",
                  }}
                >
                  Utilities (DISCOMs)
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                    color: "#444444",
                  }}
                >
                  Frequency response, load balancing
                </TableCell>
              </TableRow>
              <TableRow
                sx={{
                  "&:hover": {
                    backgroundColor: "#f7d9a6",
                    cursor: "pointer",
                  },
                }}
              >
                <TableCell
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                    color: "#444444",
                  }}
                >
                  Hospitals & Data Centers
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                    color: "#444444",
                  }}
                >
                  Uninterrupted backup with automatic switchover
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </div>

      {/* Fast Deployment  */}
      <div
        className="w-full flex flex-col md:flex-row justify-between items-start mt-20 pl-10 pr-2"
        style={{
          backgroundImage: `url(${fastapi_bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "600px",
        }}
      >
        <Box sx={{ maxWidth: "690px" }}>
          <Typography
            sx={{
              fontSize: "48px",
              lineHeight: "70px",
              fontWeight: "900",
              color: "#222222",
            }}
          >
            Fast Deployment &{" "}
            <span style={{ color: "#33C481" }}>PAN India Support</span>
          </Typography>
          <Typography
            sx={{
              fontSize: "22px",
              lineHeight: "34px",
              fontWeight: "500",
              color: "#222222",
            }}
          >
            We maintain strong local partnerships across India for deploying
            advanced energy management systems and custom BESS platforms :
          </Typography>
          <Box className="w-full flex justify-start items-center">
            <Checkbox
              disabled
              checked
              sx={{ "&.Mui-checked": { color: "#33C481" } }}
            />
            <Typography
              sx={{
                fontSize: "18px",
                lineHeight: "100%",
                fontWeight: "500",
                color: "#444444",
              }}
            >
              Maharashtra, Gujarat, Tamil Nadu, Telangana, Delhi NCR, Rajasthan
            </Typography>
          </Box>
          <Box className="w-full flex justify-start items-center">
            <Checkbox
              disabled
              checked
              sx={{ "&.Mui-checked": { color: "#33C481" } }}
            />
            <Typography
              sx={{
                fontSize: "18px",
                lineHeight: "100%",
                fontWeight: "500",
                color: "#444444",
              }}
            >
              Turnkey delivery with installation, commissioning, and O&M
            </Typography>
          </Box>
          <Box className="w-full flex justify-start items-center">
            <Checkbox
              disabled
              checked
              sx={{ "&.Mui-checked": { color: "#33C481" } }}
            />
            <Typography
              sx={{
                fontSize: "18px",
                lineHeight: "100%",
                fontWeight: "500",
                color: "#444444",
              }}
            >
              Remote monitoring via cloud-based EMS
            </Typography>
          </Box>
          <Box className="w-full flex justify-start items-center">
            <Checkbox
              disabled
              checked
              sx={{ "&.Mui-checked": { color: "#33C481" } }}
            />
            <Typography
              sx={{
                fontSize: "18px",
                lineHeight: "100%",
                fontWeight: "500",
                color: "#444444",
              }}
            >
              Financing support via Indian NBFCs or international climate funds
            </Typography>
          </Box>
        </Box>
        <Image
          src={fastapi.src}
          alt="fastapi"
          width={100}
          height={100}
          style={{ width: "100%" }}
        />
      </div>

      {/* Why Choose Rebuffr? */}
      <div
        className="w-full flex flex-col md:flex-row justify-center items-start mt-20 md:pl-10 md:pr-2 gap-x-10"
        style={{
          backgroundImage: `url(${whychoose_product_bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "500px",
          // padding: "8rem",
        }}
      >
        <Image
          src={whychooseus_container.src}
          alt="whychooseus_container"
          width={100}
          height={100}
          style={{ width: "100%", maxWidth: "600px", marginTop: "9rem" }}
        />
        <Box style={{ width: "100%", marginTop: "5rem" }}>
          <Typography
            sx={{
              fontSize: "48px",
              lineHeight: "70px",
              fontWeight: "900",
              color: "#222222",
              marginBottom: "2rem",
              width: "100%",
            }}
          >
            Why Choose <span style={{color: "#33C481"}}>rebuffr </span>?
          </Typography>

          <Box
            className="flex justify-center items-center p-6 m-2"
            style={{
              backgroundImage: `url(${whychoose_product_text_bg.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                lineHeight: "100%",
                fontWeight: "500",
                color: "#444444",
              }}
            >
              India-specific customization for every solution
            </Typography>
          </Box>
          <Box
            className="flex justify-center items-center p-3 m-2"
            style={{
              backgroundImage: `url(${whychoose_product_text_bg.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                lineHeight: "100%",
                fontWeight: "500",
                color: "#444444",
                textAlign: "center",
              }}
            >
              Global technology with local adaptation and tailor
              <br />
              made energy management services.
            </Typography>
          </Box>
          <Box
            className="flex justify-center items-center p-6 m-2"
            style={{
              backgroundImage: `url(${whychoose_product_text_bg.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                lineHeight: "100%",
                fontWeight: "500",
                color: "#444444",
                textAlign: "center",
              }}
            >
              Expertise in solar battery storage solutions in India
            </Typography>
          </Box>
          <Box
            className="flex justify-center items-center p-3 m-2"
            style={{
              backgroundImage: `url(${whychoose_product_text_bg.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                lineHeight: "100%",
                fontWeight: "500",
                color: "#444444",
                textAlign: "center",
              }}
            >
              AI-powered smart energy management system tailored to
              <br />
              Indian consumption patterns.  
            </Typography>
          </Box>
        </Box>
      </div>

      {/* Projects Across Globe */}
      <div className="w-full flex flex-col justify-center items-center mt-20 pl-10 pr-2">
        <Typography
          sx={{
            fontSize: "44px",
            lineHeight: "70px",
            fontWeight: "400",
            color: "#222222",
          }}
        >
          Projects{" "}
          <span
            style={{
              fontWeight: "900",
            }}
          >
            Across{" "}
          </span>
          <span
            style={{
              fontWeight: "900",
              color: "#33C481",
            }}
          >
            Globe
          </span>
        </Typography>
        <Typography
          sx={{
            fontSize: "22px",
            lineHeight: "34px",
            fontWeight: "500",
            color: "#444444",
          }}
        >
          We&apos;ve deployed systems at
        </Typography>

        <Grid container spacing={2} sx={{ width: "100%", padding: "2rem" }}>
          <Grid size={{ xs: 12, sm: 12, md: 4 }}>
            <Card
              style={{
                backgroundImage: `url(${delhi.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "320px",
                borderRadius: "20px",
              }}
              className="flex justify-start items-end"
            >
              <CardContent className="flex justify-start items-end text-white">
                <Typography>Delhi NCR</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 4 }}>
            <Card
              style={{
                backgroundImage: `url(${maharashtra.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "320px",
                borderRadius: "20px",
              }}
              className="flex justify-start items-end"
            >
              <CardContent className="flex justify-start items-end text-white">
                <Typography>Maharashtra</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 4 }}>
            <Card
              style={{
                backgroundImage: `url(${odisha.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "320px",
                borderRadius: "20px",
              }}
              className="flex justify-start items-end"
            >
              <CardContent className="flex justify-start items-end text-white">
                <Typography>Odisha</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 4 }}>
            <Card
              style={{
                backgroundImage: `url(${maldives.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "320px",
                borderRadius: "20px",
              }}
              className="flex justify-start items-end"
            >
              <CardContent className="flex justify-start items-end text-white">
                <Typography>Maldives</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 4 }}>
            <Card
              style={{
                backgroundImage: `url(${tamil_nadu.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "320px",
                borderRadius: "20px",
              }}
              className="flex justify-start items-end"
            >
              <CardContent className="flex justify-start items-end text-white">
                <Typography>Tamil Nadu</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 4 }}>
            <Card
              style={{
                backgroundImage: `url(${pondicherry.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "320px",
                borderRadius: "20px",
              }}
              className="flex justify-start items-end"
            >
              <CardContent className="flex justify-start items-end text-white">
                <Typography>Pondicherry</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>

      {/* Let's Power India Together  */}
      <div className="w-full flex flex-col  justify-center items-center mt-20 pl-10 pr-2">
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
          Let&apos;s Power India Together
          <br />
          <span
            style={{ color: "#222222", fontSize: "44px", fontWeight: "700" }}
          >
            Get a Custom BESS Quote
          </span>
        </Typography>

        <Typography
          sx={{
            fontSize: "22px",
            lineHeight: "34px",
            fontWeight: "700",
            color: "#444444",
            textAlign: "center",
          }}
        >
          Whether you&apos;re an EPC, project developer, industrial buyer, or
          DISCOM, we&apos;re here to build a custom BESS and energy management
          systems solution for your needs in India.
        </Typography>
        <Box className="flex flex-col md:flex-row justify-center items-center mt-20">
          <Box className="w-full md:w-1/2">
            <Typography
              sx={{
                fontSize: "44px",
                lineHeight: "70px",
                fontWeight: "900",
                color: "#222222",
                textTransform: "uppercase",
              }}
            >
              Request a Quote
            </Typography>
            <Typography
              sx={{
                fontSize: "48px",
                lineHeight: "70px",
                fontWeight: "400",
                color: "#33C481",
                textTransform: "uppercase",
              }}
            >
              for India
            </Typography>
          </Box>
          <Box className="w-full md:w-1/2">
            <ScheduleConsultant />
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Product;

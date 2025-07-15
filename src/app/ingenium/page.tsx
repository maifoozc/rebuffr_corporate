"use client";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import product_bg from "../assets/product_bg.svg";
import monitor from "../assets/monitor.svg";
import ingenium_does from "../assets/ingenium_does.svg";
import dataAggregation from "../assets/dataAggregation.svg";
import predictionEngine from "../assets/predictionEngine.svg";
import optimizationLayer from "../assets/optimizationLayer.svg";
import controlExecution from "../assets/controlExecution.svg";
import continuousLearning from "../assets/continuousLearning.svg";
import cloudBased from "../assets/cloudBased.svg";
import edgeFirmware from "../assets/edgeFirmware.svg";
import apiIntegration from "../assets/apiIntegration.svg";
import deployOption_cloud from "../assets/deployOption_cloud.svg";
import deployOption_edge from "../assets/deployOption_edge.svg";
import deployOption_api from "../assets/deployOption_api.svg";
import realImpact from "../assets/readlImpact.svg";
import down_doublearrow from "../assets/down_doublearrow.svg";
import up_doublearrow from "../assets/up_doublearrow.svg";
import industrialCompuses from "../assets/industrialCompuses.svg";
import microGrids from "../assets/microGrids.svg";
import demandManagement from "../assets/demandManagement.svg";
import peakShaving from "../assets/peakShaving.svg";
import dgStorage from "../assets/dgStorage.svg";
import builtBy from "../assets/builtBy.svg";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Ingenium = () => {
  const router = useRouter();
  const ingeniumWorks = [
    {
      logo: dataAggregation.src,
      head: "Data Aggregation:",
      description:
        "Collects real-time data from all energy sources, weather APIs, and load meters.",
    },
    {
      logo: predictionEngine.src,
      head: "Prediction Engine:",
      description: "Uses ML algorithms to forecast generation and demand.",
    },
    {
      logo: optimizationLayer.src,
      head: "Optimization Layer:",
      description:
        "Dynamically calculates the most cost-effective dispatch strategy.",
    },
    {
      logo: controlExecution.src,
      head: "Control Execution:",
      description:
        "Commands are sent to inverters, batteries, DGs, and load circuits via secure firmware.",
    },
    {
      logo: continuousLearning.src,
      head: "Continuous Learning:",
      description:
        "The system improves efficiency through feedback loops over time.",
    },
  ];

  const deploymentOption = [
    { image: deployOption_cloud.src, label: "cloudbased" },
    { image: deployOption_edge.src, label: "edgeFirmware" },
    { image: deployOption_api.src, label: "apiIntegration" },
  ];
  const [selectedDeploymentOption, setSelectedDeploymentOption] = useState(
    deploymentOption[0]
  );

  const useCase = [
    {
      image: industrialCompuses.src,
      label: "Industrial campuses with hybrid energy sources",
      size: { xs: 12, sm: 6, md: 4 },
    },
    {
      image: microGrids.src,
      label: "Microgrids with solar, wind & battery systems",
      size: { xs: 12, sm: 6, md: 4 },
    },
    {
      image: demandManagement.src,
      label: "EV charging stations with demand management",
      size: { xs: 12, sm: 6, md: 4 },
    },
    {
      image: peakShaving.src,
      label: "Smart buildings with net metering + peak shaving",
      size: { xs: 12, sm: 6, md: 4 },
    },
    {
      image: dgStorage.src,
      label: "Off-grid/rural locations with PV + DG + Storage",
      size: { xs: 12, sm: 12, md: 8 },
    },
  ];
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      {/* SMART ALGORITHM BASED */}
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
            // maxWidth: "856px",
            maxWidth:"600px",
            padding: "20px",
            marginTop: "1%",
          }}
        >
          <Typography
            sx={{
                fontSize: "40px",
              lineHeight: "138%",
              fontWeight: "400",
              // color: "#33C481",
                 color: "#ffffff",
            }}
            className="text-3xl md:text-4xl"
          >
            SMART ALGORITHM BASED
            <br />
            <span
              style={{
                fontSize: "40px",
                // lineHeight: "138%",
                fontWeight: "900",
                // color: "#ffffff",
                 color: "#33C481",
              }}
              className="text-3xl md:text-6xl"
            >
              Energy Management System for Next-Gen Distributed Energy
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
            IngeniumTM is a next-generation energy management software and
            Energy Management System (EMS) developed by Rebuffr Systems Pvt.
            Ltd. that uses advanced machine learning algorithms to optimize
            energy generation, consumption, and storage across complex hybrid
            energy systems.
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              lineHeight: "34px",
              fontWeight: "500",
              color: "#ffffff",
            }}
          >
            Designed to manage and orchestrate resources such as Solar PV,
            Diesel Generators (DGs), Wind Turbines, Hydrogen Fuel Cells, Battery
            Energy Storage Systems (BESS), and the Grid, Ingenium ensures the
            lowest cost of operation, maximum renewable utilization, and
            real-time energy intelligence.
          </Typography>
        </div>
        <div className="flex justify-center items-start">
          <Image
            src={monitor.src}
            alt="monitor"
            width={100}
            height={100}
            // style={{ width: "660px", height: "771px" }}
                        style={{ width: "660px", height: "560px" }}
          />
        </div>
      </div>

      {/* What Ingenium Does */}
      <div className="w-full  flex flex-col justify-center items-center mt-20 pl-10 pr-2">
        <Typography
          sx={{
            fontSize: "48px",
            lineHeight: "70px",
            fontWeight: "900",
            color: "#222222",
            textAlign: "center",
          }}
        >
          What Ingenium Does
          <br />
          <span
            style={{
              fontSize: "48px",
              lineHeight: "70px",
              fontWeight: "400",

              color: "#33C481",
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            Optimize. Automate. Save. Scale.
          </span>
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
          IngeniumTM delivers smart energy management solutions by controlling
          how and when each energy source is
          <br />
          used—balancing cost, load demand, and availability in real time.
        </Typography>

        <div className="w-full flex flex-col md:flex-row justify-center items-center mt-20">
          <Image
            src={ingenium_does.src}
            alt="ingenium_does"
            width={100}
            height={100}
            style={{ width: "640px" }}
          />
          <Box className="flex flex-col p-10">
            <Typography
              sx={{
                fontSize: "32px",
                lineHeight: "70px",
                fontWeight: "700",
                color: "#222222",
                textTransform: "uppercase",
              }}
            >
              Key Features:
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
              Multi-source energy balancing (PV, DG, Wind, Hydrogen, BESS, Grid)
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
              Machine Learning optimization for cost-effective dispatch
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
              Real-time monitoring & analytics dashboard
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
              Seamless grid interaction & net metering
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
              Smart battery charge/discharge cycles
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
              Forecast-based scheduling using weather & load prediction
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
              Secure cloud + edge deployment
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
              Mobile-friendly interface with alerts & controls
            </Typography>
          </Box>
        </div>
      </div>

      {/* How Ingenium Works */}
      <div className="w-full  flex flex-col justify-center items-center mt-20 pl-10 pr-2">
        <Typography
          sx={{
            fontSize: "48px",
            lineHeight: "70px",
            fontWeight: "900",
            color: "#222222",
            textAlign: "center",
          }}
        >
          How{" "}
          <span
            style={{
              fontSize: "48px",
              lineHeight: "70px",
              fontWeight: "900",

              color: "#33C481",
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            Ingenium
          </span>{" "}
          Works
        </Typography>

        <Grid container spacing={2} className="mt-10">
          {ingeniumWorks.map((item, index) => (
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

      {/* Integrated With */}
      <div className="w-full  flex flex-col justify-center items-center mt-20 pl-10 pr-2">
        <Typography
          sx={{
            fontSize: "48px",
            lineHeight: "70px",
            fontWeight: "900",
            color: "#33C481",
            textAlign: "center",
          }}
        >
          Integrated{" "}
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
            With
          </span>
        </Typography>

        <div className="w-full flex flex-col md:flex-row justify-center items-center">
          <Table sx={{ width: "100%", maxWidth: "800px", marginTop: "40px" }}>
            <TableHead sx={{ backgroundColor: "#E0FBEF" }}>
              <TableRow>
                <TableCell
                  sx={{
                    fontSize: "20px",
                    lineHeight: "30px",
                    fontWeight: "500",
                  }}
                >
                  Source
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "20px",
                    lineHeight: "30px",
                    fontWeight: "500",
                  }}
                >
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                  }}
                >
                  Solar PV Inverters
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                  }}
                >
                  Supported (String/Central)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                  }}
                >
                  Diesel Gensets
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                  }}
                >
                  Integrated via Modbus/Relay
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                  }}
                >
                  Wind Turbines
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                  }}
                >
                  Compatible with hybrid inverters
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                  }}
                >
                  Hydrogen Systems
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                  }}
                >
                  Intelligent runtime logic
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                  }}
                >
                  Battery Storage (BESS)
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                  }}
                >
                  EMS-integrated charge/discharge control
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                  }}
                >
                  Utility Grid
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                  }}
                >
                  TOU-aware import/export optimization
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="w-full flex justify-center items-start">
            <Image
              src={monitor.src}
              alt="monitor"
              width={100}
              height={100}
              style={{ width: "500px", height: "400px" }}
            />
          </div>
        </div>
      </div>

      {/* Deployment Options */}
      <div className="w-full  flex flex-col justify-center items-center mt-20 pl-10 pr-2">
        <Typography
          sx={{
            fontSize: "48px",
            lineHeight: "70px",
            fontWeight: "900",
            color: "#33C481",
            textAlign: "center",
          }}
        >
          Deployment <span style={{ color: "#222222" }}>Options</span>
        </Typography>

        <div className="w-full flex flex-col md:flex-row justify-center items-center mt-20">
          <Box
            className="w-full md:w-1/3 justify-between"
            style={{ minHeight: "340px" }}
          >
            <Button
              onClick={() => setSelectedDeploymentOption(deploymentOption[0])}
              sx={{
                textTransform: "none",
                backgroundColor:
                  selectedDeploymentOption.label === "cloudbased"
                    ? "#33C481"
                    : "#ffffff",
              }}
            >
              <Image
                src={cloudBased.src}
                alt="cloudBased"
                width={70}
                height={70}
              />
              <div
                style={{ maxWidth: "354px", width: "100%", marginLeft: "10px" }}
                className="flex flex-col justify-start items-start text-start"
              >
                <Typography
                  sx={{
                    fontSize: "24px",
                    lineHeight: "30px",
                    fontWeight: "700",
                    color: "#222222",
                  }}
                >
                  Cloud-Based (SaaS)
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                    color: "#333333",
                  }}
                >
                  Centralized control for multi-site energy networks
                </Typography>
              </div>
            </Button>

            <Button
              onClick={() => setSelectedDeploymentOption(deploymentOption[1])}
              sx={{
                textTransform: "none",
                backgroundColor:
                  selectedDeploymentOption.label === "edgeFirmware"
                    ? "#33C481"
                    : "#ffffff",
              }}
            >
              <div></div>
              <Image
                src={edgeFirmware.src}
                alt="edgeFirmware"
                width={70}
                height={70}
              />
              <div
                style={{ maxWidth: "354px", width: "100%", marginLeft: "10px" }}
                className="flex flex-col justify-start items-start text-start"
              >
                <Typography
                  sx={{
                    fontSize: "24px",
                    lineHeight: "30px",
                    fontWeight: "700",
                    color: "#222222",
                  }}
                >
                  Edge-Installed Firmware
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                    color: "#333333",
                  }}
                >
                  For offline/remote operation with local fallback
                </Typography>
              </div>
            </Button>

            <Button
              onClick={() => setSelectedDeploymentOption(deploymentOption[2])}
              sx={{
                textTransform: "none",
                backgroundColor:
                  selectedDeploymentOption.label === "apiIntegration"
                    ? "#33C481"
                    : "#ffffff",
              }}
            >
              <Image
                src={apiIntegration.src}
                alt="apiIntegration"
                width={70}
                height={70}
              />
              <div
                style={{ maxWidth: "354px", width: "100%", marginLeft: "10px" }}
                className="flex flex-col justify-start items-start text-start"
              >
                <Typography
                  sx={{
                    fontSize: "24px",
                    lineHeight: "30px",
                    fontWeight: "700",
                    color: "#222222",
                  }}
                >
                  API Integration
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                    color: "#333333",
                  }}
                >
                  Plug into SCADA, IoT gateways, and enterprise dashboards
                </Typography>
              </div>
            </Button>
          </Box>
          <Image
            src={selectedDeploymentOption.image}
            alt={selectedDeploymentOption.label}
            width={100}
            height={100}
            style={{ width: "100%", maxWidth: "600px" }}
          />
        </div>
      </div>

      {/* Real Impact, Real Numbers */}
      <div className="w-full  flex flex-col justify-center items-center mt-20 pl-10 pr-2">
        <Typography
          sx={{
            fontSize: "48px",
            lineHeight: "70px",
            fontWeight: "900",
            color: "#33C481",
            textAlign: "center",
          }}
        >
          Real Impact, <span style={{ color: "#222222" }}>Real Numbers</span>
        </Typography>
        <div className="w-full flex flex-col md:flex-row justify-between items-start mt-20">
          <Image
            src={realImpact.src}
            alt="realImpact"
            width={100}
            height={100}
            style={{ width: "100%", maxWidth: "690px" }}
          />
          <Table sx={{ width: "100%", minHeight: "490px" }} className="md:ml-3">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    fontSize: "20px",
                    lineHeight: "30px",
                    fontWeight: "600",
                    color: "#444444",
                  }}
                >
                  Metric
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "20px",
                    lineHeight: "30px",
                    fontWeight: "600",
                    color: "#444444",
                  }}
                >
                  Improvement with IngeniumTM
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                    color: "#444444",
                  }}
                >
                  Diesel Fuel Consumption
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                    color: "#444444",
                    display: "flex",
                  }}
                >
                  <Image
                    src={down_doublearrow.src}
                    alt="down_doublearrow"
                    width={24}
                    height={24}
                    style={{ marginRight: "10px" }}
                  />{" "}
                  Up to 40%
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
                  Solar Utilization
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                    color: "#444444",
                    display: "flex",
                  }}
                >
                  <Image
                    src={up_doublearrow.src}
                    alt="up_doublearrow"
                    width={24}
                    height={24}
                    style={{ marginRight: "10px" }}
                  />{" "}
                  Up to 95%
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
                  Grid Import Costs
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                    color: "#444444",
                    display: "flex",
                  }}
                >
                  <Image
                    src={down_doublearrow.src}
                    alt="down_doublearrow"
                    width={24}
                    height={24}
                    style={{ marginRight: "10px" }}
                  />{" "}
                  Up to 30%
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
                  Battery Life
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                    color: "#444444",
                    display: "flex",
                  }}
                >
                  <Image
                    src={down_doublearrow.src}
                    alt="down_doublearrow"
                    width={24}
                    height={24}
                    style={{ marginRight: "10px" }}
                  />{" "}
                  2x with smart cycling
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
                  ROI on BESS Investment
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                    color: "#444444",
                    display: "flex",
                  }}
                >
                  <Image
                    src={up_doublearrow.src}
                    alt="up_doublearrow"
                    width={24}
                    height={24}
                    style={{ marginRight: "10px" }}
                  />{" "}
                  Accelerated by 1.5x
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Use Cases */}
      <div className="w-full  flex flex-col justify-center items-center mt-20 pl-10 pr-2">
        <Typography
          sx={{
            fontSize: "48px",
            lineHeight: "70px",
            fontWeight: "900",
            color: "#222222",
            textAlign: "center",
          }}
        >
          Use <span style={{ color: "#33C481" }}>Cases</span>
        </Typography>

        <Grid container spacing={4} className="mt-20">
          {useCase.map((item, index) => (
            <Grid size={item.size} key={index}>
              <div className="p-3 overflow-hidden rounded-xl transition-transform duration-300 hover:scale-105">
                <Card
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "320px",
                    borderRadius: "20px",
                  }}
                  className="flex justify-start items-end w-full h-[320px]"
                >
                  <CardContent className="flex justify-start items-end text-white">
                    <Typography
                      sx={{
                        fontSize: "23px",
                        lineHeight: "28px",
                        fontWeight: "700",
                        padding: "10px",
                      }}
                    >
                      {item.label}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>

      {/* Built by Rebuffr Systems */}
      <div className="w-full  flex flex-col md:flex-row justify-center items-center mt-40 pl-10 pr-2">
        <Image
          src={builtBy.src}
          alt="builtby"
          width={100}
          height={100}
          style={{ width: "100%", maxWidth: "670px" }}
        />
        <Box className="flex flex-col justify-center items-start">
          <Typography
            sx={{
              fontSize: "48px",
              lineHeight: "70px",
              fontWeight: "900",
              color: "#222222",
              textTransform: "uppercase",
            }}
          >
            Built <span style={{ color: "#33C481" }}>by Rebuffr </span>Systems
          </Typography>

          <Typography
            sx={{
              fontSize: "22px",
              lineHeight: "34px",
              fontWeight: "400",
              color: "#444444",
            }}
          >
            IngeniumTM is proudly developed in-house by Rebuffr Systems Pvt.
            Ltd., India&apos;s leading energy storage and management company. It
            is tested, field-proven, and continuously evolving to meet the
            complex demands of modern energy systems.
          </Typography>
        </Box>
      </div>

      {/* Get a Demo of IngeniumTM */}
      <div className="w-full  flex flex-col justify-center items-center mt-20 pl-10 pr-2">
        <Typography
          sx={{
            fontSize: "48px",
            lineHeight: "70px",
            fontWeight: "900",
            color: "#222222",
            textAlign: "center",
          }}
        >
          Get a Demo of{" "}
          <span style={{ color: "#33C481" }}>
            Ingenium<sup>TM</sup>
          </span>
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
          Ready to see how IngeniumTM can transform your energy operations?
        </Typography>
        <Typography
          sx={{
            fontSize: "32px",
            lineHeight: "30px",
            fontWeight: "400",
            color: "#000000",
            textAlign: "center",
            marginTop: "50px",
               marginBottom: "30px",
          }}
        >
          Request a Demo
        </Typography>
        <Button
          sx={{
            fontSize: "18px",
            fontWeight: "700",
            color: "#ffffff",
            lineHeight: "20px",
            backgroundColor: "#33C481",
            padding: "18px 36px",
            borderRadius: "30px",
            cursor: "pointer",
            width: "fit-content",
          }}     onClick={() => router.push("contact-us")}
        >
          Schedule Now
        </Button>
      </div>
    </div>
  );
};

export default Ingenium;

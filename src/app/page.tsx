import { Button, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import flow from "./assets/flow.gif";
import container from "./assets/container.png";
import check_mark from "./assets/check_mark.png";
import wind_container from "./assets/wind_container.png";
import CI_logo from "./assets/CI_logo.png";
import EV_logo from "./assets/EV_logo.png";
import GU_logo from "./assets/GU_logo.png";
import MR_logo from "./assets/MR_logo.png";
import SI_logo from "./assets/SI_logo.png";
import Grid from "@mui/material/Grid";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      {/* Top Section */}
      <div className="w-full min-h-screen flex flex-col md:flex-row justify-center items-center md:items-center sm:items-start xs:items-start">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div
            className="flex flex-col items-center text-center md:items-start md:text-left"
            style={{ height: "253px" }}
          >
            <h3
              style={{
                fontSize: "40px",
                fontWeight: "400",
                color: "#33C481",
                lineHeight: "141%",
                // lineHeight: "20px",
              }}
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
        <div className="w-1/2  flex justify-center items-center">
          <Image
            src={flow.src}
            alt="logo"
            width={100}
            height={100}
            priority
            style={{
              width: "812px",
              // height: "653px",
              objectFit: "fill",
              // borderRadius: "30px",
            }}
          />
        </div>
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
          }}
        >
          Intelligent Battery Energy Storage <br />
          Systems (BESS)
        </Typography>
        <Typography
          sx={{
            fontSize: "22px",
            lineHeight: "34px",
            fontWeight: "500",
            color: "#000000",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          Rebuffr Systems Pvt. Ltd. is India’s premier provider of
          custom-engineered Battery Energy  Storage Systems (BESS). Our mission
          is to accelerate India’s clean energy transition by  delivering
          reliable, scalable, and smart energy storage solutions—built for
          Indian industries,  infrastructure, and the grid.
          <br />
          Systems (BESS)
        </Typography>
        <Typography
          sx={{
            fontSize: "22px",
            lineHeight: "34px",
            fontWeight: "500",
            color: "#000000",
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
      <div className="w-full flex flex-row justify-center items-center mt-20 gap-x-20">
        <Image src={container.src} alt="container" width={560} height={560} />

        <div className="flex flex-col items-start">
          <Typography
            sx={{
              fontSize: "36px",
              lineHeight: "100%",
              fontWeight: "900",
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
            src={wind_container.src}
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
      </div>
    </div>
  );
}

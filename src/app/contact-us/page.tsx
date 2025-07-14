import { Grid, Typography } from "@mui/material";
import ScheduleConsultant from "../components/scheduleConsultant";
import email_logo from "../assets/email_logo.svg";
import telephone from "../assets/telephone.svg";
import building from "../assets/building.svg";
import workingHour from "../assets/workingHour.svg";
import Image from "next/image";
import MyMapComponent from "../components/map";
import linkedin from "../assets/linkedin.svg";
import blogs from "../assets/blogs.svg";
import website from "../assets/website.svg";

const ContactUs = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      {/* Let's Connect and Power a Smarter Energy Future */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between pl-10 pr-2">
        <div className="min-w-1/2">
          <div className="max-w-[608px] flex flex-col items-center justify-center">
            <Typography
              sx={{
                fontSize: "40px",
                lineHeight: "70px",
                fontWeight: "900",
                color: "#222222",
                textTransform: "uppercase",
              }}
            >
              Let&apos;s Connect and Power a{" "}
              <span style={{ color: "#33C481" }}>Smarter Energy Future</span>
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                lineHeight: "34px",
                fontWeight: "400",
                color: "#444444",
              }}
            >
              Whether you&apos;re looking to work with one of the leading energy
              storage companies in India to deploy a customized battery energy
              storage system, explore our Ingenium™ EMS platform, or partner
              with us for sustainable energy innovation — we&apos;d love to hear
              from you!. Reach out to our team of experts at one of the top
              energy storage companies in India for inquiries, quotes, demos, or
              support.
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                lineHeight: "34px",
                fontWeight: "600",
                color: "#444444",
              }}
            >
              Have a project or question? Fill out the form below and we&apos;ll
              get back to you within 24 hours.
            </Typography>
          </div>
        </div>
        <ScheduleConsultant />
      </div>

      {/* head office */}
      <div className="w-full flex flex-col  items-center justify-between mt-40 pl-10 pr-2">
        <Grid container spacing={5}>
          <Grid
            size={{ xs: 12, sm: 12, md: 6 }}
            className="flex justify-start items-center"
          >
            <div className="flex flex-row  justify-start items-center gap-2">
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
                    color: "#333333",
                  }}
                >
                  Head Office
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                    color: "#444444",
                  }}
                >
                  Pune, India
                </Typography>
              </div>
            </div>
          </Grid>

          <Grid
            size={{ xs: 12, sm: 12, md: 6 }}
            className="flex justify-start items-center"
          >
            <div className="flex flex-row  justify-start items-center gap-2">
              <Image
                src={workingHour.src}
                alt="workingHour"
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
                    color: "#333333",
                  }}
                >
                  Working Hours
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                    color: "#444444",
                    maxWidth: "361px",
                  }}
                >
                  Monday to Saturday: 9:30 AM &ndash; 6:30 PM IST Sunday:{" "}
                  <span style={{ color: "#FE5236" }}>Closed</span>
                </Typography>
              </div>
            </div>
          </Grid>

          <Grid
            size={{ xs: 12, sm: 12, md: 6 }}
            className="flex justify-start items-center"
          >
            <div className="flex flex-row  justify-start items-center gap-2">
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
                    color: "#333333",
                  }}
                >
                  Email
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                    color: "#444444",
                  }}
                >
                  info@rebuffr.com
                </Typography>
              </div>
            </div>
          </Grid>

          <Grid
            size={{ sm: 12, md: 6 }}
            className="flex justify-start items-center "
          >
            <div className="flex flex-row  justify-start items-center gap-2">
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
                    color: "#333333",
                  }}
                >
                  Phone
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                    color: "#444444",
                  }}
                >
                  +91-76876564563
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

      {/* map  */}
      <div className="w-full flex flex-col  items-center justify-center mt-40 pl-10 pr-2">
        <MyMapComponent />
      </div>

      {/* Connect with Us Online */}
      <div className="w-full flex flex-col  items-center justify-center mt-40 pl-10 pr-2">
        <Typography
          sx={{
            fontSize: "40px",
            lineHeight: "70px",
            fontWeight: "900",
            color: "#33C481",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          Connect <span style={{ color: "#222222" }}>with Us Online</span>
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
          Rebuffr is proud to be among India&apos;s most forward-thinking clean
          energy technology companies, driving
          <br />
          innovation in battery storage and energy management.
        </Typography>

        <Grid container spacing={5} className="mt-20 max-w-[750px]">
          <Grid
            size={{ xs: 12, sm: 12, md: 12 }}
            className="flex justify-center items-center"
          >
            <div className="flex flex-row  justify-start items-center gap-2">
              <Image
                src={linkedin.src}
                alt="linkedin"
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
                    color: "#333333",
                  }}
                >
                  LinkedIn
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                    color: "#444444",
                    wordBreak: "break-all",
                  }}
                >
                  https://www.linkedin.com/company/rebuffr-systems-private-limited/?viewAsMember=true
                </Typography>
              </div>
            </div>
          </Grid>

          <Grid
            size={{ xs: 12, sm: 12, md: 12 }}
            className="flex flex-col md:flex-row justify-between items-start"
          >
            <div className="flex flex-row  justify-center items-center gap-2 pb-10">
              <Image
                src={blogs.src}
                alt="blogs"
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
                    color: "#333333",
                  }}
                >
                  Blogs
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                    color: "#444444",
                  }}
                >
                  rebuffr.com/blog
                </Typography>
              </div>
            </div>
            <div className="flex flex-row  justify-center items-center gap-2">
              <Image
                src={website.src}
                alt="website"
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
                    color: "#333333",
                  }}
                >
                  LinkedIn
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                    color: "#444444",
                  }}
                >
                  https://rebuffr.com/
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className="w-full flex flex-col  items-center justify-center mt-40 pl-10 pr-2">
        <Typography
          sx={{
            fontSize: "40px",
            lineHeight: "70px",
            fontWeight: "900",
            color: "#222222",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          Need <span style={{ color: "#33C481" }}>Support?</span>
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
          As one of India&apos;s clean energy technology companies, we&apos;re
          committed to providing seamless support across all our
          <br />
          battery storage and EMS solutions. For technical assistance or
          after-sales service, reach out to our support team:
        </Typography>

        <Grid container spacing={2} className="mt-20 w-full justify-center">
          <Grid
            size={{ xs: 12, sm: 12, md: 6 }}
            className="flex justify-center items-center"
          >
            <div className="flex flex-row  justify-start items-center gap-2">
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
                    color: "#333333",
                  }}
                >
                  Support Email
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                    color: "#444444",
                  }}
                >
                  info@rebuffr.com
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: 6 }}
            className="flex justify-start items-center"
          >
            <div className="flex flex-row  justify-start items-center gap-2">
              <Image
                src={workingHour.src}
                alt="workingHour"
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
                    color: "#333333",
                  }}
                >
                  Working Hours
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: "400",
                    color: "#444444",
                  }}
                >
                  Mon - Sat: 9:30 AM &ndash; 6:30 PM IST
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      {/* Need Support? */}
    </div>
  );
};

export default ContactUs;

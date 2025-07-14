"use client";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const ScheduleConsultant = () => {
  const [solutionType, setSolutionType] = useState("residential");
  const [isAgreed, setIsAgreed] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSolutionType(event.target.value as string);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      alert("Please fill in all fields.");
      return;
    }
    if (!isAgreed) {
      alert("Please accept the terms and conditions.");
      return;
    }
    const templateParams = {
      from_name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      solution: solutionType,
    };

    try {
      setLoading(true);
      await emailjs.send(
        "service_3xq5lkp",
        "template_g17ee2h",
        templateParams,
        { publicKey: "bSwz957iTJohzYTEv" }
      );
      alert("Email sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsAgreed(false);
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid size={{ md: 6, sm: 12 }}>
        <TextField
          placeholder="Enter Name"
          label="NAME"
          name="name"
          required
          value={formData.name}
          onChange={handleInputChange}
          variant="outlined"
          size="medium"
          sx={{
            width: "100%",
            fontSize: "18px",
            lineHeight: "100%",
            fontWeight: "500",
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "rgba(0, 0, 0, 0.6)",
              },
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "rgba(0, 0, 0, 0.6)",
            },
          }}
        />
      </Grid>
      <Grid size={{ md: 6, sm: 12 }}>
        <TextField
          placeholder="Enter Email"
          label="EMAIL ID"
          name="email"
          required
          value={formData.email}
          onChange={handleInputChange}
          variant="outlined"
          size="medium"
          sx={{
            width: "100%",
            fontSize: "18px",
            lineHeight: "100%",
            fontWeight: "500",
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "rgba(0, 0, 0, 0.6)",
              },
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "rgba(0, 0, 0, 0.6)",
            },
          }}
        />
      </Grid>
      <Grid size={{ md: 6, sm: 12 }}>
        <TextField
          placeholder="Enter Phone Number"
          label="PHONE NUMBER"
          name="phone"
          required
          value={formData.phone}
          onChange={handleInputChange}
          variant="outlined"
          size="medium"
          sx={{
            width: "100%",
            fontSize: "18px",
            lineHeight: "100%",
            fontWeight: "500",
            marginTop: "7px",
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "rgba(0, 0, 0, 0.6)",
              },
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "rgba(0, 0, 0, 0.6)",
            },
          }}
        />
      </Grid>
      <Grid size={{ md: 6, sm: 12 }}>
        <FormControl fullWidth>
          <InputLabel id="solution-type-label">SOLUTIONS</InputLabel>
          <Select
            labelId="solution-type-label"
            id="demo-simple-select"
            value={solutionType}
            label="SOLUTIONS"
            onChange={handleChange}
            sx={{
              width: "100%",
              fontSize: "18px",
              lineHeight: "100%",
              fontWeight: "500",
              marginTop: "5px",
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "rgba(0, 0, 0, 0.6)",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "rgba(0, 0, 0, 0.6)",
              },
            }}
          >
            <MenuItem value="residential">Residential</MenuItem>
            <MenuItem value="commercial">Commercial</MenuItem>
            <MenuItem value="industrial">Industrial</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={12}>
        <TextField
          placeholder="Type Your Message"
          label="DESCRIPTION"
          name="message"
          required
          value={formData.message}
          onChange={handleInputChange}
          variant="outlined"
          size="medium"
          multiline
          rows={4}
          sx={{
            width: "100%",
            fontSize: "18px",
            lineHeight: "100%",
            fontWeight: "500",
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "rgba(0, 0, 0, 0.6)",
              },
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "rgba(0, 0, 0, 0.6)",
            },
          }}
        />
      </Grid>
      <Box className="w-full flex justify-start items-center">
        <Checkbox
          checked={isAgreed}
          onChange={(e) => setIsAgreed(e.target.checked)}
        />
        <Typography>
          I agree all the terms & Conditions & Privacy Policy
        </Typography>
      </Box>
      <Button
        onClick={handleSubmit}
        disabled={loading}
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
        }}
      >
        {loading ? "Sending..." : "Schedule a Consultation"}
      </Button>
    </Grid>
  );
};

export default ScheduleConsultant;

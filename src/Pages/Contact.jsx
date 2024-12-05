import React, { useState } from "react";
import { ContactPageData } from "../Data";
import PageHeading from "../components/PageHeading";
import "./Contact.css";
import ContactCard from "../components/ContactCard";
import Send from "../Assets/Images/send.svg";
import { Box, TextField, Button as MuiButton } from "@mui/material";
import { motion } from "motion/react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    project: false,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    if (value.trim() !== "") {
      setErrors({ ...errors, [id]: false });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      name: formData.name.trim() === "",
      email: formData.email.trim() === "",
      project: formData.project.trim() === "",
    };
    setErrors(newErrors);
    const noErrors = !Object.values(newErrors).some((error) => error);

    if (noErrors) {
      const mailtoLink = `mailto:${
        ContactPageData.buttonValue
      }?subject=Project Proposal&body=Name: ${encodeURIComponent(
        formData.name
      )}%0A%0AProject: ${encodeURIComponent(formData.project)}`;
      window.location.href = mailtoLink;
    }
  };
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <PageHeading
        heading={ContactPageData.heading}
        desc={ContactPageData.desc}
      />
      <div className="contact-card-container">
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 1 }}
          className="contact-left-card-container"
        >
          <div className="contact-heading">{ContactPageData.left_title}</div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "10px",
            }}
          >
            <ContactCard data={ContactPageData} />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 1 }}
          className="contact-right-card-container"
        >
          <div className="contanct-heading">{ContactPageData.right_title}</div>
          <div className="input-fields">
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": {
                  m: 1,
                  width: "50ch",
                  "@media (max-width: 768px)": {
                    width: "35ch",
                  },
                  "@media (max-width: 480px)": {
                    width: "30ch",
                  },
                },
              }}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <TextField
                id="name"
                label="Name"
                placeholder="Insert your name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                helperText={errors.name ? "Name is required" : ""}
              />
              <TextField
                required
                id="email"
                label="Email"
                placeholder="Insert your email"
                type="text"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                helperText={errors.email ? "Email is required" : ""}
              />
              <TextField
                required
                id="project"
                label="Project"
                placeholder="Write your project"
                type="text"
                multiline
                rows={10}
                value={formData.project}
                onChange={handleChange}
                error={errors.project}
                helperText={
                  errors.project ? "Project description is required" : ""
                }
              />
              <div className="contact-send-button">
                <MuiButton
                  type="submit"
                  variant="contained"
                  endIcon={<img src={Send} alt="send icon" width={20} />}
                  sx={{
                    backgroundColor: "var(--button-color)",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "black",
                    },
                  }}
                >
                  {ContactPageData.buttonText}
                </MuiButton>
              </div>
            </Box>
          </div>
        </motion.div>
      </div>
      <footer className="footer">
        <div className="container">
          <p>&copy; {currentYear} Portfolio. All Rights Reserved.</p>
          <p> Made with &#9829; by Ganesh Guntuku.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;

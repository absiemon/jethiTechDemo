import {
  FormControl,
  InputLabel,
  MenuItem,
  NativeSelect,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Allcountry from "../assets/country.json";
import { useState } from "react";
import happy from "../assets/happy.png";
import { MuiTelInput } from "mui-tel-input";

export default function Contact({ id }) {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    country: "",
    stages: "",
  });
  const [phone, setPhone]= useState("+91");
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    country: false,
    stages: false,
  });
  const [phoneError, setPhoneError]= useState(false);

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    const { name, email, country, stages } = userInfo;
    let flag = false;
    Object.entries(userInfo).map(([key, value]) => {
      if (!value) {
        newErrors[key] = true;
        flag = true;
      } else {
        newErrors[key] = false;
      }
    });
    if(phone.length<4){
      setPhoneError(true);
    }
    setErrors(newErrors);
    
    if (flag) {
      alert("fill all inputs");
      return;
    } else {
      // API CALLING HERE
      alert("Form submitted successfully");
    }
  };

  const Allstages = [
    "I have booked and regsiterd",
    "I have booked but registration is not done",
  ];

  return (
    <div className="px-20 flex justify-center items-center" id={id}>
      <div
        className=" flex justify-center items-center gap-5"
        style={{ width: "90%", boxShadow: "0px 4px 61px rgba(0, 0, 0, 0.16)" }}
      >
        <form className="flex flex-col gap-5 py-5" style={{ width: "60%" }}>
          <h1 className="text-2xl font-semibold">
            Get in touch with us to connect
          </h1>
          <p className="text-lg font-semibold">Contact us</p>
          <div className="grid grid-cols-2 gap-4">
            <TextField
              size="small"
              helperText="Not more than 50 characters"
              label="Full name"
              variant="outlined"
              name="name"
              value={userInfo.name}
              onChange={handleChange}
              error={errors.name}
            />
            <TextField
              size="small"
              helperText="Please enter a valid email address"
              label="Email address"
              variant="outlined"
              name="email"
              value={userInfo.email}
              onChange={handleChange}
              error={errors.email}
            />
            <MuiTelInput
              value={phone}
              onChange={(e)=> setPhone(e)}
              size="small"
              label="Mobile number"
              variant="outlined"
              name="phone"
              error={phoneError}
              defaultCountry="in" 
            />

            <FormControl size="small" error={errors.country}>
              <InputLabel id="demo-multiple-name-label">Country</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={userInfo.country}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                name="country"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {Allcountry?.map((c) => {
                  return (
                    <MenuItem key={c.country} value={c.country}>
                      {c.country}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>

            <FormControl size="small" error={errors.stages}>
              <InputLabel id="demo-multiple-name-label">Stages</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={userInfo.stages}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                name="stages"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {Allstages?.map((s) => {
                  return (
                    <MenuItem key={s} value={s}>
                      {s}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>
          <button
            className="text-white font-semibold px-3 h-10 mr-4 rounded-sm w-full"
            style={{ backgroundColor: "#002550" }}
            onClick={handleSubmit}
          >
            Register Now
          </button>
        </form>
        <div style={{ width: "30%" }}>
          <img
            src={happy}
            alt="img"
            style={{ height: "19rem", width: "23rem", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}

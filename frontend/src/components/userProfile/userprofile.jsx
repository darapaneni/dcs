import React, { useState, useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardHeader,
  Avatar,
  TextField,
  Grid2,
  Box,
  Typography,
  Tooltip,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import axios from "axios";
import Cookies from "js-cookie";
import MESSAGES from "../../constants/config";
import { useForm } from "react-hook-form";
import DcsMicroLoader from "../loader/DcsMicroLoader";
import DcsInformationDisplay from "../info-display/DcsInfoDisplay";

const storedUser = Cookies.get("user");
const initialUser = storedUser ? JSON.parse(storedUser) : null;

const StyledCard = styled(Card)({
  margin: "auto",
  padding: "4px",
  borderRadius: "10px",
  minWidth: 600,
});

const StyledAvatar = styled(Avatar)({
  width: 64,
  height: 64,
  margin: "auto",
  marginBottom: "6px",
  // variant: "rectangle"
});

// Define Zod schema for form validation
const userProfileSchema = z.object({
  first_name: z
    .string()
    .min(2, { message: "First name must be at least 2 characters long" }),
  last_name: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters long" }),
  email: z.string().email({ message: MESSAGES.SIGNUP_ERROR_MESSAGES.email }),
  address: z.string(),
  phoneno: z.string(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
});

// User Profile Component
const UserProfile = () => {
  const [isPageLoading, setIsLoading] = useState(false);
  const [isDataSaved, setIsDataSaved] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phoneno: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors, },
    getValues,
    setValue,
    reset,
  } = useForm({
    resolver: zodResolver(userProfileSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phoneno: "",
      address: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
    },
  });

  useEffect(() => {
    // Fetch user data from API when component mounts
    const sUser = Cookies.get("user");
    const user = sUser ? JSON.parse(sUser) : null;
    const email = user?.email;
    console.log(initialUser);
    setIsLoading(true);
    axios
      .get(`http://127.0.0.1:8000/api/v1/auth/users/${email}/`)
      .then((response) => {
            setUser(response.data);
        reset(response.data);
        axios
          .get(`http://localhost:8000/api/v1/auth/download/user/${response.data.id}/`, {
            responseType: "blob", // Important for downloading files
          })
          .then((image) => {
            setPreviewImage(URL.createObjectURL(new Blob([image.data])));
            setIsLoading(false);
          });
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setIsLoading(false);
        // setError('Failed to load user data.');
      });
  }, [setUser, reset, setPreviewImage, setIsLoading]);
  let accessToken=Cookies.get('token')
  const csrfToken = Cookies.get("csrftoken");
  const onSubmit = async () => {
    const reqData = getValues();
    const data = {
      first_name: reqData.first_name,
      last_name: reqData.last_name,
      address: reqData.address,
      phoneno:reqData.phoneno,
      city: reqData.city,
      state: reqData.state,
      country: reqData.country,
    };
    setIsDataSaved(false)
    const res = await axios.patch(
      `http://localhost:8000/api/v1/auth/profile/${reqData.id}/`,
      data,{
          headers: {
            "X-CSRFToken": csrfToken,
            'Content-type':'application/json',
            Authorization: accessToken ? `Bearer ${ accessToken}` : ""
          },
        }
    );
    if (res.status === 200) {
      console.log(res.data);
      setIsDataSaved(true)
      // setEmailSent(res.data.message)
    }

    console.log(res);
  };
  const onError = (errors, e) => console.log(errors, e);

  const handleProfilePictureChange = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    setProfilePic(file);
    setPreviewImage(URL.createObjectURL(file));
    reader.onloadend = () => {
      setUser({ ...user, profilePicture: reader.result });
      setValue("profile_pic", reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);

      const formData = new FormData();
      formData.append("profile_pic", file);
      try {
        await axios
          .post(
            "http://localhost:8000/api/v1/auth/upload-profile-pic/",
            formData,
            {
              headers: {
                "X-CSRFToken": csrfToken,
                "Content-Type": "multipart/form-data",
                Authorization: accessToken ? `Bearer ${ accessToken}` : ""
              },
            },
          )
          .then((result) => {

            console.log(result);
          });
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  return (
    <Grid2 sx={{ display: "flex", paddingTop: 1 }}>
      {isPageLoading ? (
        <DcsMicroLoader
          isCircular={false}
          size={4}
          showLabel={false}
          color={"primary"}
        />
      ) : (
        <>

          <StyledCard elevation={3}>
            <CardHeader
              sx={{
                padding: "6px",
              }}
              title={
                <Typography variant="h6" color="textPrimary" textAlign="left">
                  Edit Profile
                </Typography>
              }
            ></CardHeader>
            <CardContent
              sx={{
                paddingTop: "4px",
              }}
            >
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": {
                    display: "flex",
                    flexDirection: "column",
                  },
                }}
                noValidate
                gap={2}
                autoComplete="off"
              >
                {
                    isDataSaved && (
                        <DcsInformationDisplay
                            message={"Profile updated successfully"}
                            severity={"success"}
                            duration={6000}
                        />
                    )
                }
                <Grid2 container size={12} spacing={1} paddingBottom={2}>
                  <Grid2 size={6} container justifyContent="flex-start">
                    <Tooltip title="Change Profile Picture">
                      <Typography
                        variant="h6"
                        color="textPrimary"
                        textAlign="right"
                      >
                        <StyledAvatar
                          alt={user.name}
                          variant={"rectangle"}
                          src={previewImage}
                        />
                      </Typography>
                    </Tooltip>
                  </Grid2>
                  <Grid2 size={6} paddingTop={4}>
                    <Button
                      variant="outlined"
                      component="label"
                      size={"small"}
                      fullWidth
                      sx={{ marginBottom: 1, size: "small" }}
                    >
                      Upload Profile Picture
                      <input
                        type="file"
                        hidden
                        onChange={handleProfilePictureChange}
                      />
                    </Button>
                  </Grid2>
                </Grid2>
                <Grid2 container size={12} spacing={1} paddingBottom={2}>
                  <Grid2 size={6}>
                    <TextField
                      {...register("first_name")}
                      error={!!errors.first_name}
                      helperText={errors.first_name?.message}
                      label="Firs Name"
                      id="first_name"
                      size="small"
                      fullWidth
                      slotProps={{
                        inputLabel: { shrink: true }, // Using slotProps.inputLabel instead of InputLabelProps
                      }}
                    />
                  </Grid2>
                  <Grid2 size={6}>
                    <TextField
                      {...register("last_name")}
                      error={!!errors.last_name}
                      helperText={errors.last_name?.message}
                      label="Last Name"
                      id="last_name"
                      size="small"
                      fullWidth
                      slotProps={{
                        inputLabel: { shrink: true }, // Using slotProps.inputLabel instead of InputLabelProps
                      }}
                    />
                  </Grid2>
                </Grid2>
                <Grid2 container size={12} paddingBottom={2} spacing={1}>
                  <TextField
                    {...register("email")}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    label="Email"
                    id="email"
                    fullWidth
                    disabled={true}
                    size="small"
                    slotProps={{
                      inputLabel: { shrink: true }, // Using slotProps.inputLabel instead of InputLabelProps
                    }}
                  />
                </Grid2>
                <Grid2 container size={12} paddingBottom={2} spacing={1}>
                  <TextField
                    {...register("address")}
                    label="Address"
                    id="address"
                    multiline
                    maxRows={4}
                    fullWidth
                    size="small"
                    slotProps={{
                      inputLabel: { shrink: true }, // Using slotProps.inputLabel instead of InputLabelProps
                    }}
                  />
                </Grid2>
                <Grid2 container size={12} spacing={1} paddingBottom={2}>
                  <Grid2 size={6}>
                    <TextField
                      {...register("phoneno")}
                      label="Phone"
                      id="phoneno"
                      size="small"
                      fullWidth
                      slotProps={{
                        inputLabel: { shrink: true }, // Using slotProps.inputLabel instead of InputLabelProps
                      }}
                    />
                  </Grid2>
                  <Grid2 size={6}>
                    <TextField
                      {...register("city")}
                      label="City"
                      id="city"
                      size="small"
                      fullWidth
                      slotProps={{
                        inputLabel: { shrink: true }, // Using slotProps.inputLabel instead of InputLabelProps
                      }}
                    />
                  </Grid2>
                </Grid2>
                <Grid2 container size={12} spacing={1} paddingBottom={2}>
                  <Grid2 size={6}>
                    <TextField
                      {...register("state")}
                      label="State"
                      id="state"
                      size="small"
                      fullWidth
                      slotProps={{
                        inputLabel: { shrink: true }, // Using slotProps.inputLabel instead of InputLabelProps
                      }}
                    />
                  </Grid2>
                  <Grid2 size={6}>
                    <TextField
                      {...register("country")}
                      label="Country"
                      id="country"
                      size="small"
                      fullWidth
                      slotProps={{
                        inputLabel: { shrink: true }, // Using slotProps.inputLabel instead of InputLabelProps
                      }}
                    />
                  </Grid2>
                </Grid2>
              </Box>

              <Grid2 container size={12} spacing={1}>
                <Grid2 size={6}></Grid2>
                <Grid2 size={6} container justifyContent="flex-end">
                  <Button
                    variant="contained"
                    size="small"
                    onClick={handleSubmit(onSubmit, onError)}
                  >
                    Update
                  </Button>
                </Grid2>
              </Grid2>
            </CardContent>
          </StyledCard>

        </>

      )}
    </Grid2>
  );
};

export default UserProfile;

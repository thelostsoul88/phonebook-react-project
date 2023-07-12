import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logIn } from "../../redux/auth/operations";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { BasicModal } from "../Modal/Modal";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <BasicModal>
      <Box component="form" onSubmit={handleSubmitForm} sx={{ width: "100%" }}>
        <h2 className="text-center">Sign in</h2>
        <Box
          component="div"
          sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        >
          <TextField
            autoFocus
            required
            name="email"
            type="email"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{
              backgroundColor: "transparent",
            }}
          />
          <FormControl
            defaultValue=""
            fullWidth
            variant="outlined"
            required
            name="password"
            sx={{
              backgroundColor: "transparent",
            }}
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              name="password"
              label="Password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <Box
            component="div"
            sx={{
              display: "flex",
              gap: 3,
              justifyContent: "center",
            }}
          >
            <Link to="/">
              <Button
                color="inherit"
                variant="outlined"
                sx={{
                  color: "white",
                  outline: "none",
                  fontSize: 16,
                  px: 3,
                  "&:hover": {
                    backgroundColor: "white",
                    color: "colors.grey",
                    border: "1px solid transparent",
                  },
                }}
              >
                Close
              </Button>
            </Link>
            <Button
              type="submit"
              color="inherit"
              variant="outlined"
              sx={{
                color: "white",
                outline: "none",
                fontSize: 16,
                px: 3,
                flex: 0.5,
                "&:hover": {
                  backgroundColor: "white",
                  color: "colors.grey",
                  border: "1px solid transparent",
                },
              }}
            >
              Sign in
            </Button>
          </Box>
        </Box>
        <Box
          component="div"
          sx={{
            mt: 2,
          }}
        >
          <Typography
            variant="h6"
            component="p"
            sx={{
              fontSize: 18,
              textAlign: "center",
              color: "colors.grey",
            }}
          >
            Don't have an account?
            <Link to="/register">{""} Sign up.</Link>
          </Typography>
        </Box>
      </Box>
    </BasicModal>
  );
};

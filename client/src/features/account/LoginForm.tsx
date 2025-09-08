import React from "react";
import { useAccount } from "../../lib/hooks/useAccount";
import { useForm } from "react-hook-form";
import { loginSchema, LoginSchema } from "../../lib/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { LockOpen } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import TextInput from "../../app/shared/components/TextInput";

export default function LoginForm() {
  const { loginUser } = useAccount();
  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm<LoginSchema>({
    mode: "onTouched",
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginSchema) => {
    loginUser.mutate(data);
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        p: "3",
        display: "flex",
        flexDirection: "column",
        gap: "3",
        width: "400px",
        maxWidth: "md",
        mx: "auto",
        borderRadius: 3,
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={3}
        color="secondary.main"
      >
        <LockOpen fontSize="large" />
          <Typography variant="h4" component="h1"> 
            Sign in
          </Typography>
      </Box>
      <TextInput label="Email" name="email" control={control} />
      <TextInput
        label="Password"
        name="password"
        type="password"
        control={control}
      />
      <Button type="submit" 
              variant="contained"
              disabled={!isValid || isSubmitting}
              size="large">
          Login
      </Button>
    </Paper>
  );
}

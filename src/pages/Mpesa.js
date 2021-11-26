import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button, FormControl, InputLabel, OutlinedInput } from "@mui/material";
import { useLocation } from "react-router-dom";

const Mpesa = () => {
  const [contact, setContact] = useState();
  const location = useLocation();

  const { name, price } = location.state;

  const makePayment = () => {
    let url = "https://tinypesa.com/api/v1/express/initialize";

    fetch(url, {
      body: `amount=${price * 110}&msisdn=${contact}&account_no=232323`,
      headers: {
        Apikey: "wFHjwBrbaPL",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
    })
  };

  return (
    <div>
      <Box
        component="h3"
        sx={{
          p: 2,
          border: "1px dashed grey",
          width: "50%",
          margin: "0 auto",
        }}
      >
        <h3
          style={{
            textAlign: "center",
          }}
        >{`Purchase : ${name}`}</h3>
        <h3
          style={{
            textAlign: "center",
          }}
        >{`Amount to Pay Sh. ${price * 110}`}</h3>
        <p
          style={{
            textAlign: "center",
          }}
        >
          Paybill : 232323
        </p>
      </Box>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: 70,
        }}
      >
        <p>You will receive an M-Pesa prompt on your phone</p>
        <FormControl sx={{ m: 3, width: "35ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Enter your Mpesa phone number
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            value={contact}
            onChange={(val) => setContact(val.target.value)}
            label="Enter your Mpesa phone number"
          />
        </FormControl>
        <Button
          style={{
            marginTop: 20,
            paddingLeft: 70,
            paddingRight: 70,
          }}
          color="primary"
          type="submit"
          variant="outlined"
          onClick={makePayment}
        >
          Pay
        </Button>
      </div>
    </div>
  );
};

export default Mpesa;

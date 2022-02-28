import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React, { useContext } from "react";
import { setPaymentType } from "../actions";
import Logo from "../components/Logo";
import { useStyles } from "../styles";
import { Store } from "../Store";

export default function SelectPaymentScreen(props) {
  const { dispatch } = useContext(Store);
  const styles = useStyles();
  const selectHandler = (paymentType) => {
    setPaymentType(dispatch, paymentType);
    if (paymentType === "Pay here") {
      props.history.push("/payment");
    } else {
      props.history.push("/complete");
    }
  };
  return (
    <Box className={[styles.root, styles.navy]}>
      <Box className={[styles.main, styles.center]}>
        <Logo large></Logo>
        <Typography
          className={styles.center}
          gutterbottom
          variant="h3"
          component="h3"
        >
          Select Payment type
        </Typography>
      </Box>
      <Box className={styles.card}>
        <Card className={[styles.card, styles.space]}>
          <CardActionArea onClick={() => selectHandler("Pay here")}>
            <CardMedia
              component="img"
              alt="Pay here"
              image="/images/payhere.png"
              className={styles.media}
            />
            <CardContent>
              <Typography
                gutterbottom
                variant="h6"
                color="textPrimary"
                component="p"
              >
                PAY HERE
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={[styles.card, styles.space]}>
          <CardActionArea onClick={() => selectHandler("At counter")}>
            <CardMedia
              component="img"
              alt="At counter"
              image="/images/atcounter.png"
              className={styles.media}
            />
            <CardContent>
              <Typography
                gutterbottom
                variant="h6"
                color="textPrimary"
                component="p"
              >
                AT COUNTER
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Box>
  );
}

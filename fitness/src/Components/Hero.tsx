import {Box, Button, Typography} from "@mui/material"
import styles from "./Hero.module.css"
import poke from "../assets/gettingpumped.png"

const Hero = () =>{
return(
    <Box>
            <Box>
            <img className={styles.background} src={poke} alt="champ" />
            </Box>
        <Box>
        <Typography className={styles.h1} variant="h1">LET'S</Typography>
        <Typography className={styles.h1} variant="h1">GET</Typography>
        <Typography className={styles.h1} variant="h1">MOVING</Typography>
        </Box>
        <Box>
            <Typography className={styles.h1}>Your Journey starts with me</Typography>
            <Typography className={styles.h1}>Unless your potential</Typography>
        </Box>
        <Box>
        <Button variant='outlined'>Start here</Button>
        </Box>
    </Box>
)
}

export default Hero
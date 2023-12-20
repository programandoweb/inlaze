import { Grid, Typography } from "@mui/material";
const Logo  =   ()  => {
    return          <Grid align="center">
                        <Typography component="h1" 
                                    variant="h3" 
                                    className="montserrat"
                                    sx={{
                                            color:"white !important", 
                                            lineHeight:0.8,
                                            fontSize:{xs:20,sm:40,md:60,lg:80}
                                        }}
                        >
                            INLAZE
                        </Typography>            
                        <Typography component="h4" 
                                    variant="h5" 
                                    className="roboto"
                                    sx={{   
                                            color:"white !important", 
                                            fontSize:{xs:16,sm:24,md:30,lg:40}
                                        }}
                        >
                            Prueba técnica de conocimientos
                        </Typography>            
                        <Typography className="roboto">
                            Mi nombre es Jorge Mëndez y quiero ante todo agradecer la oportunidad que me dan para demostrar mis habilidades,
                        </Typography>
                        <Typography className="roboto">
                            Soy desarrollador desde el 17 de Abril del 2006, comencé con PHP3, Javascript y ActionScript. 
                        </Typography>
                        <Typography className="roboto">
                            Domino Librerías como ReactJS y Native, Frameworks Laravel y CodeIgniter.
                        </Typography>
                    </Grid>
}
export default Logo;
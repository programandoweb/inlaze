import { Grid } from '@mui/material'
import LoopIcon from '@mui/icons-material/Loop';
import './loading.css'
const App=()=>{
  return  <Grid className="loading">
            <Grid className="content">
                <LoopIcon className="spin" fontSize={"large"} color="primary"/>
            </Grid>
          </Grid>
}
export default App

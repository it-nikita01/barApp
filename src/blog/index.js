import Home from './BlogHome'
import {  ThemeProvider } from '@material-ui/core/styles';
import Theme from './theme'

export default ()=>{
        return (
            <>
                <ThemeProvider theme={Theme}>
                    <Home />
                </ThemeProvider>
            </>
        );
}
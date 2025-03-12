import { Backdrop, CircularProgress } from '@mui/material';
const BackDropLoader = () => {
    return (
        <Backdrop
            sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1})}
            open={true}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}

export default BackDropLoader
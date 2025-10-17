import IconButton from '@mui/material/IconButton';
import { ArrowForward, ArrowBack } from '@mui/icons-material';

export const ScrollArrow = ({ position, color, onClick }) => {
    const Icon = position === 'left' ? ArrowBack : ArrowForward;

    return (
        <IconButton
            sx={{
                position: 'absolute',
                top: '50%',
                [position]: 0,
                transform: 'translateY(-50%)',
                backgroundColor: `${color}.main`,
                color: `${color}.contrastText`,
                boxShadow: 1,
                zIndex: 1,
                '&:hover': {
                    backgroundColor: `${color}.dark`
                }
            }}
            onClick={onClick}
        >
            <Icon />
        </IconButton>
    );
};
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';

import notFoundImg from '../images/404-error.png';

export const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  const goHome = () => {
    navigate('/home');
  };

  return (
    <div className="page-404">
      <h1>Ooops, page not found !!!</h1>
      <div>
        <img style={{ width: '50%' }} src={notFoundImg} alt="404 page" />
      </div>
      <h2
        style={{
          position: 'absolute',
          top: '341px',
          left: '232px',
        }}
      >
        ErroR
      </h2>
      <Stack direction="row" spacing={10}>
        <Box>
          <Button
            onClick={handleClick}
            fullWidth
            type="button"
            sx={{
              mt: '40px',
              textTransform: 'none',
              backgroundColor: 'var(--orange-main)',
              width: 200,
              height: 36,
              fontSize: '16px',
              '&:hover': {
                backgroundColor: '#c35309',
              },
            }}
            variant="contained"
          >
            Go back...
          </Button>
        </Box>
        <Box>
          <Button
            onClick={goHome}
            fullWidth
            type="button"
            sx={{
              mt: '40px',
              textTransform: 'none',
              backgroundColor: 'var(--orange-main)',
              width: 200,
              height: 36,
              fontSize: '16px',
              '&:hover': {
                backgroundColor: '#c35309',
              },
            }}
            variant="contained"
          >
            Go HOME
          </Button>
        </Box>
      </Stack>
    </div>
  );
};

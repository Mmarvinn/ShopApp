import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { OneProductInfo } from './OneProductInfo';

const style = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '1000px',
  height: '700px',
  bgcolor: 'background.paper',
  borderRadius: '4px',
  boxShadow: 24,
  p: 4,
};

export const OneProductInfoModal = ({
  onClose,
  open,
  title,
  description,
  disabled,
  ...rest
}) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby={title}
        aria-describedby={description}
      >
        <Box sx={style}>
          <OneProductInfo
            onClose={onClose}
            title={title}
            description={description}
            disabled={disabled}
            {...rest}
          />
        </Box>
      </Modal>
    </div>
  );
};

import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/system';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);
const Header = () => (
  <>
    <AppBar position="fixed" sx={{ backgroundColor: '#000e10' }}>
      <Toolbar>
        <Container
          maxWidth="lg"
          sx={{ display: `flex`, justifyContent: `space-between` }}
        >
          This is a header
        </Container>
      </Toolbar>
    </AppBar>
    <Offset />
  </>
);

export default Header;

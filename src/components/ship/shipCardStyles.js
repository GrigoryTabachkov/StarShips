import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  shipContainer: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    width: '24vw',
    height: '28vh',
    overflow: 'hidden',
    margin: '1rem',
    justifyContent: 'center',
    padding: theme.spacing(1),
    alignItems: 'center',
  },
  comparisonPaper: {
    display: 'flex',
    flexDirection: 'column',
    width: '12vw',
    height: '18vh',
    overflow: 'hidden',
    justifyContent: 'center',
    padding: theme.spacing(2),
    alignItems: 'center',
  },
  loading: {
    width: '16rem',
  },
  compLoad: {
    width: '16rem',
    height: '4rem',
  },
  typography: {
    padding: theme.spacing(1),
    textAlign: 'center',
  },
  btn: {
    position: 'absolute',
    margin: '8vh auto',
  },
  // image: {
  //   width: 128,
  //   height: 128,
  // },
  // img: {
  //   margin: 'auto',
  //   display: 'block',
  //   maxWidth: '100%',
  //   maxHeight: '100%',
  // },
}));

export default useStyles;

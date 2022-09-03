import "./Footer.css";
import { Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';

function Footer(): JSX.Element {
    return (
        <div className="Footer">
            <Typography className="SmallerTxt">All Rights Reserved &copy; 2022 Jack Amsterdam</Typography>

            <IconButton className='Linkedin' aria-label='http://www.linkedin.com/in/jack-amsterdam' onClick={() => window.open('http://www.linkedin.com/in/jack-amsterdam')}>
                <LinkedInIcon fontSize="large" />
            </IconButton>

            <a target="_blank" href="https://wakatime.com/@a78fee14-66a3-4481-8db3-b8983c271faf"><img src="https://wakatime.com/badge/user/a78fee14-66a3-4481-8db3-b8983c271faf.svg" alt="Total time coded since Jan 4 2022" /></a>

            <IconButton className='GitHub' aria-label='https://github.com/jackamsterdam ' onClick={() => window.open('https://github.com/jackamsterdam ')}>
                <GitHubIcon fontSize="small" />
            </IconButton>
        </div>
    );
}

export default Footer;

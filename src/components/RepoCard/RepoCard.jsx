import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserRepoReadme } from '../../api';
import { updateContent } from '../../store/ContentSlice';
import markdownDecodeAndParse from '../../utils/markdownParser';
export default function RepoCard({ repo }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    try {
      let userReadme = await getUserRepoReadme(repo.owner.login, repo.name);
      let content = await markdownDecodeAndParse(userReadme.content);
      dispatch(
        updateContent({
          active: true,
          html: content.value,
        })
      );
      navigate('/repo');
    } catch (error) {
      // eslint-disable-next-line no-undef
      alert(`
Message: ${error.message}
More info at: 
${error.documentation_url}
      `);
    }
  };
  return (
    <Card
      onClick={handleClick}
      sx={{
        cursor: 'pointer',
        transition: '0.2s',
        textShadow:
          '-webkit-box-shadow: 0px 0px 25px -15px rgba(0,0,0,0.2);  box-shadow: 0px 0px 25px -15px rgba(0,0,0,0.2);',
        '&:hover': {
          transform: 'translateY(-2px)',
          textShadow:
            '-webkit-box-shadow: 0px 0px 20px -8px rgba(0,0,0,0.3); box-shadow: 0px 0px 20px -8px rgba(0,0,0,0.3);',
        },
      }}
      elevation={0}
    >
      <CardContent>
        <Typography variant="h6" component="div">
          {repo.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {repo.pushed_at}
        </Typography>
        <Typography variant="body2">{repo.description}</Typography>
      </CardContent>
    </Card>
  );
}

import { Card, Text, Group, createStyles, getStylesRef, rem } from '@mantine/core';
import {Link} from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    width: rem(200),
    height: rem(200),

    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],

    [`&:hover .${getStylesRef('image')}`]: {
      transform: 'scale(1.03)',
    },
  },

  image: {
    ...theme.fn.cover(),
    ref: getStylesRef('image'),
    backgroundSize: 'cover',
    transition: 'transform 500ms ease',
  },

  overlay: {
    position: 'absolute',
    top: '20%',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)',
  },

  content: {
    height: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    zIndex: 1,
  },

  title: {
    color: theme.white,
    marginBottom: rem(5),
  },

  bodyText: {
    color: theme.colors.dark[2],
    marginLeft: rem(7),
  },

  address: {
    color: theme.colors.dark[2],
  },
}));

export function ImageCard(props) {
  const { classes } = useStyles();
  const url_link = "/property_landing/" + props.title;

  return (
    <Card
      shadow="lg"
      className={classes.card}
      radius="md"
      component="a"
      href={url_link}
      target="_blank"
    >
      <div
        className={classes.image}
        style={{ backgroundImage: `url(${props.image})` }}
      />
      <div className={classes.overlay} />

      <div className={classes.content}>
        <div>
          <Text
            size="lg"
            className={classes.title}
            weight={500}
            component={Link}
            variant="link"
            to={url_link}
          >
            {props.title}
          </Text>

          <Group position="apart" spacing="xs">
            <Text size="sm" className={classes.address}>
              {props.address}
            </Text>
          </Group>
        </div>
      </div>
    </Card>
  );
}
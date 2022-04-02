import { Link } from 'react-router-dom';
import * as S from './styles';

type PostCardProps = {
  link: string;
  title: string;
  img: string;
  imgAlt: string;
  category: string;
  categoryLink: string;
};

export function PostCard({ link, title, img, imgAlt, category, categoryLink }: PostCardProps) {
  return (
    <S.PostCard>
      <img src={img} alt={imgAlt} />

      <S.CardBody>
        <S.Category>
          <Link to={categoryLink}>{category}</Link>
        </S.Category>

        <h3>
          <Link to={link}>{title}</Link>
        </h3>
      </S.CardBody>
    </S.PostCard>
  );
}

import * as S from './styles'

const Main = ({
  title = 'Nextjs Boilerplate',
  description = 'TypeScript, ReactJS, NextJS and Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="logo description" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="illustration description"
    />
  </S.Wrapper>
)

export default Main

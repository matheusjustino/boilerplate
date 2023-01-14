import Image from 'next/image';
import * as S from './styles';

const Main: React.FC = () => {
	return (
		<S.Wrapper>
			<S.Logo>
				<Image
					src="/images/logo.svg"
					alt="Imagem de um átomo e React Avançado escrito ao lado."
				/>
			</S.Logo>
			<S.Title>React Boilerplate</S.Title>
			<S.Description>
				Typescript, React, NextJS e Styled Components
			</S.Description>
			<S.Illustration>
				<Image
					src="/images/hero-illustration.svg"
					alt="Um desenvolvedor de frente para uma tela com código."
				/>
			</S.Illustration>
		</S.Wrapper>
	);
};

export { Main };

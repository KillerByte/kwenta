import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Img, { Svg } from 'react-optimized-image';

import LogoNoTextSVG from 'assets/svg/brand/logo-no-text.svg';
import MarketOrderPreview from 'assets/png/marketing/market-order-preview.png';

import { GridDiv, Paragraph } from 'styles/common';
import { StackSection } from '../common';

import media from 'styles/media';

const Hero = () => {
	const { t } = useTranslation();

	return (
		<StackSection>
			<Svg src={LogoNoTextSVG} />
			<Header>{t('homepage.hero.title')}</Header>
			<HeroImageContainer>
				<HeroImage src={MarketOrderPreview} alt="" webp={true} />
			</HeroImageContainer>
		</StackSection>
	);
};

const Header = styled(Paragraph)`
	font-family: ${(props) => props.theme.fonts.bold};
	font-size: 48px;
	line-height: 120%;
	text-align: center;
	letter-spacing: 0.2px;
	color: ${(props) => props.theme.colors.white};
	padding-top: 40px;
`;

const HeroImageContainer = styled(GridDiv)`
	width: 100vw;
	overflow: hidden;
	display: grid;
	justify-content: center;
	margin-top: -40px;
	min-height: 839px;
	${media.lessThan('md')`
		min-height: 684px;
	`}
	${media.lessThan('sm')`
		margin-top: 0;
		min-height: 338px;
	`}
`;

const HeroImage = styled(Img)`
	max-width: 1400px;
	${media.lessThan('md')`
		width: 1140px;
	`}
	${media.lessThan('sm')`
		width: 560px;
	`}
`;

export default Hero;

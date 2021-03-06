import styled from 'styled-components';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';

import { FlexDiv, FlexDivCol, PageContent, MobileContainerMixin } from 'styles/common';

import { DesktopOnlyView, MobileOrTabletView } from 'components/Media';

import { BottomShadow } from 'styles/common';

import AppLayout from 'sections/shared/Layout/AppLayout';
import DashboardCard from 'sections/dashboard/DashboardCard';
import TrendingSynths from 'sections/dashboard/TrendingSynths';
import Onboard from 'sections/dashboard/Onboard';

import { isWalletConnectedState } from 'store/wallet';

const DashboardPage = () => {
	const { t } = useTranslation();

	const isWalletConnected = useRecoilValue(isWalletConnectedState);

	const activeView = isWalletConnected ? <DashboardCard /> : <Onboard />;

	return (
		<>
			<Head>
				<title>{t('dashboard.page-title')}</title>
			</Head>
			<AppLayout>
				<PageContent>
					<DesktopOnlyView>
						<Container>
							<LeftContainer>{activeView}</LeftContainer>
							<RightContainer>
								<TrendingSynths />
							</RightContainer>
							<BottomShadow />
						</Container>
					</DesktopOnlyView>
					<MobileOrTabletView>
						<MobileContainer>{activeView}</MobileContainer>
					</MobileOrTabletView>
				</PageContent>
			</AppLayout>
		</>
	);
};

const SPACING_FROM_HEADER = '80px';

const MobileContainer = styled.div`
	${MobileContainerMixin};
	padding-top: 90px;
`;

const Container = styled(FlexDiv)`
	justify-content: space-between;
	width: 100%;
	flex-grow: 1;
	height: 100vh;
	position: relative;
`;

const LeftContainer = styled(FlexDivCol)`
	flex-grow: 1;
	max-width: 1000px;
	position: relative;
	overflow: auto;
	margin: ${SPACING_FROM_HEADER} auto 0 auto;
`;

const RightContainer = styled(FlexDivCol)`
	width: 340px;
	background-color: ${(props) => props.theme.colors.elderberry};
	padding: ${SPACING_FROM_HEADER} 0 5px 0;
	margin-right: -20px;
	flex-shrink: 0;
	position: relative;
	margin-left: 20px;
`;

export default DashboardPage;

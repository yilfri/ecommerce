import styled from 'styled-components';

export const Title = styled.h1`
	text-align: center;
`;

export const wrapper = styled.h1`
	text-align: center;
`;

export const UlProducts = styled.ul`
	margin-bottom: 2rem;
	padding: 0;
	border: 1px solid #dee2e6;
`;

export const NoItems = styled.p`
	text-align: center;
`;

export const SubTotal = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	padding: 0.5rem;
	width: 100%;

	span {
		font-weight: bold;
		margin-left: 1rem;
	}
`;

export const TotalAmount = styled.div`
	/* text-align: left;
	padding: 0 2rem;
	background-color: #e1e1e1;

	h4 {
		font-size: 1.5rem;
		color: green;
		line-height: 0;
	}

	p {
		line-height: 0.5rem;
		padding: 0 1rem;
	}

	span {
		font-weight: normal;
	} */
`;

import styled from 'styled-components';

export const UlProducts = styled.ul`
	margin: 0 1rem;
	padding: 0;
	border: 1px solid #dee2e6;
`;

export const Title = styled.h1`
	text-align: center;
`;

export const NoItems = styled.p`
	text-align: center;
`;

export const TotalAmount = styled.div`
	text-align: right;
	padding: 1rem;
	margin: 1rem;
	background-color: #f5f5f5;

	h4 {
		font-size: 1.5rem;
		color: green;
		line-height: 0;
	}

	p {
		font-weight: bold;
		line-height: 0.5rem;
	}

	span {
		font-weight: normal;
	}
`;
